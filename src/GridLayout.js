import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
 //   height: 500,
  //  width: 500,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function GridLayout() {
  const spacing = 2;
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid xs={4} item>
              <Paper className={classes.paper} > 
              <BarChart />
               </Paper>
            </Grid>
            <Grid xs={4} item>
              <Paper className={classes.paper} > 
              <DoughnutChart />
               </Paper>
            </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid xs={4} item>
              <Paper className={classes.paper} > 
              <BarChart />
               </Paper>
            </Grid>
            <Grid xs={4} item>
              <Paper className={classes.paper} > 
              <DoughnutChart />
               </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}