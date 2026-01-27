
import videoSrc from "../assets/solar.mp4";

const ScreenVideo = () => {
    return (
        <div className="" style={{position:"absolute", top:0, bottom:"0", width:"100%" }}> 
       
           <video autoPlay={true} loop={true} muted={true} style={{ width: "100%", height: "100%", objectFit: "cover"  }}>
            
                <source src={videoSrc }/>
           </video>
        </div>
    );
};

export default ScreenVideo;