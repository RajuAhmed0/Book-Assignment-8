import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const BooksCard = () => {
    return (
        <div>
            <div className="card w-[374px] border border-[#13131326] p-6">
                <figure className="bg-[#F3F3F3]">
                    <img
                        src="https://i.ibb.co.com/bWPPTqv/kindpng-7318921.png"
                        alt="Shoes"
                        className="rounded-xl py-8" />
                </figure>
                <div className="mt-6 ">
                    <div className='flex gap-3 mb-4'>
                        <p className='bg-[#23BE0A0D] text-[#23BE0A] px-4 py-[7] rounded-[30px] font-medium'>young</p>
                        <p className='bg-[#23BE0A0D] text-[#23BE0A] px-4 py-[7] rounded-[30px] font-medium'>hello</p>
                    </div>
                    <h3 className='text-[#131313] text-2xl font-bold platFont mb-4'>The Catcher in the Rye</h3>
                    <p className='text-[#131313CC] font-medium'>By : Awlad Hossain</p>
                    <div className='border border-dashed border-[#13131326] my-5'></div>
                    <div className='flex justify-between text-[#131313CC]'>
                        <p>Fiction</p>
                        <div className='flex gap-2 items-center '>
                            <p>2.32</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;