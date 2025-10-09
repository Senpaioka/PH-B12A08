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

        <li className="list-row flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex-shrink-0 flex justify-center sm:justify-start">
                <img
                className="size-20 rounded-box object-cover"
                src={info.image}
                alt={info.title}
                />
            </div>


            <div className="flex-1 text-center sm:text-left">
                <h3 className="inter-semi text-base text-[#001931]">{info.title}</h3>

                <div className="flex flex-wrap justify-center sm:justify-start gap-5 py-3">
                    <p className="inter-regular text-base text-green-600 flex items-center gap-1">
                        <FiDownload className="text-xl text-green-600" />
                        {`${(info.downloads / 1000000).toFixed(2)} M`}
                    </p>
                    <p className="inter-regular text-base text-yellow-600 flex items-center gap-1">
                        <FaStar className="text-xl text-yellow-600" />
                        {averageRating()}
                    </p>
                    <p className="inter-regular text-base text-[#001931]">{`${info.size} MB`}</p>
                </div>
            </div>


            <div className="flex justify-center sm:justify-end">
                <button className="btn btn-ghost bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600" onClick={() => onDelete(info.id)}>Uninstall</button>
            </div>
        </li>

    )
}

export default ListCard;