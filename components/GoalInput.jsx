
import { useState } from 'react';
import { Button,  Image,  Modal,  StyleSheet, TextInput, View } from 'react-native';

export default function GoalInput({addGoalHandler,isVisible,setIsVisible}) {
    const [enteredGoalText, setEnteredGoalText] = useState('')
    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
      }
    
    return(
     <Modal
       animationType='slide'
       visible={isVisible} >
        
        <View style={styles.inputContainer}>
              <Image style={styles.image} source={require('../assets/image/goal.png')}/>
            <TextInput
              value={enteredGoalText} 
              onChangeText={goalInputHandler} 
              style= {styles.textInput} 
              placeholder='Your course goal!'
              />
           <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                  <Button onPress={() => setIsVisible(false)} title='Cancel' color={'#f31282'}/>
                </View>
                <View style={styles.button}>
                  <Button
                  color={'#b180f0'}
                  onPress={() => {
                  addGoalHandler(enteredGoalText);
                  setEnteredGoalText('')
                  } }
                  title='Add Goal' />
                </View>
           </View>
      </View>
      </Modal> 
    )
}
const styles = StyleSheet.create({
  image: {
    width:100,
    height:100,
    margin:20,
  },
    inputContainer : {
        flex: 1,
        justifyContent: 'center',
        alignItems : "center",
        backgroundColor: '#311b6b',
       },
       textInput : {
        borderWidth : 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color : '#120438',
        borderRadius : 6,
        width: '90%',
        marginRight : 8,
        padding: 16,
       },
       buttonsContainer : {
        flexDirection:'row',
        marginTop: 20,
       },
       button : {
        width:'30%',
        marginHorizontal: 8,
       }
})