import React from 'react';
import BooksCard from './BooksCard';

const Books = () => {
    return (
        <div className='mt-[100px] mb-[130px]'>
            <h1 className='text-[40px] font-bold text-[#131313] text-center platFont mb-9'>Books</h1>
            <div>
                <BooksCard></BooksCard>
            </div>
        </div>
    );
};

export default Books;