import React, { useState } from 'react'
import './TweetBox.css'
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import trump from './trump.jpg';


function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Guest User",
            username: "guestUser",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png",
        });
        setTweetMessage("");
        setTweetImage("");

    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://www.kindpng.com/picc/m/80-800188_random-user-random-icon-png-transparent-png.png" />
                    <input
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's happening?"
                        type="text"
                    />


                </div>
                <div className="bottomPart">

                    <input
                        value={tweetImage}
                        onChange={(e) => setTweetImage(e.target.value)}
                        className='tweetBox__imageInput'
                        placeholder="Enter GIF or image URL"
                        type="text"
                    />

                    <Button
                        className="tweetBox__tweetButton"
                        type="submit"
                        onClick={sendTweet}>
                        Tweet
                </Button>
                </div>



            </form>
        </div>
    )
}

export default TweetBox
