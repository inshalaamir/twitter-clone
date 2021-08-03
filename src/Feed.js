import React, { useEffect, useState } from 'react'
import "./Feed.css"
import TweetBox from "./TweetBox"
import Post from "./Post"
import db from "./firebase"

function Feed() {

    const [posts, setPosts] =  useState([]);

    useEffect(()=>{
        db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])


    return (
        <div className="feed">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* tweetbox */}
            <TweetBox/>

            {/* {posts.map(post => (
                <Post
                displayName={post.displayName}
                username={post.username}
                verified = {post.verified}
                text = {post.text}
                avatar = {post.avatar}
                image= {post.image}
                />
            ))} */}
            
            <Post
                displayName="Inshal Aamir"
                username="@inshalaamir"
                verified
                text = "I challenge you to build a Twitter clone"
                avatar = "https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/fb7baff4a30f2d9c4f6255e1ede09397-1555789068171/29491414-1d9c-45ff-8ab5-06bf08de54ff.jpg"
                image= "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2558473/settings_images/0A4Obt3yTfCGNGqvBlNV_1-ad-studio_react_challenge_IMG_1889.jpg"
             />
            
            
            
            
        </div>
    )
}

export default Feed
