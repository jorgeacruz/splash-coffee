import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../src/pages/Home'
import Money from '../src/pages/Money'
import Store from '../src/pages/Store'
import { CustomTabBar } from '../src/components/CustomTabBar/'

const Tab = createBottomTabNavigator();

export function Routes(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle:{
          backgroundColor: "#FFF",
          borderTopWidth: 0
        }
      }}

      tabBar={(props) => <CustomTabBar {...props} />}    
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarIcon: 'compare-arrows',
        }}
      />
      <Tab.Screen 
        name="Money" 
        component={Money} 
        options={{
          tabBarIcon: 'attach-money'
        }}
      />
      <Tab.Screen 
        name="Store" 
        component={Store} 
        options={{
          tabBarIcon: 'storefront',
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

function RouteStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}