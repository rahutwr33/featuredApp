import React from 'react';
import { Navigation } from 'react-native-navigation';
import {
    Splash_Screen
  } from './screen';
import Splash from '../containers/splash/splash';
  
function WrappedComponent(Component) {
    return function inject(props) {
      const EnhancedComponent = () => (
        <Provider>
          <Component
            {...props}
          />
        </Provider>
      );
  
      return <EnhancedComponent />;
    };
  }

  export default function () {
    Navigation.registerComponent(Splash_Screen, () => WrappedComponent(Splash));
    console.info('All screens have been registered...');
  }