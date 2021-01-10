import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import LineChart from './LineChart';
import CommonChart from './CommonChart';
import MultiLine from './MultiLine';
import MultiDoughnutChart from './MultiDoghnut';

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

  const lineChartData = [{ x: -10, y: 0 }, { x: 0, y: 10 }, { x: 10, y: 5 }];

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
            <Grid xs={6}  md={3} item>
              <Paper className={classes.paper} > 
              <BarChart />
               </Paper>
            </Grid>
            <Grid  xs={6}  md={3}  item>
              <Paper className={classes.paper} > 
              <DoughnutChart />  
              </Paper>
            </Grid>
            <Grid  xs={6}  md={3}  item>
              <Paper className={classes.paper} > 
              <MultiDoughnutChart />  
              </Paper>
            </Grid>
            <Grid xs={6}  md={3}  item>
              <Paper className={classes.paper} > 
              <LineChart data={lineChartData}/>  
              </Paper>
            </Grid>
            <Grid xs={6} md={3} item>
              <Paper className={classes.paper} > 
              <LineChart fill={true}  data={lineChartData}/>  
               </Paper>
            </Grid>
            <Grid xs={6} md={3} item>
              <Paper className={classes.paper} >  
              <MultiLine />
               </Paper>
            </Grid>
            <Grid xs={6} md={3} item>
              <Paper className={classes.paper}  >  
              <MultiLine fill={true} />
               </Paper>
            </Grid>
            <Grid xs={6} md={3}  item>
              <Paper className={classes.paper} > 
              <CommonChart type='radar'/>  
               </Paper>
            </Grid>
            <Grid  xs={6} md={3}  item>
              <Paper className={classes.paper} > 
              <CommonChart type='polarArea'/>
               </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
