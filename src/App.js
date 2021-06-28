import {
  Switch,
  Route,
} from 'react-router-dom'

import routes from './routes';

function App() {
  
  const renderRoutes = () => routes.map((route) => (
    <Route {...route} key={route.name} />
  ))

  return (
    <div className="App">
      <Switch>
        {renderRoutes()}
      </Switch>
    </div>
  );
}

export default App;
