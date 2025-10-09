import { Link } from 'react-router';
import { Suspense, lazy } from 'react';
const Card = lazy(() => import("./Card"));

function AppBox({info}) {

    return (
        <div className="w-10/12 mx-auto py-[100px]">

            <h2 className='text-center inter-bold text-4xl text-[#001931]'>Trending Apps</h2>
            <p className='text-center inter-regular text-xl text-[#627382] p-10'>Explore All Trending Apps on the Market developed by us</p>

            
            <Suspense fallback={<div className="flex justify-center items-center w-full min-h-[300px]"><span className="loading loading-infinity loading-xl"></span></div>}>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-4 gap-5">
            {
                info.slice(0,8).map(app => <Card data={app} key={app.id}></Card>)
            }
            </div>
            </Suspense>

            <div className='text-center'>
                <Link to='/list' className='btn mt-12 magic-color text-white'>Show All</Link>
            </div>
        </div>
    )
}

export default AppBox;

