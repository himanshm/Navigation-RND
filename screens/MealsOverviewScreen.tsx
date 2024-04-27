import { Text, View, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useRoute } from '@react-navigation/native';

type OverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Overview'
>;

function MealsOverviewScreen({ route }: OverviewScreenProps) {
  // Alternative for a component which is not registered as a screen
  // const route = useRoute()
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview-{categoryId}</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
