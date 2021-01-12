import React from 'react';
import {Icon} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//components
import {Header, MyTabBar} from '../components';
import {theme} from '../constants';
import CustomDrawerContent from './Menu';

//screens
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import About from '../screens/About';
import Contact from '../screens/Contact';
import Share from '../screens/Share';
import Expertise from '../screens/Expertise';
import Career from '../screens/Career';
import Knowledge from '../screens/Knowledge';
import Newsmedia from '../screens/Newsmedia';
import Collaterals from '../screens/Collaterals';
import Team from '../screens/Team';
import Investors from '../screens/Investors';
//stacks
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({}) => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

function ExpertiseStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Expertise"
        component={Expertise}
        options={{
          header: ({}) => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

function AboutStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{header: () => <Header {...props} />}}
      />

      <Stack.Screen
        name="Team"
        component={Team}
        options={{header: () => <Header back {...props} />}}
      />
      <Stack.Screen
        name="Investors"
        component={Investors}
        options={{header: () => <Header back {...props} />}}
      />
    </Stack.Navigator>
  );
}

function KnowledgeStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Knowledge"
        component={Knowledge}
        options={{header: () => <Header {...props} />}}
      />
      <Stack.Screen
        name="Newsmedia"
        component={Newsmedia}
        options={{header: () => <Header back {...props} />}}
      />
      <Stack.Screen
        name="Collaterals"
        component={Collaterals}
        options={{header: () => <Header back {...props} />}}
      />
    </Stack.Navigator>
  );
}

function CareerStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Career"
        component={Career}
        options={{header: () => <Header {...props} />}}
      />
    </Stack.Navigator>
  );
}

function ContactStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{
          header: () => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

function ShareStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Share"
        component={Share}
        options={{
          header: () => <Header {...props} />,
        }}
      />
    </Stack.Navigator>
  );
}

function BottomStack() {
  return (
    <Bottom.Navigator
      initialRouteName="Career"
      tabBar={(props) => <MyTabBar {...props} />}
      tabBarOptions={{
        activeTintColor: theme.COLORS.BUTTON,
        inactiveTintColor: 'white',
        labelStyle: {
          fontFamily: 'Rubik-Light',
        },
        style: {
          backgroundColor: theme.COLORS.PRIMARY,
          margin: 10,
          borderRadius: 10,
        },
      }}>
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" type="feather" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Expertise"
        component={ExpertiseStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="layers" type="fontawesome" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Knowledge"
        component={KnowledgeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="gear" type="evilicon" color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name="Career"
        component={CareerStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" type="evilicon" color={color} size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
}

function AppStack() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={BottomStack} />
      <Drawer.Screen name="Expertise" component={ExpertiseStack} />
      <Drawer.Screen name="About" component={AboutStack} />
      <Drawer.Screen name="Knowledge Center" component={KnowledgeStack} />
      <Drawer.Screen name="Career" component={CareerStack} />
      <Drawer.Screen name="Contact" component={ContactStack} />
      <Drawer.Screen name="Share" component={ShareStack} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack() {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="App" component={AppStack} />
    </Stack.Navigator>
  );
}
