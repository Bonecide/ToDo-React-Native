
import { View, Text, StyleSheet, Pressable } from 'react-native';
export default function GoalItem(props) {

    return(
      <Pressable
           style={(data) => data.pressed && styles.pressedItem }
               onPress={() => props.onDeleteItem(props.id)}>
          <View style={styles.goalItem}>
            
              
            <Text style={styles.goalItemText} >
              {props.text}
            </Text>
            
          </View>
          </Pressable>
     
    )
}
const styles = StyleSheet.create({
    goalItem : {
        margin: 8,
        borderRadius : 6,
        backgroundColor : '#5e0acc',
        padding : 8,
       },
       pressedItem : {
        opacity: 0.5,
        
       },
       goalItemText : {
        color: 'white',
       }
})