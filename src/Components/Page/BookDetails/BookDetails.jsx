import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {

    const booksData = useLoaderData()
    // console.log(booksData);


    return (
        <div>
            <div className="flex gap-12 mt-[52px] mb-36">
                <figure className='w-[573px] bg-[#1313130D] rounded-2xl flex items-center justify-center'>
                    <img
                        src="https://i.ibb.co.com/7nKzj8N/pngwing-1.png"
                        className="max-w-sm " />
                </figure>
                <div className="w-[549px]">
                    <h1 className="text-[#131313] text-[40px] font-bold platFont mb-4">The Catcher in the Rye</h1>
                    <p className='text-[#131313CC] font-medium xl:text-xl md:text-base text-xs'>By : Awlad Hossain</p>
                    <div className='border border-[#13131326] mt-6 mb-4'></div>
                    <p className='text-[#131313CC] font-medium xl:text-xl md:text-base text-xs'>Fiction</p>
                    <div className='border border-[#13131326] mb-6 mt-4'></div>
                    <p className='text-[#131313B2]'><span className='text-base text-[#131313] font-bold'>Review :</span> Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.
                        Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.</p>
                    <div className='flex gap-4 mt-6'>
                        <p className='text-[#131313] font-bold  md:text-base text-xs'>Tag</p>
                        <p className='w-fit bg-[#23BE0A0D] md:text-base text-[8px] text-[#23BE0A] md:px-4 px-2 py-[7] rounded-[30px] font-medium'>#Young Adult</p>
                        <p className='w-fit bg-[#23BE0A0D] md:text-base text-[8px] text-[#23BE0A] md:px-4 px-2 py-[7] rounded-[30px] font-medium'>#Young Adult</p>
                    </div>
                    <div className='border border-[#13131326] my-6'></div>
                    <div className='flex gap-[59px] mb-8'>
                        <ul className='text-[#131313B2] gap-3'>
                            <li>Number of Pages:</li>
                            <li>Publisher:</li>
                            <li>Year of Publishing:</li>
                            <li>Rating:</li>
                        </ul>
                        <ul className='text-[#131313] gap-3 font-semibold'>
                            <li>281</li>
                            <li>J.B Lippincott & Co.</li>
                            <li>1996</li>
                            <li>4.8</li>
                        </ul>
                    </div>

                    <div className=" text-lg font-semibold flex gap-4">
                        <button className="text-black hover:text-white bg-[#FC8042] hover:bg-[#fc8042c4]   py-[18px] px-7 rounded-lg">Read</button>
                        <button className="text-white hover:text-black bg-[#50B1C9] hover:bg-[#50b1c9c4] py-[18px] px-7  rounded-lg ">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;