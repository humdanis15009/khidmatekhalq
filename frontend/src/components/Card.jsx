import { useState, useEffect } from "react";
// import { db } from "../Firebase";
// import { collection, onSnapshot } from "firebase/firestore";

function Card() {
  // const [userCount, setUserCount] = useState();
  // const [str, setStr] = useState();

  // useEffect(() => {
    // const usersCollection = collection(db, "Biodata");

    // const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
    //   setUserCount(snapshot.size);
    // });

    // let data = 100 + userCount;
    // let strr = data.toString();
    // let strrr = strr.substring(0, 2) + strr.substring(2);

    // setStr(strrr);

  //   return () => unsubscribe();
  // }, [userCount]);

  return (
    <>
      <div className="flex flex-col mt-12 lg:flex-row justify-evenly mx-auto lg:gap-x-24 gap-y-10 lg:my-20 mb-16">
        {/* First Card */}
        <div className="w-full flex justify-center items-center">
          <div className="lg:w-[25vw] w-[80%] h-[150px] lg:h-[35vh] bg-gray-200 shadow-xl rounded-2xl border-t-2 border-gray-200 flex justify-center items-center flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 hover:border-green-500">
            <img
              className="lg:h-[80px] lg:w-[80px] h-[35px] w-[35px] lg:my-3 my-2"
              src="images/public-service.png"
              alt="members"
            />
            <span className="lg:text-4xl text-xl lg:font-extrabold font-semibold mb-2 lg:my-3">
              {/* {str} */}
            </span>
            <p className="lg:text-3xl text-[11px] text-gray-600">
              Small Businesses Helped
            </p>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full flex justify-center items-center">
          <div className="lg:w-[25vw] w-[80%] h-[150px] lg:h-[35vh] bg-gray-200 shadow-xl rounded-2xl border-t-2 border-gray-200 flex justify-center items-center flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 hover:border-green-500">
            <img
              className="lg:h-[80px] lg:w-[80px] h-[35px] w-[35px] lg:my-3 my-2"
              src="images/diamond.png"
              alt="stories"
            />
            <span className="lg:text-4xl text-xl lg:font-extrabold font-semibold mb-2 lg:my-3">
              74
            </span>
            <p className="lg:text-3xl text-[11px] text-gray-600">
              Marriages Helped
            </p>
          </div>
        </div>

        {/* Third Card */}
        <div className="w-full flex justify-center items-center">
          <div className="lg:w-[25vw] w-[80%] h-[150px] lg:h-[35vh] bg-gray-200 shadow-xl rounded-2xl border-t-2 border-gray-200 flex justify-center items-center flex-col transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-green-500/50 hover:border-green-500">
            <img
              className="lg:h-[80px] lg:w-[80px] h-[35px] w-[35px] lg:my-3 my-2"
              src="images/man.png"
              alt="cities"
            />
            <span className="lg:text-4xl text-xl lg:font-extrabold font-semibold mb-2 lg:my-3">
              627+
            </span>
            <p className="lg:text-3xl text-[11px] text-gray-600">
              Individuals Helped
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
