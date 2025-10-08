import { Link } from 'react-router';
import Card from './Card'

function AppBox({info}) {

    return (
        <div className="w-10/12 mx-auto py-[100px]">

            <h2 className='text-center inter-bold text-4xl text-[#001931]'>Trending Apps</h2>
            <p className='text-center inter-regular text-xl text-[#627382] p-5'>Explore All Trending Apps on the Market developed by us</p>

            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-4 gap-5">
            {
                info.slice(0,8).map(app => <Card data={app} key={app.id}></Card>)
            }
            </div>

            <div className='text-center'>
                <Link to='/list' className='btn mt-12 magic-color text-white'>Show All</Link>
            </div>
        </div>
    )
}

export default AppBox;