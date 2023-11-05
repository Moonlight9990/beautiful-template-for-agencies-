import './App.css';
import Home from  './home';
import { Route, Routes } from 'react-router-dom'
// import axios from 'axios';
// import {useEffect} from 'react'


function App() {

  // const [api, setApi] = useState('')

  // const getApi = () => {
  //     axios.get('https://restcountries.com/v3.1/all').then(res =>{
  //       const countries = res.data;
  //       const allNames = countries.map(country => country.name.official).join(', ');
  //         console.log(allNames);
  //         setApi(allNames)
  //     }).catch(err => {
  //       console.log(err);
  //     }) 
  // }

  // useEffect(() => {
  //   axios.get('https://restcountries.com/v3.1/all').then((res) => {
  //     const countries = res.data;
  //     const allNames = countries.map(country => country.name.common).join(', ');
  //     console.log(allNames);
  //   }).catch((error) => {
  //     console.log(error);
  //   })
  // }, [])

  return ( 
    <div>

      {/* <button>Get Api </button> */}

        {/* {api} */}

    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>

    </div>
  );

}

export default App;