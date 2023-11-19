import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import TextBoxes from './Pages/TextBoxes';
import Products from './Pages/Products';


const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}


function App() {
  const steps = [{
    id: "greet",
    message: "Welcome!",
    trigger: "waiting"
  },
  {
    id: "waiting",
    user: true,
    trigger: "next"
  },
  {
    id: "next",
    message: "we will solve it right away!",
    trigger: "waiting"
  }]

  // return (
  //   <div className="App">
  //     <header className="App-header">

  //       <div>
  //         <button onClick={apiCall}>Make API Call</button>
  //       </div>
  //       <>
          
  //       </>
  //     </header>

  //   </div>

  // );
return(
  <>
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/products" element={<Products />} />
     <Route path="/text" element={<TextBoxes />} />
  </Routes>
  <Segment floated="right">
            <ChatBot steps={steps}></ChatBot>
  </Segment>
</>);
 }

// return (
//   <div className="App">
//     <header className="App-header">

//       <div>
//       <button onClick={apiCall}>Make API Call</button>
//       </div>
//     </header>
//   </div>
// );


// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'http://localhost:6000',
//       changeOrigin: true,
//     })
//   );
// };


export default App;
