import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="w-75">
            <input
              type="text"
              className="form-control"
              placeholder="Create new Category..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              style={{ height: "5vh" }}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CategoryForm;
