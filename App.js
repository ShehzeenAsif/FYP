import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserHomeScreen from "./Screens/PatientScreens/UserHomeScreen";
import Profile from "./Screens/PatientScreens/Profile";
import AddRecord from "./Screens/PatientScreens/AddRecord/AddRecord" ;
import UserHistory from "./Screens/PatientScreens/UserHistory";
import SplashScreen from "./Screens/SharedScreens/SplashScreen";
import LoginScreen from "./Screens/SharedScreens/LoginScreen";
import UploadImage from './components/Records/UploadImage';
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "./constants/colors";

// import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const Dashboard = ({ route }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: colors.darkTeal },
        tabBarActiveTintColor: colors.light,
      }}
    >
      <Tab.Screen
        name="UserHomeScreen"
        component={UserHomeScreen}
        initialParams={route}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={UserHistory}
        options={{
          title: "History",
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="history"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddRecord"
        component={AddRecord}
        initialParams={route}
        options={{
          title: "AddRecord",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name="addfile"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={route}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={24}
              color={focused ? colors.light : colors.offWhite}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <>
    <View style={styles.container}>
      
      <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
             // headerTitle: () => <LogoTitle />,
             // headerStyle: { backgroundColor: colors.darkTeal },
              headerTintColor: colors.blue,
            }}
          >
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="DashboardScreen" component={Dashboard} />
            <Stack.Screen name="UploadImage" component={UploadImage} />
            
          </Stack.Navigator>
        </NavigationContainer>
        
    </View>
     
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
   // backgroundImage: './assets/bg.png',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
 
});
