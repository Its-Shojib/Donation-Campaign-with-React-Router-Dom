import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const ViewDetails = () => {
    
    let { id } = useParams();
    let [donateItem, setDonateItem] = useState({});
    let {Picture2,Price,Category_bg,Title,Description} = donateItem;
    let items = useLoaderData();
    useEffect(() => {
        let findedCard = items.find(item => item.id === id);
        setDonateItem(findedCard)
    }, [id, items])

    let handleDonate = () => {
        let donatedArray = [];
        let donatedItem = JSON.parse(localStorage.getItem('donated'));
        if (!donatedItem) {
            donatedArray.push(donateItem);
            localStorage.setItem('donated', JSON.stringify(donatedArray));
            swal("Good job!", "Products added successfully!", "success");
        }
        else {
            let isExist = donatedItem.find(dItem => dItem.id === id);

            if (!isExist) {
                donatedArray.push(...donatedItem, donateItem)
                localStorage.setItem('donated', JSON.stringify(donatedArray));
                swal("Good job!", "Donated successfully!", "success");
            }
            else {
                swal("Error!", "Already Donated!", "error");
            }
        }
    }
    return (
        <div className="flex min-h-screen md:min-h-[700px] justify-center items-center mt-5 ">
            <div className="absolute w-full md:w-3/5 mx-auto px-4">
                <img className="w-full" src={Picture2} alt="" />
                <button onClick={handleDonate} className="text-white px-3 py-2 relative bottom-16 left-5" style={{backgroundColor:Category_bg}}>Donate ${Price}</button>
                <h2 className="text-3xl font-bold">{Title}</h2>
                <p className="text-lg">{Description}</p>
            </div>
        </div>
    );
};

export default ViewDetails;