
import './App.module.css';
import { Routes,Route} from 'react-router-dom';
import routesConfig from '../../hoc-halpers/routes/routesConfig';
import Header from '../../components/HEADER/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        {routesConfig.map((item,index)=>{
          return <Route key={index} path={item.path} element={item.component}/>
        })}
      </Routes>
     
    </div>
  );
}

export default App;
