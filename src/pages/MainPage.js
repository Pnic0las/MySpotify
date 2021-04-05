import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { GetTopTracksLong, GetTopTracksMid, GetTopTracksShort, GetUserInfos, GetRelated } from '../redux/action/Token_Action';
import TrackTable from "../widget/TopT"
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, rgbToHex } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import { TabPanel } from '@material-ui/lab';
import logo from '../assets/Logo.png'
import Avatar from '@material-ui/core/Avatar';
import { yellow } from '@material-ui/core/colors';
import CardRelatedArtist from '../widget/Card';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    large: {
        width: theme.spacing(21),
        height: theme.spacing(21),
      },
}));

function MainPage(props) {

    const classes = useStyles();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        props.UserInfos();
        props.TopTrackShort();
        props.TopTrackMid();
        props.TopTrackLong();
       /*  props.RelatedArtist(); */
    }, [])

    useEffect(()=> {
        if (props.tracklong != null) {
            props.RelatedArtist();
        }
      },[props.tracklong])

    if (props.tracklong && props.TopTrackMid && props.TopTrackShort && props.userinfos) {
        return (

            <div style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
                <div style={{  display:"flex" ,background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
                    <img src={logo} alt="logo"></img>
                    <span style={{display: "flex",justifyContent: "center", width:"100%",flexDirection : "column" ,textColor:'blank', marginTop: "auto", marginBottom: "auto", paddingLeft: "50px", paddingRight: "60px", textAlign: "center"}}>
                    <Avatar style={{margin: "auto"}} src={props.userinfos.images[0].url} alt="Avatar" className={classes.large}/>
                    <h1 style={{margin: "auto", marginTop:"65px"}}> Let's Explore and Discover some artist, {props.userinfos.display_name}</h1>
                    </span>
                </div>
                <TabContext value={value} >
                    <TabList
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                        >
                        <Tab label="All Time " value="1">
                        </Tab>
                        <Tab label="Last 6 Month" value="2">
                        </Tab>
                        <Tab label="Last Month" value="3">
                        </Tab>
                    </TabList>
                    <TabPanel value="1"><TrackTable data={props.tracklong}></TrackTable></TabPanel>
                    <TabPanel value="2"><TrackTable data={props.trackmid}></TrackTable></TabPanel>
                    <TabPanel value="3"><TrackTable data={props.trackshort}></TrackTable></TabPanel>
                </TabContext>
                <div>
                    {
                        props.tracklong[0] &&
                            (<h1 style={{marginLeft: "70px"}}>You Enjoy {props.tracklong[0].artists[0].name} Here are some artists waiting for you !!!</h1>)
                    }
                    <CardRelatedArtist data={props.related}></CardRelatedArtist>
                </div>
            </div>
        )
    }
    else
    return (
        <div></div>
    )


}

function mapStateToProps(state) {
    console.log("State main =>", state)
    console.log("State main 2 =>", state.token.top_trackslong)
    return {
        tracklong: state.token.top_trackslong,
        trackshort: state.token.top_tracksshort,
        trackmid: state.token.top_tracksmid,
        userinfos: state.token.user,
        related: state.token.related,
    };
}


const actionCreators = {
    UserInfos: GetUserInfos,
    TopTrackShort: GetTopTracksShort,
    TopTrackMid: GetTopTracksMid,
    TopTrackLong: GetTopTracksLong,
    RelatedArtist: GetRelated,
}

const connectedMainPage = connect(mapStateToProps, actionCreators)(MainPage)

export default connectedMainPage;
