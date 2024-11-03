import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const booksData = useLoaderData()
    // console.log(booksData);
    const { bookId } = useParams()
    // console.log(bookId);

    const details = booksData.find(b => b.bookId == bookId);
    // console.log(details);




    return (
        <div>
            <div className="flex gap-12 mt-[52px] mb-36">
                <figure className='w-[573px] bg-[#1313130D] rounded-2xl flex items-center justify-center'>
                    <img
                        src={details.image}
                        className="w-[425px]" />
                </figure>
                <div className="w-[549px]">
                    <h1 className="text-[#131313] text-[40px] font-bold platFont mb-4">{details.bookName}</h1>
                    <p className='text-[#131313CC] font-medium xl:text-xl md:text-base text-xs'>By : {details.author}</p>
                    <div className='border border-[#13131326] mt-6 mb-4'></div>
                    <p className='text-[#131313CC] font-medium xl:text-xl md:text-base text-xs'>{details.category}</p>
                    <div className='border border-[#13131326] mb-6 mt-4'></div>
                    <p className='text-[#131313B2]'><span className='text-base text-[#131313] font-bold'>Review :</span> {details.review} <br />Description : {details.description}</p>
                    <div className='flex gap-4 mt-6'>
                        <p className='text-[#131313] font-bold  md:text-base text-xs'>Tag</p>
                        {details.tags.map((tag, index) => (
                            <p key={index} className='w-fit bg-[#23BE0A0D] md:text-base text-[8px] text-[#23BE0A] md:px-4 px-2 py-[7] rounded-[30px] font-medium'>#{tag}</p>
                        ))}

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
                            <li>{details.totalPages}</li>
                            <li>{details.publisher}</li>
                            <li>{details.yearOfPublishing}</li>
                            <li>{details.rating}</li>
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