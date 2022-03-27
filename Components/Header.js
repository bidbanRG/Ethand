import React from 'react'
import styled from 'styled-components'
import {useContext,useEffect,useState} from 'react';
import {LoginContext} from '../Context/metamaskContext'
import {FaEthereum} from 'react-icons/fa'
import Typical from 'react-typical'
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
          <source src='/landback.mp4' type="video/mp4"/>  
          </video>
           <Box scroll = {Scrollto}>
           <HeaderBox scroll = {Scrollto}>
		     <Box1 scroll = {Scrollto}> 
             
                 Ethand 
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
	  </HeaderBox>  
              
           </Box>
             <Text> 
                <h3><Typical
                 steps={["Buy Land with No paper work and  without any Third Party Involvement",1]}
                 loop={Infinity}
                  wrapper="p"
                    /> </h3>

                    

             </Text>	
             
               
            
		     </div>
            
		
	)
}
 const Text = styled.div`
    width:50%;
   
   
   display:flex;
   margin-top:20%;
   @media(max-width: 801px){
    font-size:0.8rem;
   }
     @media(max-width: 700px){
    font-size:0.5rem;
   }
    font-size:200%;
       color:black;
   margin-left:30px;
   &h3{text-align:center;}
`
 const ConnectWallet = styled.div`
    cursor:pointer;
 `
 const Img = styled.img`
   height:3rem;
   margin-right:5px;


 `
const Box = styled.div`
 
    position:fixed;
    height:4rem;
    display:flex;
    flex-direction:column;
    z-index:100;
    top:0;
    left:0;
    right:0;
   color:white;

`
const HeaderBox = styled.div`
width:100%;
height:100%;
 background-color: ${props => 
       props.scroll?'#3C111C':""};
    transition: background-color 1s;  
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const Box1 = styled.div`
  
   &img{
     height:50px;
   }
   font-size:1.5rem;
   color:${props => 
       props.scroll?'white':'black'};
   font-weight:800;
// @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300&family=Titillium+Web:wght@600&display=swap');
    display:flex;
   
       
       
    
`
const SearchBar = styled.div`
   
     min-width:75%;
     min-height:70px;
     background-color:white;
    
     border:7px solid #3C111C;
       border-bottom-right-radius:20px;
        border-bottom-left-radius:20px;
     margin-inline:auto;
    
     
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