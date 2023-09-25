import Chart from 'react-apexcharts';
const Statistics = () => {
    let totalDonation = 100;
    let yourDonation = 0;
    let item = JSON.parse(localStorage.getItem('donated'))?.length;

    if (item > 0) {
        yourDonation = (item / 12) * 100;
    }

    totalDonation = totalDonation - yourDonation;

    let state = {
        color: ['red', 'blue']
    }
    return (

        <div className='flex justify-center items-center h-3/6 w-9/12 mt-10 mx-auto'>
            <h2 className='w-full md:w-4/6'>
                <Chart
                    type='pie'
                    series={[totalDonation, yourDonation]}
                    color={state.color}
                    options={{
                        labels: ['Total Donation', 'Your Donation']
                    }}
                >
                </Chart>
            </h2>
        </div>
    );
};

export default Statistics;