import Chart from 'react-apexcharts';
const Statistics = () => {
    let totalDonation = 100;
    let yourDonation = 0;
    let item = JSON.parse(localStorage.getItem('donated'))?.length;
    console.log(item);
    if(item>0){
        yourDonation = (item / 12) * 100;
    }

    totalDonation = totalDonation - yourDonation;

    let state = {
        color: ['red', 'blue']
      }
    return (

        <div className='flex justify-center items-center h-3/6 w-9/12 mt-10 mx-auto'>
            <Chart
                type='pie'
                width={500}
                heigth={550}
                series={[totalDonation, yourDonation]}
                color={state.color}
                options={{
                    labels: ['Total Donation', 'Your Donation']
                }}
            >
            </Chart>
        </div>
    );
};

export default Statistics;