import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";


function ListCard({info, onDelete}) {

     function averageRating() {
        const totalRatings = info.ratings.reduce((sum, item) => sum + item.count, 0);
        const weightedSum = info.ratings.reduce((sum, item, index) => sum + (index + 1) * item.count, 0);
        const averageRating = (weightedSum / totalRatings).toFixed(1);
        return averageRating;
    }

    return(
        
        <li className="list-row">
            <div><img className="size-20 rounded-box" src={info.image}/></div>
            <div>
                <h3 className="inter-semi text-base text-[#001931]">{info.title}</h3>
                <div className="flex gap-5 py-3">
                    <p className="inter-regular text-base text-green-600 flex"><FiDownload className="text-xl text-green-600" />{`${(info.downloads/1000000).toFixed(2)} M`}</p>
                    <p className="inter-regular text-base text-yellow-600 flex"><FaStar className="text-xl text-yellow-600"/>{averageRating()}</p>
                    <p className="inter-regular text-base text-[#001931]">{`${info.size} MB`}</p>
                </div>   
            </div>

            <button className="btn btn-ghost bg-green-500 text-white" onClick={() => onDelete(info.id)}>Uninstall</button>
        </li>
    )
}

export default ListCard;