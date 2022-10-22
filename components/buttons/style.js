import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    dafaultButton:{
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        backgroundColor: "#343434",
        color: "#fff",
        borderWidth: 10,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 25,
        borderColor: "#000",
    }, 
    orangeButton:{
        backgroundColor: "#F99D08",
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        
    },
    doubleButton:{
        width: (Dimensions.get('window').width/4)*2,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonIconStyle:{
        backgroundColor: "#F99D08",
        alignItems: "center",
        justifyContent: "center",
    },
    acButton:{
        color:"#fff"
    },
    text: {
        color: "#fff",
        textAlign: "center",
        fontSize: 30,
        alignItems: "center",
        justifyContent: "center",
    }
})

export default styles;
