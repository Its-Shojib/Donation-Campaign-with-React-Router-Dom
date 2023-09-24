import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import ShowCard from "../Components/ShowCard/ShowCard";


const Home = () => {
    let cardsData = useLoaderData();
    console.log(cardsData);
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    cardsData?.map(singleCard => <ShowCard key={singleCard.id} singleCard={singleCard}></ShowCard>)
                }
            </div>
        </div>
    );
};

export default Home;