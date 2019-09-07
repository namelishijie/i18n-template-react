import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../components/Loading'

const App = Loadable({
  loader: () => import('../App'),
  loading: Loading,
  delay: 300
})
const Home = Loadable({
  loader: () => import('../views/home/home'),
  loading: Loading,
  delay: 300
})

const Router = () => (
  <div>
    <Route 
      path="/"
      render = { props => (
        <App>
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </App>
      )}
    />
  </div>
)

export default Router
