import React, { useEffect, useState } from "react";
import styled from 'styled-components';

function FutureData(props){
   return(
       <div>
        <table border={1}>
            <tr>
                <th>Sr no</th>
                <th>Title</th>
                <th>Description</th>
                <th>Batch Name</th>
                <th>Due Date</th>
                <th>Update</th>
                <th>Delete</th>
            </tr>
            {
                props.FutureDta.map((val,ind)=>{
                    let {name,description,batch,dueDate}=val;
                  return(
                    <tr>
                    <td>{ind+1}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{batch}</td>
                    <td>{dueDate}</td>
                    <td><ButtonFD>UPDATE</ButtonFD></td>
                    <td><ButtonFD onClick={()=>{
                        let tempData=[...props.FutureDta]
                        tempData.splice(ind,1)
                        props.setFut([...tempData])
                    }}>DELETE</ButtonFD></td>
                  </tr>
                  );
                })
            }
        </table>
    </div>
   );
}

export default FutureData;

let ButtonFD= styled.button`
    padding: 6px 8px;
    background-color: #ddeefd;
    color: black;
`;