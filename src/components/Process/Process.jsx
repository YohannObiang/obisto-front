import React from "react";
import './Process.css';
import video from '../../assets/spot.mp4'

const Process = () => {
    return ( 
        <div className="process">
            <h2 style={{color:'#262D44'}}>Comment ça marche?</h2>
            <div className="video">
                <video width='100%'  controls>
                    <source src={video} type="video/mp4"></source>
                </video>
            </div>
        </div>
     );
}
 
export default Process;