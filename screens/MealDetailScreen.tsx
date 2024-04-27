import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';

import { RootStackParamList } from '../App';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

type DetailScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

function MealDetailScreen({ route }: DetailScreenProps) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function getMealData() {
    if (selectedMeal) {
      return selectedMeal;
    } else {
      throw new Error('No meal found!');
    }
  }
  const mealItem = getMealData();
  const {
    imageUrl,
    title,
    duration,
    affordability,
    complexity,
    ingredients,
    steps,
  } = mealItem;

  return (
    <View>
      <Image source={{ uri: imageUrl }} />
      <Text>{title}</Text>
      <MealDetails
        complexity={complexity}
        affordability={affordability}
        duration={duration}
      />
      <Text>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;
