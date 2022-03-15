import React from 'react'
import styled from 'styled-components';
import Typical from 'react-typical'
import { useInView } from 'react-intersection-observer';
export default function Lend() {
const words = 'Deposit Ether and Get more in return and Badges with which you can get Ether for free'
  const { ref, inView, entry } = useInView({
     threshold: 0.5,
  });
	return (
		<Box>
		  <Box1>
		   <h2>
		   <div ref={ref}>
		 {!inView ?   
		   <div></div>
		 :
           <Typical
             steps={[`${words}`,1]}
             loop={Infinity}
             wrapper="p"
             />
         
         }
            <Button> Let's Deposit </Button>
         </div>
            </h2>
		  </Box1>	
		</Box>
	)
}
const Box = styled.div`
  height:500px;
  width:100%;
  
  margin-top:50px;
  background-size:cover;
  background-image:url("/img1.jpg");
  background-position:60%;
`
const Button = styled.div`
   width:180px;
   height:40px;
   color:skyblue;
   cursor:pointer;
  box-shadow:5px 5px 5px black;
   
   background-color:white;
   font-size:1.5rem;
   margin:auto;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;

`
const Box1 = styled.div`
   display:flex;
     margin-left:10px;
    width:50%;
    height:100%;
    font-size:2vw;
    justify-content:center;
    align-items:center;
    text-align:center;
    word-wrap:break-word;

`

