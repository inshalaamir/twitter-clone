import React from 'react'
import "./Widgets.css"
import SearchIcon from '@material-ui/icons/Search';
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from 'react-twitter-embed'

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="Search Twitter" type="text"/>
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"858551177860055040"}/>
                <TwitterTimelineEmbed
                souurceType="profile"
                screenName="ManUtd"
                options= {{height: 400}}
                />

                <TwitterShareButton
                url={"https://instagram.com/inshalaamir"}
                options= {{text: "ReactJs Twitter"}} />

            </div>
        </div>
    )
}

export default Widgets
