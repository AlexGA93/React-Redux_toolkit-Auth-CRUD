import { GridColDef } from "@mui/x-data-grid";
import { PropTypes } from "../../types/types";
import "./add.scss";

const Add = (props: PropTypes) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // add new Item
    console.log(props.columns.filter((item) => item.field !== "id" && item.field !== "img"));
    
  }

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen!(false)}>X</span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "avatar")
            .map((column: GridColDef) => (
              <div className="item" key={column.headerName}>
                <label htmlFor="column-name">{column.headerName}</label>
                <input
                  type={column.type}
                  id="column-name"
                  placeholder={column.field}
                />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default Add;
