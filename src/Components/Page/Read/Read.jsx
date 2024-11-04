import { GrNotes } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiMiniUsers } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Read = ({ data }) => {
    //  console.log(data);
    const { bookName, author, image, totalPages, rating, tags, publisher, yearOfPublishing, category, bookId, } = data;

    return (
        <div className="md:mt-6 mt-3">
            <div className="flex rounded-2xl  border border-[#13131399] mb:p-6 p-3 md:gap-6 gap-3">
                <figure className="bg-[#F3F3F3] rounded-2xl md:px-[50px] px-2 flex items-center">
                    <img src={image} className="" alt="Book" />
                </figure>
                <div className="">
                    <h2 className="md:text-2xl text-xl font-bold text-[#131313] platFont md:mb-4 mb-1">{bookName}</h2>
                    <p className="text-[#131313CC] font-medium md:text-base text-sm md:mb-[19.5px] mb-1">By : {author}</p>
                    <div className="md:flex lg:gap-4 gap-2 items-center ">
                        <p className='text-[#131313] font-bold md:text-base text-sm md:mb-4 mb-2'>Tag</p>
                        {tags.map((tag, index) => (
                            <p key={index} className='w-fit bg-[#23BE0A0D] lg:text-base text-xs text-[#23BE0A] lg:px-4 px-2  lg:py-[7] py-1 rounded-[30px] font-medium'>#{tag}</p>
                        ))}
                        <div className="flex gap-2 items-center">
                            <HiOutlineLocationMarker className="text-[#131313CC]" />
                            <p className="text-[#131313CC] lg:text-base text-sm"> Year of Publishing : {yearOfPublishing}</p>
                        </div>
                    </div>
                    <div className=" md:flex gap-4 ">
                        <div className="text-[#13131399] flex gap-2 items-center md:text-base text-xs">
                            <HiMiniUsers />
                            <p>Publisher : {publisher}</p>
                        </div>
                        <div className="text-[#13131399] flex gap-2 items-center md:text-base text-xs">
                            <GrNotes />
                            <p>Pages : {totalPages}</p>
                        </div>

                    </div>
                    <div className="border border-[#13131326] my-4"></div>
                    <div className="flex gap-3">
                        <button className=" bg-[#328EFF26] text-[#328EFF] rounded-[30px] lg:text-base md:text-sm text-[6px] lg:px-5 md:px-3 px-1 md:py-[11px] py-0"> Category : {category}</button>
                        <button className=" bg-[#FFAC3326] text-[#FFAC33] rounded-[30px] lg:text-base md:text-sm text-[6px] lg:px-5 md:px-3 px-1 md:py-[11px] py-0">Rating : {rating}</button>
                        <Link to={`/books/${bookId}`}>
                            <button className=" bg-[#23BE0A] text-white hover:text-black xl:text-lg font-medium rounded-[30px] lg:text-base md:text-sm text-[6px] lg:px-5 md:px-3 px-1 md:py-[10px] py-2">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Read;
