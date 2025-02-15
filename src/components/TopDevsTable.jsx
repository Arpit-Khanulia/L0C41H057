
const TopDevsTable = () => {
    return (
        <>
            <div className=" border-1 border-gray-600 carousel flex flex-col justify-center items-center p-8 px-10 rounded-box m-4 w-full" >
                <h1 className="mb-5 ">Top Rated Developers</h1>
                <div className="carousel-item ">

                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                            <tr>
                                <th></th>
                                <th>Username</th>
                                <th>Upvotes</th>
                                <th>Profile</th>
                            </tr>
                            </thead>
                            <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>cristiano</td>
                                <td>920</td>
                                <td>link</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>bale</td>
                                <td>430</td>
                                <td>link</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>banzema</td>
                                <td>350</td>
                                <td>link</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
      )
}

export default TopDevsTable


