import { Switch, Route } from 'react-router-dom';
import StoreFront from './components/StoreFront';

const routes = () => (
  <Switch>
    <Route exact path='/' component={StoreFront} />
  </Switch>
);

export default routes;
