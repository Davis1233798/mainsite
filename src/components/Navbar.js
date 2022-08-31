import React from 'react'
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import '../css/Navbar.css'

const providerOptions = {
  /* See Provider Options Section */
};

function Navbar() {
    async function walletConnect(){
        try {
            let web3Modal = Web3Modal({
                cacheProvider:false,
                providerOptions
            });
            const web3ModalInstance = await web3Modal.connect();
            const web3ModalProvider = new ethers.providers.Web3Provider(web3ModalInstance);
            console.log(web3ModalProvider);
        } catch (error) {
            console.error("error",error);
        }
    }

  return (
  
  
    <div className='main'>
        <div className='header'>
            <img 
            src='https://opensea.mypinata.cloud/ipfs/QmfPC9jKTBUuqybsvExPswhx42hbL9QwFtqczKS6S9nBx7'  
            className='header-icon'
            alt='header-icon' />
        </div>
        <div className='functions'>
            <div className='function-button' >ERC-20</div>
            <div className='function-button'>ERC-721</div>
            <div className='function-button'>ERC-721A</div>
            <div className='function-button'>ERC-777</div>
            <div className='function-button'>ERC-1155</div>
        </div>
        <div className='walletConnect'>
            <button onClick={walletConnect}>wallet connect</button>
        </div>
    
    </div>
  )
}

export default Navbar