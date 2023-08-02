import React from "react";
import { SafeAreaView, Text, StyleSheet, ImageBackground, View, StatusBar } from "react-native";

const RowText = (props) => {
    const {containerStyles, messageOneStyles, messageTwoStyles, messageOne, messageTwo} = props
   
    return (
        <View style={containerStyles}>
            <Text style={messageOneStyles}>{messageOne}</Text> 
            <Text style={messageTwoStyles}>{messageTwo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyles: {
        
    }
})
export default RowText;