// import { useLoaderData } from "react-router-dom";

import ShowCard from "../Components/ShowCard/ShowCard";
import { useEffect, useState } from "react";


const Home = () => {
    // let cardsData = useLoaderData();
    let [data,setData] = useState([]);

    useEffect(()=>{
        fetch('/data.json')
        .then(res=> res.json())
        .then(data => setData(data))
    },[])
    let handleSubmit = (e) =>{
        e.preventDefault();
        let input = e.target.name.value;
        let filteredData = data.filter(data => data.Category.toLowerCase() === input.toLowerCase())

        setData(filteredData);
    }
    return (
        <div>
            <div>
                <div className="hero min-h-[400px]" style={{ backgroundImage: 'url("/Rectangle 4287.png")' }}>
                    <div className="hero-overlay bg-white bg-opacity-95"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="flex justify-center items-center">
                            <div className="space-y-5">
                                <h1 className="text-black font-bold text-3xl">I Grow By Helping People In Need</h1>
                                <form onSubmit={handleSubmit}>
                                    <input className="w-64 p-2 text-black border-solid border-2" type="text" name="name" placeholder="Search here..." />
                                    <button className="bg-red-500 text-white px-3 py-2 rounded-r-md" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10">
                {
                    data?.map(singleCard => <ShowCard key={singleCard.id} singleCard={singleCard}></ShowCard>)
                }
            </div>
        </div>
    );
};

export default Home;