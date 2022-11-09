import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Keyb from './Src/Templ/Keyb'
import Color from './Src/Assets/Color'
import { GLOBALCONTEXT } from './Src/Context/Provider'

export default function index() {
    const { state } = React.useContext<any>(GLOBALCONTEXT)
    return (

        <View style={{ flex: 1, paddingHorizontal: 10 }}>

            <View style={{ padding: 5 }}>
                <Text style={{ textAlign: "center", fontSize: 32, color: Color.black, fontWeight: "bold" }}>
                    Standard</Text>
            </View>

            <View style={{ backgroundColor: Color.Grey, flex: 0.4, borderRadius: 10
            ,padding:10,justifyContent:"flex-end" ,flexDirection:"row" }}>
                 <Text style={{ fontSize: 22, fontWeight: "500", color: Color.black }}>
                    {state.PreviousValue}
                </Text>
                <Text style={{ fontSize: 22, fontWeight: "500", color: Color.black }}>
                    {state.Operator}
                </Text>
                <Text style={{ fontSize: 22, fontWeight: "500", color: Color.black }}>
                    {state.CurrentValue}
                </Text>
                
                
                <Text style={{ color: Color.black, fontSize: 28, fontWeight: "bold",padding:5 }} >
                    {state.Answer == undefined || state.Answer == "" ? "" : `${state.Answer}${"="}`}
                </Text>
            </View>
            <View style={{ flex: 0.6, justifyContent: "center" }}>

                <Keyb />
            </View>



        </View>

    )
}

const styles = StyleSheet.create({})