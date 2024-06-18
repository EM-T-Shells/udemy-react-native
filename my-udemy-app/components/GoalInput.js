import { useState } from "react";
import { StyleSheet, TextInput, Button, View } from "react-native";
import { Modal } from "react-native-web";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visbile} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View>
          <Button title="Add Goal" onPress={addGoalHandler} />
          <Button title="Cancel" color="red" onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#000",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
