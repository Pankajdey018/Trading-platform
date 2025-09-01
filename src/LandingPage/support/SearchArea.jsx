import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchArea() {
  return (
    <div className="w-100 bg-body-tertiary py-3">
      <div className="container p-2 mt-2 bg-body-tertiary mb-5">
        
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h2 className="fs-2">Support Portal</h2>
            <button className="btn btn-primary fs-6">My tickets</button>
          </div>

          
          <form>
            <div className="input-group">
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #ced4da",
                  borderRight: "none",
                  borderRadius: "8px 0 0 8px",
                  display: "flex",
                  alignItems: "center",
                  padding: "0 16px",
                }}
              >
                <SearchIcon style={{ color: "#6c757d" }} />
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Eg: How do I open my account, How do I activate F&O"
                aria-label="Search"
                aria-describedby="basic-addon1"
                style={{
                  padding: "12px 30px",
                  border: "1px solid #ced4da",
                  borderLeft: "none",
                  borderRadius: "0 8px 8px 0",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchArea;
