import { useState } from 'react'
import styled from 'styled-components';
import NavBtn from './components/NavBtn'
import TotalData from './components/TotalData';
import PastData from './components/PastData';
import FutureData from './components/FutureData';
import AssignmentForm from './components/AssignmentForm'
import './App.css'

function App() {
  const [addAssBool,setAddAssBool]=useState(true);
  const [pastAssBool,setPastAssBool]=useState(false);
  const [futAssBool,setFutAssBool]=useState(false);
  const [TotAssBool,setTotAssBool]=useState(false);

  const [assDataApp,setAssDataApp]=useState([]);
  const [pastAsstDataApp,setPastAssDataApp]=useState([]);
  const [futAsstDataApp,setFutAssDataApp]=useState([]);


  return (
    <Div>
      <NavBtn 
      setA={setAddAssBool}
      setT={setTotAssBool} 
      setP={setPastAssBool} 
      setF={setFutAssBool}/>
      {
        addAssBool?<AssignmentForm
        Total={assDataApp}
        setTotal={setAssDataApp}
        Past={pastAsstDataApp}
        setPast={setPastAssDataApp}
        Future={futAsstDataApp}
        setFuture={setFutAssDataApp}/>:null
      }
      {
        pastAssBool?<PastData PastDta={pastAsstDataApp}/>:null
      }
      {
        futAssBool?<FutureData FutureDta={futAsstDataApp} setFut={setFutAssDataApp}/>:null
      }
      {
        TotAssBool?<TotalData TotalDta={assDataApp}/>:null
      }
    </Div>

  )
}

export default App;

let Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20vw;

  button{
    border: none;
    padding: 11px 15px;
    border-radius: 3px;
  }
`



