import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function Buttons(props){
    const buttonsStyle = [styles.dafaultButton]
    if(props.double){
        buttonsStyle.push(styles.doubleButton)
    } 
    if(props.orange){
        buttonsStyle.push(styles.orangeButton)
    }
    if(props.ac){
        buttonsStyle.push(styles.acButton)
    }
    if(props.OptionIcon){
        buttonsStyle.push(styles.buttonIconStyle)
        return(
            <TouchableOpacity onPress={props.clicked} style={buttonsStyle}>
                <Icon name="backspace" color="#fff" size={25}/>
            </TouchableOpacity>
        )
    }else{
        return(
            <TouchableOpacity onPress={props.clicked}>
                <Text style={buttonsStyle}>{props.label}</Text>
            </TouchableOpacity>
        )
    }
}