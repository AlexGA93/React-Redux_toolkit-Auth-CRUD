import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { GridColDef } from '@mui/x-data-grid';
import DataTable from '../../components/dataTable/DataTable';
import { userRows } from '../../data/data';
import './users.scss';
import { useState } from 'react';
import Add from '../../components/add/Add';

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 100,
    renderCell: (params) => (
      <img src={params.row.img || "noavatar.png"} alt="avatar" />
    ),
  },
  
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    width: 150
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 200,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "createdAt",
    type: "string",
    headerName: "Created At",
    width: 200,
  },
  {
    field: "verified",
    type: "boolean",
    headerName: "Verified",
    width: 150,
  },
];


const Users = () => {

  // state
  const [open, setOpen] = useState<boolean>(false);

  return (
    <section className="users">
      <div className="info">
        <h1>Users</h1>
        <Button variant="contained" endIcon={<SendIcon />} onClick={() => setOpen(true)}>
          Add New User
        </Button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      { open && <Add slug='user' columns={columns} setOpen={setOpen} /> }
    </section>
  )
}

export default Users