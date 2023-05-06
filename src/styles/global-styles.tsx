import {StyleSheet} from 'react-native';
import { colors } from "./colors";

export const Styles = StyleSheet.create({
    btn: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnDark: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: colors.btnDark,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnLight: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    btnGray: {
        width: 72,
        height: 72,
        borderRadius: 24,
        backgroundColor: colors.btnGray,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    smallTextLight: {
        fontSize: 32,
        color: colors.white
    },
    smallTextDark: {
        fontSize: 32,
        color: colors.dark
    },
    
    row: {
        maxWidth: '100%',
        flexDirection: 'row'
    },

    viewBottom: {
       marginBottom: 40
    },

    text: {
        fontSize: 96,
        color: colors.gray,
        fontWeight: '200',
        textAlign: 'right'
    }
});