   import React , {useState,useEffect} from 'react';
  import Web3 from 'web3';


const LoginContext = React.createContext();

const  LoginProvider = ({children})=>{
  const [account, setaccount] = useState(null)
   const [web3,setWeb3] = useState(null);
   const [plotContract,setplotContract] = useState(null);
   const [Searched,setSearched] = useState(null);
   const [buyPlot,setbuyPlot] = useState(false);
   const [Loading,setLoading] = useState(false);
   const [BuyDetails,setBuyDetails] = useState({});
   const [addbuyer,setaddbuyer] = useState(false);
   const [Myplots,setMyplots] = useState([]);
   const [Plotnumber,setPlotnumber] = useState(null);
   const Connect =  async ()=>{
     if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setaccount(accounts[0]);
       web3 = new Web3(window.ethereum);
        setWeb3(web3);
      //  0x803CBDb2F882D0AE2EAc38B8a50cc2E23D1DA978   
    }
    else return alert('Please Install MetaMask');
 }

 
    useEffect(()=>{

      if(web3 && account){
     
        const ABI = [
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            },
            {
                "internalType": "int256",
                "name": "which",
                "type": "int256"
            }
        ],
        "name": "Addbuyer",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "Name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "Address",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "Area",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "CostPerUnitArea",
                "type": "int256"
            }
        ],
        "name": "addDetails",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "addName",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address payable",
                "name": "recipent",
                "type": "address"
            },
            {
                "internalType": "int256",
                "name": "which",
                "type": "int256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "Address",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "Cpa",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "Ar",
                "type": "int256"
            }
        ],
        "name": "Buy",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "ACCOUNTS",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "name": "Land",
        "outputs": [
            {
                "internalType": "string",
                "name": "Name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "Address",
                "type": "string"
            },
            {
                "internalType": "int256",
                "name": "Area",
                "type": "int256"
            },
            {
                "internalType": "int256",
                "name": "CostPerUnitArea",
                "type": "int256"
            },
            {
                "internalType": "address",
                "name": "addBuyer",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "plots",
        "outputs": [
            {
                "internalType": "int256",
                "name": "",
                "type": "int256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
   const Contract_address = '0xb7a5172f20Bda4dC6482AA598c785Cdc3e6B147c';
   const new_contract = new web3.eth.Contract(ABI,Contract_address);
   setplotContract(new_contract);
       console.log(plotContract);
    
    

  }
 },[account,web3])
  
 

     return (
       <LoginContext.Provider
           value = {{
               account,
               web3,
               plotContract,
               Searched,
               setSearched,
               Connect,
               Loading,
               setLoading,
               buyPlot,
               setbuyPlot,
               BuyDetails,
               setBuyDetails,
               addbuyer,
               setaddbuyer,
               Myplots,
               Plotnumber,
               setPlotnumber
           }}
        >
           {children}    
       </LoginContext.Provider>
   )
}


export {LoginProvider,LoginContext};