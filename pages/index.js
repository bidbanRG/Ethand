import Head from 'next/head'
import Header from '../Components/Header';
import styled from 'styled-components'
import Middle from '../Components/Middle';
import Lend from '../Components/Lend';
import {useContext,useEffect,useState} from 'react' 

export default function Home() {
 
  return (
   
      <>
          <Header/>
          <Middle/>
          <Lend/>
          <video autoPlay>
          <source src="/landback.mp4" type="video/mp4"/>  
          </video>
      </>
    
    )
}

const Box = styled.div`
   height:100%;
   width:100%;
  
`

