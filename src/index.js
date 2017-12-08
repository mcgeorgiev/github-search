import React from 'react';
import ReactDOM from 'react-dom';


// need to handle errors

const url = 'https://api.github.com/search/users';
const data = {q: 'mcgeorgiev'};

fetch(`${url}?q=${data.q}`)
.then(d => d.json())
.then(d => {
  console.log(d)
});

// fetch('https://api.github.com/users/mcgeorgiev/repos')
//   .then(d => d.json())
//   .then(d => {
//     console.log(d)
//   })

const App = function() {
  return <div>Hi!</div>;
}

// <App /> = instance of the class of App
ReactDOM.render(<App/>, document.querySelector('.container'));
