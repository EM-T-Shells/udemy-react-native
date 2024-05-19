import {StyleSheet, Text, View} from 'react-native';

function GoalItem(props) {
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>      {props.text}</Text>
    </View>
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        borderColor: '#000',
        borderWidth: 1,
        marginVertical: 8
      },
      goalText: {
        color: 'white'
      }
});