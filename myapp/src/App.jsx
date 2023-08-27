//  import logo from './logo.svg';
import './App.css';
import AComponent from './components/AComponent';
// import NavBar from './components/NavBar';
// import Homecarousel from './components/Homecarousel';
// import ImgCard from './components/ImgCard';
// import CardImg from 'react-bootstrap/esm/CardImg';
// import data from './components/data';
// import Product from './components/Product';
// import { useEffect, useState } from 'react';
// import ParentComponent from './components/ParentComponent';

// const nCard=(val) => {
//   return (
//     <ImgCard
//     key={val.id}
//     title={val.title}
//     imgurl={val.image}
//     // desc={val.description}
//     />
//   )
// }
function App() {
  // const [Data,setData] = useState([]);

  // useEffect(()=>{
  //   const fetchData = async() => {
  //     try{
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.log('Error occured',error);
  //     }
  //   };
  //   fetchData();
  // },[]);
  return (
  //   <div>
  //         <NavBar/>
  //         <Homecarousel/>
  //         <div className="projectCard">
  //         {
  //           Data.map((val,index) => (
  //             <div key={val.id}>
  //             {nCard(val)} 
  //             </div>
  //           ))
  //         }
  //         </div>
  //         <div className="row">
  //         {
  //           Product.map((val,index) => (
  //             <div key={val.id} className='col-md-4'>
  //             {nCard(val)} 
  //             </div>
  //           ))
  //         }
  //         </div>
  //   </div>
  <div>
    {/* <ParentComponent/> */}
    <AComponent/>
  </div>
  );
}

export default App;
