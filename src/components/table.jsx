import React, { useState } from "react";
import DataTable from "react-data-table-component";
import Array from "../data/tableData";
import Matrix from "../data/matrix"
import Strings from "../data/strings";
import Search from "../data/search";
import LinkedList from "../data/linkedlist";
import BitManipulation from "../data/bitManipulation";
import BinaryTree from "../data/binarytree"
import Bst from "../data/bst";
import Greedy from "../data/greedy";
import BackTracking from "../data/backtracking";
import StackQueue from "../data/Stackqueue";
import Heap from "../data/heap";
import Graph from "../data/graph";
import Trie from "../data/trie";
import Dp from "../data/dp";

export default function Table(props) {

  const [name,setName] = useState("");
  const[tableState,setTableState] = useState("Array")
  const [data,setData] = useState(Matrix);
  
  const columns = [
    {
      name: "Serial No.",
      selector: (row) => row.Id,
    },
    {
      name: "Problem",
      selector: (row) => row.Problem,
    },
    {
      name: "URL",
      selector: (row) => <a href={row.URL} target="blank"><img src="resources/gfg.png" width="80px" alt="gfg"/></a>,
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
    },
    cells:{
      style:{
        fontSize:"1rem",
        fontFamily:'Poppins',
        fontColor: '#425F57',
        textAlign:'center',
      }
    }
  }

  function changehandler(e){
    // const textInput = ;
    setName(e.target.value);
  }

  function submitAction(e){
    e.preventDefault();
    setTableState(name);
    if(tableState === "Array"){
      setData(Array);
    }else if(tableState === "Matrix"){
      setData(Matrix);
    }
    switch(tableState){
      case "Array":
        setData(Array);
        break;
      case "Matrix":
        setData(Matrix);
        break;
      case "Strings":
        setData(Strings);
        break;
      case "Search":
        setData(Search);
        break;
      case "LinkedList":
        setData(LinkedList);
        break;
      case "BitManipulation":
        setData(BitManipulation);
        break;
      case "BinaryTree":
        setData(BinaryTree);
        break;
      case "Bst":
        setData(Bst);
        break;
      case "Greedy":
        setData(Greedy);
        break;
      case "BackTracking":
        setData(BackTracking);
        break;
      case "StackQueue":
        setData(StackQueue);
        break;
      case "Heap":
        setData(Heap);
        break;
      case "Graph":
        setData(Graph);
        break;
      case "Trie":
        setData(Trie);
        break;
      case "Dp":
        setData(Dp);
        break;
      default:
        setData(Array);
    }
  }

  return (
    <div className="problemTable">
      <h4 className="hero4" id="tableHeader">{tableState}</h4>
      <div className="searchBox">
      <form>
        <input className="form-control inputText" type="text" value={name} name="inputText" onChange={changehandler} placeholder="Enter the topic you want to Start..."/>
        <button type="submit" onClick={submitAction} className="searchBtn">Search</button>
      </form>
      </div>
      <DataTable columns={columns} data={data} customStyles={cStyle} selectableRows pagination fixedHeader />
    </div>
  );
}
