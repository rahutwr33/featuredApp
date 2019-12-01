import React from 'react';
import { Navigation } from 'react-native-navigation';
import {
    Splash_Screen,
    Login_Screen,
    Register_Screen,
    TAB1_SCREEN,
    TAB2_SCREEN,
    Sidebar_SCREEN
  } from './screen';
import Splash from '../containers/splash/splash';
import LoginScreen from '../containers/login';
import RegisterScreen from '../containers/register';
import HomeScreen from '../containers/home';
import SettingScreen from '../containers/setting';
import SidebarScreen from '../containers/sidebar';



function WrappedComponent(Component) {
    return function inject(props) {
      const EnhancedComponent = () => (
        // <Provider>
          <Component
            {...props}
          />
        // </Provider>
      );
  
      return <EnhancedComponent />;
    };
  }

  export default function () {
    Navigation.registerComponent(Splash_Screen, () => WrappedComponent(Splash));
    Navigation.registerComponent(Login_Screen, () => WrappedComponent(LoginScreen));
    Navigation.registerComponent(Register_Screen, () => WrappedComponent(RegisterScreen));
    Navigation.registerComponent(TAB1_SCREEN, () => WrappedComponent(HomeScreen));
    Navigation.registerComponent(TAB2_SCREEN, () => WrappedComponent(SettingScreen));
    Navigation.registerComponent(Sidebar_SCREEN, () => WrappedComponent(SidebarScreen));
    console.info('All screens have been registered...');
  }