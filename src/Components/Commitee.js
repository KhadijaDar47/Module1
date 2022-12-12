import React, { useState,useRef } from "react";

export default function Commitee(props){
  const inputRef = useRef(null);
  const [AddCommitee, setAddCommitee] = useState(false);
  const onAddBtnClick = event => {
    setAddCommitee(current => !current);
  };


  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);
 
  const onAddClick = event => {
    // setUpdated(message);
    setUpdated(inputRef.current.value);
    setMessage(updated)
    
  };
 
 

  function AddCommiteeComp(){
    return(
      <>
   
      <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <img alt="content" class="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500"/>
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Commitee Details</h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p class="text-base">{updated}{<br/>}.</p>
            </div>
            <div class=" pt-5 pl-16 flex space-x-4 w-full md:justify-start justify-center items-end">
          <button class="inline-flex text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">Confirm</button>
        </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
           {/* textfields */}
           <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Add Commitee Members </h1>
           <div class="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
            <label for="hero-field" class="leading-7 text-sm text-gray-600">Commitee Member Name</label>
            <input  ref={inputRef} type="text" id="hero-field" name="hero-field"  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
           
          </div>
          <div class=" pt-4 flex space-x-4 w-full md:justify-start justify-center items-end">
          <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={onAddClick}>ADD</button>
        </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      </>
    );
  }
  return(
    <>
   
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium  text-black-300">Managing Final Year Project </h1>
      
<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl text-grey-100">Commitee<span class="text-blue-600 dark:text-indigo-500">Members</span> </h1>

      <p class="mb-8 leading-relaxed">Commitee Members will Evalate the Groups</p>
      <div class=" flex space-x-4 w-full md:justify-start justify-center items-end">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Commitees</button>
        <button class=" inline-flex text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg" onClick={onAddBtnClick}>Creat Commitee</button>
      </div>
      
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
    </div>
  </div>
</section>
{AddCommitee? <AddCommiteeComp/> : null}
{/* add new Commitee Members */}


    </>

  );
  
  
}
 
