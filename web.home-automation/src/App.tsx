import * as React from 'react';
import logo from './logo.svg';
import { withStyles, Grid } from '@material-ui/core';
import { LightSwitchAutomationCard } from './automation-commands/light-switch-automation';

interface IProps {
    classes: any;
}

function AppComponent(props: IProps) {
  const { classes } = props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
          <Grid item xs={3}>
            <LightSwitchAutomationCard />
          </Grid>
        </Grid>
      </div>
  );
}

const styles = (theme: any): any => ({
  root: {
    flexGrow: 1,
    margin: 20,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

export const App = withStyles(styles)(AppComponent);
