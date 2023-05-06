import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from '../styles/global-styles';
import { TouchableOpacity,Text } from 'react-native';
import { KeyboardButtonEnum } from '../enums/button-type';

interface ButtonProps{
    onPress: () => void;
    title: string;
    type: KeyboardButtonEnum
}

export default function Button({title, onPress, type}: ButtonProps){
    const theme = useContext(ThemeContext);

    const getButtonStyle = () => {
        let styles = {};
        switch(type){
            case KeyboardButtonEnum.Number:
                styles = (theme === 'light') ? Styles.btn : Styles.btnLight
            break;
            case KeyboardButtonEnum.Operation:
                styles = (theme === 'light') ? Styles.btnDark : Styles.btnGray
            break;
        }
        return styles;
    }

    const getTextStyle = () => (theme === 'light') ? Styles.smallTextLight : Styles.smallTextDark;

    return(
        <TouchableOpacity
            style={getButtonStyle()}
            onPress={onPress}
        >

            <Text style={getTextStyle()}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};