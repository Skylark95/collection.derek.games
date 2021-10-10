import MUIDataTable from "mui-datatables";
import data from "./data.json"

const columns = [
  {
    name: "Name",
    options: {
      filterType: 'textField',
      customFilterListOptions: {
        render: v => ['Name: ', v]
      }
    }
  },
  {
    name: "Library",
    options: {
      display: false,
      filterType: 'multiselect',
      customFilterListOptions: {
        render: v => ['Library: ', v]
      }
    }
  },
  {
    name: "ReleaseYear",
    label: "Release Year",
    options: {
      display: false,
      filterType: 'multiselect',
      customFilterListOptions: {
        render: v => ['Release Year: ', v]
      }
    }
  },
  {
    name: "Developer",
    options: {
      display: false,
      filterType: 'textField',
      customFilterListOptions: {
        render: v => ['Developer: ', v]
      }
    }
  },
  {
    name: "Publisher",
    options: {
      display: false,
      filterType: 'textField',
      customFilterListOptions: {
        render: v => ['Publisher: ', v]
      }
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
