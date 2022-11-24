import React, { Component } from 'react';
import Table from './components/Table';

class App extends Component{
  render(){
    const characters = [ {
      name: 'indrajith',
      job: 'software engineer'
    },
    {
      name: 'rocket',
      job: 'youtuber'
    },
    {
      name: 'kk',
      job: 'businessman'
    }
  ]
    return(
      <div className='App'>
        <h1>hello world</h1>
        <h2>Table 1</h2>
        <Table charactersData={characters}/>
      </div>
    )
  }
}

export default App;