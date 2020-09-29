import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import { useState, useEffect } from "react";
import db from "./firebase";
import FlipMove from "react-flip-move";
import SearchIcon from "@material-ui/icons/Search";


function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);

    return (
        <div className='feed'>
            <div className="feed__header">
                <h3> News Feed</h3>
                <div className="widgets__input">
                    <SearchIcon className="widgets__searchIcon" />
                    <input placeholder="Search Twitter (Does not work)" type="text" />
                </div>
            </div>
            <TweetBox />

            <FlipMove>

                {posts.map(post => (
                    <Post
                        key={post.text} //  todo generte a random number 
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        avatar={post.avatar}
                        image={post.image}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
