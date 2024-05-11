import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput  style={styles.textInput} placeholder="Your Course Goal!"/>
        <Button title="Add Goal"/>
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#000'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#000',
    width: '70%',
    marginBottom: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  }
});
