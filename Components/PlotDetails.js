import React from 'react'
import {LoginContext} from '../Context/metamaskContext';
import styles from '../styles/Home.module.css'
import {useContext,useEffect,useState} from 'react';
import Web3 from 'web3';
import styled from 'styled-components';
export default function PlotDetails() {

const {account,web3,plotContract,Searched,buyPlot,setbuyPlot,setBuyDetails,BuyDetails,setSearched,setLoading} = useContext(LoginContext);	
 const [lands,setlands] = useState(null);
 
 const getTotalPlots = async () => {	
   	if(!Searched) return;
   	const LANDS = [];
    setLoading(true);
    let Total;
  try{  
    Total =  await plotContract.methods.plots(Searched).call();}
   catch(error){
    console.log(error.message);
    alert(error.message);
   }
   for(let i = 1; i <= Total; i++){
   const myland = await plotContract.methods.Land(Searched,i).call();
   console.log(myland);
    LANDS.push({...myland,which:i});
 }
   setlands(LANDS);
 
    setLoading(false);    
 
   if(lands && !lands.length)
     return alert('No Land Found');
  
  }

useEffect(()=>{
 getTotalPlots();
},[Searched]);
 
 
 if(lands && lands.length === 0){
    return <div style = {{marginInline:'auto'}}> <h1> No Land Found... </h1> </div>
 }
 
	return (
		<div>
            {
            	(!lands)? <></>
            	   : 
            	  lands.map((land) => 
                 <PlotItems 
                        name = {land.Name} 
                        address = {land.Address} 
                        area = {land.Area}
                        cost = {land.CostPerUnitArea}
                        pos = {land.addBuyer}
                        acct = {account}
                        which = {land.which}
                     />
            	  )
            } 			
		</div>
	)
}
const Load = () => {
    return (<div className={styles.lds_facebook}><div></div><div></div><div></div></div>)
}
const PlotItems = ({name,area,address,cost,buyable,pos,acct,which}) => {
    if(!name.length) return (<div> </div>);
    const {buyPlot,setbuyPlot,setBuyDetails,BuyDetails,setPlotnumber,Searched,setSearched,account,plotContract} = useContext(LoginContext);
    const Box = styled.div`
       width:95%;
       display:flex;
       justify-content:center;
       align-items:center;
       height:300px;
       border-radius:30px; 
       margin-bottom:30px;
       background-color:whitesmoke;
       margin-inline:auto;
       box-shadow:5px 5px 6px;
       
    `
    const Items = styled.div`
       width:90%;

      `
    const Item = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@600&family=Titillium+Web:wght@600&display=swap');
font-family: 'Poppins', sans-serif;
      color:gray;
       
   `
  const ItemName = styled.span`
     @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300&family=Satisfy&family=Titillium+Web:wght@600&display=swap');
     font-family: 'Satisfy', cursive;
    
       

  `   
  const Button = styled.div`
      width:50%;
      margin-inline:auto;
      height:75px;
      border-radius:20px;
      background-color:black;
      margin-bottom:30px;
      color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      font-weight:700;
      opacity:${ prop => prop.setClick ? '1' : '0.6'};
      @media(max-width:700px){
        width:60%;
        height:65px;
        font-size:1rem;
         font-weight:500;
      }
      cursor:${ prop => prop.setClick ? 'pointer' : ''};


  `
 const clickhandler = async () => {
   if(acct !== pos.toLowerCase()) {
   
    return alert("You Can't buy this Land")
 }
 let Name;
 try{
    Name = await plotContract.methods.ACCOUNTS(account).call();
  }
  catch(error){
    return alert(error.message);
  }
  
 setBuyDetails({
    Name:Name,
    Area:area,
    Address:address,
    Cost:cost,
    Which:which,
    Searched:Searched
 })
   console.log(BuyDetails);
     setSearched(null);
    setbuyPlot(true);
}
 return(
    <Box>
        <Items>
         <h2> <ItemName> Name: </ItemName>  <Item>{" "} {name} </Item> </h2>
         <h3><ItemName> Area: </ItemName> <Item>{" "}{area} sqm </Item></h3>
         <h3><ItemName> Address:</ItemName> <Item> {" "}{address} </Item></h3>
         <h3><ItemName> Cost/sqm: </ItemName> <Item>{" "}{parseInt(cost) / 1000000000000000000} {" Eth"}  </Item></h3>
          <Button setClick = {acct === pos.toLowerCase()}  onClick = {clickhandler}> <h2> Proceed to Buy </h2> </Button>
        </Items> 
    </Box> 
  )     

}
