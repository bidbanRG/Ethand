import React from 'react'
import {LoginContext} from '../Context/metamaskContext';
import {useContext,useEffect,useState} from 'react';
import styled from 'styled-components';
export default function BuyPlot() {
	const {BuyDetails,setbuyPlot,plotContract,account,setLoading} = useContext(LoginContext);
     const {Name,Area,Address,Cost,Searched,Which} = BuyDetails;
     const TotalCost = () => {
        const cost = parseInt(Cost);
        const area = parseInt(Area);
        return (area * cost);
     }
   const buyhandler = async () => {
      console.log(Name,Which,Searched);
     if(!Name.length) return alert('something went wrong'); 
      setLoading(true);
      try{
      await plotContract.methods.Buy(Searched,Which,Name,Address,Cost,Area).send({
         from:account,
         value:TotalCost()
      })
   }
   catch(error) {
       console.log(error);
      alert(error.message)
   }
      setLoading(false);
      setbuyPlot(false);
   }  
	return (
		<Box>
		   
			 <Box1>
             <Header> 
                <h1> You are just one click away </h1>
                <Close onClick = {() => setbuyPlot(false)}> <h2> X </h2></Close>

             </Header>
			    <Box2>
			        <h2> Name {": "} <Items>{Name}</Items> </h2>
			        <h2> Address {": "} <Items>{Address}</Items> </h2>
			        <h2> Area {": "} <Items>{Area} {" msq"}</Items></h2>
			        <h2> Cost/sqm {": "}<Items> {Cost / Math.pow(10,18)} Eth</Items></h2>
                 <h2> Total {": "} <Items> {TotalCost() / Math.pow(10,18)} Eth </Items> </h2>
             </Box2>
			          <Button onClick = {buyhandler}> <h2>  BUY </h2></Button>
			 </Box1>
			  

		</Box>
	)
}
const Header = styled.div`
 width:95%;
 height:60px;
 @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300&family=Satisfy&family=Titillium+Web:wght@600&display=swap');
 font-family: 'Lobster', cursive;
color:black;
margin-inline:auto;
margin-top:30px;
display:flex;
 align-items:center;
 justify-content:space-between;
 @media(max-width:600px){
    font-size:0.7rem;
 }
`
const Button = styled.div`
   
    width:80%;
    height:70px;
    background-color:black;
    border-radius:30px;
    margin-inline:auto;
   display:flex;
   justify-content:center;
   align-items:center;
   color:white;
  cursor:pointer;
`
const Items = styled.span`
    color:white;
    font-size:1.5rem;
    @media(max-width:600px){
      font-size:0.8rem;
    }
`
const Box2 = styled.div`
   width:90%;
   @media(max-width:600px){
      font-size:0.8rem;
   }

   margin-inline:auto;
   display:flex;
   flex-direction:column;
   margin-top:30px;
   color:#13ecec;
`
const Close = styled.div`
   width:50px;
   height:50px;
   display:flex;
   justify-content:center;
   align-items:center;
   background-color:crimson;
   color:black;
   border-radius:50%;
    @media(max-width:600px){
    width:25px;
   height:25px;
 }
   cursor:pointer;

`
const Box1 = styled.div`
   width:60%;
   height:70vh;
   background-image:url('/buyback.gif');
   background-size:cover;

   border-radius:40px;
   opacity:1;
   @media(max-width:768px){
   	 width:100%;
   	 border-radius:0px;
   	 height:100vh;
   }

  display:flex;
 flex-direction:column;
  
`


const Input = styled.input`
   height:50px;
   outline:none;
   border:0px;
   border-radius:6px;
   font-size:1.5rem;
   @media(max-width:600px){
      font-size:1rem;
   }
`
const Box = styled.div`
    position:fixed;
    z-index:500;
    background:white;
  opacity:0.9;
    top:0;
    left:0;
    bottom:0;
    right:0;
    display:flex;
    justify-content:center;
    align-items:center;
    
`