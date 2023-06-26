import { Image, ImageBackground, StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import Title from "../../components/UI/Title";
import { colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const ChooseMode = () => {
    const mode = [
        {
          id: "m1",
          name: "Consult Online",
          icon: require('../../assets/images/doctor.png')
        },
        {
          id: "m2",
          name: "Book Appointment",
          icon: require('../../assets/images/doctor.png')
        },
        
    ];

    return (
        <View style={styles.container}>
          <Text style={styles.title}>I want to</Text>
           <View style={styles.itemContainer}>
              <FlatList horizontal data={mode} 
                  renderItem={(itemData) => {
                  return (
                    <View style={styles.list}>
                      <View style={styles.item}>
                       <Image source={itemData.item.icon} style={styles.modeImage} />
                       <Text style={styles.modeName}>{itemData.item.name}</Text>
                     </View>
                    </View>
                  );
                }}/>      
            </View>

        </View>
    );
}

export default ChooseMode;

const styles = StyleSheet.create({
    container: {
      padding: 6,
      marginVertical: 6,
      backgroundColor: "white",
    },
    modeImage: {
        width: 100,
        height: 100,
      },
    item: {
       margin: 10,
       alignItems: 'center',
       flexWrap: 'wrap'
    },
    list: {
      margin: 10,
      justifycontent: 'center',
      alignItems: 'center',
    //  flexWrap: 'wrap',
      elevation: 3,
      width: 160,
       borderColor : "black",
       borderRadius: 5,
       shadowRadius: 2,
   },
    itemContainer: {
       flexDirection: "row",
       alignItems: 'center',
       
      // backgroundColor: colors.offWhite, 
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.blue,
    },  
    modeName: {
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.blue
    }
  
  });