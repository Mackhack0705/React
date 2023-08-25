// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Homecarousel from './components/Homecarousel';
import ImgCard from './components/ImgCard';
// import CardImg from 'react-bootstrap/esm/CardImg';
import data from './components/data';
import Product from './components/Product';

const nCard=(val) => {
  return (
    <ImgCard
    key={val.id}
    title={val.title}
    imgurl={val.imgurl}
    desc={val.desc}
    />
  )
}
function App() {
  return (
    <div>
          <NavBar/>
          <Homecarousel/>
          <div className="row">
          {
            data.map((val,index) => (
              <div key={val.id} className='col-md-4'>
              {nCard(val)} 
              </div>
            ))
          }
          </div>
          <div className="row">
          {
            Product.map((val,index) => (
              <div key={val.id} className='col-md-4'>
              {nCard(val)} 
              </div>
            ))
          }
          </div>
    </div>
  );
}

export default App;
