import React from "react";
import { TodoContext } from "../TodoContext";


function TodoSearch() {
const {
  searchValue,
  setSearchValue,
  } = React.useContext(TodoContext);
    return (
      <div className="mb-3">
      <form>
        <input 
        placeholder="Buscar ..." className="form-control"
        value={searchValue}
        onChange={(event) => {
            setSearchValue(event.target.value);
            }
        }
        />
      </form>
      </div>
    )
  }
  export  { TodoSearch };