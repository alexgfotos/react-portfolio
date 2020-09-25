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
    height: "33%"
  }
}));




export default function Portfolio() {
  const classes = useStyles();
  const mediaQuery = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.root}>
      <GridList cols={mediaQuery ? 3 : 1} cellHeight={250} className={classes.gridList}>
        <GridListTile 
        key="Subheader" 
        cols={ 3 } 
        style={{ height: 'auto' }}>
          <Typography variant="h4" align="center" component="div">PORTFOLIO</Typography>
          <Typography variant="subtitle2" align="center" component="div">These projects were created using Javascript, JSX, Jquery, Bootstrap, React, Material-UI, MySQL, Mongo, Node, & HTML</Typography>
        </GridListTile >
        {tileData.map((tile) => (
          <GridListTile style={{ marginBottom: "18px" }} key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              className={classes.tileBar}
              title={<Typography color="primary" variant="h4"><a className={classes.link} href={tile.link} target="_blank" rel="noopener noreferrer">{tile.title}</a></Typography>}
              subtitle={<Typography variant="subtitle2"><span>{tile.description}</span></Typography>}
              actionIcon={
                <Link href={tile.github} target="_blank" rel="noopener noreferrer">
                  <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                    <GitHubIcon />
                  </IconButton>
                </Link>
              }

            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}