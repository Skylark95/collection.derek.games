import MUIDataTable from "mui-datatables";
import data from "./data.json"

const columns = [
  {
    name: "Name",
    options: {
      filter: false
    }
  },
  {
    name: "Library",
    options: {
      display: false
    }
  },
  {
    name: "ReleaseYear",
    label: "Release Year",
    options: {
      display: false
    }
  }
]

const options = {
  selectableRows: 'none',
  download: false,
  print: false,
  responsive: 'standard',
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
