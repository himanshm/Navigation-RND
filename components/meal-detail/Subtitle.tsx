import { StyleSheet, Text, View } from 'react-native';

type SubtitleProps = {
  subtitle: string;
};

function Subtitle({ subtitle }: SubtitleProps) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    marginVertical: 4,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: '#e2ab9b',
    borderBottomWidth: 2,
  },
  subtitle: {
    color: '#e2ab9b',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
});
