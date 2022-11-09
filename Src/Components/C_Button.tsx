import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Color from "./../Assets/Color"
const screen = Dimensions.get("window")
export default function C_Button({ onPress, text, Size }) {
    const ButtonSyles = [styles.Button]
    const TextSyles = []
    if (Size === "Accent") {
        ButtonSyles.push(styles.ButtonAccent)
        TextSyles.push(styles.TextAccent)

    }
    else if (Size === "Double") {
        ButtonSyles.push(styles.ButtonDouble)
        TextSyles.push(styles.TextDouble)
    }
    else {
        ButtonSyles.push(styles.ButtonCE)
        TextSyles.push(styles.TextCE)
    }
    return (
        <TouchableOpacity onPress={onPress} style={ButtonSyles} >
            <Text style={TextSyles}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    Button: {
        height: screen.height / 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        margin: 3
    },
    text: {

        color: Color.black,
        fontWeight: "bold"
    },
    ButtonAccent: {
        width: screen.width / 8,
        backgroundColor: Color.Sc,
    },
    TextAccent: {
        fontSize: 28,
    },
    ButtonDouble: {
        width: screen.width / 6,
        backgroundColor: Color.prim,

    },
    TextDouble: {
        fontSize: 32,
        color: Color.Wi
    },
    ButtonCE: {
        backgroundColor: Color.black,
        width: screen.width / 6,
    },
    TextCE: {
        color: Color.Wi,
        fontSize:32,
        fontWeight:"bold"
    }
})