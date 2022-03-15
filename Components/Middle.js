import React from 'react'
import styled from 'styled-components'
import Plan from './Plan';
export default function Middle() {

	 const Plans = [
   {
   	  description:'It is an EMI system with 1.5% Interest, you have to pay monthly for certain years',
   	  accounts:2,
   	  Limit:'10 ethers',
   	  id:1,
      theme:'linear-gradient(16deg,crimson,#752025,#92282E,#B73239)',
      color:'crimson'
   },
    {
    	description:'You have pay to monthly with an Interest of 2% per year',
    	Limit:'5 ethers',
    	accounts:2,
    	id:2,
        theme:'linear-gradient(16deg,teal,#1A5E5A,#207571,#28928D)',
        color:'#1A5E5A'
    },
    {
    	description:'If you deposited Ether in past you got some badges use those to get Ether',
    	Limit:'1.5 ethers',
    	accounts:0,
    	id:3,
        theme:'linear-gradient(16deg,#5A1A5E,#48154B,#7B487E,#956D98)',
        color:'purple'
    }

 ]

	return (
	  <Div>	
	  <h1> Our Plans</h1>
		<Box>
		    
		  {
				Plans.map( plan =>{
                    return <Plan desc = {plan.description} 
                         Limit = {plan.Limit}
                         accounts = {plan.accounts}
                         key = {plan.id} 
                         theme = {plan.theme}
                         color = {plan.color}
                    /> 
				})
			}
		</Box>
	  </Div>
	)
}
const Div = styled.div`
   width:100%;
  
  text-align:center;
   
`
const Box = styled.div`
  width:100%;
  height:420px%;
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  align-items:center;
   
`


