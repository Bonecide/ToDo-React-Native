import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [isVisibleModal,setIsVisibleModal] = useState(false)
  const [courseGoals, setCourseGoals] = useState([])

  
  const addGoalHandler = (enteredGoalText) => {
    if (enteredGoalText.length) {
      setCourseGoals(prev =>[...prev, {text : enteredGoalText,id: Math.random().toString()}])
      setIsVisibleModal(false)
    }
  }
  const onDeleteItem = (id) => {
    setCourseGoals((prev) => prev.filter((item) => item.id !== id))
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button
        onPress={() => setIsVisibleModal(true)}
        title='Add the goal'
        color='#5e0acc'/>
      <GoalInput isVisible={isVisibleModal} setIsVisible={setIsVisibleModal}  addGoalHandler={addGoalHandler}/>
      <View style={styles.goalsContiner}>  
       <FlatList 
       data={courseGoals}
       renderItem ={ (i) => {
        return (
          <GoalItem onDeleteItem = {onDeleteItem} id={i.item.id}  text={i.item.text}/>
        )
       }}
       keyExtractor ={(item,idx) => {
        return item + idx
       }}
       />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer :{
  flex: 1,
  paddingTop : 50,
  paddingHorizontal: 16,
  backgroundColor: '#1e085a'

 },
 
 goalsContiner : {
  flex : 5,
 },

});
