/* eslint-disable eslint-comments/no-unlimited-disable /
/ eslint-disable */

import { Platform } from "react-native";
import './shim'
if (Platform.OS !== "web") {
  require("./global");
}

// const { registerRootComponent, scheme } = require("expo");
import {registerRootComponent, scheme} from "expo";
import App from "./App";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { withWalletConnect } from "@walletconnect/react-native-dapp";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(
  withWalletConnect(App, {
    redirectUrl:
      Platform.OS === "web" ? window.location.origin : `healaid://`,
    storageOptions: {
      asyncStorage: AsyncStorage,
    },
  })
);