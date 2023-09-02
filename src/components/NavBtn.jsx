import React, { useState } from "react";
import styled from 'styled-components';

function NavBtn(props){
    return(
        <div>
           <Button onClick={()=>{
             props.setA(true)
             props.setT(false)
             props.setP(false)
             props.setF(false)
           }}>Add assignment</Button><br /><br />
           <Button onClick={()=>{
             props.setA(false)
             props.setT(false)
             props.setP(true)
             props.setF(false)
           }}>Past assignment</Button><br /><br />
           <Button onClick={()=>{
             props.setA(false)
             props.setT(false)
             props.setP(false)
             props.setF(true)
           }}>Future assignment</Button><br /><br />
           <Button onClick={()=>{
             props.setA(false)
             props.setT(true)
             props.setP(false)
             props.setF(false)
           }}>Total assignment</Button><br />
        </div>
    );
}

export default NavBtn;

const Button = styled.button`
    background-color: lightblue;
    padding: 6px 8px;
    color: black;

`