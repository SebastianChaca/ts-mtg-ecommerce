import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { searchProducts } from './state/action-creators/prodcutsActions';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Uicomponents from './pages/Layout/Uicomponents';
import Routesmap from './routes/Public/Routesmap';
import PrivateRoutesmap from './routes/Private/PrivateRoutesmap';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchProducts);
  }, [dispatch]);

  return (
    <Router>
      <Uicomponents>
        <Switch>
          <Routesmap />
        </Switch>
        <Switch>
          <PrivateRoutesmap />
        </Switch>
      </Uicomponents>
    </Router>
  );
}

export default App;
