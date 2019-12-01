/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {AppRegistry } from "react-native";
import {MainScreen,pushTabBasedApp} from './src/navigation';
import { Navigation } from 'react-native-navigation';
Navigation.events().registerAppLaunchedListener(() => pushTabBasedApp());
