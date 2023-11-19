import logo from './logo.svg';
import axios from 'axios';
import './App.css';


const apiCall = () => {
  axios.get('http://localhost:8080').then((data) => {
    //this console.log will be in our frontend console
    console.log(data)
  })
}


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div>
        <button onClick={apiCall}>Make API Call</button>
        </div>
      </header>
    </div>
  );
}


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
