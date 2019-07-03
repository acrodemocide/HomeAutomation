import * as React from 'react';
import { withStyles, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import axios from 'axios';

interface IProps {
  classes: any;
}

function ToggleLight(): void {
  alert('Toggled Light');
  axios.post('https://10.0.0.23:5001/api/todo', {
    'name': 'toggleLED',
    'isComplete': false,
  })
}

function LightSwitchAutomationCardComponent(props: IProps) {
    const { classes } = props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be
            {bull}
            nev
            {bull}o{bull}
            lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="small"
            onClick={ToggleLight}>
              Learn More
          </Button>
        </CardActions>
      </Card>
    );
}

const styles = (): any => ({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const LightSwitchAutomationCard = withStyles(styles)(LightSwitchAutomationCardComponent);