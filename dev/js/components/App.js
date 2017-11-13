import React from 'react';
import FishList from '../containers/fish-list'
import FishDetail from '../containers/fish-detail'
require('../../scss/style.scss');

const App = () => (
  <div>
    <h2>Fish List:</h2>
    <FishList />
    <hr/>
    <h2>Fish Details:</h2>
    <FishDetail />
  </div>
);

export default App;