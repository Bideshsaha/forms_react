// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  // const [firstname, setFirstName] = useState("");
  // const [lastname, setLastName] = useState("");

  // function changeFirstNameHandler(event){
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }
  // function changeLastNameHandler(event){
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({firstName:"",lastName:"", email:"", comments:""});

  function changeHandler(event){
    setFormData(prevFormData => {
      return{
        ...prevFormData,
        [event.target.name] : [event.target.value]
      }
    });
  }
  return (
    <div className="App">
      <form>
        <input
          type='text'
          placeholder='first name'
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
          />
        <br></br>
        <input
          type='text'
          placeholder='last name'
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
          />
          <br></br>
        <input
          type='email'
          placeholder='Enter your email here'
          onChange={changeHandler}
          name="email"
          value={formData.email}
          />
          <br></br>
          <textarea
          placeholder='enter your commnents here'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
          />
      </form>
    </div>
  );
}

export default App;
