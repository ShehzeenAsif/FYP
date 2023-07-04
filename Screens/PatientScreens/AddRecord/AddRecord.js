import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { colors } from "../../../constants/colors";
import Button from "../../../components/UI/Button";
import PickImage from "../../../components/Records/PickImage";
import UploadImage from "../../../components/Records/UploadImage";

const AddRecord = ({ navigation, route }) => {
  const [showPickComponent, setPickShowComponent] = useState(false);
  //const [childComponentVisible, setChildComponentVisible] = useState(false);
  const [images, setImages] = useState([]);

  console.log(showPickComponent);
  const pressHandlerPick = () => {
    console.log("button");
    setPickShowComponent(true);
    // <PickImage/>
  };
  const pressHandlerUpload = () => {
    navigation.navigate("UploadImage");
    // <UploadImage/>
  };
  const handleChildComponentComplete = () => {
    setPickShowComponent(false);
  };
  const handleImage = (imageUrl) => {
    setPickShowComponent(false);
    setImages((prev) => [...prev, imageUrl]);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>RECORD</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={pressHandlerPick} style={styles.button}>
            Pick Image
          </Button>
          <Button onPress={pressHandlerUpload} style={styles.button}>
            Upload Image
          </Button>
        </View>
        {showPickComponent && <PickImage onSelectImage={handleImage} />}
        {images.map((imageUrl) => {
          return (
            <View style={{margin:10}} key={imageUrl}>
              <Image
                source={{ uri: imageUrl }}
                style={{ width: 200, height: 200 }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default AddRecord;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.offWhite,
  },
  button: {
    fontSize: 12,
    marginTop: 30,
    alignItems: "center",
    //backgroundColor: '#006070',
    backgroundColor: colors.blue,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    flex: 1 / 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});
