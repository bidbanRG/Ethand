import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

import Header from '../Components/Header';
import {useContext,useEffect,useState} from 'react' 
export default function Home() {
     let api_key = '4023cd363965fae6358b2678800cc837';
 const [movies,Setmovies] = useState(null)
 useEffect(()=>{
   const movies = async ()=>{
    
    const trend = await fetch('https://api.themoviedb.org/3/movie/upcoming?' + new URLSearchParams({
        api_key: api_key
    }))
    const trending = await trend.json();
    console.log(trending.results);
      Setmovies(trending.results);
   }
  
   movies();
   
 },[])
  return (
   
      <Box>
          <Header/>
       {  (!movies) ? 'Loading....'
           :
 
          movies.map((movie)=>{
            return <Tittle key = {movie.id}>  {movie.title} </Tittle>      
          })
       }  
      </Box>
    
    )
}

const Box = styled.div`
   height:100vh;
   width:100wh;
   background-color:#171717;
`
const Tittle = styled.h4`
   color:white;
`