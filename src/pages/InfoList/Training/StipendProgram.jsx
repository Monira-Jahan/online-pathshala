import React from 'react';

const StipendProgram = () => {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div>
                <img className="mx-12 mr-4 mt-6" src='https://i.ibb.co/0hbjQKC/Stipend-Distribution-Manual-2021.png' />
            </div>
            <div className=' w-full bg-white py-5 my-4'>
                <div class="px-8 py-10 mx-12 bg-white my-6 shadow-2xl">
                    <div class="-my-8 divide-y-2 divide-gray-100">

                        {/* 1 */}
                        <div class="md:flex-grow">
                            <a
                                href="/public/Stipend-Distribution-Manual-2021-.pdf">
                                <div className='flex'>
                                <div className='avatar'>
                                    <div className="w-36 mr-3 rounded-full">
                                        <img src="https://i.ibb.co/0hbjQKC/Stipend-Distribution-Manual-2021.png" />
                                    </div>
                                </div>
                                <div>
                                    <h2 class="pt-3 text-base font-semibold text-gray-600 title-font mb-2">কল্যান তহবিল হতে সাধারণ চিকিৎসা অনুদান মঞ্জুরির ক্ষেত্রে রোগভিত্তিক অর্থের নতুন হার নির্ধারণ</h2>
                                    <p class="text-sm leading-relaxed text-gray-500">বাংলাদেশ কর্মচারী কল্যাণ বোর্ড এর কল্যাণ তহবিল হতে সরকারি ও বোর্ডের তালিকাভুক্ত প্রতিষ্ঠানের কর্মচারী এবং তাদের পরিবারবর্গের সাধারণ চিকিৎসা অনুদান সম্পর্কিত ১৬ ফেব্রুয়ারী ২০২২ তারিখের পত্র</p>
                                    <a class="text-indigo-500 inline-flex items-center mt-4 mb-2">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                                </div>
                            </a>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default StipendProgram;