import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewAll = () => {
    const [data,changedata] =useState([])
    const fetchData=()=>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
            (Response)=>{
                changedata(Response.data)
            }
        ).catch().finally()
}
useEffect(() => {fetchData()},[])
  

  return (
    <div>
         <div class="card-body">

<div class="container">
    <h1 align="center">VIEW DETAILS</h1>
    <br></br>
    <div class="row g-3">
        <div className="col  col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
                <thead>
                    <tr>
                    
                        <th scope="col"> NAME</th>
                        <th scope="col">FRIEND NAME</th>
                        <th scope="col">NICK NAME</th>
                        <th scope="col">DESCRIPTION</th>
                       

                    </tr>
                </thead>
                <tbody>

                {
                    data.map(
                        (value, index) => {
                            return <tr>
                             
                                <td>{value.name}</td>
                                <td>{value.friendName}</td>
                                <td>{value.friendNickName}</td>
                                <td>{ value.DescribeYourFriend}</td>
                              




                            </tr>


                        }
                    )
                }
                </tbody>



            </table>
        </div>
    </div>
</div>

</div>


        



    </div>
  )
}

export default ViewAll