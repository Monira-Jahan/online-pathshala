import React from 'react';

const MathTraining = () => {
    return (
        <section>
            
            <div>
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Homepage</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>About</a></li>
                </ul>
            </div>
                <div className='grid grid-cols-1 md:grid-cols-2  px-16'>
                    <h2 class="pt-3 text-base font-semibold text-gray-600 title-font mb-6">গণিত অলিম্পিয়াড কৌশল ব্যবহার করে বিষয়ভিত্তিক (গণিত) প্রশিক্ষণ সম্পর্কিত নীতিমালা, প্রশিক্ষণসূচি ও অন্যান্য প্রয়োজনীয় তথ্যাদি</h2>
                    <h2 class="pt-3 text-base font-semibold text-gray-600 title-font mb-6">গণিত প্রশিক্ষণ সহায়িকা ও কনটেন্ট ডেলিভারি বুক</h2>
                </div>
                <div class="w-full bg-gray-200 grid grid-cols-1 md:grid-cols-2 px-6">
                    {/* 1 */}
                    <div class="px-3 py-16 mx-3 bg-white my-3 shadow-2xl">
                        <div class="-my-8 ">

                            {/* 1 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Math-Training-Rules.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full">
                                                <img src="https://i.ibb.co/WDY6Y7D/Training-Rules-online-patshala-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">গণিত প্রশিক্ষণের নীতিমালা</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 2 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Math-Training-Schedule.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full">
                                                <img src="https://i.ibb.co/LNc3y5P/Training-Schedule-Logo-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">গণিত প্রশিক্ষণসূচি</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 3 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Math-Trainer-List-all-over-bangladesh.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full">
                                                <img src="https://i.ibb.co/sHcf38g/Math-Olympiad-Master-Trainer-List-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">
                                                গণিত অলিম্পিয়াড প্রশিক্ষণপ্রাপ্ত মাস্টার ট্রেইনারগণের নামের তালিকা	</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 4 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Standard-Operating-Procedure.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full">
                                                <img src="https://i.ibb.co/c3YXKnq/sop-150x150.jpg" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">

                                                Standard Operating Procedure (SOP) 							</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 5 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Stipend-Distribution-Manual-2021-.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full mt-10">
                                                <img src="https://i.ibb.co/RB8VJPH/Official-Deputation-Letter-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">
                                                গণিত অলিম্পিয়াড কৌশল ব্যবহার করে বিষয়ভিত্তিক (গণিত) প্রশিক্ষণে প্রশিক্ষক ও প্রশিক্ষণার্থী মনোনয়ন সংক্রান্ত পত্র (শিক্ষা অফিস)						</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 6 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Stipend-Distribution-Manual-2021-.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full ">
                                                <img src="https://i.ibb.co/RB8VJPH/Official-Deputation-Letter-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">

                                                গণিত প্রশিক্ষণে প্রশিক্ষণার্থী মনোনয়ন সংক্রান্ত দাপ্তরিক পত্র (ইউআরসি)											</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 7 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Stipend-Distribution-Manual-2021-.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full ">
                                                <img src="https://i.ibb.co/zQGsrc9/Important-Documents-of-Training-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">


                                                প্রশিক্ষণের ব্যয় বিবরণী, হাজিরা শীট, উপকরণ বিতরণ শীট ও সম্মানী বিতরণ সহ অন্যান্য তথ্যাদির এক্সেল ফরম্যাট																</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 8 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Stipend-Distribution-Manual-2021-.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full ">
                                                <img src="https://i.ibb.co/mzNGSs4/Training-Treasury-Challan-Format-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">চালান ফরম (ওয়ার্ড ফরম্যাট)</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                    {/* 2nd content */}
                    <div class="px-3 py-16 mx-3 bg-white my-3 shadow-2xl">
                        <div class="-my-8">

                            {/* 1 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Training-manual-Class-1-2.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full mt-3 ">
                                                <img src="https://i.ibb.co/k14gsVL/Math-Training-Manual-online-patshala-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">
							গণিত প্রশিক্ষণ ম্যানুয়াল (১ম ও ২য় শ্রেণি) 						</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 2 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Training-Manual-Class-3-5.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full mt-3">
                                                <img src="https://i.ibb.co/k14gsVL/Math-Training-Manual-online-patshala-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">
							গণিত প্রশিক্ষণ ম্যানুয়াল (৩য়, ৪র্থ ও ৫ম শ্রেণি)						</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 3 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Content_Delivery_Book-1-2-1.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full mt-3">
                                                <img src="https://i.ibb.co/6vKHBcC/Content-Delivery-Book-Class-1-2-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">
							
                                            Content Delivery Book, Class-1 & 2											</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 4 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Content_Delivery_Book-Class-3-1.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full mt-3">
                                                <img src="https://i.ibb.co/dKwGdH1/Content-Delivery-Book-Class-3-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">
							
                                            
							Content Delivery Book, Class-3																</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 5 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Content_Delivery_Book-Class-4.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full mt-3 ">
                                                <img src="https://i.ibb.co/93ds8v8/8-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">
							
                                            
							Content Delivery Book, Class-4																</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* 6 */}
                            <div class="md:flex-grow my-3">
                                <a
                                    href="/public/Content_Delivery_Book-Class-5.pdf">
                                    <div className='flex px-10'>
                                        <div className='avatar'>
                                            <div className="w-36 h-36 rounded-full mt-3 ">
                                                <img src="https://i.ibb.co/wYXHgk0/9-150x150.png" />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 class="py-16 px-4 text-base font-semibold text-gray-600 title-font mb-2">Content Delivery Book Class-5</h2>

                                        </div>
                                    </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MathTraining;