import React, { useEffect, useState } from 'react';
import './App.css';

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

interface Sub {
  nick: string
  avatar: string
  subMonths: number
  description?: string
}


function App() {
  const [subs, setSubs] = useState<Array<Sub>>([])


  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])


  return (
    <div className="App">
      <h1>Subscriptors</h1>
      <ul>
        {
          subs.map(sub => {
            return (
              <li key={sub.nick}>
                <img src={sub.avatar} alt={`Avatar for $(sub.nick)`} />
                <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0, 100)}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
