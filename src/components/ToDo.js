import React, {useState} from 'react';
import {
    Text, 
    TextInput, 
    TouchableWithoutFeedback,
    FlatList,
    View,
    StyleSheet,
     } from 'react-native';

const ToDo = () => {
    const [task, updateTask] = useState('');
    const [tasks, updateTasks] = useState([])

    const handleAdd =() =>{
        if(task.trim()){
        updateTasks([... tasks, task]);
        updateTask('');
        }
    }

    const handleRenderTask = ({item}) => <Text style={styles.item}>{item}</Text>;
     
return(
    <View style={styles.container}>
<View style={styles.area}>
        <Text style={styles.title}>ToDo List</Text>
       <View style={styles.form}>
        <TextInput 
        style ={styles.field}
        value={task} 
        onChangeText={text => updateTask(text)}/>
        <TouchableWithoutFeedback onPress={handleAdd}>
        <View style={styles.button}>
        <Text style={styles.buttonText}>Add</Text>
        </View>
         </TouchableWithoutFeedback>
         </View>
         <FlatList data={tasks}
          keyExtractor={item => item}
          renderItem={handleRenderTask}/>
</View>
    </View>
);
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        backgroundColor:'#262626',
    },

    area:{
        marginTop:70,
        justifyContent:'center',
        alignItems:'center',
    },

    title:{
        fontWeight:'bold',
        fontSize:25,
        marginBottom:20,
    },
    field:{
        borderWidth:1,
        borderColor:'#dcdcdc',
        padding:10,
        fontSize:15,
        color:'white',
        borderRadius:5,
        flex:1,
        marginRight:10,
        
    },
    button:{
        backgroundColor:'#CD5C5C',
        padding:5,
        borderRadius:5,
        justifyContent:'center',

    },
    buttonText:{
        color:'white',

    },
    item:{
        borderWidth:1,
        borderColor:'#dcdcdc',
        padding:10,
        marginTop:15,
        borderRadius:3,
        width:350,
        backgroundColor:'white',
        fontWeight:'bold',

    },
    form:{
        flexDirection:'row'
    },
});

export default ToDo;