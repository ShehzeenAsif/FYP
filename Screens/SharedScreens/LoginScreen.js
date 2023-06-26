import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AccountLogin from "../../components/Login/AccountLogin";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import { colors } from "../../constants/colors";

const LoginScreen = ({ navigation, route }) => {
  
  //const register = route.params.register;

  const loginHandler = () => {
    navigation.navigate("DashboardScreen", {
      
    });
  };
 

  return (
    <View style={styles.container}>
      <ImageBackground
       // source={require("../../assets/images/signupbg.webp")}
        style={styles.backgroundImage}
      />
      <Card style={styles.inputContainer}>
        <Text style={styles.title}>LOGIN</Text>
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button style={styles.button} onPress={loginHandler}>
          LOGIN
        </Button>
        <Text style={styles.registerText}>
          New User?
          <Text style={styles.registerSubtext}>
            Register Now
          </Text>
        </Text>
       
      </Card>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: 280,
  },
  inputContainer: {
    marginTop: 40,
    height: 200,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue
  },
  button: {
    paddingHorizontal: 100,
    padding: 20,
  },
  forgetPasswordText: {
    color: "orange",
    textDecorationLine: "underline",
    marginTop: -5,
    marginLeft: 150,
    marginBottom: 20,
  },
  registerText: {
    fontSize: 16,
    marginTop: 16,
    color: colors.blue,
  },
  registerSubtext: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});
