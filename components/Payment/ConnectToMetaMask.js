import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { WCSessionRequest } from '@walletconnect/react-native';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { ethers } from 'ethers';

const ConnectToMetaMask = () => {
  useEffect(() => {
    const setupWalletConnect = async () => {
      const connector = new WalletConnectProvider({
        bridge: 'https://bridge.walletconnect.org', // Bridge server URL
      });

      await connector.enable();

      // Create an ethers.js provider using the WalletConnect provider
      const provider = new ethers.providers.Web3Provider(connector);

      // Your app logic using the provider...
      const getAccountBalance = async () => {
        const accounts = await provider.listAccounts();
        const balance = await provider.getBalance(accounts[0]);

        // Handle the account balance...
        console.log('Account balance:', balance);
      };

      // Call the function to get the account balance
      getAccountBalance();
    };

    setupWalletConnect();
  }, []);

  const handleSessionRequest = async (session) => {
    const { accounts, chainId } = session.params[0];

    // Validate the session parameters (accounts, chainId, etc.)
    // Prompt the user to approve the connection request

    // Once the user approves the connection, call the following to complete the session:
    connector.approveSession({
      accounts: [accounts[0]],
    });
  };

  useEffect(() => {
    connector.on('session_request', handleSessionRequest);

    return () => {
      connector.off('session_request', handleSessionRequest);
    };
  }, [connector]);

  return (
    <View>
      <Button title="Connect to MetaMask" onPress={setupWalletConnect} />
    </View>
  );
};

export default ConnectToMetaMask;
