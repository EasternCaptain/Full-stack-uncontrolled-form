import { useRef } from 'react'; 

export default function App() {
  const nameRef = useRef(''); 
  const emailRef = useRef('') 
  const countryRef = useRef('') 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const data = {
      name: nameRef.current.value, 
      email: emailRef.current.value, 
      country: countryRef.current.value 
    }

    alert(JSON.stringify(data))
    nameRef.current.value =''; 
    emailRef.current.value =''; 
    countryRef.current.value =''; 

  } 

  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name </label>
          <input type="text" ref={nameRef} placeholder='Enter your name'/>
        </div>
        <div>
          <label>Email</label>
          <input type="email" ref={emailRef} placeholder="Enter your email @example.com"/>
        </div>
        <div>
          <label>Country </label>
          <input type="text" ref={countryRef} placeholder="Enter your country"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  )
}