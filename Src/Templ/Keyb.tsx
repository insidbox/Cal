import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Row from '../Constant/Row'
import C_Button from '../Components/C_Button'
import { GLOBALCONTEXT } from '../Context/Provider'

export default function Keyb() {
    const { dispatch } = React.useContext<any>(GLOBALCONTEXT)
    const handlNum = ({ type, payload }) => {
        dispatch({ type, payload })
    }
    return (
        <View>
            <Row>
                <C_Button text={"CE"}
                    onPress={() => handlNum({ type: "CE", payload: "" })}
                    Size={"CE"} />

                <C_Button text={"7"}
                    onPress={() => handlNum({ type: "number", payload: "7" })}
                    Size={"Accent"} />

                <C_Button text={"8"}
                     onPress={() => handlNum({ type: "number", payload: "8" })}
                    Size={"Accent"} />

                <C_Button text={"9"}
                    onPress={() => handlNum({ type: "number", payload: "9" })}
                    Size={"Accent"} />

                <C_Button text={"x"}
                   onPress={() => handlNum({ type: "operator", payload: "x" })}
                    Size={"Accent"} />
            </Row>
            <Row>
                <C_Button text={"6"}
                    onPress={() => handlNum({ type: "number", payload: "6" })}
                    Size={"Accent"} />

                <C_Button text={"5"}
                     onPress={() => handlNum({ type: "number", payload: "5" })}
                    Size={"Accent"} />

                <C_Button text={"4"}
                     onPress={() => handlNum({ type: "number", payload: "4" })}
                    Size={"Accent"} />

                <C_Button text={"+"}
                    onPress={() => handlNum({type:"operator",payload:"+"})}
                    Size={"Accent"} />
            </Row>
            <Row>
                <C_Button text={"1"}
                     onPress={() => handlNum({ type: "number", payload: "1" })}
                    Size={"Accent"} />

                <C_Button text={"2"}
                    onPress={() => handlNum({ type: "number", payload: "2" })}
                    Size={"Accent"} />

                <C_Button text={"3"}
                     onPress={() => handlNum({ type: "number", payload: "3" })}
                    Size={"Accent"} />

                <C_Button text={"-"}
                    onPress={() => handlNum({ type: "operator", payload: "-" })}
                    Size={"Accent"} />
            </Row>
            <Row>
                <C_Button text={"0"}
                     onPress={() => handlNum({ type: "number", payload: "0" })}
                    Size={"Accent"} />

                <C_Button text={"."}
                     onPress={() => handlNum({ type: "number", payload: "." })}
                    Size={"Accent"} />

                <C_Button text={"/"}
                   onPress={() => handlNum({ type: "operator", payload: "/" })}
                    Size={"Accent"} />

                <C_Button text={"="}
                    onPress={() => handlNum({type:"Tab",payload:""})}
                    Size={"Double"} />
            </Row>
        </View>
    )
}

const styles = StyleSheet.create({})