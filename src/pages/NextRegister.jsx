import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NextRegister() {
    const [studentId, setStudentId] = useState('');
    const [fullName, setFullName] = useState('');
    const [faculty, setFaculty] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    
    // const history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

       
        console.log({ studentId, fullName, faculty });

       
        setIsSuccess(true);

        
        setTimeout(() => {
            setIsSuccess(false); 
        }, 3000);
    };

    return (
        <div className="flex flex-col items-center h-screen p-4">
            <div className="flex justify-center items-center gap-4">
                <img src="/lendlylogo.svg" alt="Lendly logo" />
                <h1 className="font-[Inter] font-semibold text-4xl sm:text-[38px]">Lendly</h1>
            </div>
            <div className="mt-6 font-[Inter]">กรุณาลงทะเบียน</div>
            <div className="w-full max-w-md p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                {isSuccess && (
                    <div className="mb-4 p-4 bg-green-100 text-green-800 rounded-md text-center">
                        Registration Successful!
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="studentId" className="block text-sm font-medium text-gray-700">
                            Student ID
                        </label>
                        <input
                            type="text"
                            id="studentId"
                            className="mt-2 block w-full px-4 py-2 border  rounded-md focus:ring-2 focus:ring-blue-500"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            className="mt-2 block w-full px-4 py-2 border  rounded-md focus:ring-2 focus:ring-blue-500"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="faculty" className="block text-sm font-medium text-gray-700">
                            Faculty
                        </label>
                        <select
                            id="faculty"
                            className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            value={faculty}
                            onChange={(e) => setFaculty(e.target.value)}
                            required
                        >{/* ใส่ให้แหน่คับ */}
                            <option value="" disabled>Select your faculty</option>
                            <option value="Architecture">Architecture, Art and Design</option>
                            <option value="AgriTech">Agricultural and Technology</option>
                            <option value="Business">Business</option>
                            <option value="Dentistry">Dentistry</option>
                            <option value="Engineering">Engineering</option>
                            <option value="FoodIndus">Food Industry</option>
                            <option value="InformTech">Information Technology</option>
                            <option value="IndusEdu">Industrial Education and Technology</option>
                            <option value="IntInnTech">Integrated Innovative Technology</option>
                            <option value="LibArt">Liberal Arts</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Nursing">Nursing</option>
                            <option value="Science">Science</option>

                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                        Register
                    </button>

                </form>

                {/* <button
                        onClick={() => history(-1)}
                        className="w-full p-4 mt-4 bg-gray-300 text-gray-700 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                    >
                        Back
                    </button> */}
            </div>
        </div>
    );
}

export default NextRegister;
