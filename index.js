/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Router from './src/router/router';
import Redux from './src/redux/redux';

AppRegistry.registerComponent(appName, () => Router);
