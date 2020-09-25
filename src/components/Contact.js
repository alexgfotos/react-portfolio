import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Link from '@material-ui/core/Link';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
// import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from '@material-ui/core/Typography'
import tileData from './tileData';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: "90%",
    height: "auto"
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  link: {
    color: "white"
  },
  tileBar: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  }
}));




export default function Contact() {
  const classes = useStyles();
  const mediaQuery = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.root}>
      <GridList cols={mediaQuery ? 3 : 1} cellHeight={'auto'} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={3}
          style={{ height: 'auto' }}>
          <Typography variant="h5" align="center" component="div">CONTACT</Typography>
        </GridListTile >

        <GridListTile style={{ marginBottom: "18px" }} key="gh">
          <img src='/assets/images/contactGH.png' alt="github profile" />
          <GridListTileBar
            className={classes.tileBar}
            title={<Typography color="primary" variant="subtitle"><a className={classes.link} href='https://github.com/alexgfotos' target="_blank" rel="noopener noreferrer">Github</a></Typography>} />
        </GridListTile>

        <GridListTile style={{ marginBottom: "18px" }} key="gh">
          <img src='/assets/images/contactLI2.png' alt="linkedin profile" />
          <GridListTileBar
            className={classes.tileBar}
            title={<Typography color="primary" variant="subtitle"><a className={classes.link} href='https://www.linkedin.com/in/alejandroggonzalez/' target="_blank" rel="noopener noreferrer">LinkedIn</a></Typography>} />
        </GridListTile>

        <GridListTile style={{ marginBottom: "18px" }} key="gh">
          <img src='/assets/images/contactIG.png' alt="instagram profile" />
          <GridListTileBar
            className={classes.tileBar}
            title={<Typography color="primary" variant="subtitle"><a className={classes.link} href='https://instagram.com/cactusupdate' target="_blank" rel="noopener noreferrer">Instagram</a></Typography>} />
        </GridListTile>

      </GridList>
    </div>
  );
}