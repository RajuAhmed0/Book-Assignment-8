import React from 'react';

const Bannar = () => {
    return (
        <div className='mx-2'>
            <div className="hero bg-[#1313130D] mt-12 rounded-3xl xl:px-[120px]">
                <div className="hero-content flex-col md:flex-row-reverse lg:gap-[86px]">
                    <div className='lg:py-20 md:py-8'>
                        <img
                            src="https://i.ibb.co.com/7nKzj8N/pngwing-1.png"
                            className="max-w-sm" />
                    </div>
                    <div>
                        <h1 className="max-w-[526px] md:mb-12 mb-6 md:text-[56px] text-4xl text-[#131313] font-bold md:leading-[84px] platFont md:text-left text-center">Books to freshen up your bookshelf</h1>
                        <div className='md:text-left text-center'>
                            <button className="md:px-7 px-4 md:py-[21px] py-3 bg-[#23BE0A] hover:bg-[#22be0ac9] rounded-lg text-xl font-bold text-white text-center">View The List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;