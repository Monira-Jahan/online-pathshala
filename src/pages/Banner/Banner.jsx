import React from 'react';

const Banner = () => {
    return (
        <div className="">
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className='md:pt-24 pt-6 pl-4 pb-4 md:pl-16'>
                    <h1 class="pb-6 text-4xl font-bold text-gray-700 text-center md:text-start">Online Patshala<br /> The Smarter Way to Learn</h1>

                    <p className="text-sm text-slate-600  pb-6 text-center md:text-left"><strong>শিক্ষা ও প্রযুক্তির সাথে, আগামীর পথে .............................</strong></p>
                   
                    <div class="mb-3">
                        <div class="relative mb-4 flex w-full flex-wrap items-stretch ">
                            <input
                                type="search"
                                class="relative  m-0 -mr-0.5 block min-w-0 flex-auto rounded-l-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon1" />

                           
                            <button
                                class="relative z-[2] flex items-center  bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg rounded-r-full"
                                type="button"
                                id="button-addon1"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    class="h-5 w-5">
                                    <path
                                        fill-rule="evenodd"
                                        d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mt-4 sm:pl-8 '>
                    {/* <img class="lg:h-80 lg:w-50 sm:w-100" src="https://p.kindpng.com/picc/s/6-63194_pizzaolo-png-dessin-tube-alimentation-cuisinier-italian-food.png" alt="" /> */}
                    <iframe className="lg:w-[600px] sm:w-[700px] h-[400px] md:pr-12 md:pb-6 " src="https://lottie.host/?file=d122aa2c-bc86-4eff-a491-da7eb6541bdd/bY6Xznc21x.json"></iframe>
                </div>


            </div>

        </div>
    );
};

export default Banner;