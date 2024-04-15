import { deleteUserApiCall, getApiCall, postUserApiCall } from '@/utils/apiConfig';
import React, { useState } from 'react'

export const UsersHooks= () => {
    
    const [allUsersData, setAllUsersData] = useState([]);

    async function getAllUsers(data?:any) {
    
        const res= await getApiCall(`/users`, data)
    
        setAllUsersData(res?.data.result)
        console.log(res)
        
      }


      async function submitNewUsers(data?:any) {

        const res= await postUserApiCall(`users`, data)
        console.log(res)
        getAllUsers()
    
      }

      async function deleteUser(data?:any) {

        const res= await deleteUserApiCall(`users`, data)
        console.log(res)
        getAllUsers()
    
      }



      return{
        getAllUsers,
        allUsersData,
        submitNewUsers,
        deleteUser
      }

}