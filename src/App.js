// import logo from './logo.svg';
// import './App.css';
import PropTypes from "prop-types";


import React from "react";


const App  =  () => {

    const profiles = [
      {name: "Taro", age: 10},
      {name: "Tom", age: 5},
      {name: "Jim", agw: 1},
    ]

  return (
    <div>
{
  profiles.map((profile,index) => {
    return  <User name={profile.name} age={profile.age} key={index} />
  })
}
</div>
  )
}

const User  = (props) => {
  return <div>I am {props.name}! and {props.age} years old</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
