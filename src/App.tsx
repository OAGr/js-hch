import * as React from 'react';
import './App.css';
import { RootQuestion } from './workspaces/roots/RootQuestion';
import styled from 'styled-components';

const WorkspaceContainerStyle = styled.div`
  background: #ddd;
  float: left;
  margin: 10px;
`;

// <pre className="code">{JSON.stringify(value, null, 2)}</pre>
// <pre className="code">{JSON.stringify(error, null, 2)}</pre>
const WorkspaceContainer = ({ instance }: any) => {
  const { value, error, children } = instance.run();
  const {props} = instance;
  return (
    <div>
      <WorkspaceContainerStyle>
        <h4>{instance.constructor.name}</h4>
        <pre>{JSON.stringify({props, value, error}, null, 2)}</pre>
      </WorkspaceContainerStyle>
      {children.map((c: any) => (
        <WorkspaceContainer instance={c} children={[]} />
      ))}
    </div>
  );
};

class App extends React.Component {
  main() {
    const rootQ = new RootQuestion();
    const { value, error, instance, children } = rootQ.withProps({ question: 'What time is it??' }).run();
    return { value, error, instance, children };
  }
  render() {
    const { instance } = this.main();
    return (
      <div >
        {/* <h3>{this.main()rootQ.question}</h3> */}
        <WorkspaceContainer instance={instance} />
      </div>
    );
  }
}

export default App;
