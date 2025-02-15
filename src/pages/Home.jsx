import Carousel from "../components/Carousel";
import SnippetTable from "../components/SnippetTable";
import TopDevsTable from "../components/TopDevsTable";
import TopSnippetsTable from "../components/TopSnippetsTable";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
    <div className="  w-screen m-0 p-0 flex flex-col justify-center items-center" >
      <div className="flex flex-col md:flex-row  w-full md:w-8/10 " >
        <div className=" w-full md:w-75/100 p-0 ">
          <div className="hidden md:flex justify-end items-center md:p-12">
            <Carousel />
          </div>
            
            <div className="p-3 flex flex-col md:flex-row justify-between">

              <div className=" w-full  flex flex-col md:flex-row items-center p-3">
                <select className="select w-full md:w-1/6 my-1 md:mx-2 md:my-0 ">
                  <option disabled selected>Category</option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
                <select className="select w-full md:w-1/6 my-1 md:mx-2 md:my-0 ">
                  <option disabled selected>Rating</option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
                <select className="select w-full md:w-1/6 my-1 md:mx-2 md:my-0  ">
                  <option disabled selected>Difficulty</option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
                <select className="select w-full md:w-1/6 my-1 md:mx-2 md:my-0  ">
                  <option disabled selected>Status</option>
                  <option>Homer</option>
                  <option>Marge</option>
                  <option>Bart</option>
                  <option>Lisa</option>
                  <option>Maggie</option>
                </select>
              </div>
            
              <div className="p-3 w-full md:w-3/10  ">

                <label className=" w-full input input-bordered ">
                  <input type="text" className="grow" placeholder="Search" />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70">
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd" />
                  </svg>
                </label>
              </div>


            </div>
            <div className="divider m-0 p-0"></div>

          <div className=" flex justify-end  p-9 ">
            <SnippetTable />
          </div>
        </div>

        <div className="divider lg:divider-horizontal m-0 p-0" ></div>


        <div className=" w-full md:w-25/100 flex flex-col items-center justify-start p-7">
          <TopDevsTable />
          <TopSnippetsTable />
        </div>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default Home;
