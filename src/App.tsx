import * as React from 'react';
import './App.css';
import { RootQuestion } from './workspaces/roots/RootQuestion';
import styled from 'styled-components';

const WorkspaceContainerStyle: any = styled.div`
  background: ${({ hasError }: any) => hasError ? '#e4c8c8' : '#eee'};
  float: left;
  margin: 2px;
`;

const WorkspaceContainer = ({ instance }: any) => {
  const { value, error, children } = instance.run();
  const { props } = instance;
  return (
    <div style={{ float: 'left', width: '100%' }}>
      <WorkspaceContainerStyle hasError={!!error && (instance.constructor.name === error.workspace)}>
        <h4>{instance.constructor.name}</h4>
        <pre>{JSON.stringify({ props, value, error }, null, 2)}</pre>
      </WorkspaceContainerStyle>
      {children.map((c: any, index: number) => {
        return (
          <div style={{ float: 'left', width: '100%', marginLeft: '30px' }} key={index}>
            <WorkspaceContainer instance={c} />
          </div>
        );
      })}
    </div>
  );
};

const RootQuestionComponent = ({ question }: any) => {
  const rootQ = new RootQuestion();
  const { instance } = rootQ.execute({ question });
  return (
    <div style={{ float: 'left', width: '100%' }}>
      <WorkspaceContainer instance={instance} />
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div >
        <RootQuestionComponent question="How much does the moon weigh?" />
      </div>
    );
  }
}

export default App;
