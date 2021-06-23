import React from 'react'
import './TweetBox.css'
import {Avatar, Button} from "@material-ui/core"

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/fb7baff4a30f2d9c4f6255e1ede09397-1555789068171/29491414-1d9c-45ff-8ab5-06bf08de54ff.jpg"></Avatar>
                    <input placeholder="What's happening?" type="text"></input>
                </div>
                <input className="tweetBox__inputImage" placeholder="Enter image URL" type="text"></input>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
export default TweetBox
