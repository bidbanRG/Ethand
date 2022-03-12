   import React , {useState,useEffect} from 'react';
  import Web3 from 'web3';


const LoginContext = React.createContext();

const  LoginProvider = ({children})=>{
  const [account, setaccount] = useState(null)
   const [web3,setWeb3] = useState('No');
   const Connect =  async ()=>{
     if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setaccount(accounts[0]);
       web3 = new Web3(window.ethereum);
        setWeb3(web3);      
  }
  else return alert('Please Intall Install MetaMask');
}



     return (
       <LoginContext.Provider
           value = {{
               account,
               web3,
               Connect,
           }}
        >
           {children}    
       </LoginContext.Provider>
   )
}


export {LoginProvider,LoginContext};