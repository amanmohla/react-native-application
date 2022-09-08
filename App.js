// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//     return (
//         <View style={styles.container}>
//             <Text>Open up App.js to start working on your app!</Text>
//             <StatusBar style="auto" />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
// Press control + command + z to see menu in simulator

import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component';
import { ThemeContext } from './theme-context';

export default () => {
    const [theme, setTheme] = React.useState('light');

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    };

    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={eva[theme]}>
                    <AppNavigator />
                </ApplicationProvider>
            </ThemeContext.Provider>
        </>
    );
};
