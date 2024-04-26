import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

export type RootStackParamList = {
  Categories: undefined;
  Overview: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>(); // Stack is an object with two properties where every property holds an object that acts as a component. Therefore, we can use those nested component objects.

export default function App() {
  return (
    <>
      <StatusBar style='auto' />
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name='Categories' component={CategoriesScreen} />
          <RootStack.Screen name='Overview' component={MealsOverviewScreen} />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
