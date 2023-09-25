import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import './products.scss';
import { Button } from '@mui/material';
import DataTable from '../../../components/dataTable/DataTable';
import { GridColDef } from '@mui/x-data-grid';
import { products } from '../../../data/data';
import Add from '../../../components/add/Add';

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
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    type: "string",
    headerName: "Producer",
    width: 200,
  },
  {
    field: "createdAt",
    type: "string",
    headerName: "Created At",
    width: 200,
  },
  {
    field: "inStock",
    type: "boolean",
    headerName: "In Stock",
    width: 150,
  },
];

const Products = () => {
    // state
    const [open, setOpen] = useState<boolean>(false);

    return (
      <section className="products">
        <div className="info">
          <h1>Products</h1>
          <Button variant="contained" endIcon={<SendIcon />} onClick={() => setOpen(true)}>
            Add New Product
          </Button>
        </div>
        <DataTable slug="products" columns={columns} rows={products} />
        { open && <Add slug='product' columns={columns} setOpen={setOpen} /> }
      </section>
    )
}

export default Products