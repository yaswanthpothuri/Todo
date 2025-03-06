import './ToggleSwitch.css'
import {useState} from 'react';
import { IoIosSwitch } from "react-icons/io";
const ToggleSwitch=()=>{
    const [isOn , isOnSet]=useState(false);
    const handleSwitch=()=>{
        isOnSet(!isOn);

    }
    return(
        <div className="con">
            <h1>Toggle Switch <IoIosSwitch style={{color:isOn?"#4caf50":"#f44336"}} /></h1>
        <div className="toggle-switch" onClick={handleSwitch} style={{
            backgroundColor: isOn?"#4caf50":"#f44336"
        }}>
            <div className={`switch ${isOn?"On":"Off"}`}>
                <span className="Text">
                    {isOn?"On":"Off"}

                </span>
                </div>
        </div>
        </div>
    );
}
export default ToggleSwitch;