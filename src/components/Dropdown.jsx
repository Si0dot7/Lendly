
import React, {useState} from "react";

function Dropdown({selected, setSelected}) {

    const [dropdown, setDropDown] = useState(false)
    const Options = ['Engineer', 'Science', 'Architecture']
    
    return(
        <div className="dropdown relative"> 
        <label htmlFor="Faculty" className="block text-sm font-medium font-[Inter] text-gray-700 py-1">Faculty</label>
            <div className="dropdown-Btn border p-2 pl-3 w-full rounded-lg 
            items-center justify-between cursor-pointer"
            onClick={(e) => setDropDown(!dropdown)}> 

            {selected} 

            </div>

            {/* {dropdown && (
            <div className="dropdown-content absolute p-2 pl-3 w-full rounded-lg bg-white 
             shadow-xl font-semibold text-gray-700">

                {Options.map((option) => (
                    <div className="dropdown-items p-3 cursor-pointer hover:bg-blue-500 transition-all"
                    onClick={e => {
                        setSelected(option)
                        setDropDown(false)
                    }}>

                        {option}

                    </div>
                ))} 

            </div>
            )} */}

        </div>

    );
}

export default Dropdown;