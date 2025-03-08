import { useNavigate } from "react-router-dom";
function HelpPage1() {

    const navigate = useNavigate();

    return(
        <div className="flex-col w-full items-center h-screen p-8 mt-4">
            <div className="flex items-center mb-8">

                <button className="p-2" onClick={() => navigate(-1)}>
                    <img src="backButton.svg" alt="backButton" className="w-8 hover:opacity-[70%] cursor-pointer" />
                </button>

                <div className="text-2xl font-bold font-[Inter] ml-4">
                How This App Work
                </div>

            </div>

            <div className="flex flex-col items-center w-full">
                <div className="flex-col items-start m-4 text-[14px] font-[Inter]">
                    <p>
                        This app is for those who want to borrow items or need something in time<br/>
                        , also for those who have items to share and want to give them hands. Our system <br/>
                        is well builded, fast, reliable and easy to use for every deals you make. <br/>
                    </p>

                    <p>
                        <br/>Let's take a look closer to our app. From the start of the deal, if you are a borrower, <br/>
                        you are free to choose what you want by searching and filtering items. Then make a deal by define <br/>
                        which date and time you need to borrow and return it, NOTE that you need to strict to every deal <br/>
                        you make. Read description carefully how the lender would offer in price and where the appointment is. <br/>
                        If you have troubles from any deal besides our service, we would not compensate for damages. <br/>
                        But if you have any trouble about our service, you can <a onClick={() => navigate("/Report")} className="text-blue-500 hover:text-blue-400 cursor-pointer">Report Problems</a> here <br/>

                    </p>

                    <p>
                        <br/>In other hands, lender need to fill up deal's details completely and carefully. You have to <br/>
                        consider what and when the borrower want. Again, NOTE that you need to strict to every deal <br/>
                        you make. Consider the deal carefully, who you want to lend your items to them. <br/>
                        If you have troubles from any deal besides our service, we would not compensate for damages. <br/>
                        But if you have any trouble about our service, you can <a onClick={() => navigate("/Report")} className="text-blue-500 hover:text-blue-400 cursor-pointer">Report Problems</a> here <br/>
                    </p>

                    <p>
                        <br/>Thank you for your interests and trust our service <br/>
                    </p>

                    <p>
                        <br/>แอปนี้เหมาะสำหรับผู้ที่ต้องการยืมสิ่งของหรือต้องการบางอย่างอย่างทันท่วงที <br/>
                        รวมไปถึงผู้ที่มีสิ่งของที่ต้องการแบ่งปันและต้องการช่วยเหลือพวกเขา ระบบของเรา <br/>
                        ได้รับการออกแบบมาอย่างดี รวดเร็ว เชื่อถือได้ และใช้งานง่ายสำหรับทุกข้อตกลงที่คุณทำ <br/>
                    </p>

                    <p>
                        <br/>มาดูแอปของเราให้ละเอียดขึ้น ตั้งแต่เริ่มต้นการทำข้อตกลง หากคุณเป็นผู้กู้ <br/>
                        คุณสามารถเลือกสิ่งที่คุณต้องการได้โดยค้นหาและกรองรายการ จากนั้นทำข้อตกลงโดยกำหนด <br/>
                        วันที่และเวลาที่คุณต้องการยืมและส่งคืน โปรดทราบว่าคุณต้องเคร่งครัดกับทุกข้อตกลง <br/>
                        ที่คุณทำ อ่านรายละเอียดอย่างละเอียดว่าผู้ให้กู้เสนอราคาอย่างไรและนัดหมายที่ไหน <br/>
                        หากคุณประสบปัญหาในการทำข้อตกลงใดๆ นอกเหนือจากบริการของเรา เราจะไม่ชดเชยความเสียหาย <br/>
                        แต่หากคุณประสบปัญหาใดๆ เกี่ยวกับบริการของเรา คุณสามารถ <a onClick={() => navigate("/Report")} className="text-blue-500 hover:text-blue-400 cursor-pointer">รายงานปัญหา</a> ได้ที่นี่ <br/> 
                    </p>

                    <p>
                        <br/>ในทางกลับกัน ผู้ให้กู้ต้องกรอกรายละเอียดของข้อตกลงให้ครบถ้วนและรอบคอบ คุณต้อง <br/>
                        พิจารณาว่าผู้กู้ต้องการอะไรและเมื่อใด อีกครั้ง โปรดทราบว่าคุณต้องเคร่งครัดกับทุกข้อตกลง <br/>
                        ที่คุณทำ พิจารณาข้อตกลงอย่างรอบคอบว่าคุณต้องการให้ใครยืมสิ่งของของคุณให้พวกเขา <br/>
                        หากคุณประสบปัญหาจากข้อตกลงใดๆ นอกเหนือจากบริการของเรา เราจะไม่ชดเชยความเสียหาย <br/>
                        แต่หากคุณประสบปัญหาใดๆ เกี่ยวกับบริการของเรา คุณสามารถ <a onClick={() => navigate("/Report")} className="text-blue-500 hover:text-blue-400 cursor-pointer">รายงานปัญหา</a> ได้ที่นี่ <br/> 

                    </p>

                    <p>
                        <br/>ขอบคุณสำหรับความสนใจของคุณและไว้ใจในบริการของเรา <br/>
                    </p>

                </div>
                        
            </div>
        </div>
    )

}

export default HelpPage1;