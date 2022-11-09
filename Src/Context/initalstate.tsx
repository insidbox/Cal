export interface initalsate{
    CurrentValue:string,
    PreviousValue:string,
    Answer:string,
    Operator:string
}
export interface operationAction{
    type:string,
    payload:string
}