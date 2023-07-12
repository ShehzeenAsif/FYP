import * as React from "react";
import {Button, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useWalletConnect } from "@walletconnect/react-native-dapp";

export default function ConnectToMetaMask() {
  const connector = useWalletConnect();

  const connectWallet = React.useCallback(() => {
    return connector.connect();
  }, [connector]);

  return (
    <>
      {!connector.connected ? (
        <Button onPress={connectWallet} label="Connect wallet" />
      ) : (
        <>
          <Text>{connector.accounts[0]}</Text>
        </>
      )}
    </>
  );
}