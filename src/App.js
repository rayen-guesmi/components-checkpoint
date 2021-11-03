//import logo from './logo.svg';
import './App.css';
import img from './Components/Profile/images/ray.jpg';
import style from './Components/style.css';
import FullName from  './Components/Profile/FullName';
import Address from './Components/Profile/Address';
function App() {
  return (
    <div className="App">
      <FullName/>
     <Address/>
     <img className="my-image" src={img} alt="ray"/>
     <style/>
     *
    </div>
  );
}

export default App;
