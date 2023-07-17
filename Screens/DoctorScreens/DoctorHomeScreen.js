import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Button from "../../components/UI/Button";
const DoctorHomeScreen = ({ navigation, route }) => {
  const connector = useWalletConnect()
  // console.log("conncetor",connector)
  return (
    <View style={styles.container}>
      <Button  onPress={connector.connect}>
        CONNECT WALLET
      </Button>
    </View>
  );
};

export default DoctorHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 24,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
