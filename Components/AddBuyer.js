
import React from 'react'
import {LoginContext} from '../Context/metamaskContext';
import {useContext,useEffect,useState} from 'react';
import Typical from 'react-typical'
import styled from 'styled-components';
export default function AddBuyer() {
	const {BuyDetails,setaddbuyer,account,plotContract,addbuyer,setLoading} = useContext(LoginContext);
	if(!account) {
		 alert('Metamask is not connect');
		 setaddbuyer(false);
        return (<div></div>)
	}
   const [Plots,setPlots] = useState(null);
   const [Which,setWhich] = useState(null);
   const [BuyerAddress,setBuyerAddress] = useState(null);
  useEffect(() => {

    const AllPlots = async () => { 
    const Total =  await plotContract.methods.plots(account).call();
    if(!Total) return alert('No Land registered with your address');
    const Plot = [];
    for(let i = 1; i <= Total; i++){
        let ans = await plotContract.methods.Land(account,i).call();
         if(ans.Name.length)
            Plot.push({...ans,which:i});
         
     }      
     setPlots(Plot);

  }
 

   if(addbuyer && !Plots) AllPlots();
    

  },[Plots,addbuyer])
  // console.log(Plots);
  // console.log(Which);
  if(Plots && !Plots.length) {
    alert('No Land is registered with this address');
    setaddbuyer(false);
  }
  const addbuyerhandler = async () => {
    if(!Which) return alert('select the land you want to sell');
    if(!BuyerAddress) return alert("Enter the Buyer's Address");
      setLoading(true);
    if(Which) {
    const ans =  await plotContract.methods.Land(account,Which).call();
   
         if(ans.addBuyer !== '0x0000000000000000000000000000000000000000'){
            setLoading(false);
            return alert(`${ans.addBuyer} is already selected.You can't select a buyer more than Once`);
           
        }
   }
   
    alert("Are you sure you want to sell the selected Land. You can't remove it Later")
      
        const qwerty = BuyerAddress.toLowerCase();
        console.log(qwerty);
     try{   
    await plotContract.methods.Addbuyer(qwerty,Which).send({from:account});
    }
    catch(error) {
        alert(error.message);
    }
        setLoading(false);
        setaddbuyer(false);
  }
	return (
		<Box>
			<Box1>
			      <Header> 
                <h1> Let other to buy your land </h1>
                <Close onClick = {() => setaddbuyer(false)}> <h2> X </h2></Close>
            </Header>
              <Disclaimer> 
                <h3> Remember, Once you add a buyer you can't remove or change it later. It is advised to get 100% sure and then select a buyer for your Land</h3>
              </Disclaimer>
              <Input type = 'text' placeholder = 'Enter the address of the buyer' 
                  autoFocus 
                 onChange = {(e) => setBuyerAddress(e.target.value)}
                />
                  <FetchLand> 
                       {
                           !Plots ? <Load/> : 
                             Plots.map(Plot => 
                                <PlotItems 
                                  name = {Plot.Name} 
                                  area = {Plot.Area} 
                                  address = {Plot.Address}  
                                  cost = {Plot.CostPerUnitArea}
                                  which = {() => setWhich(Plot.which)}
                                 /> 
                              )

                       }
                  </FetchLand>
              <AddBuyerButton onClick = {addbuyerhandler}> <h2>  Add Buyer </h2> </AddBuyerButton>
			</Box1>
		</Box>
	)
}
const Load = () => {
    const Box = styled.div`
        width:40%;
        margin-inline:auto;
        display:flex;
     align-items:center;
   justify-content:center;
    `
    return (<Box> <h1> wait </h1> <h1><Typical
           steps={['......', 500,'     ',500,'......', 500,'     ',500,'......', 500,'     ',500,'......', 500,'     ',500]}
            loop={Infinity}
           wrapper="p"
         /> </h1> </Box>)
}
const PlotItems = ({name,area,address,cost,buyable,which}) => {
    const {buyPlot,setbuyPlot} = useContext(LoginContext);
    const Box = styled.div`
       width:95%;
       display:flex;
       justify-content:center;
       align-items:center;
       height:100%;
       border-radius:30px; 
       margin-bottom:30px;
       background-color:black;
       margin-inline:auto;
     
       
    `
    const Items = styled.div`
       width:90%;

      `
    const Item = styled.span`
    @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@600&family=Titillium+Web:wght@600&display=swap');
font-family: 'Poppins', sans-serif;
      color:white;
       
   `
  const ItemName = styled.span`
     @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300&family=Satisfy&family=Titillium+Web:wght@600&display=swap');
     font-family: 'Satisfy', cursive;
    color:white;
       

  `   
  const Button = styled.div`
      width:50%;
      margin-inline:auto;
      height:50px;
      border-radius:20px;
      background-color:white;
      margin-bottom:30px;
      color:black;
      display:flex;
      justify-content:center;
      align-items:center;
      font-weight:700;
      cursor: pointer;
   `
 const clickhandler = () => {setbuyPlot(true);}
 return(
    <Box>
        <Items>
         <h2> <ItemName> Name: </ItemName>  <Item>{" "} {name} </Item> </h2>
         <h3><ItemName> Area: </ItemName> <Item>{" "}{area} sqm </Item></h3>
         <h4><ItemName> Address:</ItemName> <Item> {" "}{address} </Item></h4>
         <h3><ItemName> Cost/sqm: </ItemName> <Item>{" "}{parseInt(cost) / 1000000000000000000} {" Eth"}  </Item></h3>
          <Button onClick = {which}> <h2> Select </h2> </Button>
        </Items> 
    </Box> 
  )     

}

const FetchLand = styled.div`
   
    width:80%;
    @media(max-width:768px){width:100%}
    max-height:350px;
  
   margin-inline:auto;
   margin-top:20px;
   overflow-y:scroll;
    &::-webkit-scrollbar {
      width: 0px;
    }
}
`
const Disclaimer = styled.div`
  margin-inline:auto;
  color:white;
  margin-top:40px;
  width:90%;
  text-align:center;
`
const AddBuyerButton = styled.div`
   
   width:70%;
   height:60px;
   border-radius:20px;
   background-color:black;
  
   display:flex;
   justify-content:center;
   align-items:center;
   margin-inline:auto;
   margin-top:40px;
  cursor:pointer;
     color:white;
   

   
   
   

`
const Input = styled.input`
   height:50px;
   outline:none;
   border:0px;
   width:80%;
   border-radius:6px;
   font-size:1.5rem;
    @media(max-width:600px){
    font-size:1rem;
 }
   margin-inline:auto;
`
const Header = styled.div`
 width:95%;
 height:60px;
 @import url('https://fonts.googleapis.com/css2?family=Lobster&family=Poppins:wght@300&family=Satisfy&family=Titillium+Web:wght@600&display=swap');
 font-family: 'Lobster', cursive;
color:black;
margin-inline:auto;
margin-top:30px;
display:flex;
 align-items:center;
 justify-content:space-between;
 @media(max-width:600px){
    font-size:0.7rem;
 }
`
const Close = styled.div`
   width:50px;
   height:50px;
   display:flex;
   justify-content:center;
   align-items:center;
   background-color:crimson;
   color:black;
   border-radius:50%;
    @media(max-width:600px){
    width:25px;
   height:25px;
 }
   cursor:pointer;

`
const Box1 = styled.div`
   width:60%;
   height:90vh;
   background-image:url('/addbuyer.gif');
   background-size:cover;

   border-radius:40px;
   opacity:1;
   @media(max-width:768px){
   	 width:100%;
   	 border-radius:0px;
   	 height:100vh;
   }
 margin-inline:auto;
 margin-top:30px;
  display:flex;
 flex-direction:column;
  
`
const Box = styled.div`
    position:fixed;
    z-index:500;
    background:white;
  opacity:0.9;
    top:0;
    left:0;
    bottom:0;
    right:0;
   
    
`