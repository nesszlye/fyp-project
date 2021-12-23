import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homepage from "../screens/homepage";
import Profile from "../screens/profilePage/profile";
import editProfile from "../screens/profilePage/editProfile";
import resetPassword from "../screens/profilePage/resetPassword";
import Group from "../screens/groupPage/group";
import addGroup from "../screens/groupPage/addGroup";
import joinGroup from "../screens/groupPage/joinGroup";
import myDashboard from "../screens/dashboardPage/myDashboard";
import groupDashboard from "../screens/dashboardPage/groupDashboard";
import Calculator from "../screens/calculatorPage/calculator";
import CGPA from "../screens/calculatorPage/CGPA";
import GPA from "../screens/calculatorPage/GPA";

const { Navigator, Screen } = createStackNavigator();

const UserStack = () => (
  <Navigator headerMode="none">
 {/* // other options: "float", "screen" */}
    <Screen name="Homepage" component={Homepage} />
    <Screen name="Profile" component={Profile} />
    <Screen name="EditProfile" component={editProfile} />
    <Screen name="ResetPassword" component={resetPassword} />
    <Screen name="Group" component={Group} />
    <Screen name="AddGroup" component={addGroup} />
    <Screen name="JoinGroup" component={joinGroup} />
    <Screen name="MyDashboard" component={myDashboard} />
    <Screen name="GroupDashboard" component={groupDashboard} />
    <Screen name="Calculator" component={Calculator} />
    <Screen name="CGPA" component={CGPA} />
    <Screen name="GPA" component={GPA} />
    

  </Navigator>
);

export default UserStack;

// export const AuthNavigator = () => (
//   <NavigationContainer>
//     <HomeNavigator />
//   </NavigationContainer>
// );
