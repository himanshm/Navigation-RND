import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

export type RootStackParamList = {
  Categories: undefined;
  Overview: { categoryId: string };
};

const RootStack = createNativeStackNavigator<RootStackParamList>(); // Stack is an object with two properties where every property holds an object that acts as a component. Therefore, we can use those nested component objects.

// Out of the box, the top-most screen (i.e. the first child inside of <Stack.Navigator>) is used as the initial screen.
// You can therefore change the initial screen by changing the <Stack.Screen> order. Alternatively, there also is an initialRouteName prop that can be set on the navigator component (i.e., on <Stack.Navigator> in this case):

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName='Categories'
          screenOptions={{
            headerStyle: { backgroundColor: '#481E14' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#4b322b' },
          }}
        >
          <RootStack.Screen
            name='Categories'
            component={CategoriesScreen}
            options={{
              title: 'All Categories',
            }}
          />
          <RootStack.Screen
            name='Overview'
            component={MealsOverviewScreen}
            // options={({ route, navigation }) => {
            //   return { title: route.params.categoryId ?? 'Overview' };
            // }}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
