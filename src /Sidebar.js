import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import VolumeUpOutlinedIcon from '@material-ui/icons/VolumeUpOutlined';
import { Button } from "@material-ui/core";
import useSound from 'use-sound';

import trump1 from './sounds/trump1.mp3';
import trump2 from './sounds/trump2.mp3';
import trump3 from './sounds/trump3.mp3';
import trump4 from './sounds/trump4.mp3';
import biden1 from './sounds/biden1.mp3';
import biden2 from './sounds/biden2.mp3';
import biden3 from './sounds/biden3.mp3';
import biden4 from './sounds/biden4.mp3';


function Sidebar() {

    const [t1] = useSound(trump1);
    const [t2] = useSound(trump2);
    const [t3] = useSound(trump3);
    const [t4] = useSound(trump4);

    const [b1] = useSound(biden1);
    const [b2] = useSound(biden2);
    const [b3] = useSound(biden3);
    const [b4] = useSound(biden4);

    const voteAlert = () => {
        alert("One vote!");
    }

    return (
        <div className="sidebar">
            <div className="twitter__iconHeader">
                <TwitterIcon className="sidebar__twitterIcon" />
                <TwitterIcon style={{ color: "#ff4c4c" }} className="sidebar__twitterIcon" />
                <TwitterIcon className="sidebar__twitterIcon" />
                <TwitterIcon style={{ color: "#ff4c4c" }} className="sidebar__twitterIcon" />
                <TwitterIcon className="sidebar__twitterIcon" />
                <TwitterIcon style={{ color: "#ff4c4c" }} className="sidebar__twitterIcon" />
            </div>

            <SidebarOption active Icon={HomeIcon} text="News Feed" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <hr style={{ marginTop: "10px" }} />

            <h3 className="name__header"> Donald Trump Quotes: </h3>

            <div className="buttonsQuote">
                <Button onClick={t1} variant="outlined" className="playQuoteTrump"> <VolumeUpOutlinedIcon /> Quote 1</Button>
                <Button onClick={t2} variant="outlined" className="playQuoteTrump"> <VolumeUpOutlinedIcon /> Quote 2</Button>
            </div>

            <div className="buttonsQuote">
                <Button onClick={t3} variant="outlined" className="playQuoteTrump"> <VolumeUpOutlinedIcon /> Quote 3</Button>
                <Button onClick={t4} variant="outlined" className="playQuoteTrump"> <VolumeUpOutlinedIcon /> Quote 4</Button>
            </div>

            <h3 className="name__header"> Joe Biden Quotes: </h3>

            <div className="buttonsQuote">
                <Button onClick={b1} variant="outlined" className="playQuoteBiden"> <VolumeUpOutlinedIcon /> Quote 1</Button>
                <Button onClick={b2} variant="outlined" className="playQuoteBiden"> <VolumeUpOutlinedIcon /> Quote 2</Button>
            </div>

            <div className="buttonsQuote">
                <Button onClick={b3} variant="outlined" className="playQuoteBiden"> <VolumeUpOutlinedIcon /> Quote 3</Button>
                <Button onClick={b4} variant="outlined" className="playQuoteBiden"> <VolumeUpOutlinedIcon /> Quote 4</Button>
            </div>

            <hr style={{ marginTop: "20px" }} />

            <Button onClick = {voteAlert} variant="outlined" className="sidebar__tweet" fullWidth>
                <h3 className="asd"> Vote Trump or Biden</h3>
            </Button>
        </div>
    );
}

export default Sidebar;
