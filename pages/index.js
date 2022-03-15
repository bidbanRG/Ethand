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
      </>
    
    )
}

const Box = styled.div`
   height:100%;
   width:100%;
  
`

