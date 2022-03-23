import React, { useState } from 'react';
import './App.css';

function Contact() {

  const [data, setData] = useState({});
  
  const handleChange = (e) => {
    const name  = e.target.name;
    const value = e.target.value;
  
    const currentInputFieldData = {
      [name]: value
    }

    const updateData = {
      ...data, 
      ...currentInputFieldData
    }
    setData(updateData);
  }

  const handleSubmit = (e) => {
    console.log(data);
    alert("Submitting Form")
    e.preventDefault();
  }
  return(
    <div>
      <form onSubmit={handleSubmit} action="/action_page.php" autocomplete="on">
      <fieldset>
      <legend ></legend>
      <h1>This is the Contact Form</h1>
      <h5>Fill in the details below; all fields are required.</h5>
      <hr/><br/>
      <label for="fname">First Name</label>
      <input type="text" id="firstName" name="firstname" placeholder="Your First Name.." required onChange={handleChange}/> 
      <label for="lname">Middle Name</label>
      <input type="text" id="MiddleName" name="middlename" placeholder="Your Middle Name.." required onChange={handleChange}/>
      <label for="lname">Last Name</label>
      <input type="text" id="lastName" name="lastname" placeholder="Your Last Name.." required  onChange={handleChange}/>
      <label for="StudentID">Student ID</label>
      <input type="number" id="studentID" name="student ID" placeholder="Your student ID Number.."required onChange={handleChange}/>
      <label for="date">Date Of Birth</label>
      <input type="date" id="date" name="date" placeholder="Your Date of Birth.." value="Select Date" min='1990-01-01' max = '2015-01-01' required  onChange={handleChange}/>
      <label for="country">Gender</label>
      <select id="country" name="country"required onChange={handleChange}>
      <option value='select'>Choose Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="transgender">Transgender</option>
      <option value="neutral">Gender Neutral</option>
      <option value="none">Prefer Not To disclose</option>
      </select>
      <label for="email">Email Address</label>
      <input type="email" id="emailAddress" name="EmailAddress" placeholder="Your Email Address.."required onChange={handleChange}/>
      <p>Is Enrolled</p>
      <input type="radio" id="yes" name="IsEnrolled" value=" Yes" required/>
      <label for=" Yes"> Yes</label><br/>
      <input type="radio" id="no" name="IsEnrolled" value=" No"required/>
      <label for=" No"> No</label><br/>
      </fieldset>
      <div class='container'>
      <input type="reset" value="Reset"></input>
      <input type="submit" value="Submit"></input>
      </div>
    </form>
    </div>
  );

}

export default Contact;
