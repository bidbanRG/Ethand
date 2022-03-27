import React from 'react'
import styled from 'styled-components'
import Plan from './Plan';
import {BiSearchAlt} from 'react-icons/bi';
import ImageSlider from './ImageSlider'
import {useState,useRef,useContext} from 'react';
import axios from 'axios';
import {LoginContext} from '../Context/metamaskContext';
export default function Middle() {
 
 
	 const {Searched,setSearched,plotContract} = useContext(LoginContext);
   const InputSearch = useRef();
   const [qwert,setqwert] = useState(null);
   const search_handler = () => {
      if(!plotContract) return alert('Wallet is not Connected');
      if(!qwert) return alert('Enter the Address');
      setSearched(qwert);  
   }
	return (
	  <Div>	
	     <Box> 
          <Input placeholder = " Enter the address of the Land owner..." 
            onChange = {(e) => setqwert(e.target.value)}
          />
          <div>
	     <SearchIcon size = '2rem' color = 'white' onClick = { search_handler}/>
	       </div>
	     </Box>

	  </Div>
	)
}
const Input = styled.input`
  width:90%;
  height:60px;
border-radius:30px;
  outline:none;
  border:0px;
  
   background-color:#171717;
   font-size:1.5rem;
   @media(max-width:601px){
  	font-size:0.8rem;
    width:80%;
  	
  }
     @media(max-width:400px){
      width:70%;
     
  	
  }
   color:white;
`
const SearchIcon = styled(BiSearchAlt)`
  
   
   cursor:pointer;

`
const Div = styled.div`
   width:95%;
  border-radius:30px;
  height:80px;
  box-shadow:6px 6px 7px;
  @media(max-width:601px){
  	height:60px
  }
  display:flex;
   justify-content:center;
   align-items:center;
  background-color:#171717;
  text-align:center;
  transform:translateY(-50px);
   margin-inline:auto;
`
const Box = styled.div`
   height:80px;
  @media(max-width:601px){
  	height:60px
  }
  width:100%;
  border-radius:30px;
   display:flex;
    justify-content:space-evenly;
   align-items:center;
  display:flex;
`


