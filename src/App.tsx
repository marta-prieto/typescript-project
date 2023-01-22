import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}

interface AppState {
  subs: Array<Sub>
  newSubsNumber: number
}


const INITIAL_STATE = [
  {
    nick: 'even',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/300',
    description: 'moderador'
  },
  {
    nick: 'violeta',
    subMonths: 6,
    avatar: 'https://i.pravatar.cc/400',

  }
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0) 

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])


  return (
    <div className="App">
      <h1>Subscriptors</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
