import React from 'react'

const Step = ({index,currentStep}) => {


      const steps = ["Contact Details", "Shipping Address", "Payment", "Delivered"];
   
    let stepColor = 'bg-gray-300'; 
    let lineColor = 'bg-gray-300';
    if(index < currentStep) {
         stepColor = 'bg-green-400';
         lineColor = 'bg-green-400';
    }

    if(index === currentStep) {
        stepColor = 'bg-blue-500'
    }

  return (
    <div>
    <div className='step flex  items-center'>
      <div className= {`step-number border rounded-4xl ${stepColor} h-10 w-10 flex justify-center items-center`}>{index}</div>
      {index < 4 &&  <div className= {`line ${lineColor} h-2 w-70`} ></div>}
    </div>
    <p>{steps[index-1]}</p>
    </div>
  )
}

export default Step