import React,{ useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Display from './components/display/index';
import Buttons from './components/buttons/index';


let state = {
  valueOnView: '',
  result: 0,
  operatad: false,
  point: false,
}


export default function App() {

  const [vView, setVview]=useState(state.valueOnView)
  const [vResult, setVresult]=useState(state.result)

  const addDigit = (d) => {  
    if( d == '+' || d == '-' || d == '*' || d == '/' || '%' ){
      state.point = false
    }
    if( d == '.' && !state.point){
      state.point = true
      state.operatad = false
    } else if( d == '.' && state.point){
      return
    }
    if(( d == '+' || d == '-' || d == '*' || d == '/' || '%' ) && state.operatad){
      state.valueOnView = state.result
      state.result = 0
    }
    state.valueOnView = state.valueOnView + d
    setVview(state.valueOnView)
    setVresult(state.result)
    state.operatad = false
  }


  const cleanView = () => {
    state = {
      valueOnView: '',
      result: 0,
      operatad: false,
      point: false,
    }
    setVview(state.valueOnView)
    setVresult(state.result)
  }


  const makeOperation = (d) => {
    if( d == 'AC'){
      cleanView()
      return
    } 
    if(d == 'backspace'){
      state.valueOnView = vView.substring(0,(vView.length-1))
      setVview(state.valueOnView)
      return
    }
    try{
      state.result = eval(state.valueOnView)
      state.operatad = true
      setVresult(state.result)
      return
    } catch{
      state.result = 'Erro'
      state.operatad = true
      setVresult(state.result)
    }
  }

  const makeDiferent = () =>{
    state.result = state.result * -1
    state.valueOnView = ''
    setVview(state.valueOnView)
    setVresult(state.result)
    return
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} backgroundColor="rgba(255, 255, 255, 0.6)" translucent={true}/>
      <Display value={vView} result={vResult}/>
      <View style={styles.buttons}>
        <Buttons label="C" ac orange double clicked={()=>{makeOperation('AC')}} ></Buttons>
        <Buttons label="DEL" OptionIcon double clicked={()=>{makeOperation('backspace')}}></Buttons>
        <Buttons label="(" clicked={()=>{addDigit('(')}}></Buttons>
        <Buttons label=")" clicked={()=>{addDigit(')')}}></Buttons>
        <Buttons label="+/-" orange clicked={()=>{makeDiferent()}}></Buttons>
        <Buttons label="÷" orange clicked={()=>{addDigit('/')}}></Buttons>
        <Buttons label="7" clicked={()=>{addDigit('7')}}></Buttons>
        <Buttons label="8" clicked={()=>{addDigit('8')}}></Buttons>
        <Buttons label="9" clicked={()=>{addDigit('9')}}></Buttons>
        <Buttons label="×" orange clicked={()=>{addDigit('*')}}></Buttons>
        <Buttons label="4" clicked={()=>{addDigit('4')}}></Buttons>
        <Buttons label="5" clicked={()=>{addDigit('5')}}></Buttons>
        <Buttons label="6" clicked={()=>{addDigit('6')}}></Buttons>
        <Buttons label="-" orange clicked={()=>{addDigit('-')}}></Buttons>
        <Buttons label="1" clicked={()=>{addDigit('1')}}></Buttons>
        <Buttons label="2" clicked={()=>{addDigit('2')}}></Buttons>
        <Buttons label="3" clicked={()=>{addDigit('3')}}></Buttons>
        <Buttons label="+" orange clicked={()=>{addDigit('+')}}></Buttons>
        <Buttons label="." clicked={()=>{addDigit('.')}}></Buttons>
        <Buttons label="0" clicked={()=>{addDigit('0')}}></Buttons>
        <Buttons label="=" orange double clicked={()=>{makeOperation('=')}}></Buttons>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#000"
  },
  buttons:{
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
