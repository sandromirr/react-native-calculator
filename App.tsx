import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, View } from 'react-native';
import { ThemeContext } from './src/context/ThemeContext';
import { useState } from 'react';
import { colors } from './src/styles/colors';
import Keyboard from './src/components/Keyboard';
import Constants from 'expo-constants';

export default function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={theme}>
      <View style={(theme == 'light') ? styles.container: [styles.container, {backgroundColor: colors.dark}]}>
        <View  style={styles.themePicker}>
          <Switch
            value={theme === 'light'}
            onValueChange={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
          />
        </View>
        <Keyboard/>
        <StatusBar style="light" />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'stretch'
  },
  themePicker:{
    flex: 1,
    width: '90%',
    alignItems: 'flex-end',
  },
});
