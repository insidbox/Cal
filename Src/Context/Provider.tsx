import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useReducer } from 'react'
import Reducer from "./Ruducer"
import { initalsate } from './initalstate'
export const GLOBALCONTEXT = createContext({})
export default function Provider({ children }) {
    const Initalstate: initalsate = {
        CurrentValue: "0",
        PreviousValue: "",
        Answer: "",
        Operator: ""
    }
    const [state, dispatch] = useReducer<any>(Reducer, Initalstate)
    return (
        <GLOBALCONTEXT.Provider value={{ state, dispatch }}>
            {children}
        </GLOBALCONTEXT.Provider>
    )
}

const styles = StyleSheet.create({})