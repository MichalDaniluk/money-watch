import Account from "./Account";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setLoadedAccounts } from '../../actions';

const Accounts = () => {

  const dispatch = useDispatch();

  const client = axios.create({
    baseURL: "http://localhost:5000/api"
  });

  const [accounts, setAccounts] = useState([]);

  useEffect( () => {
    async function getList() {
      const response = await client.get("/accounts");
      setAccounts(response.data);

    }
    getList();
  },[]);

useEffect( () => {
  dispatch(setLoadedAccounts(accounts));
},[accounts])

  return (
    accounts.map((item) =>
      <Account item={item} />
    )
  )
}


export default Accounts;
