import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

function Card({data}) {

    function averageRating() {
        const totalRatings = data.ratings.reduce((sum, item) => sum + item.count, 0);
        const weightedSum = data.ratings.reduce((sum, item, index) => sum + (index + 1) * item.count, 0);
        const averageRating = (weightedSum / totalRatings).toFixed(1);
        return averageRating;
    }

    return(
        <div className="card bg-base-100 w-72 shadow-sm">
            <figure>
                <img
                src={data.image}
                alt={data.title} />
            </figure>

            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <div className="flex justify-between">
                    <div className="flex items-center gap-1 bg-green-50">
                        <FiDownload className="text-base text-green-600" /> 
                        <p className="inter-regular text-base text-green-600">{`${(data.downloads/1000000).toFixed(2)} M`}</p>
                    </div> 
                    <div className="flex items-center gap-1 bg-amber-100">
                        <FaStar className="text-base text-yellow-600"/>
                        <p className="inter-regular text-base text-yellow-600">{averageRating()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;