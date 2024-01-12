import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const InfoList = () => {
    return (
        <section className='mt-5 '>
            <div>
                <h1 className='text-3xl font-semibold text-slate-800 text-center pb-4 mt-16'>সব তথ্য এক ছাদের নীচে</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-4 my-3 mx-24 md:mx-2'>
               {/* List One */} 
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/jL6nK3f/Education-Tab-Logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">শিক্ষা</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>বহি: বাংলাদেশ ছুটি</li>
                            <Link to="/monitoringboard"><li className='font-semibold flex text-blue-600 hover:text-gray-700'><FaAngleRight className='pr-2'/>মনিটরিং বোর্ড</li></Link>
                           <Link to="/schoollevelapa"> <li className='font-semibold flex text-blue-600 hover:text-gray-700'><FaAngleRight className='pr-2'/>বার্ষিক কর্মসম্পাদন চুক্তি</li></Link>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>সিটিজেন চার্টার</li>
                            <li className='font-semibold flex text-blue-600 hover:text-gray-700'><FaAngleRight className='pr-2'/>একাডেমিক</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>শিক্ষা পদক</li>
                        </ul>
                        
                    </div>
                </div>
                 {/* List two */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/34tPqBD/Money-tab-logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">অর্থ</h2>
                        <ul className='font-semibold '>
                            <Link to="/retiredpension"><li className='font-semibold flex text-blue-600 hover:text-gray-700'><FaAngleRight className='pr-2'/>অবসর ও পেনশন</li></Link>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>আর্থিক অনুদান</li>
                            <Link to="/bkkbnotice"><li className='font-semibold flex text-blue-600 hover:text-gray-700'><FaAngleRight className='pr-2'/>কর্মচারী কল্যাণ বোর্ড</li></Link>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>চিকিৎসা অনুদান</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>উচ্চতর গ্রেড</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>শিক্ষা পদক</li>
                        </ul>
                        
                    </div>
                </div>
                {/* List three */} 
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/K9tGRxf/Circular-Tab-Logo.png" alt=" " /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">প্রজ্ঞাপন/পরিপত্র</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>প্রাথমিক শিক্ষা</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>মাধ্যমিক ও উচ্চমাধ্যমিক</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>স্বাস্থ্য</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>জনপ্রশাসন</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>তথ্য ও যোগাযোগ প্রযুক্তি</li>
                            
                        </ul>
                        
                    </div>
                </div>
                 {/* List Four */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/RT97Ngv/Forms-Tab-Logo-1.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">ফরম</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>পূরণকৃত ফরম</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>নমুনা ফরম</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>খালি ফরম</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>সকল ফরম</li>
                            
                            
                        </ul>
                        
                    </div>
                 </div>
                 {/* List Five */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/cgdjyLZ/Training-Tab-Logo-1.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">প্রশিক্ষণ ও পরিদর্শন</h2>
                        <ul className='font-semibold'>
                           <Link to="/stipendprogram"> <li className='font-semibold flex text-blue-600 hover:text-gray-700'><FaAngleRight className='pr-2'/>সহায়িকা</li></Link>
                            <Link to="/trainingactivities"><li className='font-semibold flex text-blue-600 hover:text-gray-700'><FaAngleRight className='pr-2'/>ফরম্যাট</li></Link>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>ফলোআপ</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>বিদ্যালয় পরিদর্শন</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>অফিস পরিদর্শন</li>
                           <Link to="/mathtraining"> <li className='font-semibold flex text-blue-600 hover:text-gray-700'><FaAngleRight className='pr-2'/>বিষয়ভিত্তিক প্রশিক্ষণ</li></Link>
                            
                            
                        </ul>
                        
                    </div>
                 </div>
                 {/* List Six */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/FJZKnXY/Manual-Tab-Logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">সহায়িকা</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>চাকুরী ও আর্থিক বিধিবিধান সংক্রান্ত</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>তথ্য প্রযুক্তি ও সামাজিক যোগাযোগ মাধ্যম</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>পরিচালনা কমিটি</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>পেশাগত দক্ষতা সংক্রান্ত</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>সেবা সহজীকরণ</li>
                            
                            
                            
                        </ul>
                        
                    </div>
                 </div>
                 {/* List Seven */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/3pxq8g9/Law-Rules-and-Policies-Tab-Logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">আইন, বিধি ও নীতিমালা</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>শিক্ষা</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/> স্বাস্থ্য</li>
                            <Link to="/taxcircular">
                            <li className='font-semibold flex text-blue-600 hover:text-gray-700'><FaAngleRight className='pr-2'/>অর্থ</li></Link>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>জনপ্রশাসন</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>বিবিধ</li>
                            
                            
                            
                        </ul>
                        
                    </div>
                 </div>
                 {/* List Eight */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/f9LJwXF/2.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">ভর্তি, রুটিন ও ফলাফল</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>প্রাথমিক ও মাধ্যমিক</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>তথ্য উচ্চ মাধ্যমিক</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>বিশ্ববিদ্যালয়</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>ভর্তি ও নিয়োগ</li>
                            <Link to="/result"><li className='font-semibold flex text-blue-600 hover:text-gray-700'><FaAngleRight className='pr-2'/>ফলাফল</li></Link>
                            
                            
                            
                        </ul>
                        
                    </div>
                 </div>
                  {/* List Nine */} 
                  <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/YQQs27y/Notice-Tab-Logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">নোটিশ ও সাম্প্রতিক পত্র</h2>
                        <ul className='font-semibold'>
                            <Link to="/annualevaluation"><li className='font-semibold flex'><FaAngleRight className='pr-2'/>সাম্প্রতিক</li></Link>
                            <Link to="/ipemis"><li className='font-semibold flex'><FaAngleRight className='pr-2'/>জরুরী</li></Link>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>জনপ্রিয়</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>অর্থ ও হিসাব</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>প্রশিক্ষণ</li>
                      </ul>
                        
                    </div>
                 </div>

                 {/* List Ten */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/WgFJ6Ny/Online-Patshala-Weblinks-Tab-Logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">ওয়েব লিংকস্‌</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>সরকারি</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>তথ্য ও প্রযুক্তি</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>শিক্ষামূলক</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>ই-বুক</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>ই-লার্ণিং</li>
                      </ul>
                        
                    </div>
                 </div>
                 {/* List Eleven */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/dKSX4Hh/Online-Patshala-Innovative-Tab-Logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">উদ্ভাবনী কর্ণার‌</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>প্রতিষ্ঠান</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>কর্মকর্তা, শিক্ষক ও কর্মচারী</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>নির্দেশনা ও পত্র</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>ফরম</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>হেল্পলাইন</li>
                      </ul>
                        
                    </div>
                 </div>
                 {/* List Twelve */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/58jDYqN/Online-Patshala-Feature-Tab-Logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">ফিচার‌</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>শিক্ষামূলক</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>তথ্য ও যোগাযোগ প্রযুক্তি</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>মোটিভেশনাল</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>উদ্ভাবনী</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>কিছু জানা কিছু অজানা</li>
                      </ul>
                        
                    </div>
                 </div>
                 {/* List-13 */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/GRJFm4B/Online-Patshala-Team-Tab-Logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">অনলাইন পাঠশালা পরিবার‌</h2>
                        <ul className='font-semibold'>
                        <Link to="/advisorpanel"><li className='font-semibold flex'><FaAngleRight className='pr-2'/>উপদেষ্টা</li></Link>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>সমন্বয়ক</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>এডমিন</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>মডারেটর</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>কন্ট্রিবিউটর</li>
                      </ul>
                        
                    </div>
                 </div>
                 {/* List-14 */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/ynFCjXF/Online-Patshala-Events-Tab-Logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">ইভেন্টস্‌‌</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>সেমিনার, ওয়ার্কশপ</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>ওরিয়েন্টেশন</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>ফলোআপ</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>অনলাইন প্রশিক্ষণ</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>কন্ট্রিবিউটর</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>উৎসব</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>Students Council Election</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>বিদ্যালয় ব্যবস্থাপনা কমিটি</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>বিদ্যালয় ব্যবস্থাপনা ডাটাবেস প্রোগ্রাম ম্যানুয়াল</li>
                      </ul>
                        
                    </div>
                 </div>

                 {/* List-14 */} 
                 <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/df3Pd6J/Online-Patshala-Introduction-Tab-Logo.png" alt="" /></figure>
                    <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white"></p>
                    <div className="card-body flex flex-col items-start text-slate-700">
                        <h2 className="card-title text-center text-slate-800">পরিচিতি‌‌</h2>
                        <ul className='font-semibold'>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>অফিস ও প্রতিষ্ঠান</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>বিদ্যালয়</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>শিক্ষক ও শিক্ষার্থী</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>কর্মচারী</li>
                            <li className='font-semibold flex'><FaAngleRight className='pr-2'/>অন্যান্য</li>
                            
                      </ul>
                        
                    </div>
                 </div>
            </div>
        </section>
    );
};

export default InfoList;