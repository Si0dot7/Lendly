import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Report() {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    faculty: "",
    detail: ""
    
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (value.confirmPassword !== value.password) {
//       alert("Passwords do not match!");
//     } else {
//       try {
//         const register = await axios.post(
//           import.meta.env.VITE_API_URI + "/register", /*ใส่ที่เก็บ report ให้หน่อยค้าบบ*/
//           value
//         );
//         alert(register.data);
//         navigate("/login");
//       } catch (error) {
//         console.log("register error: " + error);
//       }
//     }
//   };

  return (
    <div className="flex-col w-full items-center h-screen p-8 mt-4 font-[Inter]">
      <div className="flex items-center mb-8">
        <button className="p-2" onClick={() => navigate(-1)}>
          <img src="backButton.svg" alt="backButton" className="w-8 hover:opacity-[70%] cursor-pointer" />
        </button>

        <div className="text-2xl font-bold ml-4">
          Report Problems
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col items-center m-4">
          <p className="text-2xl pb-2">
            What kind of trouble are you encountering ? <br />
          </p>

          <p className="pb-2">
            คุณกำลังพบเจอปัญหาแบบไหนอยู่ ? <br />
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="faculty"
              className="block text-sm font-medium text-gray-700"
            >
              Types of report
            </label>
            <select
              id="faculty"
              className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
              name="faculty"
            >
              {/* ใส่ให้แหน่คับ */}
              <option value="" disabled>
                Select your report
              </option>
              <option value="RLogRe">Can't login or register</option>
              <option value="RPost">Can't post a deal for lending </option>
              <option value="RResp">App is not responding</option>
              <option value="RFeed">Feed is unable to use</option>
              <option value="RCheat">Tricky or cheating deal</option>
              <option value="RInappro">Inappropriate post or deal</option>
              <option value="ROther">Other</option>
              
            </select>
          </div>

          <div>
          <label
            htmlFor="detail"
            className="block text-sm font-medium font-[Inter] text-gray-700 py-1"
          >
            More detail
          </label>
          <div className="relative">
            <textarea
              className="p-4 block w-full pt-2 pb-20 border rounded-md focus:ring-2 focus:ring-blue-500 input-box"
              type="text"
              id="detail"
              placeholder="..."
              required
              name="detail"
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
        >
          Submit
        </button>

        </form>
      </div>
    </div>
  );
}

export default Report;
