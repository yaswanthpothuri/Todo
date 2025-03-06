import './ToggleSwitch.css'
import {useState} from 'react';
import { IoIosSwitch } from "react-icons/io";
const ToggleSwitch=({isOn,handleSwitch})=>{
    return(
        <div className="con">
        <div className="toggle-switch" onClick={handleSwitch} style={{
            backgroundColor: isOn?"white":"black"
        }}>
            <div className={`switch ${isOn?"On":"Off"}`}>
                </div>
        </div>
        </div>
    );
}
export default ToggleSwitch;