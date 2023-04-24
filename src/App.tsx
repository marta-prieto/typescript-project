import React, { useEffect, useState , useRef} from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';
import {Sub} from './types'


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
  const [newSubsNumber, setNewSubsNumber] = useState<AppState[
    "newSubsNumber"]>(0) 
    const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

const handleNewSub = (newSub: Sub) : void => {
  setSubs(subs => [...subs, newSub])
}

  return (
    <div className="App" ref={divRef}>
      <h1>Subscriptors</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
