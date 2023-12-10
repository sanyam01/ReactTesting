import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/application';
import { Skills } from './components/skills/skills';
import Counter from './components/counter/Counter';
import { AppProviders } from './providers/app-providers';
import {MuiMode} from "./components/mui/mui-mode";
function App() {

  // const skills = ['HTML', 'CSS', 'JS'];
  // return (
  //   <div className="App">
  //     {/* <Application />
  //     <Skills skills={skills} /> */}
  //     <Counter />
  //   </div>
  // );

  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
      </div>
    </AppProviders>
  )
}

export default App;
