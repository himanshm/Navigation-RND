import { View, StyleSheet, FlatList, ListRenderItemInfo } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useRoute } from '@react-navigation/native';
import Meal from '../models/meals';
import MealItem from '../components/MealItem';

type OverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Overview'
>;

function MealsOverviewScreen({ route }: OverviewScreenProps) {
  // Alternative for a component which is not registered as a screen
  // const route = useRoute()
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (mealItem) => mealItem.categoryIds.indexOf(categoryId) >= 0
  );

  function renderMealItem(itemData: ListRenderItemInfo<Meal>) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      imageUrl: item.imageUrl,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
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
