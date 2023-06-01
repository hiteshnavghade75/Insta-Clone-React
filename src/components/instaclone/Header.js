import React from "react";
import icon from '../../images/icon.png'
import camera from '../../images/camera.png'
import '../css/Header.css'
import { Link } from "react-router-dom";

export default function Header(){
    return<div>
         <section className="postview-header">
            <img className='postChild' src={icon} alt="icon" />
            <p className='postChild , heading'>InstaClone</p>
            <Link to="/createPost">
                <img className='postChild' src={camera} alt='icon' />
            </Link>
        </section>
    </div>
}