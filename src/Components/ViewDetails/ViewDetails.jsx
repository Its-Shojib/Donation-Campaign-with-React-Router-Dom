import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';


const ViewDetails = () => {

    let { id } = useParams();
    let [donateItem, setDonateItem] = useState({});
    let { Picture2, Price,Text_Color, Title, Description } = donateItem;
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
        <div className="my-10 space-y-5">
            <div className="relative w-full mx-auto">
                <img className="w-full h-[550px]" src={Picture2} alt="" />
                <div className="absolute bottom-0 p-10 mr-5 w-full bg-black bg-opacity-40">
                    <button onClick={handleDonate} className="text-white px-3 py-2 rounded-md" style={{ backgroundColor: Text_Color }}>Donate {Price}</button>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold">{Title}</h2>
                <p className="text-lg">{Description}</p>
            </div>
        </div>
    );
};

export default ViewDetails;