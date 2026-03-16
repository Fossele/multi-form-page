import { useState } from 'react'
import thankyou from "./assets/assets/images/icon-thank-you.svg"
import arcade from "./assets/assets/images/icon-arcade.svg"
import advanced from "./assets/assets/images/icon-advanced.svg"
import pro from "./assets/assets/images/icon-pro.svg"
import './App.css'

function Step1({ setStep }) {
  return (
    <div>
      <h1>Personal info</h1>
      <p> Please provide your name, email address, and phone number.</p>

      <label for="name">Name</label>
      <input type='text' placeholder='e.g. Stephen King' />

      <label for="email">Email Address</label>
      <input type='email' placeholder='e.g. stephenking@lorem.com' />

      <label for="number"> Phone Number </label>
      <input type='number' placeholder=' e.g. +1 234 567 890' />

      <button onClick={() => setStep("step2")}>Next Step</button>
    </div>
  )
}


// select plan step

function Step2({ setStep, setLevel, plan, setPlan}) {


  return (
    <div>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>
      {(plan == "monthly") ? <div className='plans'>
        <div onClick={()=>setLevel("arcade")} className='arcade'> 
            <img src={arcade}/>
           Arcade
          $9/mo</div>

        <div onClick={()=>setLevel("advanced")}  className='advance'> 
          <img src={advanced}/>
            Advanced
          $12/mo</div>

        <div  onClick={()=>setLevel("pro")}  className='pro'>
            <img src={pro}/>
            Pro
          $15/mo</div>
      </div> : <div className='plans'>
        <div onClick={()=>setLevel("arcade")}  className='arcade'> 
           Arcade
          $90/yr 2months free</div>

        <div onClick={()=>setLevel("advanced")}  className='advance'> 
            Advanced
          $120/yr 2months free</div>

        <div onClick={()=>setLevel("pro")}  className='pro'>  Pro
          $150/yr 2months free</div>
      </div>}


      <div className='subs'>
        <p>Monthly</p>
        <button onClick={() => {
          if (plan == "monthly") { setPlan("yearly") } else { setPlan("monthly") }
        }}>{plan}</button>
        <p>Yearly</p>
      </div>


       <div className='nav'>
         <button onClick={() => setStep("step1")}>Go Back</button>
      <button onClick={() => setStep("step3")}>Next Step</button>
       </div>
      

    </div>
  )
}

function Step3({ setStep, plan, onlineService, setOnlineService, largerStorage, setLargerStorage, customProfile, setCustomProfile }) {
  return (
    <div>
      <h1>Pick add-ons</h1>

      <p>Add-ons help enhance your gaming experience.</p>
      {(plan == "monthly") ? <div className='add-on'>
        <div onClick={()=>setOnlineService(!onlineService)}>
          <img src='tick' alt='tick' />
          <span>Online service</span>
          <span>Access to multiplayer games</span>

          <span>+$1/mo</span>

        </div>

        <div onClick={()=>setLargerStorage(!largerStorage)}>
          <img src='tick' alt='tick' />
          <span>Larger storage</span>
          <span> Extra 1TB of cloud save</span>

          <span>+$2/mo</span>

        </div>

        <div onClick={()=>setCustomProfile(!customProfile)}>
          <img src='tick' alt='tick' />
          <span>Customizable Profile</span>
          <span> Custom theme on your profile</span>

          <span>+$2/mo</span>

        </div>
      </div> : <div className='add-on'>
        <div onClick={()=>setOnlineService(!onlineService)}>
          <img src='tick' alt='tick' />
          <span>Online service</span>
          <span>Access to multiplayer games</span>

          <span>+$1/mo</span>

        </div>

        <div onClick={()=>setLargerStorage(!largerStorage)}>
          <img src='tick' alt='tick' />
          <span>Larger storage</span>
          <span> Extra 1TB of cloud save</span>

          <span>+$2/mo</span>

        </div>

        <div onClick={()=>setCustomProfile(!customProfile)}>
          <img src='tick' alt='tick' />
          <span>Customizable Profile</span>
          <span> Custom theme on your profile</span>

          <span>+$2/mo</span>

        </div>
      </div>}
      <div className='nav'>
       <button onClick={() => setStep("step2")}>Go Back</button>
      <button onClick={() => setStep("step4")}>Next Step</button>
      </div>
     

    </div>
  )
}

function Step4({plan, setStep, largerStorage, customProfile,  onlineService, level }) {
const [total, setTotal] = useState(0);
//let total ;
//const [res, setRes] = useState(0)

const price = {
  Mo :{
  arcade : "9",
   advanced : "12",
    pro : "15",
     },
  Yr : {
  arcade : "90",
   advanced : "120",
    pro : "150",
    }
}
/*setTotal(0);
  setTotal(price.Mo.level);
  if(localStorage){setTotal(total + 1)};
  if(customProfile){setTotal(total + 2)};
  if(onlineService){setTotal(total + 3)};

  if(plan == "monthly"){
  setTotal(0);
  setTotal(price.Mo.level);
  if(localStorage){setTotal(total + 1)};
  if(customProfile){setTotal(total + 2)};
  if(onlineService){setTotal(total + 3)};
}else{
    setTotal(0);
  setTotal(price.Yr.level);
  if(localStorage){setTotal(total + 1)};
  if(customProfile){setTotal(total + 2)};
  if(onlineService){setTotal(total + 3)};
}



  if(plan == "monthly"){
      total = price.Mo.level;
  if(localStorage){total += 1};
  if(customProfile){total += 2};
  if(onlineService){total += 3};
  return total;
}else{
    
  total = price.Yr.level;
  if(localStorage){total += 1};
  if(customProfile){total += 2};
  if(onlineService){total += 3};
  return total;
}



setRes(total);
*/
  return (
    <div>
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>


      {(plan == "monthly")?<div>
        <div>
        {(level == "arcade")&&<div>${level} { price.Mo.arcade }mo</div>}
        {(level == "advanced")&&<div>${level}mo</div>}
        {(level == "pro")&&<div>${level}mo</div>}
        </div>
        <div>
          {largerStorage && <div>larger storage</div>}
          {customProfile && <div>Custom profile</div>}
          {onlineService && <div>online Service</div>}
        </div>
      </div>:<div>
      <div>
        {(level == "arcade")&&<div>{level}yr {"hey" + price.Yr.arcade + ( level=="arcade")? 7+6: 8}</div>}
        {(level == "advanced")&&<div>{level}yr</div>}
        {(level == "pro")&&<div>{level}yr</div>}
        </div>
        <div>
          {largerStorage && <div>larger storage yr</div>}
          {customProfile && <div>Custom profile yr</div>}
          {onlineService && <div>online Service yr</div>}
        </div>
      </div>
}
      <p>{total} (per month/year)</p> 
     <div className='nav'>
        <button onClick={() => setStep("step3")}>Go Back</button>
      <button onClick={() => setStep("step5")}>Next Step</button>
     </div>
     
    </div>
  )
}


function Step5() {
  return (
    <div>
      <img src={thankyou} alt='tick' />
      <h1>Thank you!</h1>

      <p>Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free
        to email us at support@loremgaming.com.</p>

    </div>
  )
}



function SideBar() {

  return (
    <div className='sidebar'>
   
    </div>
  );
}

function ContentContainer() {
  const [step, setStep] = useState("step1");
  const [level, setLevel] = useState("");
  const [plan, setPlan] = useState("monthly");
  const [largerStorage, setLargerStorage] = useState(false);
  const [onlineService, setOnlineService] = useState(false);
  const [customProfile, setCustomProfile] = useState(false);


  return (
    <div className='content'>
      {(step == "step1") && <Step1 setStep={setStep} />}
      {(step == "step2") && <Step2 setStep={setStep} setLevel={setLevel} plan={plan} setPlan={setPlan}/>}
      {(step == "step3") && <Step3 setStep={setStep} plan={plan} largerStorage={largerStorage} onlineService={onlineService} customProfile={customProfile} setOnlineService={setOnlineService} setCustomProfile={setCustomProfile} setLargerStorage={setLargerStorage}/>}
      {(step == "step4") && <Step4 setStep={setStep} plan={plan} level={level} largerStorage={largerStorage} onlineService={onlineService} customProfile={customProfile}/>}
      {(step == "step5") && <Step5 setStep={setStep} />}

    </div>
  );
}


function App() {

  return (
    <div className='app'>
      <SideBar/>
      <ContentContainer />
    </div>
  )
}

export default App
