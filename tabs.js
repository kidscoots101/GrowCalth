import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import {HomeScreen} from './screens/HomeScreen'
import {RunScreen} from './screens/RunScreen'
import {ChallengesScreen} from './screens/ChallengesScreen'
import {SettingsScreen} from './screens/SettingsScreen'
import {WorkoutsScreen} from './screens/WorkoutsScreen'

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
      <NavigationContainer>
        {/* <Tab.Navigator> */}
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Workouts" component={WorkoutsScreen} />
          <Tab.Screen name="Run" component={RunScreen} />
          <Tab.Screen name="Challenges" component={ChallengesScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        {/* </Tab.Navigator> */}
      </NavigationContainer>
    );
  }

export default Tabs;