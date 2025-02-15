const SnippetTable = () => {
  return (
    <>
        <div className="overflow-x-auto w-full md:w-9/10">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Title</th>
                <th>Rating</th>
                <th>Difficulty</th>
                <th>Status</th>
                <th>By</th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            <tr>
                <th>1</th>
                <td>Pagination (server side)</td>
                <td>5</td>
                <td>Blue</td>
                <td>Done</td>
                <td>Cristiano</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
                <th>2</th>
                <td>Optimize Debouncing</td>
                <td>4.3</td>
                <td>Purple</td>
                <td>Done</td>
                <td>Dybala</td>
            </tr>
            
            </tbody>
        </table>

        <div className=" flex justify-center md:justify-between my-5">
<div className="join hidden md:block">
  <button className="join-item btn">«</button>
  <button className="join-item btn">Page 22</button>
  <button className="join-item btn">»</button>
</div>

<div className="join">
  <button className="join-item btn">1</button>
  <button className="join-item btn">2</button>
  <button className="join-item btn btn-disabled">...</button>
  <button className="join-item btn">99</button>
  <button className="join-item btn">100</button>
</div>
        </div>
        </div>
    
    </>
  )
}

export default SnippetTable