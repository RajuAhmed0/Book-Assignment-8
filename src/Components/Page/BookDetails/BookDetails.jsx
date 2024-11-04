import { useLoaderData, useParams } from "react-router-dom";
import { getLocalStorage, setLocalStorage } from "../../../Utility/LocalStorage";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {

    const booksData = useLoaderData()
    // console.log(booksData);
    const { bookId } = useParams()
    // console.log(bookId);

    const details = booksData.find(b => b.bookId == bookId);
    // console.log(details);

    const handelRead = () => {
        // console.log('ccc');
        getLocalStorage(details)

    }
    const handelWL = () => {
        // console.log('click');
        setLocalStorage(details)

    }




    return (
        <div className="xl:mx-0 mx-2">
            <div className="lg:flex gap-12 mt-[52px] mb-36">
                <figure className='max-w-[573px] bg-[#1313130D] rounded-2xl flex items-center justify-center md:py-0 py-6 md:px-[75px]'>
                    <img
                        src={details.image}
                        className="xl:w-[400px] lg:w-[380px] md:w-[380px]" />
                </figure>
                <div className="max-w-[549px]">
                    <h1 className="text-[#131313] text-[40px] font-bold platFont mb-4">{details.bookName}</h1>
                    <p className='text-[#131313CC] font-medium xl:text-xl text-base '>By : {details.author}</p>
                    <div className='border border-[#13131326] mt-6 mb-4'></div>
                    <p className='text-[#131313CC] font-medium xl:text-xl text-base '>{details.category}</p>
                    <div className='border border-[#13131326] mb-6 mt-4'></div>
                    <p className='text-[#131313B2]'><span className='text-base text-[#131313] font-bold'>Review :</span> {details.review} <br />Description : {details.description}</p>
                    <div className='flex gap-4 mt-6 items-center'>
                        <p className='text-[#131313] font-bold text-base '>Tag</p>
                        {details.tags.map((tag, index) => (
                            <p key={index} className='w-fit bg-[#23BE0A0D] text-base  text-[#23BE0A] px-4  py-[7] rounded-[30px] font-medium'>#{tag}</p>
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
                        <button onClick={handelRead} className="text-black hover:text-white bg-[#FC8042] hover:bg-[#fc8042c4] md:py-[18px]  py-3 md:px-7 px-4 rounded-lg">Read</button>
                        <button onClick={handelWL} className="text-white hover:text-black bg-[#50B1C9] hover:bg-[#50b1c9c4] md:py-[18px]  py-3 md:px-7 px-4  rounded-lg ">Wishlist</button>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default BookDetails;