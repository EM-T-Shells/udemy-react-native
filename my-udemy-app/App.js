import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hi, I am Linus!</Text>
      </View>
      <Text style={{margin: 16, borderWidth:2, borderColor:'green', padding: 16}}> I like to code</Text>
      <StatusBar style="auto" />
      <Button title="Press me" onPress={() => alert('Button pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
