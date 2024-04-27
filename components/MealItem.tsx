import { Text, View } from 'react-native';

type MealItemProps = {
  title: string;
};

function MealItem({ title }: MealItemProps) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default MealItem;
