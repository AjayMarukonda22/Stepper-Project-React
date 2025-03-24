import React, { useState } from 'react'
import Step from './Step'

const Stepper = () => {

   const descriptions =  [
        "Add contact details for further communication",
        "Add shipping address for successful delivery",
        "Complete payment to complete the order",
        "Ready to get delivered!",
        "Order Delivered successfully! 🎉"
    ];


    const[currentStep, setCurrentStep] = useState(1);

    let currentDescription;
    if(currentStep <= 5) {
       currentDescription = descriptions[currentStep-1];
    }

    function handleNextClick() {
        if(currentStep < 5)
        setCurrentStep(prevStep => prevStep + 1);
    }
     
    function handlePreviousClick() {
        if(currentStep > 1)
        setCurrentStep(prevStep => prevStep - 1);
    }

  return (
    <div className='flex flex-col justify-center items-center gap-7'>
        <h1 className=' font-bold text-4xl pt-8 pb-8 w-full flex justify-center items-center border-b-4 border-gray-500'>Stepper</h1>
    <div className='stepper flex mt-8'>
        <Step index = {1}  currentStep = {currentStep}/>
        <Step index = {2} currentStep = {currentStep}/>
        <Step index = {3} currentStep = {currentStep}/>
        <Step index = {4} currentStep = {currentStep}/>
    </div>
    <p className='font-bold text-2xl'>{currentDescription}</p>
      <div className='buttons flex gap-4 mt-4'>
      <button className='border font-semibold h-10 w-20 rounded-2xl disabled:bg-gray-300 disabled:text-gray-200' onClick={handlePreviousClick} disabled = {currentStep === 1}>Previous</button>
      <button className='border font-semibold h-10 w-15 rounded-2xl disabled:bg-gray-300 disabled:text-gray-200' onClick={handleNextClick} disabled = {currentStep >= 5}>{currentStep >= 4 ? 'Finish' : 'Next'}</button>
      </div>
    </div>
  )
}

export default Stepper