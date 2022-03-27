import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

export default function ImageSlider() {
   

  
 
	var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
     
    };
	return (
		
			  
        <Caurosel {...settings}>
	      <div> <Bux> 1 </Bux>  <Details/></div> 
         <div>    <Bux> 2</Bux>  <Details/></div> 
       <div>       <Bux>3 </Bux>  <Details/></div> 
       <div>        <Bux> 4</Bux> <Details/> </div> 
      <div>          <Bux> 5</Bux> <Details/> </div> 
     <div>         <Bux>6 </Bux>  <Details/></div> 
       <div>        <Bux>7 </Bux> <Details/></div> 
      <div>          <Bux>8 </Bux> <Details/> </div> 
       <div>          <Bux>9</Bux>  <Details/> </div> 
        <div>         <Bux>10 </Bux> <Details/> </div> 
         <div>        <Bux>11</Bux> <Details/> </div> 
         <div>        <Bux>12 </Bux>  <Details/></div> 
         <div>        <Bux>13</Bux> <Details/> </div> 
          <div>         <Bux>14 </Bux> <Details/></div>  
         <div>        <Bux>15</Bux>   <Details/></div>           
           </Caurosel>
		
	)
}
const Bux = styled.div`
 
  height:500px;
 
  min-width:300px;
  margin-right:50px;
  margin-left:50px;
 border-radius:20px;
 background:black;
 background-image:url('../Images/Land1.jpg');
 background-size:cover;
   color:white;
   @media(max-width:400px){
     min-width:100%;
   }

`
const Details = styled.div`
   height:200px;
   width:40%;
   background-color:white;
   margin-inline:auto;
   transform:translateY(-110px);
   border-radius:20px;

`
const Caurosel = styled(Slider)`
  height:600px;
  width:95%;
  margin-left:auto;
  margin-right:auto;
  margin-top:auto;
  margin-bottom:auto;


`
