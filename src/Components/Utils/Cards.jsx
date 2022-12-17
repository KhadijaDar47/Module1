
import React from "react";
import { Link } from "react-router-dom";
function Cards() {
  return (
    <>
   
 <div class="py-16 bg-gray-100">
  <div class="xl:container m-auto px-6 text-white-500 md:px-12">
    <div>
      <h2 class="mt-4 text-2xl font-bold text-white-700 dark:text-gray-700md:text-4xl">
        Managing Final Year Project <br class="lg:block" hidden />
        Admin Portal
      </h2>
    </div>
    <div
      class="mt-16 grid divide-x divide-y divide-white-100 dark:divide-white-700 overflow-hidden rounded-3xl border border-white-100 dark:border-white-100 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
    >
      <div class="group relative bg-white dark:bg-white-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-white-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png"  class="w-12" width="512"  height="512" alt="burger illustration"   />

          <div class="space-y-2">
            <h5 class="text-xl font-medium text-white-700 dark:text-gray-700transition group-hover:text-primary" >  Department  </h5>
            <p class="text-sm text-white-600 dark:text-white-300"> Add & View Department  </p>
          </div>
          <Link  to="/Department" class="flex items-center justify-between group-hover:text-primary">
            <span class="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </Link>
        </div>
      </div>
      <div class="group relative bg-white dark:bg-white-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-white-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-medium text-white-700 dark:text-gray-700transition group-hover:text-primary"
            >
              Commitee
            </h5>
            <p class="text-sm text-white-600 dark:text-white-300">
             Add & View Commitee 
            </p>
          </div>
          <Link to="/Commitee" class="flex items-center justify-between group-hover:text-primary">
            <span class="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </Link>
        </div>
      </div>
      <div class="group relative bg-white dark:bg-white-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-white-600/10">
        <div class="relative space-y-8 py-12 p-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-medium text-white-700 dark:text-gray-700 transition group-hover:text-primary"
            >
             Teachers
            </h5>
            <p class="text-sm text-white-600 dark:text-white-300">
              Add & View Teachers 
            </p>
          </div>
          <Link to="/Teachers" class="flex items-center justify-between group-hover:text-primary">
            <span class="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </Link>
        </div>
      </div>
      <div
        class="group relative bg-white-50 dark:bg-white-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-white-600/10"
      >
        <div
          class="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-white-800"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png"
            class="w-12"
            width="512"
            height="512"
            alt="burger illustration"
          />

          <div class="space-y-2">
            <h5
              class="text-xl font-medium text-white-700 dark:text-gray-700transition group-hover:text-primary"
            >
              Section & Session 
            </h5>
            <p class="text-sm text-white-600 dark:text-white-300">
             Manage Section & Section
            </p>
          </div>
          <Link to="/Section-Session" class="flex items-center justify-between group-hover:text-primary">
            <span class="text-sm">Read more</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clip-rule="evenodd" />
            </svg>                
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
                                     



    </>
  );
}

export default Cards;
