import React, { useState } from "react";
import { postApiCall, getApiCall, deleteApiCall } from "@/utils/apiConfig"





export const CustomersHooks= () => {
  const [allCustomersData, setAllCustomersData] = useState([]);

  //------- API call for admin customers

  async function getAllCustomers(data?:any) {
    
    const res= await getApiCall(`/customers/allCustomers`, data)

    setAllCustomersData(res?.data.result)
    console.log(res)
    
  }
  
  async function submitNewCustomers(data?:any) {

    const res= await postApiCall(`customers`, data)
    console.log(res)
    getAllCustomers()

  }


  async function deleteCustomer(data?:any) {

    const res= await deleteApiCall(`customers`, data)
    console.log(res)
    getAllCustomers()

  }

  return{

    submitNewCustomers,
    getAllCustomers,
    allCustomersData,
    deleteCustomer
  }

}