import { useState } from "react";

function ProfileReport() {
  return (
    <div className="w-full h-screen flex flex-col justify-between items-center gap-[10px] relative">
      <div className="w-full h-[100px] flex justify-between items-end px-[40px]">
        <a href="/#/profile" className="w-[40px] flex justify-center items-center">
          <i className="fa-solid fa-angle-left text-[20px] text-black "></i>
        </a>
        <div className="text-[16px] font-semibold">Report a Problem</div>
        <div className="w-[40px] text-[16px] font-semibold flex justify-center items-center">
          Send
        </div>
      </div>
      <div className="w-full h-[45px] mb-[50px] px-[40px] ">
        <textarea className="text-[14px] text-[#9CA3AF] w-full h-full rounded-[30px] border-2 border-black/30  bg-[#F6F7F9] px-[20px]" placeholder="Explain what happened or what’s not working."></textarea>
      </div>
    </div>
  );
}

export default ProfileReport;
