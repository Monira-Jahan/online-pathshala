import React from 'react';

const TaxCircular = () => {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div>
                <img className="mx-12 mr-4 mt-6 ml-24" src='https://i.ibb.co/dKnMgF1/Value-Added-Tax-1.png' />
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
                                        <img src="https://i.ibb.co/ZmrRK27/Value-Added-Tax-150x150.png" />
                                    </div>
                                </div>
                                <div>
                                    <h2 class="pt-3 text-base font-semibold text-gray-600 title-font mb-2">উৎসে মূল্য সংযোজন কর কর্তন ও আদায় বিধিমালা ২০২১</h2>
                                    <p class="text-sm leading-relaxed text-gray-500">মূল্য সংযোজন কর ও সম্পূরক শুল্ক আইন, ২০১২ এবং মূসক উৎসে কর কর্তন ও আদায় বিধিমালা ২০২১</p>
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

export default TaxCircular;