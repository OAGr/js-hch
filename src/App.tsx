import * as React from 'react';
import './App.css';
import { RootQuestion } from './workspaces/roots/RootQuestion';

class App extends React.Component {
  main() {
    const rootQ = new RootQuestion();
    const {value, error, instance, children} = rootQ.withProps({question: 'What time is it?'}).run();
    return {value, error, instance, children};
  }
  render() {
    const {value, error, instance, children} = this.main();
    console.log(instance, children);
    return (
      <div >
        {/* <h3>{this.main()rootQ.question}</h3> */}
        <pre className="code">{JSON.stringify(value, null, 2)}</pre>
        <pre className="code">{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
}

export default App;
