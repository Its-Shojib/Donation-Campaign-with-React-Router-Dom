
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div>
                <h2 className='text-2xl font-bold pb-5'>404! Page not found</h2>
                <Link to='/'>
                    <button className='block mx-auto'>Go to Home</button>
                </Link>
            </div>

        </div>
    );
};

export default ErrorPage;