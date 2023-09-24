import PropTypes from 'prop-types'; 
const ShowCard = ({ singleCard }) => {
    let { Picture, Title, Category, Category_bg, Card_bg, Text_Color } = singleCard;

    return (
        <div>
            <div className={`card card-compact bg-[${Card_bg}] cursor-pointer`} style={{backgroundColor: Card_bg}}>
                <img src={Picture} alt="" />
                <div className="card-body">
                    <h2 className="card-title inline w-fit px-2 rounded-md" style={{backgroundColor: Category_bg, color:Text_Color}}>{Category}</h2>
                    <p className='text-xl font-medium' style={{color:Text_Color}}>{Title}</p>

                </div>
            </div>

        </div>
    );
};
ShowCard.propTypes = {
    singleCard: PropTypes.object,
}
export default ShowCard;