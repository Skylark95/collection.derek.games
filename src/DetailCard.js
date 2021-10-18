import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
});

function DetailCard(props) {
  const classes = useStyles();
  const title = props.title;
  const value = props.value;

  return (
    <Card variant="outlined" >
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {title}
        </Typography>
        <Typography variant="body2" component="p">
            {value}
        </Typography>
        </CardContent>
    </Card>
  )
}

export default DetailCard;