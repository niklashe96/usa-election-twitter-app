import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";


function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__widgetContainer">
                <h4> Donald Trump's Twitter </h4>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="realDonaldTrump"
                    options={{ height: 295 }}
                />

                <h4 style={{ marginTop: "20px" }}> Joe Biden's Twitter </h4>


                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="JoeBiden"
                    options={{ height: 295 }}
                />



            </div>

        </div>
    )
}

export default Widgets
