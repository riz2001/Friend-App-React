import axios from 'axios'
import React, { useState } from 'react'

const AddFriend = () => {
    const [data,setData]=useState(
        {
          "name":"",
          "friendName":"",
          "friendNickName":"",
          "DescribeYourFriend":""
        }
      )
        const inputHandler=(event)=>{
          setData({...data,[event.target.name]:event.target.value})
        }
        const readvalue=()=>{
          console.log(data)
          axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
        
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success")
                    {
                        alert("successfully added")

                    }
                    else{
                        alert("error")
                    }
                    


            }
        
    ).catch().finally()
}
        

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">FRIEND NAME</label>
                            <input type="text" className="form-control"  name='friendName' value={data.friendName} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">FRIEND NICKNAME </label>
                            <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">DESCRIPTION</label>
                           <textarea className="form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputHandler} ></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>ADD</button>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddFriend