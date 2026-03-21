import { useState } from 'react'
import thankyou from "./assets/assets/images/icon-thank-you.svg"
import arcade from "./assets/assets/images/icon-arcade.svg"
import advanced from "./assets/assets/images/icon-advanced.svg"
import pro from "./assets/assets/images/icon-pro.svg"
import check from "./assets/assets/images/icon-checkmark.svg"
import './App.css'

function Step1({ setStep }) {
  return (
    <>
      <div className='operation'>
        <h1>Personal info</h1>
        <p> Please provide your name, email address, and phone number.</p>

        <label for="name">Name</label>
        <input type='text' id='name' placeholder='e.g. Stephen King' required />

        <label for="email">Email Address</label>
        <input type='email' id='email' placeholder='e.g. stephenking@lorem.com' required />

        <label for="number" > Phone Number </label>
        <input type='number' id='number' placeholder=' e.g. +1 234 567 890' required />

      </div>
      <div className='nav-end'>
        <button type='submit' onClick={() => setStep("step2")} className='next' value="Next">Next Step</button>
      </div>



    </>
  )
}


// select plan step

function Step2({level, setStep, setLevel, plan, setPlan }) {

  return (
    <>
      <div className='operation'>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
        <div className='plans'>
          <div onClick={() => setLevel("arcade")} className={level =="arcade"? 'choice':"arcade"}>
            <img src={arcade} />
            <span>
              <b>Arcade</b>
              {plan == "monthly" ? <p>$9/mo</p> : <p>$90/yr</p>}
            </span>
          </div>

          <div onClick={() => setLevel("advanced")} className={level =="advanced"? 'choice':"advance"}>
            <img src={advanced} />
            <span>
              <b>Advanced</b>
              {plan == "monthly" ? <p>$12/mo</p> : <p>$120/yr</p>}
            </span>
          </div>

          <div onClick={() => setLevel("pro")} className={level =="pro"? 'choice':"pro"}>
            <img src={pro} />

            <span> <b>Pro</b>
              {plan == "monthly" ? <p>$15/mo</p> : <p>$150/yr</p>}
            </span>
          </div>
        </div>


        <div className='subs'>
          <p>Monthly</p>
          <button className={plan == "monthly" ? "plan-btn-left" : "plan-btn-rigth"} onClick={() => {
            if (plan == "monthly") { setPlan("yearly") } else { setPlan("monthly") }

          }} >
            <div className='blue'>
            </div>
          </button>
          <p>Yearly</p>
        </div>

      </div>

      <div className='nav'>
        <button onClick={() => setStep("step1")} className='prev'>Go Back</button>
        <button onClick={() => setStep("step3")} className='next'>Next Step</button>
      </div>
    </>


  )
}

function Step3({ setStep, plan, onlineService, setOnlineService, largerStorage, setLargerStorage, customProfile, setCustomProfile }) {
 

 
  return (
    <>
      <div className='operation'>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className='add-on'>
          <div className={onlineService?'box-clicked':'box'} onClick={() => setOnlineService(!onlineService)}>
            <div className='box-left'> 
               <div className={onlineService?'ticked':'tick'}>
              <img src={check} alt='tick' />
            </div>
              <div className='center'>
                <div>Online service</div>
                <div>Access to multiplayer games</div>
              </div>
            </div>

            {(plan == "monthly") ? <span>+$1/mo</span> : <span>+$1/yr</span>}
          </div>

          <div div className={largerStorage?'box-clicked':'box'} onClick={() => setLargerStorage(!largerStorage)}>
            <div className='box-left'>
              <div className={largerStorage?'ticked':'tick'}>
                <img src={check} alt='tick' />
              </div>
              <div className='center'>
                <div>Larger storage</div>
                <div> Extra 1TB of cloud save</div>
              </div>
            </div>


            {(plan == "monthly") ? <span>+$2/mo</span> : <span>+$2/yr</span>}
          </div>

          <div div className={customProfile?'box-clicked':'box'} onClick={() => setCustomProfile(!customProfile)}>
            <div className='box-left' >
              <div className={customProfile?'ticked':'tick'}>
                <img src={check} alt='tick' />
              </div>
              <div className='center'>
                <div>Customizable Profile</div>
                <div> Custom theme on your profile</div>
              </div>
            </div>



            {(plan == "monthly") ? <span>+$2/mo</span> : <span>+$2/yr</span>}
          </div>
        </div>
      </div>

      <div className='nav'>
        <button onClick={() => setStep("step2")} className='prev'>Go Back</button>
        <button onClick={() => setStep("step4")} className='next'>Next Step</button>
      </div>
    </>
  )
}

function Step4({ plan, setStep, largerStorage, customProfile, onlineService, level }) {
  const [total, setTotal] = useState(0);
  //let total ;
  //const [res, setRes] = useState(0)

  const price = {
    Mo: {
      arcade: "9",
      advanced: "12",
      pro: "15",
    },
    Yr: {
      arcade: "90",
      advanced: "120",
      pro: "150",
    }
  }

  return (
    <>
      <div className='operation'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming.</p>


        {(plan == "monthly") ? <div className='resultBox'>
          <div>
            {(level == "arcade") && <> <div>${level} {price.Mo.arcade}mo</div><div onClick={() => { setStep("step2") }} className='change'>Change</div></> }
            {(level == "advanced") &&<><div>${level}mo</div><div onClick={() => { setStep("step2") }} className='change'>Change</div></> }
            {(level == "pro") && <><div>${level}mo</div><div onClick={() => { setStep("step2") }} className='change'>Change</div></>}
            
          </div>
          <>
            {largerStorage && <div>larger storage</div>}
            {customProfile && <div>Custom profile</div>}
            {onlineService && <div>online Service</div>}
          </>
          <p>total (per month)</p>
        </div> : <div>
          <div>
            {(level == "arcade") && <div>{level}yr </div>}
            {(level == "advanced") && <div>{level}yr</div>}
            {(level == "pro") && <div>{level}yr</div>}
          </div>
          <>
            {largerStorage && <div>larger storage yr</div>}
            {customProfile && <div>Custom profile yr</div>}
            {onlineService && <div>online Service yr</div>}
          </>
          <p>total (per year)</p>
        </div>
        }
        
      </div>
      <div className='nav'>
        <button onClick={() => setStep("step3")} className='prev'>Go Back</button>
        <button onClick={() => setStep("step5")} className='confirm'>Confirm</button>
      </div>
    </>
  )
}


function Step5() {
  return (
    <div className='thank'>
      <img src={thankyou} alt='tick' />
      <h1>Thank you!</h1>

      <p>Thanks for confirming your subscription! We hope you have <br /> fun
        using our platform. If you ever need support, please feel<br /> free
        to email us at support@loremgaming.com.</p>

    </div>
  )
}



function SideBar({ step }) {

  return (
    <div className='sidebar'>

      <div className='step'>
        <div className={!(step == "step1") ? "circle" : "circle-step"}>1</div>
        <div className='yes'>
          <p>step 1</p>
          <div>INFO</div>
        </div>
      </div>

      <div className='step'>
        <div className={!(step == "step2") ? "circle" : "circle-step"}>2</div>
        <div className='yes'>
          <p>step 2</p>
          <div>SELECT PLAN</div>
        </div>
      </div>

      <div className='step'>
        <div className={!(step == "step3") ? "circle" : "circle-step"}>3</div>
        <div className='yes'>
          <p>step 3</p>
          <div>ADD-ONS</div>
        </div>
      </div>

      <div className='step'>
        <div className={!(step == "step4") ? "circle" : "circle-step"}>4</div>
        <div className='yes'>
          <p>step 4</p>
          <div>SUMMARY</div>
        </div>
      </div>

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
    <>
      <SideBar step={step} />
      <div className='content'>
        {(step == "step1") && <Step1 setStep={setStep} />}
        {(step == "step2") && <Step2 level={level} setStep={setStep} setLevel={setLevel} plan={plan} setPlan={setPlan} />}
        {(step == "step3") && <Step3 setStep={setStep} plan={plan} largerStorage={largerStorage} onlineService={onlineService} customProfile={customProfile} setOnlineService={setOnlineService} setCustomProfile={setCustomProfile} setLargerStorage={setLargerStorage} />}
        {(step == "step4") && <Step4 setStep={setStep} plan={plan} level={level} largerStorage={largerStorage} onlineService={onlineService} customProfile={customProfile} />}
        {(step == "step5") && <Step5 setStep={setStep} />}
      </div>
    </>
  );
}


function App() {

  return (
    <div className='app'>

      <ContentContainer />
    </div>
  )
}

export default App
