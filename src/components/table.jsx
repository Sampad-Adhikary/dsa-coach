import React from "react";
import DataTable from "react-data-table-component";
import Data from "../tableData"
import { useState, useEffect } from "react";

export default function Table() {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.ID,
    },
    {
      name: "Topic",
      selector: (row) => row.Topic,
    },
    {
      name: "Problem",
      selector: (row) => row.Problem,
    },
    {
      name: "URL",
      selector: (row) => <a href={row.URL} target="blank"><img src="resources/gfg.png" width="80px"/></a>,
    },
  ];

  const cStyle = {
    headCells: {
      style: {
        backgroundColor: "#425F57",
        color: "#fff",
        textAlign:"center",
        fontSize:"1.15rem",
        fontWeight:"600",
        fontFamily:'Poppins'
      }
    },
    rows: {
      style: {
        textAlign:"center",
        minHeight: "50px", // override the row height
        backgroundColor: "#DEF5E5",
        color:"#425F57",
        fontFamily:'Poppins',
        fontSize:"1rem"
      }
    }
  }

  return (
    <div className="problemTable">
      <DataTable columns={columns} data={Data} customStyles={cStyle} selectableRows pagination fixedHeader />
    </div>
  );
}
