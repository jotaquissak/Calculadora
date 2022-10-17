import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    dafaultButton:{
        fontSize: 30,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: "#343434",
        color: "#fff",
        borderWidth: 10,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: 25,
        borderColor: "#000"
    }, 
    orangeButton:{
        color: "#fff",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F99D08",
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
        color: "#000",
        paddingTop: 12,
    },
    acButton:{
        color:"#fff"
    }
})

export default styles;