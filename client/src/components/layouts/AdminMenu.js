import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineCategory } from "react-icons/md";
import { HiTemplate } from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Portal</h4>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            <MdOutlineCategory /> Create Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            <HiTemplate /> Create Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            <HiTemplate /> Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            <HiTemplate /> Orders
          </NavLink>
          <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            <FiUsers /> Users
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
