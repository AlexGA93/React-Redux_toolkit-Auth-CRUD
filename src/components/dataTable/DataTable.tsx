import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { PropTypes } from "../../types/types";
import "./dataTable.scss";

const DataTable = ({ columns, rows, slug }: PropTypes) => {
  console.log(rows);
  
  const handleDelete = (userId: number) => {
    // axios delete

    console.log(userId + "has been deleted!");
  };

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => (
      <div className="action">
        <Link to={`/${slug}/${params.row.id}`}>
          <img src="view.svg" alt="view" />
        </Link>
        <div className="delete" onClick={() => handleDelete(params.row.id)}>
          <img src="delete.svg" alt="delete" />
        </div>
      </div>
    ),
  };

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={rows!}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        // filter - search
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
