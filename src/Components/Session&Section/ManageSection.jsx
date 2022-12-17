import {Card,CardBody } from "@material-tailwind/react";
   
  export default function ManageSection() {
    return (
     <div className="pt-12">
      <Card className="w-100">
      <CardBody className="">
      <div>
          <div className="w-full bg-white ">
              <div className="md:flex text-center border-b pb-3 border-gray-200 pt-1 px-6 ">
              <h1 className="focus:outline-none text-2xl font-bold text-gray-800 mt-3 flex text-center">
                 Create Section
              </h1>
              </div>
            <div className="flex items-center justify-center" >
                <div class="xl:w-10/12 w-full px-1">
                    <div class="xl:px-1">
                        <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div class="w-80">
                                <div class="flex items-center">
                                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Section Information</h1>
                                </div>
                                <p class="mt-4 text-sm leading-5 text-gray-600">Information about the section.</p>
                            </div>
                            <div>
                                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="firstName" >Session</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="2018-2022" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="lastName">Section Name</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="A" />
                                    </div>
                                </div>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </div>    
            <div className="px-12 pb-12">
            <div className="flex flex-col flex-wrap items-center justify-center w-full px-20 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
        <button className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-full w-full ">
          Add Section
        </button>
      </div>
            </div>
          </div>      
      </div>
    </CardBody>
  </Card>
     </div>
    );
  }