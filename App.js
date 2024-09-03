import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Testi tekstiä vähän tänne näin</Text>
      <StatusBar style="auto" />
    </View>
  );
}