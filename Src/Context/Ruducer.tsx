import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { initalsate, operationAction } from './initalstate'

export const HandleNumber = ({ CurrentValue, payload }) => {
    if (CurrentValue === "0") {
        return CurrentValue = payload
    }
    return CurrentValue = `${CurrentValue}${payload}`
}

export const handlTab = ({ CurrentValue, Answer, PreviousValue, Operator }) => {

    const current = parseFloat(CurrentValue)
    const previous = parseFloat(PreviousValue)
    if (Operator === "+") {
        return {
            Answer: current + previous
        }
    }
    if (Operator === "-") {
        return {
            Answer:previous -current
        }
    }
    if (Operator === "x") {
        return {
            Answer: current * previous
        }
    }
    if (Operator === "/") {
        return {
            Answer: previous / current
        }
    }
    else {
        return { Answer: CurrentValue }
    }
}
export default function Ruducer(state: initalsate, action: operationAction) {
    const { type, payload } = action
    const { CurrentValue, Answer, PreviousValue, Operator } = state
    switch (type) {
        case "number":
            return { CurrentValue: HandleNumber({ CurrentValue, payload }), PreviousValue, Operator }
        case "operator":
            return { Operator: payload, PreviousValue: CurrentValue, CurrentValue: "" }
        case "Tab":
            return {
                Answer: handlTab({ CurrentValue, Answer, PreviousValue, Operator }).Answer,
                Operator: "",
                CurrentValue: "",
                PreviousValue: ""
            }
            case "CE":
                return {
                    Answer:"",
                    Operator: "",
                    CurrentValue: "0",
                    PreviousValue: ""
                }

        default:
            return state
    }
}

