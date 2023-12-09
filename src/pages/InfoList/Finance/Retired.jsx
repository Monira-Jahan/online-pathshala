import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa';

const Retired = () => {
    return (
        <section className=''>
            <div>
                <h1 className='text-center text-2xl font-semibold pb-6'>পেনশন ও অবসর সংক্রান্ত</h1>
            </div>
            <div className="overflow-x-auto bg-white rounded-xl">
                <table className="table rounded-xl">
                    {/* head */}
                    <thead className='bg-blue-300 '>
                        <tr className='text-center'>
                            <th className='text-center text-black text-lg'>ক্রম</th>
                            <th className='text-center text-black text-lg'>বিবরণ</th>
                            <th className='text-center text-black text-lg'>স্মারক ও তারিখ</th>
                            <th className='text-center text-black text-lg'>ডাউনলোড</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className='text-center text-gray-600 text-base font-semibold hover:text-black'>০১।</td>
                            <td className='text-center text-gray-600 text-sm font-normal hover:text-black'>পেনশন মঞ্জুরীর প্রয়োজনীয় ফরম, সনদ ও কাগজপত্রাদি সংক্রান্ত তথ্যাদি</td>
                            <td className='text-center text-gray-800 text-base font-bold hover:text-black'>____</td>

                            <td className='text-center text-black text-lg'><a href="/public/Pension-necessary-documents.pdf"><button className="btn btn-info font-bold hover:btn-neutral">Download PDF</button></a></td>

                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td className='text-center text-gray-600 text-base font-semibold hover:text-black'>০২।</td>
                            <td className='text-center text-gray-600 text-sm font-normal hover:text-black'>প্রত্যাশিত শেষ বেতনপত্র (ইএলপিসি)</td>
                            <td className='text-center text-gray-800 text-base font-bold hover:text-black'>____</td>

                            <td className='text-center text-black text-lg'><a href="/public/Pension-Application-Form-Annexure-1-to-8.pdf"><button className="btn btn-info  font-bold hover:btn-neutral">Download PDF</button></a></td>

                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td className='text-center text-gray-600 text-base font-semibold hover:text-black'>০৩।</td>
                            <td className='text-center text-gray-600 text-sm font-normal hover:text-black'>“সরকারি কর্মচারিগণের পেনশন সহজীকরণ আদেশ, ২০২০” এর ৪.০৯ নং অনুচ্ছেদ অনুযায়ী অবসরপ্রাপ্ত কর্মচারীর নিজের এবং তার মৃত্যুর পর তার পরিবারের পারিবারিক পেনশন প্রাপ্তির আবেদনে সংশোধিত পেনশন আবেদন ফরম, সনদ ও কাগজপত্রাদি ব্যবহার সংক্রান্ত</td>
                            <td className='text-center text-gray-800 text-base font-bold hover:text-black'>____</td>

                            <td className='text-center text-black text-lg'><a href="/public/Pension-documents.pdf"><button className="btn btn-info  font-bold hover:btn-neutral">Download PDF</button></a></td>

                        </tr>

                        

                    </tbody>


                </table>
            </div>
        </section>
    );
};

export default Retired;