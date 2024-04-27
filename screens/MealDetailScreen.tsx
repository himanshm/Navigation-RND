import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { RootStackParamList } from '../App';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

function MealDetailScreen({ route }: DetailScreenProps) {
  const mealId = route.params.mealId;
  return <Text>MealDetailScreen</Text>;
}

export default MealDetailScreen;
