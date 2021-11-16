/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Router from './src/router/router';

AppRegistry.registerComponent(appName, () => Router);
