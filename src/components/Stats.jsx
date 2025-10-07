function Stats() {

    return (
        <div className="magic-color py-[100px]">
            <div className="w-10/12 mx-auto text-center">
                <h2 className="inter-bold text-5xl text-white">Trusted by Millions, Built for You</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-[50px]">
                    <div>
                        <p className="inter-regular text-base text-white">Total Downloads</p>
                        <h3 className="inter-extra text-6xl text-white p-5">29.6M</h3>
                        <p className="inter-regular text-base text-white">21% more than last month</p>
                    </div>

                    <div>
                        <p className="inter-regular text-base text-white">Total Reviews</p>
                        <h3 className="inter-extra text-6xl text-white p-5">906K</h3>
                        <p className="inter-regular text-base text-white">46% more than last month</p>
                    </div>

                    <div>
                        <p className="inter-regular text-base text-white">Active Apps</p>
                        <h3 className="inter-extra text-6xl text-white p-5">132+</h3>
                        <p className="inter-regular text-base text-white">31 more will Launch</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stats;