import { useRef } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 

export default function App() {
  const nameRef = useRef(''); 
  const emailRef = useRef('') 
  const countryRef = useRef('') 

  const formData = useSelector((state) => state.formData ) 
  const dispatch = useDispatch(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const data = {
      name: nameRef.current.value, 
      email: emailRef.current.value, 
      country: countryRef.current.value 
    }
    if (!(
      nameRef.current.value === '' && 
      emailRef.current.value === '' && 
      countryRef.current.value === '' 
    )) {
      dispatch({type: "ADD", payload: data })
      alert(JSON.stringify(data))
    }
    
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
      <div>
        {
          formData.map((item) => {
            return (
              <div>
                <p>Name: {item.name}</p>
                <p>Email: {item.email}</p>
                <p>Country: {item.countr}</p>
              </div>
            )
          })
        }
      </div>
    </div>
    
  )
}