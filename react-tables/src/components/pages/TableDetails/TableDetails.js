import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./TableDetails.module.scss";
import TextInput from "../../common/TextInput/TextInput";
import { getTableById } from "../../../redux/tablesRedux";
import { useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";

const TableDetails = () => {
  const { id } = useParams();
  const tablesData = useSelector(state => getTableById(state, id));

  const [status, setStatus] = useState(tablesData ? tablesData.status : '');

  if (!tablesData) return <Navigate to="/" />;

  const statusOptions = [
    { value: "free", label: "Free" },
    { value: "busy", label: "Busy" },
    { value: "reserved", label: "Reserved" },
    { value: "cleaning", label: "Cleaning" }
  ];

  const handleStatusChange = (e) => {
    setStatus(e.target.value); 
  };

  return (
    <div className={styles.tableDetails}>
      <h1>Table {tablesData.id}</h1>
      <form>
        <span>Status: 
          <TextInput 
            value={status} 
            options={statusOptions} 
            onChange={handleStatusChange} 
            className={styles.firstInput}
          />
        </span>
        <span>
          People: 
          <TextInput value={tablesData.peopleAmount} /> /
          <TextInput value={tablesData.maxPeopleAmount} />
        </span>
        <span>Bill: <TextInput value={tablesData.bill} /><p>$</p></span>
        <Button>Update</Button>
      </form>
    </div>
  );
};

export default TableDetails;
