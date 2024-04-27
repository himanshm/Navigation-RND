import {
  Text,
  Pressable,
  View,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import MealDetails from './MealDetails';

type MealItemProps = {
  id: string;
  title: string;
  imageUrl: string;
  duration: number;
  complexity: string;
  affordability: string;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}: MealItemProps) {
  const navigation = useNavigation<NavigationProps>();

  function selectMealItemHandler() {
    navigation.navigate('Details', { mealId: id });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#CCC' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },
});
