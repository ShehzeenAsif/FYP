import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AccountLogin from "../../components/Login/AccountLogin";
import Button from "../../components/UI/Button";
import Card from "../../components/UI/Card";
import Input from "../../components/UI/Input";
import { colors } from "../../constants/colors";

const LoginScreen = ({ navigation, route }) => {
  
 // const register = route.params.register;
  const signupHandler = () => {
    navigation.navigate("SignupScreen", {
      //register: route.params.register,
    });
  };
  

  const loginAsPatientHandler = () => {
    navigation.navigate("DashboardScreen", {
     // register: route.params.register,
    });
  };

  const loginAsDocHandler = () => {
    navigation.navigate("DoctorDashboard", {
    });
  };
 

  return (
    <View style={styles.container}>

      <Card style={styles.cardContainer}>
      <ImageBackground
        source={require("../../assets/images/signupbg.png")}
        style={styles.backgroundImage} />
        <View style={styles.textContainer}>
            <Input style={styles.inputContainer} placeholder="Email" />
            <Input style={styles.inputContainer} placeholder="Password" />
        </View>
        
        <View style={styles.buttonContainer}>
            <View style={styles.buttonContainer1}>
              <Button style={styles.button} onPress={loginAsPatientHandler}>
               Login As Patient
              </Button>
           </View>
           <View style={styles.buttonContainer1}>
              <Button style={styles.button} onPress={loginAsDocHandler}>
              Login As Doctor
        </Button>
        </View>

        </View>
       
        <Text style={styles.registerText}>
          New User?
          <Text style={styles.registerSubtext} onPress={signupHandler}>
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
    marginTop:40  ,
    width: 250,
    height: 200,
  },
  cardContainer: {
    marginTop: 80,
   // height: 200,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor:"#D9D9D9"
  },
  textContainer: {
    padding: 20,
   // width: '100%',
    alignContent: 'center',
    justifyContent: "center"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blue
  },
  button: {
    paddingHorizontal: 40,
  },
  buttonContainer: {
    padding: 10,
  },
  buttonContainer1: {
    padding: 6,
    
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
  inputContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
   // width: '90%',
    padding: 8,
},
});
