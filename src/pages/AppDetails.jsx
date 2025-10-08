import { useParams, useLoaderData } from "react-router";
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import RatingChart from '../components/RatingChart'
import {addToStorage, getStorageData} from '../utilities/Storage'
import { useState, useEffect } from "react";


function AppDetails(){

    const apps = useLoaderData();
    const {id} = useParams();
    const appId = parseInt(id);
    const appInfo = apps.find(app => app.id === appId);

    function averageRating() {
        const totalRatings = appInfo.ratings.reduce((sum, item) => sum + item.count, 0);
        const weightedSum = appInfo.ratings.reduce((sum, item, index) => sum + (index + 1) * item.count, 0);
        const averageRating = (weightedSum / totalRatings).toFixed(1);
        return averageRating;
    }



    function handleAddStorage() {
        addToStorage(appId)
        setIsExists(true)
    }


    const [isExists, setIsExists] = useState(false);
    useEffect(() => {
    const installed = getStorageData(); 
    const exists = installed.includes(appId);
    exists && setIsExists(true)
    }, [appId]);



    return (
        <div className="bg-base-100 py-[50px]">
            <div className="w-10/12 mx-auto">
                {/* app info section  */}
                <div className="grid md:grid-cols-4 gap-12 py-5">
                    <div className="col-span-1">
                        <img src={appInfo.image} alt={appInfo.title} className="w-full h-auto" />
                    </div>

                    <div className="col-span-3">
                        <h3 className="inter-bold text-3xl text-[#001931]">{appInfo.title}</h3>
                        <p className="inter-regular text-xl text-[#627382] py-5">Developed By <span className="inter-semi text-xl text-[#632EE3]">{appInfo.companyName}</span></p>
                        <span className="block w-full h-[2px] bg-gray-300"></span>
        
                        <div className="flex gap-16 py-5 flex-wrap">
                            <div>
                                <FiDownload className="text-4xl text-green-600" /> 
                                <p className="inter-regular text-base text-[#001931] py-3">Downloads</p>
                                <p className="inter-extra text-4xl text-[#001931]">{`${(appInfo.downloads/1000000).toFixed(2)} M`}</p>
                            </div>

                            <div>
                                <FaStar className="text-4xl text-yellow-600"/>
                                <p className="inter-regular text-base text-[#001931] py-3">Average Ratings</p>
                                <p className="inter-extra text-4xl text-[#001931]">{averageRating()}</p>
                            </div>

                            <div>
                                <AiFillLike className="text-4xl text-[#632EE3]" />
                                <p className="inter-regular text-base text-[#001931] py-3">Total Reviews</p>
                                <p className="inter-extra text-4xl text-[#001931]">{`${(appInfo.reviews/1000).toFixed(2)} K`}</p>
                            </div>
                        </div>

                        <button className="btn bg-green-500 text-white" onClick={handleAddStorage}>{isExists ? 'Installed' : `Install Now (${appInfo.size}MB)`}</button>
                    </div>
                </div>

                {/* graph section  */}
                <span className="block w-full h-[2px] bg-gray-300"></span>

                <div className="pt-5">
                    <h3 className="inter-semi text-xl text-[#001931]">Ratings</h3>
                    <RatingChart props={appInfo.ratings}></RatingChart>
                </div>

                <span className="block w-full h-[2px] bg-gray-300"></span>

                {/* description section  */}

                <div className="py-5">
                    <h3 className="inter-semi text-2xl text-[#001931] py-5">Description</h3>
                    <p className="inter-regular text-base text-[#627382]">{appInfo.description}</p>
                </div>
            </div>
        </div>
    )
}

export default AppDetails;