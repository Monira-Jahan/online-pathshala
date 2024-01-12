import React from 'react';
import { FaFacebookF } from "react-icons/fa";
const Advisor = () => {
    return (
        <section>
            <div>
                <h1 className='text-4xl font-normal text-slate-800 text-center pb-4 mt-8'>ADVISOR PANEL</h1>
                <hr className="border-2 border-yellow-500 cursor-pointer hover:border-red-500 duration-500 mb-8"></hr>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-4 my-3 mx-24 md:mx-6'>
                {/* 1 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='pt-4'><img src="https://i.ibb.co/qLHbT0M/mamun-kabir.jpg" alt="Shoes" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">জনাব মামুন কবির</h2>
                        <p className='text-center text-gray-600'>শিক্ষা অফিসার</p>
                        <p className='text-center text-gray-600'>বিভাগীয় উপপরিচালকের কার্যালয়</p>
                        <p className='text-center text-gray-600'>প্রাথমিক শিক্ষা, চট্টগ্রাম বিভাগ,চট্টগ্রাম</p>

                    </div>
                    <div class="flex justify-center p-6 pt-2 gap-7">
                        <a href="#facebook">
    
                            <FaFacebookF />
                        </a>
                    </div>
                </div>
                {/* 2 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='pt-4'><img src="https://i.ibb.co/Wsq9JdY/Riton-Kumar-Barua-225x300.png" alt="" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">জনাব রিটন কুমার বড়ুয়া</h2>
                        <p className='text-gray-600'>সহকারী জেলা প্রাথমিক শিক্ষা অফিসার</p>
                        <p className='text-center text-gray-600'>জেলা প্রাথমিক শিক্ষা অফিস,নোয়াখালী</p>
                     </div>
                </div>
                {/* 3 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='pt-4'><img src="https://i.ibb.co/88ZyXBf/Hrishikesh-Shill.jpg" alt="" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">জনাব হৃষীকেশ শীল</h2>
                        <p className='text-center text-gray-600'>শিক্ষা অফিসার</p>
                        <p className='text-center text-gray-600'>বিভাগীয় উপপরিচালকের কার্যালয়</p>
                        <p className='text-center text-gray-600'>প্রাথমিক শিক্ষা, চট্টগ্রাম বিভাগ,চট্টগ্রাম</p>

                    </div>
                </div>
                {/* 4 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='pt-4'><img src="https://i.ibb.co/MCjPmYd/Raoshan-Akter-Jahan.jpg" alt="" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">জনাব রওশন আক্তার জাহান</h2>
                        <p className='text-gray-600'>সুপারিনটেনডেন্ট</p>
                        <p className='text-center text-gray-600'>প্রাইমারী টিচার্স ট্রেনিং ইন্সটিটিউট,ফেনী</p>


                    </div>
                </div>
                {/* 5 */}
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='pt-4'><img src="https://i.ibb.co/jfDb0qW/Shaheen-Akther-chy-225x300.png" alt="" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">জনাব শাহীন আক্তার চৌধুরী</h2>
                        <p className='text-center text-gray-600'>সহকারী সুপারিনটেনডেন্ট</p>
                        <p className='text-center text-gray-600'>প্রাইমারী টিচার্স ট্রেনিং ইন্সটিটিউট,চট্টগ্রাম</p>
                    

                    </div>
                </div>
            {/* 6 */}
            <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='pt-4'><img src="https://i.ibb.co/r6Z8mhB/Md-Kafil-Uddin.jpg" alt="" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">জনাব মোঃ কফিল উদ্দিন</h2>
                        <p className='text-center text-gray-600'>সহকারী জেলা প্রাথমিক শিক্ষা অফিসার</p>
                        <p className='text-center text-gray-600'>চট্টগ্রাম</p>
                    

                    </div>
            </div>
            {/* 7 */}
            <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='pt-4'><img src="https://i.ibb.co/x7qLxWM/Hossain-Mohammad-Amran.jpg" alt="" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">জনাব হোসাইন মোহাম্মদ এমরান</h2>
                        <p className='text-center text-gray-600'>ইন্সট্রাক্টর</p>
                        <p className='text-center text-gray-600'>উপজেলা রিসোর্স সেন্টার</p>
                        <p className='text-center text-gray-600'>ফটিকছড়ি, চট্টগ্রাম</p>

                    </div>
            </div>
            {/* 8 */}
            <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='pt-4'><img src="https://i.ibb.co/YDYW5Pf/Madhab-Chandra-Majumder.jpg" alt="" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">জনাব মাধব চন্দ্র মজুমদার</h2>
                        <p className='text-center text-gray-600'>ইন্সট্রাক্টর</p>
                        <p className='text-center text-gray-600'>উপজেলা রিসোর্স সেন্টার</p>
                        <p className='text-center text-gray-600'>সীতাকুন্ড, চট্টগ্রাম</p>

                    </div>
            </div>
            {/* 9 */}
            <div className="card w-full bg-base-100 shadow-xl">
                    <figure className='pt-4'><img src="https://i.ibb.co/R4gtRCP/Mohammad-Bakhatair-Hossain-e1633587126128-261x300.png" alt="" /></figure>
                    <div className="card-body items-center">
                        <h2 className="card-title">জনাব মোহাম্মদ বখতেয়ার হোসেন</h2>
                        <p className='text-center text-gray-600'>ইন্সট্রাক্টর</p>
                        <p className='text-center text-gray-600'>উপজেলা রিসোর্স সেন্টার</p>
                        <p className='text-center text-gray-600'>বিলাইছড়ি, রাংগামাটি পার্বত্য জেলা</p>

                    </div>
            </div>
            </div>
        </section>
    );
};

export default Advisor;