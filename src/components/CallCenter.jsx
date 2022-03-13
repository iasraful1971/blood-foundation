import call from "../images/call.png";
const CallCenter = () => {
    return (
        <div className='margin-container call-container '>
        
            <div className="call-center-container">
               
                <div className="box">
                    <img src={call} alt="" />
                    <p>হটলাইন</p>
                 </div>
                <div className="box">
                    <a href="tel:০৯৬৬৬৭৭৭২২২" target="_blank" rel="opener noreferrer">০৯৬৬৬৭৭৭২২২</a>
                    <p>আইইডিসিআর</p>
                </div>
                <div className="box">
                    <a href="tel:০৯৬৬৬৭৭৭২২২" target="_blank" rel="opener noreferrer">০৯৬৬৬৭৭৭২২২</a>
                    <p>আইইডিসিআর</p>
                </div>
                <div className="box">
                    <a href="tel:০৯৬৬৬৭৭৭২২২" target="_blank" rel="opener noreferrer">০৯৬৬৬৭৭৭২২২</a>
                    <p>আইইডিসিআর</p>
                </div>
                <div className="box">
                    <a href="tel:০৯৬৬৬৭৭৭২২২" target="_blank" rel="opener noreferrer">০৯৬৬৬৭৭৭২২২</a>
                    <p>আইইডিসিআর</p>
                </div>
              
                
                <div className="box">
                    <img src={call} alt="" />
                    <p>সকল কল </p>
                 </div>
            </div>
        </div>
    );
};

export default CallCenter;