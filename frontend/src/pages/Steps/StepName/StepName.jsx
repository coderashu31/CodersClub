import React from 'react'

const StepName = ({onNext}) => {
  return (
    <>
      <div>StepName Component</div>
      <button onClick={onNext}>Next</button>
    </>
  )
}

export default StepName