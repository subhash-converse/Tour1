import { faDeleteLeft, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BackspaceOutlinedIcon from "@mui/icons-material/BackspaceOutlined";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import axios from "axios";
import { useState, useEffect } from "react";
import Vacancylists from "../../../Mock/Vacancylists";

interface table{
  entries:number,
  currentPage:number
}

const Vacancytable = (props:table) => {

  return (
    <div className="">
      <table className="w-full">
        <tr className=" bg-white sticky top-0">
          <th className=""> ID</th>
          <th>OPENINGS</th>
          <th>DEPARTMENT</th>
          <th>PUBLISH DATE</th>
          <th>LOCATION</th>
          <th>MAIN DUTIES</th>
          <th>EXPERIENCE</th>
          <th>ACTION</th>
        </tr>

        {Vacancylists.slice((props.currentPage - 1) * props.entries, props.currentPage * props.entries).map((Vacancy) => (
          <tr>
            <td>{Vacancy.id}</td>
            <td>{Vacancy.openings}</td>
            <td>{Vacancy.department}</td>
            <td>{Vacancy.publishDate}</td>
            <td>{Vacancy.location}</td>
            <td>
              <span className=" tb-icon">
                <FileOpenOutlinedIcon className=" tb-icon action-buttons" />{" "}
                <span className=" tb-icon">{Vacancy.mainDuties}</span>
              </span>
            </td>
            <td>
              <span className=" tb-icon">
                <FileOpenOutlinedIcon className=" tb-icon action-buttons" />{" "}
                <span className=" tb-icon">{Vacancy.experience}</span>
              </span>
            </td>
            <td>
              <span className="action-buttons">
                <FontAwesomeIcon icon={faPenToSquare} className="tb-icon" />
                <BackspaceOutlinedIcon className="tb-icon" />
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Vacancytable;
