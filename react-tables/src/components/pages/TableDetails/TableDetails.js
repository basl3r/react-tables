import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./TableDetails.module.scss";
import TextInput from "../../common/TextInput/TextInput";
import { getTableById, uploadTables, pushTablesToAPI } from "../../../redux/tablesRedux";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Navigate } from "react-router-dom";

const TableDetails = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const tablesData = useSelector(state => getTableById(state, id));
  const [status, setStatus] = useState(tablesData ? tablesData.status : '');
  const [peopleAmount, setPeopleAmount] = useState(tablesData ? tablesData.peopleAmount : '');
  const [maxPeopleAmount, setPeopleAmountMax] = useState(tablesData ? tablesData.maxPeopleAmount : '');
  const [bill, setBill] = useState(tablesData ? tablesData.bill : '');

  const statusOptions = [
    { value: "free", label: "Free" },
    { value: "busy", label: "Busy" },
    { value: "reserved", label: "Reserved" },
    { value: "cleaning", label: "Cleaning" }
  ];

  const handleSubmit = e => {
    console.log('submitting');
    e.preventDefault();
    dispatch(uploadTables({ id, status, peopleAmount, maxPeopleAmount, bill}));
    dispatch(pushTablesToAPI({ id, status, peopleAmount, maxPeopleAmount, bill}));
  }

  if (!tablesData) return <Navigate to="/" />;
  return (
    <div className={styles.tableDetails}>
      <h1>Table {tablesData.id}</h1>
      <form onSubmit={handleSubmit}>
        <span>Status: 
          <TextInput 
            value={status} 
            options={statusOptions} 
            onChange={e => setStatus(e.target.value)} 
            className={styles.firstInput}
          />
        </span>
        <span>
          People: 
          <TextInput 
            value={peopleAmount} 
            onChange={e => setPeopleAmount(e.target.value)} 
            /> /
          <TextInput 
            value={maxPeopleAmount} 
            onChange={e => setPeopleAmountMax(e.target.value)} 
            />
        </span>
        <span>Bill: 
          <TextInput 
            value={bill}
            onChange={e => setBill(e.target.value)} 
            />
            <p>$</p>
        </span>
        <Button onClick={handleSubmit}>Update</Button>
      </form>
    </div>
  );
};

export default TableDetails;
