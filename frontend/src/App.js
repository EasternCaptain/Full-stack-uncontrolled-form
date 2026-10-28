import { useRef } from 'react'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { useEffect } from 'react'; 

export default function App() {
  const nameRef = useRef(''); 
  const emailRef = useRef('') 
  const countryRef = useRef('') 

  const formData = useSelector((state) => state.formData ) 
  const dispatch = useDispatch();  

  useEffect(() => {
    const  fetchData = async () => {
      try {
        const response  = await fetch('/api/forms')
        const data = await response.json() 
        dispatch({type: 'LOAD', payload: data})
      } catch (error) {
        console.error(error) 
      }
    }
    fetchData() 
  }, [dispatch])

  const addData = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/forms', {
        method: "POST", 
        headers: {"Content-Type": 'applciation/json' }, 
        body: data 
      })
    } catch(error) {
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const data = {
      name: nameRef.current.value, 
      email: emailRef.current.value, 
      country: countryRef.current.value 
    }
    if (!(
      data.name === '' && 
      data.name === '' && 
      data.country === '' 
    )) { 
      addData(data) 
      dispatch({type: "ADD", payload: data })
      alert(JSON.stringify(data)); 
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
          <input type="text" ref={nameRef} placeholder='Enter your name' required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" ref={emailRef} placeholder="Enter your email @example.com" required />
        </div>
        <div>
          <label>Country </label>
          <input type="text" ref={countryRef} placeholder="Enter your country" required />
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