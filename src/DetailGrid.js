import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: 15
  },
});

function DetailGrid(props) {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      {props.children}
    </Grid>
  );
}

export default DetailGrid;