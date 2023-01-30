import React, { useState } from "react";
import { customHttpProvider, daiABI } from "./config";
import { Framework } from "@superfluid-finance/sdk-core";
import { Button, Form, FormGroup, FormControl, Spinner } from "react-bootstrap";
import "./batchCall.css";
import { ethers,Contract} from "ethers";
import {abi} from "./config2";
//will be used to approve super token contract to spend DAI
async function daiApprove(approveAmount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    const sf = await Framework.create({
      chainId: 5,
      provider: provider
    });
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  const signer = provider.getSigner();
  

  const DAI = new ethers.Contract(
    "0x88271d333C72e51516B67f5567c728E702b3eeE8",
    daiABI,
    signer
  );

  console.log(DAI);
  try {
    console.log("approving DAI spend");
    await DAI.approve(
      "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
      ethers.utils.parseEther(approveAmount.toString())
    ).then(function (tx) {
      console.log(
        `Congrats, you just approved your DAI spend. You can see this tx at https://goerli.etherscan.io/tx/${tx.hash}`
      );
    });
  } catch (error) {
    console.error(error);
  }
}

//where the Superfluid logic takes place
async function executeBatchCall(upgradeAmt, recipient, flowRate) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  
    const sf = await Framework.create({
      chainId: 5,
      provider: provider
    });
  const chainId = await window.ethereum.request({ method: "eth_chainId" });
  const signer = provider.getSigner();
  
  const DAIx = await sf.loadSuperToken(
    "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00"
  );

  try {
    const amtToUpgrade = ethers.utils.parseEther(upgradeAmt.toString());
    const upgradeOperation = DAIx.upgrade({
      amount: amtToUpgrade.toString()
    });
    //upgrade and create stream at once
    const createFlowOperation = DAIx.createFlow({
      sender: "0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721",
      receiver: recipient,
      flowRate: flowRate
    });

    console.log("Upgrading tokens and creating stream...");

    await sf
      .batchCall([upgradeOperation, createFlowOperation])
      .exec(signer)
      .then(function (tx) {
        console.log(
          `Congrats - you've just successfully executed a batch call!
          You have completed 2 operations in a single tx 🤯
          View the tx here:  https://goerli.etherscan.io/tx/${tx.hash}
          View Your Stream At: https://app.superfluid.finance/dashboard/${recipient}
          Network: Goerli
          Super Token: DAIx
          Sender: 0xDCB45e4f6762C3D7C61a00e96Fb94ADb7Cf27721
          Receiver: ${recipient},
          FlowRate: ${flowRate}
          `
        );
        //Add a push Notification here
      });
      
  } catch (error) {
    console.log(
      "Hmmm, your transaction threw an error. Make sure that this stream does not already exist, and that you've entered a valid Ethereum address!"
    );
    console.error(error);
  }
}

async function scheduleStream(_RA,_startDate,_Amt,_EndDate){
  preventDefault()
  console.log("Helllo");
  const provider = new ethers.providers.Web3Provider(window.ethereum);
    const chainId = 5;
    const d1 = new Date(_startDate);
const d2 = new Date(_EndDate);
/* console.log("Start Date = "+d1.getTime());
console.log("End Date = "+d2.getTime()); */
    const signer = provider.getSigner();
    const contractAddress ='0x8A6f0FC9Fe2c13565a9db3bBE0953C334B4D4bFF';
    const contractABI = abi;
    const peer =new Contract(
      contractAddress,
      contractABI,
      signer
    );
    const superToken="0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00";
    console.log("Writing")
    const coffeeTxn = await peer.createFlowSchedule(superToken,_RA,_startDate,_startDate,315777553760070,_Amt,_EndDate,"0x","0x");
    await coffeeTxn.wait();
    console.log("mined", coffeeTxn.hash);
  
          console.log("Written");
}

export const BatchCall = () => {
  const [recipient, setRecipient] = useState("");
  const [isBatchCallButtonLoading, setIsBatchCallButtonLoading] = useState(
    false
  );
  const [upgradeAmount, setUpgradeAmount] = useState("");
  const [flowRate, setFlowRate] = useState("");
  const [flowRateDisplay, setFlowRateDisplay] = useState("");
  const [approveAmount, setApproveAmount] = useState("");
  const [receiversAddress,setRA] = useState("");
  const[StartDate,setSD]=useState("");
  const[Amount,setAmount]=useState("");
  const[EndDate,setED] =useState("");
  const [isApproveButtonLoading, setIsApproveButtonLoading] = useState(false);

  function calculateFlowRate(amount) {
    if (typeof Number(amount) !== "number" || isNaN(Number(amount)) === true) {
      alert("You can only calculate a flowRate based on a number");
      return;
    } else if (typeof Number(amount) === "number") {
      if (Number(amount) === 0) {
        return 0;
      }
      const amountInWei = ethers.BigNumber.from(amount);
      const monthlyAmount = ethers.utils.formatEther(amountInWei.toString());
      const calculatedFlowRate = monthlyAmount * 3600 * 24 * 30;
      return calculatedFlowRate;
    }
  }

  function BatchCallButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="batchCallButton" {...props}>
        {isBatchCallButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }
  function ApproveButton({ isLoading, children, ...props }) {
    return (
      <Button variant="success" className="approveButton" {...props}>
        {isApproveButtonLoading ? <Spinner animation="border" /> : children}
      </Button>
    );
  }
  const handleRecipientChange = (e) => {
    setRecipient(() => ([e.target.name] = e.target.value));
  };

const handelRA =(e)=>{
  setRA(() =>([e.target.name] = e.target.value));
}
const handelSD =(e)=>{
  setSD(() =>([e.target.name] = e.target.value));
}
const handelAmount =(e)=>{
  setAmount(() =>([e.target.name] = e.target.value));
}
const handelED =(e)=>{
  setED(() =>([e.target.name] = e.target.value));
}
  const handleApproveAmountChange = (e) => {
    setApproveAmount(() => ([e.target.name] = e.target.value));
  };

  const handleUpgradeAmountChange = (e) => {
    setUpgradeAmount(() => ([e.target.name] = e.target.value));
  };

  const handleFlowRateChange = (e) => {
    setFlowRate(() => ([e.target.name] = e.target.value));
    let newFlowRateDisplay = calculateFlowRate(e.target.value);
    setFlowRateDisplay(newFlowRateDisplay.toString());
  };

  return (
    <div>
      <h2>Batch Calls</h2>
      <h5>
        Upgrade and create a flow in a single tx <span role="img">🤯</span>
      </h5>
      <div>
        <Form>
          <FormGroup className="mb-3">
            <FormControl
              name="upgradeAmount"
              value={upgradeAmount}
              onChange={handleUpgradeAmountChange}
              placeholder="Enter the dollar amount you'd like to upgrade"
            ></FormControl>
          </FormGroup>
        </Form>
      </div>
      <div>
        <Form>
          <FormGroup className="mb-3">
            <FormControl
              name="recipient"
              value={recipient}
              onChange={handleRecipientChange}
              placeholder="Enter your Ethereum address"
            ></FormControl>
          </FormGroup>
          <FormGroup className="mb-3">
            <FormControl
              name="flowRate"
              value={flowRate}
              onChange={handleFlowRateChange}
              placeholder="Enter a flowRate in wei/second"
            ></FormControl>
          </FormGroup>
          <BatchCallButton
            onClick={() => {
              setIsBatchCallButtonLoading(true);
              executeBatchCall(upgradeAmount, recipient, flowRate);
              setTimeout(() => {
                setIsBatchCallButtonLoading(false);
              }, 1000);
            }}
          >
            Click to Upgrade Tokens and Create Your Stream
          </BatchCallButton>
        </Form>
      </div>
      <div> 
        <br>
        </br>
        <Form>
        <h2>Schedule Money stream starts here,A stream will be scheduled at 12 AM GMT timezone</h2>
        <input type ="text" placeholder="Receiver's Address" name ="receiversAddress" onChange ={handelRA} value={receiversAddress}></input>
        <input type ="date" placeholder="Start Date" onChange ={handelSD} name ="StartDate" value={StartDate}></input>
        <input type ="Number" placeholder="Amount" name="Amount" onChange ={handelAmount}value={Amount}></input>
        <input type ="date" placeholder="End Date" name="EndDate" onChange={handelED} value={EndDate}></input>
        <button
            onClick={() => {
              scheduleStream(receiversAddress, StartDate, Amount,EndDate);
            }}
          >
            Click to schedule a stream
          </button>
        </Form>
      </div>
  
      
    </div>
 
  );
};