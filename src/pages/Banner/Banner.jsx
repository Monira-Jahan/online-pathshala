import React from 'react';

const Banner = () => {
    return (
        <div className="">
        <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className=''>
                <h1 class="pt-12 pb-4 lg:pl-6 text-4xl font-extrabold text-black">Online Patshala<br/> The Smarter Way to Learn</h1>

                <p className="text-sm text-slate-600 lg:px-8 pb-6"><strong>শিক্ষা ও প্রযুক্তির সাথে, আগামীর পথে .............................</strong></p>
                <div className="lg:ml-6 form-control">
                    <div className="input-group">
                        <input type="text" placeholder="Search Recipe Here" className="input input-bordered" />
                        <button className="btn btn-square bg-gradient-to-r from-violet-400 to-fuchsia-400 border-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='lg:mx-36 my-4 sm:pl-8'>
                <img class="lg:h-80 lg:w-50 sm:w-100" src="https://p.kindpng.com/picc/s/6-63194_pizzaolo-png-dessin-tube-alimentation-cuisinier-italian-food.png" alt="" />
            </div>


        </div>

    </div>
    );
};

export default Banner;