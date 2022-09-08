import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import {
    Button,
    Divider,
    Layout,
    TopNavigation,
    Text,
} from '@ui-kitten/components';
import { ThemeContext } from './theme-context';

export const HomeScreen = ({ navigation }) => {
    const navigateDetails = () => {
        navigation.navigate('Details');
    };
    const themeContext = React.useContext(ThemeContext);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title="Home" alignment="center" />
            <Divider />
            <Layout>
                <View style={styles.row}>
                    <Text style={styles.text} category="h3">
                        Australian citizenship test
                    </Text>
                </View>
                <Text style={styles.text}>
                    Practice a mock australian citizenship test.
                </Text>
            </Layout>
            <Layout
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Button onPress={navigateDetails}>Start</Button>
            </Layout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        margin: 4,
    },
});
