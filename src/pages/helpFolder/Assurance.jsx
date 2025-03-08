import { useNavigate } from "react-router-dom";

function Assurance() {

    const navigate = useNavigate();

    return(
        <div className="flex-col w-full items-center h-screen p-8 mt-4">
            <div className="flex items-center mb-8">

                <button className="p-2" onClick={() => navigate(-1)}>
                    <img src="backButton.svg" alt="backButton" className="w-8" />
                </button>

                <div className="text-2xl font-bold font-[Inter] ml-4">
                About Assurance
                </div>

            </div>

            <div className="flex flex-col items-center w-full">
                <p className="pl-20">
                    This App is for Those Who want to Borrow Something or need Something in time
                </p>

                <p>
                    , also for Those Who have Something to Share and wants to Give Them Hands. Our System <br/>
                    is Well Builded for Lending and Borrowing in Every Catalog 
                    
                </p>
                    
            </div>
        </div>
    )

}

export default Assurance;