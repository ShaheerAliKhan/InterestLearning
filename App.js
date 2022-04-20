import React from 'react'
import { StatusBar } from 'react-native'
import { AppColors } from './src/Colors'
import Routes from './src/Routes'

const App = () => {
  return <>
    <StatusBar barStyle='light-content' backgroundColor={AppColors.primaryColor} />
    <Routes />
  </>
}

export default App