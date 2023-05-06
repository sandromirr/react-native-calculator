import { useState } from "react";
import { View, Text } from "react-native";
import { Styles } from "../styles/global-styles";
import Button from "./Button";
import { KeyboardButtonEnum } from "../enums/button-type";
import { OperationTypeEnum } from "../enums/operation-type";

export default function Keyboard(){
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [text, setText] = useState("");
    const [operation, setOperation] = useState(OperationTypeEnum.None);

    const clear = () => {
        setOperation(OperationTypeEnum.None);
        setFirstNumber("");
        setSecondNumber("");
        setText("");
    }

    const hasNumberPrecision = (number: string) => {
        return number.indexOf('.') !== -1
    };

    const handleNumber = (val: string) => {
        if(hasNumberPrecision(firstNumber) || hasNumberPrecision(secondNumber)) return;

        if(operation == OperationTypeEnum.None){
            setFirstNumber(firstNumber + val);
        }
        else{
            setSecondNumber(secondNumber + val);
        }

        setText(text + val)
    };

    const handleOperation = (operationType: OperationTypeEnum) => {
        setOperation(operationType);
        setText('');
    }

    const calculateResult = () => {
        let result: number = 0;
        switch(operation){
            case OperationTypeEnum.Plus:
                result = parseInt(firstNumber) + parseInt(secondNumber);
                break;
            case OperationTypeEnum.Minus:
                result = parseInt(firstNumber) - parseInt(secondNumber);
                break;
            case OperationTypeEnum.Multiplication:
                result = parseInt(firstNumber) * parseInt(secondNumber);
                break;
            case OperationTypeEnum.Division:
                result = parseInt(firstNumber) / parseInt(secondNumber);
                break;
                    
        }
        setText(result.toString());
    }

    return (
        <View style={Styles.viewBottom}>
            <Text style={Styles.text}>{text}</Text>
            <View style={Styles.row}>
                <Button title="C" type={KeyboardButtonEnum.Operation} onPress={clear}/>
                <Button title="+/-" type={KeyboardButtonEnum.Operation} onPress={clear}/>
                <Button title="%" type={KeyboardButtonEnum.Operation} onPress={clear}/>
                <Button title="+" type={KeyboardButtonEnum.Operation} onPress={() => handleOperation(OperationTypeEnum.Plus)}/>
            </View>
            <View style={Styles.row}>
                <Button title="7" type={KeyboardButtonEnum.Number} onPress={() => handleNumber('7')}/>
                <Button title="8" type={KeyboardButtonEnum.Number} onPress={() => handleNumber('8')}/>
                <Button title="9" type={KeyboardButtonEnum.Number} onPress={() => handleNumber('9')}/>
                <Button title="*" type={KeyboardButtonEnum.Operation} onPress={() => handleOperation(OperationTypeEnum.Multiplication)}/>
            </View>
            <View style={Styles.row}>
                <Button title="4" type={KeyboardButtonEnum.Number} onPress={() => handleNumber('4')}/>
                <Button title="5" type={KeyboardButtonEnum.Number} onPress={() => handleNumber('5')}/>
                <Button title="6" type={KeyboardButtonEnum.Number} onPress={() => handleNumber('6')}/>
                <Button title="-" type={KeyboardButtonEnum.Operation} onPress={() => handleOperation(OperationTypeEnum.Minus)}/>
            </View>
            <View style={Styles.row}>
                <Button title="3" type={KeyboardButtonEnum.Number} onPress={() => handleNumber('3')}/>
                <Button title="2" type={KeyboardButtonEnum.Number} onPress={() => handleNumber('2')}/>
                <Button title="1" type={KeyboardButtonEnum.Number} onPress={() => handleNumber('1')}/>
                <Button title="/" type={KeyboardButtonEnum.Operation} onPress={() => handleOperation(OperationTypeEnum.Division)}/>
            </View>
            <View style={Styles.row}>
                <Button title="." type={KeyboardButtonEnum.Operation} onPress={() => handleNumber('.')}/>
                <Button title="0" type={KeyboardButtonEnum.Number} onPress={() => handleNumber('0')}/>
                <Button title="⌫" type={KeyboardButtonEnum.Operation} onPress={clear}/>
                <Button title="=" type={KeyboardButtonEnum.Operation} onPress={calculateResult}/>
            </View>
        </View>
    );
}