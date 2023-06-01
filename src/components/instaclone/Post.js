import React from "react"
import '../css/Post.css'


export default function Post(props){

    const {item} = props;

    return<div className="post-container">
        <section className="header-section">
            <span className="more-icon">&#8226;&#8226;&#8226;</span>
            <h1>{item.name}</h1>
            <span>{item.location}</span>
        </section>
        <section className="body-section">
            <img src={`${process.env.REACT_APP_IMAGE_URL}/images/${item.postImage}`} alt="sample"/>
        </section>
        <section className="footer-section">
            <span>{item.date}</span>
            <div className="img-container">
                <img src="https://th.bing.com/th/id/OIP.5drgMTdD77RDxS4iV_djFAHaHc?pid=ImgDet&rs=1" alt="heart"/>
                <img src="https://th.bing.com/th/id/R.4624acd2dfd851ced1c762612bccb438?rik=ukTGsogkRvnFbQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ftelegram-logo-png-telegram-app-icon-png-50-px-1600.png&ehk=NrZ3cHyTUlJimwaDChIl4ylUv1KQcuBfrkqSccZ%2f2Ks%3d&risl=&pid=ImgRaw&r=0" alt="share"/>
            </div>
            <div>{item.likes} likes</div>
            <h4>{item.description}</h4>
        </section>
    </div>
}