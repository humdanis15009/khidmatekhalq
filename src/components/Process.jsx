function Process() {
  return (
    <>
      <p className="text-2xl font-semibold text-gray-700 text-center pt-16 lg:text-5xl lg:font-bold">
        Process &nbsp;
      </p>
      <div className="flex p-2">
        <div className="flex items-center mx-auto mt-16 my-4 lg:my-12">
          <div className="flex flex-col items-center justify-center w-[125px] h-[135px] border-2 border-black rounded-3xl mb-16 lg:w-[300px] lg:h-[300px] lg:my-16">
            <img
              className="w-[35px] h-[35px] lg:w-[80px] lg:h-[80px]"
              src="images/help.png"
              alt="register"
            />
            <p className="text-pink-700 text-center font-bold my-2 lg:my-4 lg:text-3xl">
              Zakat recieved
            </p>
            <p className="text-center text-[10px] lg:text-xl lg:px-1">
              Zakat donated by you recieved by us
            </p>
          </div>
          <div>
            <img
              className="w-[20px] mb-16 lg:w-[100px] lg:mx-[3vw] lg:mb-3"
              src="images/arrow-pink.png"
              alt="arrow"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-[125px] h-[135px] border-2 border-black rounded-3xl mb-16 lg:w-[300px] lg:h-[300px] lg:my-16">
            <img
              className="w-[35px] h-[35px] lg:w-[80px] lg:h-[80px]"
              src="images/student-funded.jpeg"
              alt="search"
            />
            <p className="text-pink-700 text-center font-bold my-2 lg:my-4 lg:text-3xl">
              Zakat donated to the needy
            </p>
            <p className="text-center text-[10px] lg:text-xl lg:px-2">
              100% of the zakat given to the poor and needy.
            </p>
          </div>
          <div>
            <img
              className="w-[20px] mb-16 lg:w-[100px] lg:mx-[3vw] lg:mb-3"
              src="images/arrow-pink.png"
              alt="arrow"
            />
          </div>

          <div className="flex flex-col items-center justify-center w-[125px] h-[135px] border-2 border-black rounded-3xl mb-16 lg:w-[300px] lg:h-[300px] lg:my-16">
            <img
              className="w-[35px] h-[35px] lg:w-[80px] lg:h-[80px]"
              src="images/wedding-ring.png"
              alt="connect"
            />
            <p className="text-pink-700 text-center font-bold my-2 lg:my-4 lg:text-3xl">
              Donor recieve proofs
            </p>
            <p className="text-center text-[10px] lg:text-xl lg:px-1">
              Proofs in the form of images/videos of the food, along with the bills,are shared.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Process;
