import React from 'react'
import styled from 'styled-components'
import {useContext,useEffect,useState} from 'react';
import {LoginContext} from '../Context/metamaskContext'
import {FaEthereum} from 'react-icons/fa'
import {lawra} from '../Pages/landback.mp4'; 
import styles from '../styles/Home.module.css'

export default function Header() {
 const [Scrollto,setScrollto] = useState(false);
 const {account,web3,Connect} = useContext(LoginContext);
      
     useEffect(()=>{
        const handlescroll = (e)=>{
            if(window.scrollY >= 100)
               setScrollto(true)
            else setScrollto(false)
        }
          window.addEventListener('scroll',handlescroll)
          return ()=>{
             window.removeEventListener('scroll',handlescroll)
          }
     },[])
  
	return (
		
		     <div className = {styles.header_box}>
          
         <video autoPlay muted loop>
          <source src={lawra} type="video/mp4"/>  
          </video>
           <Box scroll = {Scrollto}>
		     <Box1 scroll = {Scrollto}> 
               Ethank 
               <FaEthereum size = '2rem' color = 'gray'/>
              </Box1>
		     
		     <LoginButton onClick = {()=>Connect()} scroll = {Scrollto}> 
		        <ConnectWallet>
                {  account ? 
              	    account.substr(0,5) + '.....' + account.substr(-5,5) : 
                    'Connect Wallet'
                }
             </ConnectWallet>
		     </LoginButton>  
		     
           </Box>
             <Text> 
                <h3> Welcome to Ether Bank Get Ethers and Lend Ethers on an interest... </h3>

             </Text>	
             
            
            
		     </div>
		
	)
}

 const Text = styled.div`
    width:50%;
    height:100%;
   display:flex;
   align-items:center;
   justify-content:center;
    font-size:3vw;
   margin-left:30px;
   &h3{
       text-align:center;
       
         
   }
`
 const ConnectWallet = styled.div`
    cursor:pointer;
 `
const Box = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
    position:fixed;
    height:4rem;
  
    z-index:100;
    top:0;
    left:0;
    right:0;
   color:white;
   background-color: ${props => 
       props.scroll?'#3C111C':""};
    transition: background-color 1s;  

`
const Box1 = styled.div`
  
  
   font-size:1.5rem;
   color:${props => 
       props.scroll?'white':'black'};
   font-weight:800;
// @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300&family=Titillium+Web:wght@600&display=swap');
    display:flex;
   
       
       
    
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
   
   font-weight:600;
   font-size:1.2rem;	
   display:flex;
   justify-content:center;
   align-items:center;
   margin-left:50px;
   padding:5px 10px;
   color:#2D68C4;
   border-radius:20px;
   background-color:${props => 
   props.scroll?'black':''};
`