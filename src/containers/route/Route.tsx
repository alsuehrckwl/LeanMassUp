import * as React from 'react'

import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import { Intro } from '../../components/intro/Intro'

export const RootNavigation = new createSwitchNavigator({
  Home: {
    // screen:
  },
  Intro: {
    screen: Intro,
  },
})
