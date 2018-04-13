import * as React from 'react';
import './App.css';
import { RootQuestion } from './workspaces/roots/RootQuestion';

class App extends React.Component {
  render() {
    const rootQ = new RootQuestion('What time is it??');
    const results = rootQ.run({});
    return (
      <div >
        <h3>{rootQ.question}</h3>
        <pre className="code">{JSON.stringify(results, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
