import { toast } from "react-toastify"


const getLocalStorage = (details) => {
    const storageData = JSON.parse(localStorage.getItem('books')) || []
    // console.log(storageData);
    const savedData = storageData.find(item => item.bookId === details.bookId)
    if (savedData) {
        toast.error('Already exists')
    } else {
        storageData.push(details)
        localStorage.setItem('books', JSON.stringify(storageData))
        toast.success('Successfully Added')
    }

}

const setLocalStorage = (details) => {

    const storageData2 = JSON.parse(localStorage.getItem('wish')) || []
    // console.log(storageData2);

    const savedData2 = storageData2.find(item => item.bookId === details.bookId)
    if (savedData2) {
        toast.error('Already exists')
    } else {
        storageData2.push(details)
        localStorage.setItem('wish', JSON.stringify(storageData2))
        toast.success('Successfully Added')
    }

}
export { getLocalStorage, setLocalStorage }
