import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
  
import data from "./data.json"
import MaterialTable from 'material-table';
import DetailGrid from './DetailGrid';
import DetailGridCard from './DetailGridCard'
import Library from './Library';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const columns = [
  {
    title: "Name",
    field: "Name",
  },
  {
    title: "Library",
    field: "Library",
    render: rowData => (<Library rowData={rowData} />)
  },
  {
    title: "Developer",
    field: "Developer",
    hidden: true,
    searachable: true
  },
  {
    title: "Publisher",
    field: "Publisher",
    hidden: true,
    searachable: true
  },
  {
    title: "Release Year",
    field: "ReleaseYear",
    hidden: true,
    searachable: true
  },
  {
    title: "Critic Score",
    field: "CriticScore",
    hidden: true,
    searachable: false,
  },
  {
    title: "Community Score",
    field: "CommunityScore",
    searachable: false,
    defaultSort: "desc"
  },
  {
    title: "Store Page",
    field: "StorePage",
    hidden: true,
    searachable: false,
  }
];


function detailPanel(rowData) {
 
  return (
    <DetailGrid>
      <DetailGridCard title="Developer" value={rowData.Developer} />
      <DetailGridCard title="Publisher" value={rowData.Publisher} />
      <DetailGridCard title="Release Year" value={rowData.ReleaseYear} />
      <DetailGridCard title="Critic Score" value={rowData.CriticScore} />
    </DetailGrid>
  );
}

const options = {
  pageSize: 10,
  pageSizeOptions: [10, 15, 100]
}

function GameTable() {
  return (
    <MaterialTable
      title="Game Collection"
      columns={columns}
      data={data}
      icons={tableIcons}
      detailPanel={detailPanel}
      options={options}
    />
  );
}

export default GameTable;
