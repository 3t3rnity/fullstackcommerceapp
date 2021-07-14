import React from 'react'
import { Switch, Route } from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout/MainLayout'
import Registration from './components/Registration/Registration'
import CreateGood from './components/CreateGood/CreateGood'
import MainPage from './components/MainPage/MainPage'
import Login from './components/Login/Login'
import Cart from './components/Cart/Cart'

const Warning = () => (
  <h1>403 F0rbidden</h1>
)

const App = () => {
  return (
    <Switch>
      <MainLayout>
          <Route path = '/Cart' component = {sessionStorage.getItem("logged") ? Cart : Warning} />
          <Route path = '/login' component = {Login} />
          <Route path = '/registration' component = {Registration} />
          <Route path = '/creategood' component = {CreateGood} />
          <Route path = '/' component = {MainPage} exact />
      </MainLayout>
    </Switch>
  )
}

export default App

