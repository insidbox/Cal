import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Row({ children }) {
    return (
        <View style={{ flexDirection: "row" }}>
            {children}
        </View>
    )
}

 