import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


function RatingChart({props}) {

    return (
        <div style={{ width: '100%', height: 400 }}> {/* parent container controls size */}
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={props} layout="vertical" margin={{ top: 50, right: 10, left: 10, bottom: 50 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="count" type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="count" fill="#FF8811" barSize={20} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RatingChart;