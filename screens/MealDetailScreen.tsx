import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import { RootStackParamList } from '../App';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/meal-detail/Subtitle';
import List from '../components/meal-detail/List';

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
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <MealDetails
        complexity={complexity}
        affordability={affordability}
        duration={duration}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle subtitle='Ingredients' />
          <List data={ingredients} />
          <Subtitle subtitle='Steps' />
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
