
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[400px]" style={{ backgroundImage: 'url("/Rectangle 4287.png")' }}>
                <div className="hero-overlay bg-white bg-opacity-95"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex justify-center items-center">
                        <div className="space-y-5">
                            <h1 className="text-black font-bold text-3xl">I Grow By Helping People In Need</h1>
                            <input className="w-64 p-2 border-solid border-2" type="text" name="" id="" placeholder="Search here..."/>
                            <button className="bg-red-500 text-white px-3 py-2 rounded-r-md">Search</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;