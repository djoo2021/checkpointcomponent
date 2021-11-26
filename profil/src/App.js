import react from 'react'
import FullName from './component/profil/FullName';
import Addresse from './component/profil/Addresse';
import ProfilPhoto from './component/ProfilPhoto';
import './App.css';

function App() {
  return (
    
    <div className="App">
    <ProfilPhoto />
    <FullName />
    <Addresse />
     
    </div>
  );
}

export default App;
