
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { UserData } from "../../context/userContext"

export default function Verify() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""])
  const navigate = useNavigate()
  const {btnLoading, verifyOtp} = UserData()
  const handleChange = (index, value) => {
    if (value.length <= 1) {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      // Move to next input if value is entered
      if (value !== "" && index < 5) {
        const nextInput = document.querySelector(`input[name="otp-${index + 1}"]`)
        if (nextInput) {
          nextInput.focus()
        }
      }
    }
  }

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      const prevInput = document.querySelector(`input[name="otp-${index - 1}"]`)
      if (prevInput) {
        prevInput.focus()
      }
    }
  }

  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("")
    const newOtp = [...otp]

    pastedData.forEach((value, index) => {
      if (index < 6) {
        newOtp[index] = value
      }
    })

    setOtp(newOtp)

    // Focus the next empty input or the last input
    const emptyIndex = newOtp.findIndex((digit) => digit === "")
    const targetIndex = emptyIndex === -1 ? 5 : emptyIndex
    const targetInput = document.querySelector(`input[name="otp-${targetIndex}"]`)
    if (targetInput) {
      targetInput.focus()
    }
  }

  const handleSubmit =async (e) => {
    e.preventDefault()
    const otpString = otp.join("")
    if (otpString.length === 6) {
      // Handle OTP verification logic
      await verifyOtp(Number(otpString), navigate)
      console.log("Verifying OTP:", otpString)
    } else {
      // Show error if OTP is incomplete
      console.error("Please enter complete OTP")
    }
  }

  return (
    <div className="min-h-[calc(100vh-100px)] bg-gradient-to-b from-green-50 to-white flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">

        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Verify your email</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please enter the 6-digit verification code sent to your email
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-center space-x-2 sm:space-x-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  name={`otp-${index}`}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl sm:text-2xl border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                  pattern="\d*"
                  autoComplete="one-time-code"
                />
              ))}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Verify
              </button>
            </div>

            <div className="text-center">
              <button
                type="button"
                className="text-sm font-medium text-green-600 hover:text-green-500"
                onClick={() => {
                  // Handle resend logic
                  console.log("Resending verification code...")
                }}
              >
                Resend verification code
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

