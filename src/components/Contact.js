import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <Container>
    <div className={classes.root}>
      
      <Paper elevation={3}> Github </Paper>
      <Paper elevation={3}> Linkedin </Paper>
      <Paper elevation={3}> Instagram </Paper>
      <Paper elevation={3}> Email </Paper>
    </div>
    </Container>
  );
}
