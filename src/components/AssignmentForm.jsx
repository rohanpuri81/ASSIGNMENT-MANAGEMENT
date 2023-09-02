import React, { useState } from 'react';
import styled from 'styled-components';


const AssignmentForm = (props) => {
  const [name,setName]=useState("");
  const [description,setDescription]=useState("");
  const [batch,setBatch]=useState("");
  const [dueDate,setDueDate]=useState("");
  let todayDate = new Date();

  function submitData(e){

    e.preventDefault();
      props.setTotal([...props.Total,{name:name,description:description,batch:batch,dueDate:dueDate}])

      if(todayDate<new Date(dueDate)){
        props.setFuture([...props.Future,{name:name,description:description,batch:batch,dueDate:dueDate}])
      }else if(todayDate>new Date(dueDate)){
        props.setPast([...props.Past,{name:name,description:description,batch:batch,dueDate:dueDate}])
      }
      
      setName("")
      setDescription("")
      setBatch("")
      setDueDate("")
  }
    return(
       <div>
        <FrmAF>
            <DivFrm>
               <label htmlFor="">Title :</label>
               <Input value={name} onChange={(e)=>{setName(e.target.value)}} required></Input>
            </DivFrm>
            <DivFrm>
               <label htmlFor="">Description :</label>
               <TxtArea value={description} onChange={(e)=>{setDescription(e.target.value)}} required></TxtArea>
            </DivFrm>
            <DivFrm>
               <label htmlFor="">Batch Name :</label>
               <Input value={batch} onChange={(e)=>{setBatch(e.target.value)}} required></Input>
            </DivFrm>
            <DivFrm>
               <label htmlFor="">Due Date :</label>
               <Input type='date' value={dueDate} onChange={(e)=>{setDueDate(e.target.value)}} required></Input>
            </DivFrm>
            <DivFrmBtn>
               <ButtonAF onClick={submitData}>Submit</ButtonAF>
               <ButtonAF>Update</ButtonAF>
            </DivFrmBtn>
        </FrmAF>
       </div>
    );
}



export default AssignmentForm;
let FrmAF=styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  `;
let DivFrm= styled.div`
  min-width:300px;
  display:flex;
  flex-direction: column;
  align-items: flex-start;
`;
let DivFrmBtn= styled.div`
  display:flex;
  gap: 10px;
`;
let TxtArea = styled.textarea`
    background-color: #ddeefd;
    padding: 8px 10px;
    border: 2px solid transparent;
    resize: none;
    width: 80%;
    
    &:hover{
        border: 2px solid black;

    }
`;
let Input = styled.input`
    padding: 8px 12px;
    background-color: #ddeefd;
    border: none;
    width: 80%;
    border: 2px solid transparent;
    &:hover{
        border: 2px solid black;

    }
`;
let ButtonAF= styled.button`
    padding: 6px 8px;
    background-color: #ddeefd;
    color: black;
`;
let InpDate=styled.data`
 padding: 8px 12px;
    background-color: #ddeefd;
    border: none;
    border: 2px solid transparent;
    &:hover{
        border: 2px solid black;

    }
`;