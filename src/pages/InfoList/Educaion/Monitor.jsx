import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegFilePdf,FaRegFileWord  } from "react-icons/fa";
const Monitor = () => {
    return (
       <section className=''>
        <div>
            <h1 className='text-center text-2xl font-semibold pb-6'>মনিটরিং বোর্ড</h1>
        </div>
        <div className="overflow-x-auto bg-white rounded-xl">
            <table className="table rounded-xl">
                {/* head */}
                <thead className='bg-blue-300 '>
                    <tr className='text-center'>
                      
                        <th className='text-center text-black text-lg'>বিবরণ</th>
                        <th className='text-center text-black text-lg'>ডাউনলোড</th>
                        <th className='text-center text-black text-lg'>ডাউনলোড</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    <tr>
                        
                        
                        <td className='text-center text-gray-600 text-base font-semibold '>সরকারি প্রাথমিক বিদ্যালয়</td>
                        <td className='text-center text-black text-lg'><FaRegFilePdf className='ml-32 mb-2' /><a href="/public/Digital-Monitoring-Board-Primary-School-Online-Patshala.pdf"><button className="btn btn-info btn-xs font-bold">Download PDF</button></a></td>
                        <th className='text-center text-black text-lg'>
                        <FaRegFileWord className='ml-32 mb-2'/>
                        <button className="btn btn-info btn-xs font-bold">Download Doc</button>
                        </th>
                    </tr>
                    {/* row 2 */}
                    <tr>
                       
                        
                        <td className='text-center text-gray-600 text-base font-semibold'>উপজেলা / থানা শিক্ষা অফিস</td>
                        <td className='text-center text-black text-lg'><FaRegFilePdf className='ml-32 mb-2' /><a href=""><button className="btn btn-info btn-xs font-bold">Download PDF</button></a></td>
                        <th className='text-center text-black text-lg'>
                        <FaRegFileWord className='ml-32 mb-2'/>
                        <button className="btn btn-info btn-xs font-bold">Download Doc</button>
                        </th>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        
                        
                        <td className='text-center text-gray-600 text-base font-semibold'>উপজেলা / থানা রিসোর্স সেন্টার</td>
                        <td className='text-center text-black text-lg'><FaRegFilePdf className='ml-32 mb-2' /><a href="/public/Digital-Monitoring-Board-URC-or-TRC.pdf"><button className="btn btn-info btn-xs font-bold">Download PDF</button></a></td>
                        <th className='text-center text-black text-lg'>
                        <FaRegFileWord className='ml-32 mb-2'/>
                            <button className="btn btn-info btn-xs font-bold">Download Doc</button>
                        </th>
                    </tr>
                    {/* row 4 */}
                    <tr>
                       
                        
                        <td className='text-center text-gray-600 text-base font-semibold'>জেলা প্রাথমিক শিক্ষা অফিস</td>
                        <td className='text-center text-black text-lg'><FaRegFilePdf className='ml-32 mb-2' /><a href=""><button className="btn btn-info btn-xs font-bold">Download PDF</button></a></td>
                        <th className='text-center text-black text-lg font-semibold'>
                        <FaRegFileWord className='ml-32 mb-2'/>
                            <button className="btn btn-info btn-xs font-bold">Download Doc</button>
                        </th>
                    </tr>
                    {/* row 5 */}
                    <tr>
                        
                        
                        <td className='text-center text-gray-600 text-base font-semibold'>উপপরিচালকের কার্যালয়</td>
                        <td className='text-center text-black text-lg'><FaRegFilePdf className='ml-32 mb-2' /><a href=""><button className="btn btn-info btn-xs font-bold">Download PDF</button></a></td>
                        <th className='text-center text-black text-lg'>
                        <FaRegFileWord className='ml-32 mb-2'/>
                            <button className="btn  btn-xs btn-info font-bold">Download Doc</button>
                        </th>
                    </tr>
                </tbody>
               

            </table>
        </div>
       </section>
    );
};

export default Monitor;