import { Grid } from "@material-ui/core";

function DetailGridItem(props) {
    return (
      <Grid item xs={6} md={4} lg={3}>
        {props.children}
      </Grid>
    );
}

export default DetailGridItem;