import MUIDataTable from "mui-datatables";
import data from "./data.json"

const columns = ["Name", "Library", "ReleaseYear"];

const options = {
  selectableRows: 'none',
  download: false,
  filter: false,
  print: false,
  sortOrder: {
    name: 'Name',
    direction: 'asc'
  }
};

function GameTable() {
  return (
    <MUIDataTable
      title={"Game Collection"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default GameTable;
