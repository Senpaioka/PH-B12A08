import errApp from '../assets/App-Error.png'
import { Link } from 'react-router';

function App404(){

    return(
       <div className='w-10/12 mx-auto'>
            <div className='py-20'>
                <img src={errApp} alt="page not found" className='mx-auto bg-contain'/>
            </div>
            <div className='text-center pb-20'>
                <h3 className='inter-semi text-5xl text-[#001931]'>Oops, App not found!</h3>
                <p className='inter-regular text-base text-[#627382] p-3'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link to="/" className='btn magic-color text-white'>Go Back!</Link>
            </div>
    </div>
    )
}

export default App404;