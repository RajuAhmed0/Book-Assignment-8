import { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
// import WishList from "../WishList/WishList";
import Read from "../Read/Read";

const ListedBooks = () => {
    const [read, setRead] = useState([]);
    const [wish, setWish] = useState([]);


    //    for wish list
    useEffect(() => {
        const showWishList = JSON.parse(localStorage.getItem("wish")) || [];
        setWish(showWishList);
    }, []);
    //     for read list
    useEffect(() => {
        const showDataRead = JSON.parse(localStorage.getItem("books")) || [];
        setRead(showDataRead);
    }, []);
 


    return (
        <div className="md:mt-[32px] mt-4 xl:mx-0 mx-2">
            <h4 className=" bg-[#1313130D] text-center text-[#131313] font-bold py-[33.5px] rounded-2xl flex justify-center text-[28px]">
                Books
            </h4>


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
                {/* <TabPanel>
          <div>
            {wish.map((w) => (
              <WishList w={w} key={w.id}></WishList>
            ))}
          </div>
        </TabPanel> */}
            </Tabs>
        </div>
    );
};

export default ListedBooks;
