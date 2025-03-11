import { useState } from "react";
import Navbar from "../../components/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/UserSlice";

function Profile() {
  const [isLogout, setIsLogout] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <main className="flex justify-center">
      <div className="w-full lg:w-1/4 h-screen flex flex-col items-center gap-[10px] relative justify-center">
        {/* Content Container */}
        <div className="flex-grow flex flex-col items-center w-full">
          <div className="w-full h-[100px] flex justify-center items-end">
            <h1 className="text-[14px] font-bold">My Profile</h1>
          </div>
          <div className="w-[150px] h-[150px] relative">
            <div className="absolute w-[44px] h-[44px] bg-[#1769ff] rounded-full flex justify-center items-center bottom-0 right-0 border-2 border-[#5194ff] ">
              <i className="fa-solid fa-pen text-[#ffffff]"></i>
            </div>
            <div className="aspect-square rounded-full truncate border-2 border-[#5194ff] ">
              <img
                src="/cat.jpg"
                alt="profile pic"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
          <div className="w-[213px] h-[34px] flex justify-center flex-col items-center">
            <h1 className="text-[20px]">Meow Meow</h1>
            <p className="text-[8px]">meow@gmail.com</p>
          </div>
          {/* menu bar */}
          <div className="flex flex-col w-full px-[40px]">
            {/* Edit profile */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-regular fa-pen-to-square text-[30px] text-[#5194FF]"></i>
                <p className="text-[14px]">Edit Profile</p>
              </div>
              <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
            </div>

            {/* Member ship */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-solid fa-circle-user text-[30px] text-[#5194FF]"></i>
                <p className="text-[14px]">Member ship</p>
              </div>
              <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
            </div>

            {/* Notifications */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-regular fa-bell text-[30px] text-[#5194FF]"></i>
                <p className="text-[14px]">Notifications</p>
              </div>
              <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
            </div>

            {/* Help */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-regular fa-circle-question text-[30px] text-[#5194FF]"></i>
                <p className="text-[14px]">Help</p>
              </div>
              <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
            </div>

            {/* Report a problem */}
            <a
              href="/#/profilereport"
              className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]"
            >
              <div className="flex justify-center items-center gap-[13px]">
                <i className="fa-solid fa-triangle-exclamation text-[30px] text-[#5194FF]"></i>
                <p className="text-[14px]">Report a problem</p>
              </div>

              <i className="fa-solid fa-angle-right text-[30px] text-[#9CA3AF]"></i>
            </a>

            {/* Logout */}
            <div className="flex justify-between border-b-2 py-[16px] border-[#9CA3AF]">
              <div
                className="flex justify-center items-center gap-[13px]"
                onClick={() => {
                  setIsLogout(true);
                }}
              >
                <i className="fa-solid fa-arrow-right-from-bracket text-[30px] text-[#DC2626] cursor-pointer "></i>
                <button className="text-[14px] cursor-pointer ">Logout</button>
              </div>
            </div>
          </div>

          {isLogout && (
            <div className="w-full h-full absolute bg-black/30 z-60">
              <div className="w-[327px] h-[132px] bottom-1/4 right-1/2 translate-x-1/2 flex flex-col justify-evenly bg-[#ffffff] rounded-[20px] absolute">
                <div className="flex justify-center text-[16px] ">
                  Are you sure to Logout?
                </div>
                <div className="flex justify-center  gap-2 px-2">
                  <button
                    className="w-[142px] h-[38px] bg-[#D9D9D9]  rounded-[20px] text-[16px] text-[#5194FF] cursor-pointer"
                    onClick={handleLogout}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => {
                      setIsLogout(false);
                    }}
                    className="w-[142px] h-[38px] bg-[#D9D9D9]  rounded-[20px] text-[16px] text-[#DC2626] cursor-pointer"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <Navbar />
      </div>
    </main>
  );
}
export default Profile;
