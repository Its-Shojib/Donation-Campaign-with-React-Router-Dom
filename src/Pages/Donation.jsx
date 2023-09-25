import { useState, useEffect } from "react";
import DonatedItem from "../Components/DonatedItem/DonatedItem";

const Donation = () => {
    let [donations, setDonations] = useState([]);
    let [noFound, setNoFound] = useState('');
    const [isShow, setIsShow] = useState(false)

    useEffect(() => {
        let donatedItem = JSON.parse(localStorage.getItem('donated'));
        if (donatedItem) {
            setDonations(donatedItem);
        }
        else {
            setNoFound('No data found')
        }
    }, []);

    return (
        <div className="min-h-screen mt-10">
            {noFound ? (
                <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
            ) : (
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            isShow ? donations.map((item) => (
                                <DonatedItem key={item.id} item={item}></DonatedItem>
                            ))

                                : donations.slice(0, 4).map((item) => (
                                    <DonatedItem key={item.id} item={item}></DonatedItem>
                                ))
                        }
                    </div>

                    {donations.length > 4 && <button onClick={() => setIsShow(!isShow)} className={isShow ? 'hidden':'px-5 bg-green-500 block mx-auto mt-5 text-white py-3 rounded-lg'}>
                        {isShow ? "":'Show more'}
                    </button>}
                </div>
            )}
        </div>
    );
};

export default Donation;