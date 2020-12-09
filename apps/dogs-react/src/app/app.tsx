import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { DogList } from './dog-list';

const StyledApp = styled.div`
`;

export function App() {
  return (
    <StyledApp>
      <Route
        path="/"
        exact
        render={() => <DogList />}
      />
    </StyledApp>
  );
}

export default App;
