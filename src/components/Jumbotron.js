import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    backgroundColor: {backgroundColor: "grey"},
    bg: {
        backgroundImage: 'url("../../public/assets/images/hero2.jpg")'
    }
}));



export const Jumbotron = () => {
    const classes= useStyles()
    return (
        <div>’
            <Box align="center" component="span" m={1} className={classes.bg}>
                <h1 id="hero-h1" class="display-4">ALEJANDRO GONZALEZ</h1>
                <p id="hero-txt" class="lead">Developer of the web, photography, and xerophytes.</p>
            </Box>
        </div>
    )
}

export default Jumbotron