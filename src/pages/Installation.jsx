import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import { getStorageData, removeSavedData } from "../utilities/Storage";
import ListCard from "../components/ListCard";



function Installation() {
    
    const data = useLoaderData();
    // track storage 
    const [installedList, setInstalledList] = useState([]);

    useEffect(function(){
        const installedApp = getStorageData();
        setInstalledList(installedApp)
    },[])

    // storage to data tracking
    const [appData, setAppData] = useState([])
    useEffect(function(){
        const app = data.filter(item => installedList.includes(item.id))
        setAppData(app)
    },[data, installedList])


    // sorted functionality 
    const [sortBy, setSortBy] = useState('');

    function handleSortFunctionality(event){
        const picked = event.target.value;
        setSortBy(picked);

        if (picked === 'size'){
            const sized = [...appData].sort((a, b) => a.size - b.size);
            setAppData(sized);
        }
        if (picked === 'downloads'){
            const downloaded = [...appData].sort((a, b) => b.downloads - a.downloads);
            setAppData(downloaded);
        }
    }


    // delete functionality
    function handleDelete(id){
        const updated = removeSavedData(id);
        setInstalledList(updated);
    }

    return(
        <div className="bg-base-100 py-[100px]">
            <div className="w-10/12 mx-auto">
                <h3 className="inter-bold text-5xl text-[#001931] text-center">Your Installed Apps</h3>
                <p className="inter-regular text-base text-[#627382] text-center py-5">Explore All Trending Apps on the Market developed by us</p>

                <div className="flex justify-between items-center py-5">
                    <div>
                        <p className="inter-semi text-xl text-[#001931]">{appData.length} Apps Found</p>
                    </div>

                    <div>
                        <div className="w-48">
                        <select className="select border-none w-full bg-base-100 rounded-box shadow-sm text-sm" value={sortBy} onChange={handleSortFunctionality}>
                            <option value="" disabled>Sort By</option>
                            <option value="size">Sort By Size</option>
                            <option value="rating">Sort By Ratings</option>
                            <option value="downloads">Sort By Downloads</option>
                        </select>
                        </div>

                    </div>
                </div>





                <div>
                    <ul className="list bg-base-100 rounded-box shadow-md">
                        
                     {/* {
                        appInstalled.length > 0 ? appInstalled.map(app => <ListCard info={app} key={app.id} onDelete={handleDelete}></ListCard>)
                        : <p className="inter-bold text-2xl text-gray-400">Nothing Installed Yet.</p>
                     } */}


                     {/* {
                        installedList.length > 0 ? installedList.map(app => <ListCard info={app} key={app.id} onDelete={handleDelete}></ListCard>)
                        : <p className="inter-bold text-2xl text-gray-400">Nothing Installed Yet.</p>
                     } */}

                     {
                        appData.length > 0 ? appData.map(app => <ListCard info={app} key={app.id} onDelete={handleDelete}></ListCard>)
                        : <p className="inter-bold text-2xl text-gray-400">Nothing Installed Yet.</p>
                     }

                    </ul>
                </div>








            </div>
        </div>
    )
}

export default Installation;