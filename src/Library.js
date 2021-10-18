import { Link } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function Library(props) {
  const rowData = props.rowData;

  if (rowData.StorePage) {
    return (
      <Link href={rowData.StorePage} target="_blank" rel="noreferrer" color="inherit" >
        {rowData.Library}
        <OpenInNewIcon style={{marginLeft: '.5em'}} fontSize="inherit" viewBox="0 -3 24 24" />
      </Link>
    );
  }
  return rowData.Library;
}

export default Library;