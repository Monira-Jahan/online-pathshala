import React from 'react';

const Banner = () => {
    return (
        <div className="">
            <div className="grid md:grid-cols-2 grid-cols-1">
                <div className='md:pt-24 pt-6 pl-4 pb-4 md:pl-16'>
                    <h1 class="pb-6 text-4xl font-bold text-black">Online Patshala<br /> The Smarter Way to Learn</h1>

                    <p className="text-sm text-slate-600  pb-6"><strong>শিক্ষা ও প্রযুক্তির সাথে, আগামীর পথে .............................</strong></p>
                    <div className=" form-control w-96">
                        <div className="input-group">
                            <input type="text" placeholder="Search.." className="input input-bordered" />
                            <button type="submit" class="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-lg btn btn-circle border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' mt-4 sm:pl-8'>
                    {/* <img class="lg:h-80 lg:w-50 sm:w-100" src="https://p.kindpng.com/picc/s/6-63194_pizzaolo-png-dessin-tube-alimentation-cuisinier-italian-food.png" alt="" /> */}
                    <iframe className="lg:w-[600px] sm:w-[400px] h-[400px] md:pr-12 md:pb-6 " src="https://lottie.host/?file=d122aa2c-bc86-4eff-a491-da7eb6541bdd/bY6Xznc21x.json"></iframe>
                </div>


            </div>

        </div>
    );
};

export default Banner;