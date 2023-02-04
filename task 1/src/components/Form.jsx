import React from 'react'

export const Form = () => {
    const submitData=(e)=>{
        e.preventdefault();
console.log("hello")
    }
  return (
    <form action="" onSubmit={submitData} >
  <input type="text" placeholder="Enter your email" required />
  <input type="number" placeholder="Enter your mobile number" required />
  <button type="submit">Submit </button>
    </form>
  )
}
