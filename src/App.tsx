import React from 'react';
import Header from './components/layout/Header';
import { BrowserRouter } from 'react-router-dom';
import FormContainer from './components/containers/FormContainer';
import PostContainer from './components/containers/PostContainer';

function App() {
  return (
      <BrowserRouter>
          <div className='container'>
              <div className='container__inner'>
                  <Header />
                  <FormContainer />
                  <PostContainer />
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
