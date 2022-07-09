import * as React from 'react';
import { TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Text, View , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen( {navigation} ) {
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.largeTitle}>
        <Text style={styles.header}>Home</Text>
        <Text style={styles.subTitle}>Hi Honey! I'm Home</Text>
        </View>
        <View style={styles.ok}>
        <Text style={styles.insights}>Insights</Text>
        </View>
        <View style={styles.middle}>
          <View style={styles.insightView}>
            <View style={styles.circle} />
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail')}
            >
              <Text style={styles.Click}>Click for more insights</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.quotes}>
          <Text style={styles.quote}>Daily Quotes</Text>
        </View>
        <StatusBar style="auto" />
        <View style={styles.top}>
        <View style={styles.white}></View>
        </View>
      </View>
      </ScrollView>
      </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // backgroundColor: '#CEE5F2',
    //or can try use this as background colour: #7C98B3 or #ACCBE1 or #B1B695
  },
  largeTitle: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#473144'
  },
  subTitle: {
    color: '#C1CAD6',
    marginTop: 4
  },
  ok: {
    paddingHorizontal: 10,
    marginTop: 55,
  },
  insights: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#473144',
    marginTop: -40,
  },
  insightView: {
    width: 375,
    height: 200,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1.23,
  },
  middle: {
    paddingHorizontal: 5.88,
    marginTop: 5
  },
  white: {
    width: 100,
    height: 10,
    backgroundColor: 'black',
  },
  top: {
    marginTop: -3
  },
  quotes: {
    marginTop: 53,
    paddingHorizontal: 5
  },
  quote: {
    fontSize: 26.7,
    fontWeight: 'bold',
    color: '#473144',
    marginTop: -40,
  },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'white',
    marginHorizontal: 200,
    marginTop: 10,
    borderColor: 'blue',
    borderWidth: 7
  },
  moreInsights: {
    paddingTop: 170,
    paddingHorizontal: 30
  },
  Click: {
    color: '#B7B5B3',
    textDecorationLine: 'underline'
  },
  paddin: {
    paddingHorizontal: 25,
    marginTop: -3
  }
});

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>S</Text>
    </View>
  );
}
function RunScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Run</Text>
    </View>
  );
}
function WorkoutsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Run</Text>
    </View>
  );
}
function ChallengesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Challenge</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Workouts" component={WorkoutsScreen} />
        <Tab.Screen name="Run" component={RunScreen} />
        <Tab.Screen name="Challenges" component={ChallengesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}