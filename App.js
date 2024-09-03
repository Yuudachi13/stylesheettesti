import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import StyleSheet from './Styles';

export default function App() {
  return (
    <View style={[StyleSheet.container,{alingItems: 'flex-start'}]}>
      <Text>Testi tekstiä vähän tänne </Text>
      <StatusBar style="auto" />
    </View>
  );
}