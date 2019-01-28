import * as React from 'react'

import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { Intro } from '../../components/intro/Intro'
import { Login } from '../../components/login/Login'
import { Home } from '../../components/home/Home'

export const RootNavigation = new createSwitchNavigator(
  {
    Home: {
      screen: Home,
    },
    Intro: {
      screen: Intro,
    },
    Login: {
      screen: Login,
    },
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: ({ state }) => {
        return { title: state.params && state.params.title }
      },
    },
  },
)

export const RootContainer = createAppContainer(RootNavigation)

export default RootContainer
