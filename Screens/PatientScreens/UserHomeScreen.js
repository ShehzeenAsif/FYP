import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Categories from "../../components/Doctor/Categories";
import ChooseMode from "../../components/ModeOfConsultation/ChooseMode";


const UserHomeScreen = ({ route }) => {

    return (
       <View style={styles.container}>
          <Categories/> 
          <ChooseMode/>
         
       </View>
    );
}

export default UserHomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
     // paddingTop: 24,
      backgroundColor: 'white'
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
  });