import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Post.css"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish';

export default function Post({displayName, username, verified, text, image, avatar}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar}/>
            </div>
            <div className="post__body">
                <div className="post__header"> 
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "} <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge"/> }
                                {"  " + username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>

                </div>
                
                <img src= {image}></img>
                
                <div className="post__footer">
                    <ChatBubbleOutlineIcon style = {{fontSize: 18}}/>
                    <RepeatIcon style = {{fontSize: 18}}/>
                    <FavoriteBorderIcon style = {{fontSize: 18}}/>
                    <PublishIcon style = {{fontSize: 18}}/>
                </div>
            </div>
        </div>
    )
}
