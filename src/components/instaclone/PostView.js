import React, { useEffect, useState } from "react";
import Post from './Post'
import Header from "./Header";
// const data = require('../../db/data.json')

export default function PostView(){

    const [posts,setPosts]=useState([]);

    useEffect(()=>{
    fetch(`${process.env.REACT_APP_IMAGE_URL}/posts`)
    .then(res=>res.json())
    .then(data=>{
      setPosts(data)
    })
  },[])
    return<div>
       <section>
        <Header/>
       </section>
        <section className="postview-body">
            {posts.map((item,_id) => {
                return<Post item={item} key={_id} />
            })}
        </section>
    </div>
}
