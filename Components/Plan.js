import React from 'react'
import styled from 'styled-components'
import {SiEthereum} from 'react-icons/si';
export default function Plan({desc,Limit,accounts,theme,color}) {

	return (
      
		  <Box theme = {theme} color = {color}>
			 <h2> Max : {Limit} </h2>
			<Text>
              <Bullet>  <SiEthereum size = '1.5rem'/> </Bullet>
			    <h4>  {desc} </h4>  

			</Text> 
			<Text>
			   <Bullet>   <SiEthereum size = '1.5rem'/> </Bullet>
			     <h4> You Need to provide atleast {accounts} MetaMask accounts address </h4> 
		    </Text>
		    <Button theme = {theme} color = {color}> Apply </Button>
		</Box> 
      
	)
}
const Bullet = styled.div`
   min-width:20px;
  margin-left:5px;
  margin-right:8px;
  display:flex;
  transform:translateY(-10px);
   
`
const Button = styled.div`
 font-size:1.4rem;
 margin-right:auto;
 margin-left:auto;
 text-align:center;
 border-radius:20px;
  width:70%;
  margin-top:20px;
  font-weight:800;
 display:flex;
  justify-content:center;
   align-items:center;
   color:white;
   cursor:pointer;
  height:50px;
  background:${props=>props.theme};
  :hover{
  	 background:white;
  	 color:${props=>props.color};
  }

`
const Box = styled.div`
   width:300px;
   height:400px;
   border:8px solid ${props=>props.color};
   border-radius:20px;
    text-align:center;
    margin-inline:auto;
   display:flex;
   flex-direction:column;
  margin-top:20px;
    margin-left:10px;
  margin-right:10px;
   @media(max-width:600px){
   	  margin-top:20px;
   }
   :hover{
   	   background:${props=>props.theme};
          box-shadow:6px 4px 7px; 
         transition:background 5s;
   }
`
const Text = styled.div`
   width:90%;
   display:flex;
  text-align:left;
   align-items:center;
  
      &h4{
   	  color:black;
   	  font-weight:300;
   	  }
   &h2{
   	   font-weight:700;
   	   color:black; 

   }
`