import React from 'react'
// import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: "100%",
            height: "300px",
        },
    },
}));




export const Jumbotron = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper align="center" component="span" m={1} style={{ backgroundImage: 'url("assets/images/hero2.jpg")', backgroundSize: "cover" }}>
            <div className="darken-overlay"> 
                <Typography style={{ color: "white" }} variant="h1"  gutterBottom>
                    
                        ALEJANDRO GONZALEZ
                
                </Typography>
                <Typography style={{ color: "white" }} variant="h4" gutterBottom>
                        Developer of the web, photography, and xerophytes.
                </Typography>
                </div>
            </Paper>
        </div>
    )
}

export default Jumbotron