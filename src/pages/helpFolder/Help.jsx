import { useNavigate } from "react-router-dom";

function Help() {

    const navigate = useNavigate();

    return(
        <div className="flex-col w-full items-center h-screen p-8 mt-4">
            <div className="flex items-center justify-between mb-8">

                <button className="p-2" onClick={() => navigate(-1)}>
                    <img src="backButton.svg" alt="backButton" className="w-8 hover:opacity-[70%] cursor-pointer" />
                </button>

                <div className="text-2xl font-bold font-[Inter]">
                Help
                </div>

                <button className="p-2"  onClick={() => navigate(-1)}>
                    <img src="closeButton.svg" alt="closeButton" className="w-8 hover:opacity-[70%] cursor-pointer" />
                </button>

            </div>

            <div className="flex flex-col items-center w-full gap-4">

                <button 
                    className="p-3 border-none rounded flex items-center justify-between w-[70%] hover:bg-gray-300"
                    onClick={() => navigate("/HelpPage1")}>
                        How This App Work ?

                    <img src="backButton.svg" alt="" className="w-8 scale-x-[-1]" />
                </button>

                {/* <button 
                    className="p-3 border-none rounded flex items-center justify-between w-[70%] hover:bg-gray-300"
                    onClick={() => navigate("/Assurance")}>
                        About Assurance

                    <img src="backButton.svg" alt="" className="w-8 scale-x-[-1]" />
                </button> */}

                <button 
                    className="p-3 border-none rounded flex items-center justify-between w-[70%] hover:bg-gray-300"
                    onClick={() => navigate("/Report")}>
                        Report Problems

                    <img src="backButton.svg" alt="" className="w-8 scale-x-[-1]" />
                </button>

                <button 
                    className="p-3 border-none rounded flex items-center justify-between w-[70%] hover:bg-gray-300"
                    onClick={() => navigate("/Contact")}>
                        Contact

                    <img src="backButton.svg" alt="" className="w-8 scale-x-[-1]" />
                </button>
                    
            </div>
        </div>

    )


}

export default Help;