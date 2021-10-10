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
      filterType: 'checkbox',
      customFilterListOptions: {
        render: v => ['Library: ', v]
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
    name: "CriticScore",
    label: "Critic Score",
    options: {
      display: false,
      filter: false
    }
  },
  {
    name: "CommunityScore",
    label: "Community Score",
    options: {
      display: false,
      filter: false
    }
  }
]

const options = {
  selectableRows: 'none',
  download: false,
  print: false,
  responsive: 'standard',
  sortOrder: {
    name: 'CriticScore',
    direction: 'desc'
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
