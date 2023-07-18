import Home from "../Screens/Home";
import Devices from "../Screens/Devices";
import Setting from "../Screens/Setting";
import Profile from "../Screens/Profile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import home_icon from "../assets/icons/Home.png"
import devices_icon from "../assets/icons/devices.png"
import profile_icon from "../assets/icons/Profile.png"
import setting_icon from "../assets/icons/Setting.png"
import { Image, StyleSheet, View } from "react-native";

const TabStack = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator screenOptions={{ 
      headerShown: false , tabBarStyle: {height: 90,
      paddingHorizontal: 5,
      paddingTop: 0,
      backgroundColor: 'rgba(34,36,40,0.85)',
      position: 'absolute',
      borderTopWidth: 0,
      borderTopLeftRadius:40,
      borderTopRightRadius:40}}} >
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Image source={home_icon} style={{ width: 24, height: 24 }} />,tabBarLabel: '',
        }}
        name="HomeScreen"
        component={Home}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Image source={devices_icon} style={{ width: 24, height: 28 }} />,tabBarLabel: '',
        }}
        name="devices"
        component={Devices}
      />
      <Tabs.Screen
        options={{
          tabBarIcon: () => <Image source={setting_icon} style={{ width: 24, height: 24 }} />,tabBarLabel: '',
        }}
        name="setting"
        component={Setting}
      />
       <Tabs.Screen
        options={{
          tabBarIcon: () => 
            <Image source={profile_icon} style={{ width: 24, height: 28 }} />,tabBarLabel: '',
        }}
        name="profile"
        component={Profile}
      />
    </Tabs.Navigator>
  );
};



export default TabStack;
