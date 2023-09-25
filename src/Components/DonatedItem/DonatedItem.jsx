import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const DonatedItem = ({ item }) => {
    let { Picture, Price, Category_bg, Title, id, Category, Card_bg, Text_Color } = item;
    return (
        <div>
            <div className="card card-side flex" style={{ backgroundColor: Card_bg }}>
                <figure><img className='flex-1' src={Picture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title inline w-fit px-2 rounded-md" style={{ backgroundColor: Category_bg, color: Text_Color }}>{Category}</h2>
                    <h2 className="card-title">{Title}</h2>
                    <p className="text-lg font-medium" style={{ color: Text_Color }}>{Price}</p>
                    <div className="card-actions">
                        <Link to={`/category/${id}`}>
                            <button className="px-3 py-2 text-white rounded-md" style={{backgroundColor:Text_Color}}>View Details</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};
DonatedItem.propTypes = {
    item: PropTypes.object,
}
export default DonatedItem;