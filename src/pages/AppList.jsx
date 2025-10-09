import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { lazy, Suspense } from "react";
// import Card from "../components/Card";
const Card = lazy(() => import("../components/Card"));


function AppList() {

    const info = useLoaderData()
    const [appData, setAppData] = useState([]);
    const [searchText, setSearchText] = useState('');


    useEffect(function(){
       if (searchText.trim() === ''){
        setAppData(info)
       }else {
        const filteredApp = info.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()))
        setAppData(filteredApp)
       }
    },[info, searchText])

    return(
        <div className="bg-base-100 py-[100px]">
            <div className="w-10/12 mx-auto">
                <h3 className="inter-bold text-5xl text-[#001931] text-center">Our All Applications</h3>
                <p className="inter-regular text-xl text-[#627382] text-center p-5">Explore All Apps on the Market developed by us. We code for Millions</p>

                <div className="flex items-center justify-between pt-10">
                    <div>
                        <p className="inter-semi text-2xl text-[#001931]">({appData.length}) Apps Found</p>
                    </div>

                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                                >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>

                            <input type="search" required placeholder="Search Apps" value={searchText} onChange={e => setSearchText(e.target.value)} />
                        </label>
                    </div>
                </div>

                <Suspense fallback={<div className="flex justify-center items-center w-full min-h-[300px]"><span className="loading loading-infinity loading-xl"></span></div>}>
                <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-4 gap-5 mt-[50px]">
                    {
                        appData.length > 0 ? appData.map(app => <Card data={app} key={app.id}></Card>)
                        : <p className="inter-bold text-4xl text-gray-300">No App Found !!</p>
                    }
                </div>
                </Suspense>


            </div>
        </div>
    )
}

export default AppList;