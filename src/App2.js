import React, {useState, useEffect } from 'react';
import {TextField , Button } from '@mui/material';
// import Task from './Task';
// import './App.css';

import { TaskContractAddress } from './config.js';
import {ethers} from 'ethers';
import TaskAbi from './utils/TaskContract.json'

function App() {
    const [tasks,setTasks]=useState([]);
    const [input, setInput]=useState('');
    const [currentAccount, setCurrentAccount] = useState('');
    const [correctNetwork, setCorrectNetwork] = useState(false);
    const [address,setAddress] = useState();
    
    const getAllMedicine = async() => {
    try {
      const {ethereum} = window
  
      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )
        let allMedicine = await TaskContract.GetAllMedicine(address);
        setTasks(allMedicine);
      } else {
        console.log("Ethereum object doesn't exist");
      }
    } catch(error) {
      console.log(error);
    }
  }
    
    useEffect(() => {
        getAllTasks()
      },[]);
      
  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        console.log('Metamask not detected')
        return
      }
      let chainId = await ethereum.request({ method: 'eth_chainId'})
      console.log('Connected to chain:' + chainId)

      const rinkebyChainId = '0x5'

      if (chainId !== rinkebyChainId) {
        alert('You are not connected to the Rinkeby Testnet!')
        return
      } else {
        setCorrectNetwork(true);
      }

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })

      console.log('Found account', accounts[0])
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.log('Error connecting to metamask', error)
    }
  }  
  const AddMedicineByDocter= async (e)=>{
    //we want to take the input or take the data from the user
    //first we call the method getAllPatient from the smart contract
    // medicine_name,quantity,patient_address,date,year,month

    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )

        TaskContract.addTask(task.taskText, task.isDeleted)
        .then(response => {
          setTasks([...tasks, task]);
          console.log("Completed Task");
        })
        .catch(err => {
          console.log("Error occured while adding a new task");
        });
        ;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error submitting new Tweet", error);
    }

    setInput('')
  };
  const AddMedicals= async (e)=>{
    //this is call by the docter only for the adding the medical
    //with name and address (city name) in bytes32 
    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )

        TaskContract.addTask(task.taskText, task.isDeleted)
        .then(response => {
          setTasks([...tasks, task]);
          console.log("Completed Task");
        })
        .catch(err => {
          console.log("Error occured while adding a new task");
        });
        ;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error submitting new Tweet", error);
    }
    setInput('')
  };
  
  const SubstractMedicine= async (e)=>{
    //that is call at the medical level 
    //it get that patient through the getpatient in the contract
    //then we call substractmedicine method
    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )

        TaskContract.addTask(task.taskText, task.isDeleted)
        .then(response => {
          setTasks([...tasks, task]);
          console.log("Completed Task");
        })
        .catch(err => {
          console.log("Error occured while adding a new task");
        });
        ;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error submitting new Tweet", error);
    }

    setInput('')
  };
  
  const getMedicals = async (e)=>{
    //that is call at the medical level 
    //it get that patient through the getpatient in the contract
    //then we call substractmedicine method
    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )
        //for getting all medical that present to the particular 
        // account

        TaskContract.addTask(task.taskText, task.isDeleted)
        .then(response => {
          setTasks([...tasks, task]);
          console.log("Completed Task");
        })
        .catch(err => {
          console.log("Error occured while adding a new task");
        });
        ;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error submitting new Tweet", error);
    }

    setInput('')
  };
  const GetAllMedicines= async (e)=>{
    //that is call at the medical level 
    //it get that patient through the getpatient in the contract
    //then we call substractmedicine method
    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )

        TaskContract.addTask(task.taskText, task.isDeleted)
        .then(response => {
          setTasks([...tasks, task]);
          console.log("Completed Task");
        })
        .catch(err => {
          console.log("Error occured while adding a new task");
        });
        ;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error submitting new Tweet", error);
    }

    setInput('')
  };

  const getCount_medical= async (e)=>{
    //that is call at the medical level 
    //it get that patient through the getpatient in the contract
    //then we call substractmedicine method
    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )

        TaskContract.addTask(task.taskText, task.isDeleted)
        .then(response => {
          setTasks([...tasks, task]);
          console.log("Completed Task");
        })
        .catch(err => {
          console.log("Error occured while adding a new task");
        });
        ;
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch(error) {
      console.log("Error submitting new Tweet", error);
    }

    setInput('')
  };
  
  

  const deleteTask = key => async() => {
    console.log(key);

    // Now we got the key, let's delete our tweet
    try {
      const {ethereum} = window

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(
          TaskContractAddress,
          TaskAbi.abi,
          signer
        )
        let deleteTaskTx = await TaskContract.deleteTask(key, true);
        let allTasks = await TaskContract.getMyTasks();
        setTasks(allTasks);
      } else {
        console.log("Ethereum object doesn't exist");
      }

    } catch(error) {
      console.log(error);
    }
  }
return(<>

</>)
}
export default App;