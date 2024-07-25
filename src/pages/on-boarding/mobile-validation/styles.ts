import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#0a0a0a",
        height: "100%",
    },
    headerSection:{
        height : "10%",
        marginLeft:20,
        marginTop:20
    },
    textHeaderSection:{
        height:"20%",
        marginLeft:20,
        marginRight:20,
        display:"flex",
        gap:10,
        paddingTop:"0%"
    },
    mobileTextInput:{
        height:"15%",
        paddingTop:"10%",
        marginLeft:20,
        marginRight:20
    },
    actionSection:{
        height:"40%",
        marginLeft:20,
        marginRight:20,
        display:"flex",
        justifyContent:"flex-end"
    }

})