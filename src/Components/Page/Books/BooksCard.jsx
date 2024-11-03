import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BooksCard = ({books}) => {

    const {image, tags, bookName, author, category, rating, bookId } = books;
    return ( 
        <div>
           <Link to={`/books/${bookId}`}>
           <div className="card max-w-[374px] border border-[#13131326] xl:p-6 p-3">
                <figure className="bg-[#F3F3F3] rounded-2xl">
                    <img
                        src={image}
                        alt="Books"
                        className="rounded-xl py-8 max-w-min" />
                </figure>
                <div className="md:mt-6 mt-3 ">
                    <div className='flex gap-3 md:mb-4 mb-2'>
                        {
                            tags?.map((tag, i) => <p key={i} className='bg-[#23BE0A0D] md:text-base text-[8px] text-[#23BE0A] md:px-4 px-2 py-[7] rounded-[30px] font-medium'>{tag}</p>)
                        }
                        {/* <p className='bg-[#23BE0A0D] text-[#23BE0A] px-4 py-[7] rounded-[30px] font-medium'>hello</p> */}
                    </div>
                    <h3 className='text-[#131313] md:text-2xl text-sm  font-bold platFont md:mb-4 mb-1'>{bookName}</h3>
                    <p className='text-[#131313CC] font-medium md:text-base text-xs'>By : {author}</p>
                    <div className='border border-dashed border-[#13131326] md:my-5 my-2'></div>
                    <div className='flex justify-between text-[#131313CC] md:text-base text-xs'>
                        <p>{category}</p>
                        <div className='flex gap-2 items-center '>
                            <p>{rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div></Link>
        </div>
    );
};

export default BooksCard;