import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Empty from './empty';
import Header from './header';

function App() {
  return (
    <div className="App">
		   
    	<BrowserRouter>
          	<Routes>
				<Route path= "/" element={<Header />}></Route>
              	<Route path= "/emptyPage" element={<Empty />}></Route>
          	</Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;