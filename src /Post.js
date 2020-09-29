import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const Post = forwardRef(({ displayName, username, verified, text, avatar, image }, ref) => {
    return (
        <div className='post' ref = {ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>

            <div className="post__body">
                <div className="pots_header">
                    <div className="post__headerText">
                        <h3> {displayName}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserIcon className="post__badge" />} @ {username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p> {text} </p>
                    </div>
                </div>
                <img style={{ marginRight: "10px" }} src={image} alt="" />
            </div>
        </div>
    )
})

export default Post
