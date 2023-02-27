import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Education from './components/Eduction';
import Skill from './components/Skill';
import Hobbies from './components/Hobbies';

function App() {
  return (
    <div className="App">
      <Header/>
      <Project/>
      <Education/>
      <Skill/>
      <Hobbies/>
      
    </div>
  );
}

export default App;
