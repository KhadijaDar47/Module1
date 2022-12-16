import React from "react";
import { Link } from "react-router-dom";

function Main() {
  
    return (
        <>
       
       <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto py-34">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  {/* <Link to="/auth/login"> */}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        // src={require("assets/img/login.jpg").default}
                      />
                    </div>
                  {/* </Link> */}
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  {/* <Link to="/profile"> */}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        // src={require("assets/img/profile.jpg").default}
                      />
                    </div>
                  {/* </Link> */}
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  {/* <Link to="/landing"> */}
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        // src={require("assets/img/landing.jpg").default}
                      />
                    </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


 {/* GRID */}


            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
                <div className="hover:-mt-4  h-24" >
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  {/* <Link to="/auth/login"> */}
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        // src={require("assets/img/login.jpg").default}
                      />
                    </div>
                  {/* </Link> */}
                </div>
                </div>
                
                <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
                {/* Remove class [ h-24 ] when adding a card block */}
                {/* Remove class [ border-gray-300  dark:border-gray-700 border-dashed border-2 ] to remove dotted border */}
                <div className="rounded border-gray-300  dark:border-gray-700 border-dashed border-2 h-24" />
            </div>
 






      </>
    );
}



       

export default Main;
