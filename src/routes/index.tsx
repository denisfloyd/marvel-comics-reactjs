import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import CharacterList from '../pages/CharacterList';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={CharacterList} />
  </Switch>
);

export default Routes;
