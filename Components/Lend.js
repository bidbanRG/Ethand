import React from 'react'
import styled from 'styled-components';
import Typical from 'react-typical'
import {LoginContext} from '../Context/metamaskContext';
import {useContext,useEffect,useState} from 'react';
import { useInView } from 'react-intersection-observer';
export default function Lend() {
const words = 'Ethand is a platform where you can buy land with zero paper works. Ethand uses Ethereum Blockchain where all required information related to your land is secure and safe'
  const { ref, inView, entry } = useInView({
     threshold: 0.5,
  });
 const {BuyDetails,setaddbuyer,plotContract,setLoading,account} = useContext(LoginContext);
 
 
	return (
    <>
		<Box>
		  <Box1>
      <div>
		   <h2>
		  
	
           <Typical
             steps={[`${words}`,500]}
             loop={Infinity}
             wrapper="p"
             />
         
         
        
        </h2>

        <Buttons> 

          <Button onClick = {() => setaddbuyer(true)}> add Buyer </Button>
          <Button> <a href = "https://add-details-page1.vercel.app/" target = "_blank"> add Details </a></Button>
         
        </Buttons>
        </div>
		  </Box1>
      	
		</Box>
      
     
     </>
	)
}



const Buttons = styled.div`
 
 

  margin-left:30px;;
  display:flex;
 justify-content:center;

`
const Drop = styled.div`
  
   width:100%;
   height:600px;
   background-color:teal;

`
const Box = styled.div`
 
   width:100%;
  @media(max-width:799px){
    height:300px;
    background-position:center;
 }
    height:500px;
  display:flex;
 
  background-size:cover;
   
  background-image:url("/img1.jpg");
  
`

const Button = styled.div`
   padding:7px 9px;
   height:40px;
   color:skyblue;
   cursor:pointer;
  box-shadow:5px 5px 5px black;
   margin-left:10px;
   background-color:white;
   font-size:1rem;
   @media(max-width:500px){
     font-size:0.5rem;
   }
  font-weight:600;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
`
const Box1 = styled.div`
   display:flex;
     margin-left:10px;
    height:100%;
   
    @media(max-width:800px){
      font-size:50%;
      display:flex;
      align-items:none;
      justify-content:none;
    }
    width:50%;
    font-size:100%;
    justify-content:center;
    align-items:center;
    text-align:center;
    word-wrap:break-word;
`