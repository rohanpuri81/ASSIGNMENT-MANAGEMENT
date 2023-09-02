import React, { useEffect, useState } from "react";
import styled from 'styled-components';

function TotalData(props){
   return(
       <div>
        <table border={1}>
            <tr>
                <th>Sr no</th>
                <th>Title</th>
                <th>Description</th>
                <th>Batch Name</th>
                <th>Due Date</th>
            </tr>
            {
                props.TotalDta.map((val,ind)=>{
                    let {name,description,batch,dueDate}=val;
                  return(
                    <tr>
                    <td>{ind+1}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{batch}</td>
                    <td>{dueDate}</td>
                    
                  </tr>
                  );
                })
            }
        </table>
    </div>
   );
}

export default TotalData;