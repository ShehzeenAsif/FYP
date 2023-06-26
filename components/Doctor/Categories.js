import { Image, ImageBackground, StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import Title from "../../components/UI/Title";
import { colors } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Categories = () => {
    const categories = [
        {
          id: "c1",
          name: "Physician",
          icon: require('../../assets/images/doctor.png')
        },
        {
          id: "c2",
          name: "Gynecologist",
          icon: require('../../assets/images/doctor.png')
        },
        {
          id: "c3",
          name: "Cardio",
          icon: require('../../assets/images/doctor.png'),
        },
        {
          id: "c4",
          name: "Dentist",
          icon: require('../../assets/images/doctor.png'),
        },
    ];

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Doctors</Text>
           <View style={styles.itemContainer}>
              <FlatList horizontal data={categories} 
                  renderItem={(itemData) => {
                  return (
                    <View style={styles.item}>
                       <Image source={itemData.item.icon} style={styles.categoryImage} />
                       <Text style={styles.categoryName}>{itemData.item.name}</Text>
                    </View>
                  );
                }}/>      
            </View>

        </View>
    );
}

export default Categories;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      padding: 6,
      marginVertical: 6
    },
    categoryImage: {
        width: 70,
        height: 70,
      },
    item: {
       margin: 10,
       alignItems: 'center',
       flexWrap: 'wrap'
    },
    itemContainer: {
       flexDirection: "row",
       alignItems: 'center',
       backgroundColor: colors.offWhite, 
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      color: colors.blue,
    },  
    categoryName: {
      fontSize: 12,
      fontWeight: 'bold',
      color: colors.blue
    }
  
  });