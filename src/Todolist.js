import React from 'react';
import {View,Text,StatusBar,TouchableOpacity,Switch, Button, TouchableHighlight, ScrollView} from 'react-native';
import {constants} from 'expo';

let id= 0;

const Todo = props =>{
    return(
        <View style={{flexDirection:'row'}}>
            <Switch value={props.todo.checked} onValueChange={props.onToggle}/>
            <Text style={{marginHorizontal:10}}>{props.todo.text}</Text>
            <TouchableHighlight onPress={props.onDelete}>
                <Text>delete</Text>
            </TouchableHighlight>
        </View>
    );
}
export default class Main extends React.Component {
   state={todos:[],}

    componentDidMount() {
        StatusBar.setHidden(false);
        StatusBar.setBarStyle("light-content");
      }

 addToDo(){
     id++
     const text ='TODO nmuber'+ id
     this.setState({
         todos:[
             ...this.state.todos,
             {id:id , text:text , checked:false}
         ],
     })
 }
 removeToDO(id){
     console.warn(id);
     this.setState({
         todos:this.state.todos.slice(todo => todo.id !== id)
     })
 }
toggleTodo(id){
    this.setState({
        todos:this.state.todos.map(todo=>{
            if(todo.id !== id) return todo
            return{
                id:todo.id,
                text:todo.text,
                checked:!todo.checked
            }
        })
    })
}

render(){
    return(
       <View style={{paddingTop:50}} >
           <Text>Todo list:{this.state.todos.length}</Text>
           <Text>uncheckd todo check:
           {this.state.todos.filter(todo=>!todo.checked).length}
           </Text>
                <TouchableOpacity onPress={()=>this.addToDo()}>
                    <Text>ADD TODO</Text>
                </TouchableOpacity>
            <ScrollView>
                {this.state.todos.map(todo=>(
                    <Todo
                    onToggle={()=>this.toggleTodo(todo.id)}
                    onDelete={()=>this.removeToDO(todo.id)}
                    todo={todo}
                    />
                ))}
                </ScrollView>
        </View>
    );
}
}