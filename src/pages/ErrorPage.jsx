import Nav from '../components/Nav';
import errImg from '../assets/error-404.png';
import { Link } from 'react-router';


function ErrorPage() {

    return (
        <>
            <Nav></Nav>

            <div className='w-10/12 mx-auto'>
                <div className='py-20'>
                    <img src={errImg} alt="page not found" className='mx-auto bg-contain'/>
                </div>
                <div className='text-center'>
                    <h3 className='inter-semi text-5xl text-[#001931]'>Oops, page not found!</h3>
                    <p className='inter-regular text-base text-[#627382] p-3'>The page you are looking for is not available.</p>
                    <Link to="/" className='btn magic-color text-white'>Go Back!</Link>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;