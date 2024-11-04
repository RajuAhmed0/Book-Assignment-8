import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Read from "../Read/Read";
import WishList from "../WishList/WishList";

const ListedBooks = () => {
    const [read, setRead] = useState([]);

    const [wish, setWish] = useState([]);





    useEffect(() => {
        const showDataRead = JSON.parse(localStorage.getItem("books")) || [];
        setRead(showDataRead);
    }, []);

    useEffect(() => {
        const showWishList = JSON.parse(localStorage.getItem("wish")) || [];
        setWish(showWishList);
    }, []);


    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="md:mt-[32px] mt-4 xl:mx-0 mx-2">
            <h4 className=" bg-[#1313130D] text-center text-[#131313] font-bold py-[33.5px] rounded-2xl flex justify-center text-[28px]">
                Books
            </h4>

            <div className="relative inline-block text-left mt-2 mb-24 ">
                <button
                    onClick={toggleDropdown}
                    className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg focus:outline-none w-44"
                >
                    Sort By <span className="ml-1">▼</span>
                </button>

                {isOpen && (
                    <div className="absolute mt-2  bg-white rounded-lg shadow-lg z-10">
                        <ul className="py-2">
                            <li
                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => console.log("Sort by Rating")}
                            >
                                Rating
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => console.log("Sort by Number of pages")}
                            >
                                Number of pages
                            </li>
                            <li
                                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                onClick={() => console.log("Sort by Publisher year")}
                            >
                                Publisher year
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            <Tabs className="md:mt-14 mt-7">
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>WishList Books</Tab>
                </TabList>

                <TabPanel>
                    <p className=" mb-4 grid grid-cols-1 gap-4">
                        {read.map((data) => (
                            <Read data={data} key={data.id}></Read>
                        ))}
                    </p>
                </TabPanel>
                <TabPanel>
                    <div>
                        {wish.map((w) => (
                            <WishList w={w} key={w.id}></WishList>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;
