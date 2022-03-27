import Head from 'next/head'
import Header from '../Components/Header';
import styled from 'styled-components'
import Middle from '../Components/Middle';
import Lend from '../Components/Lend';
import PlotDetails from '../Components/PlotDetails';
import AddBuyer from '../Components/AddBuyer';
import styles from '../styles/Home.module.css'
import {LoginContext} from '../Context/metamaskContext';
import {useContext,useEffect,useState} from 'react' 
import BuyPlot from '../Components/BuyPlot'; 
export default function Home() {
 const {Loading,buyPlot,addbuyer} = useContext(LoginContext);
  


  return (
     
     
      <Box>
       { buyPlot && <BuyPlot/>}
        { addbuyer && <AddBuyer/>}
         { Loading && <Loader> <SpinRoller/> </Loader>}  
          <Header/>
           <Middle/>
           <PlotDetails/>
           <Lend/>
        
               
      </Box>
   
    )
}
import React from 'react'

function SpinRoller() {
  return (
    <div className = {styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}
const Box = styled.div`
 
   max-width:2200px;
  margin-inline:auto;
  
`

const Loader = styled.div`
  
    position:fixed;
    background-color:white;
    opacity:0.6;
   top:0;
   bottom:0;
   left:0;
   right:0;
   z-index:1000;
   display:flex;
   justify-centent:center;
   align-items:center;
`
