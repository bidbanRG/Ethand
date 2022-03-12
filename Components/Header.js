import React from 'react'
import styled from 'styled-components'
import {useContext,useEffect,useState} from 'react';
import {LoginContext} from '../Context/metamaskContext'
import axios from "axios";
export default function Header() {

 const {account,web3,Connect} = useContext(LoginContext);


	return (
		
		     <Head> 
		     <Box> <h2> getTickets </h2> </Box>
		     <Box>
		     <LoginButton onClick = {()=>Connect()}> 
		      <ConnectButton>
                { account ? 
              	  account.substr(0,5) + '.....' + account.substr(-5,5) : 
                   'Connect Wallet' 
                }
              </ConnectButton>
		     </LoginButton>
		     </Box>	
		     </Head>
		
	)
}

const Head  = styled.div`
    width:100%;
    margin-inline:auto;
    text-align:center;
    font-size:20px;
    background-color:black;
    display:flex;
   justify-content:space-around;
   align-items:center;
    color : white;
    height:3rem;
`


const Box = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300&family=Titillium+Web:wght@600&display=swap');
    display:flex;
    justify-content:center;
    align-items:center;
    & h2{
    	 font-family: 'Lobster', cursive;
    }
`
const ConnectButton = styled.div`
   padding:0px 5px;
   font-weight:500;
   display:flex;
   justify-content:center;
   align-items:center;
   cursor:pointer;
  `
const LoginButton = styled.div`
   background-color:#171717;
   border-radius:20px;
   font-size:20px;	
   margin-left:50px;
   padding:3px 5px;
   color:#2D68C4;
`