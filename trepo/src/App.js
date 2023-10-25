import React from 'react';
import Header from './header';
import Main from './main';
import styled from 'styled-components';

const MainContain = styled.div`
  background-color: white;
  padding-top: 13%;
`;

function App() {
  return (
    <div className="App">
		<Header />
      	<MainContain>
        	<Main />
      	</MainContain>
    </div>
  );
}

export default App;