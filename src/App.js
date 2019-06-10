import React from 'react';
import './styles/App.css';
import Main from './components/Main';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { createStore } from 'redux';

const store = createStore(reducers)

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Main />
      </Provider>
    </div>
  );
}

export default App;
