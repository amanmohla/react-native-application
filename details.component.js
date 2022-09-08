import React from 'react';
import { SafeAreaView, View } from 'react-native';
import {
    Divider,
    Icon,
    Layout,
    Text,
    TopNavigation,
    TopNavigationAction,
    Card,
    Button,
    RadioGroup,
    Radio,
} from '@ui-kitten/components';

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

export const DetailsScreen = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const allQuestions = [
        {
            question: 'This is mock question - 1',
            options: [
                {
                    option: 'This is mock option 1',
                    isCorrect: false,
                },
                {
                    option: 'This is option 2',
                    isCorrect: false,
                },
                {
                    option: 'This is option 3',
                    isCorrect: true,
                },
            ],
        },
        {
            question: 'This is mock question - 2',
            options: [
                {
                    option: 'This is option 1',
                    isCorrect: false,
                },
                {
                    option: 'This is option 2',
                    isCorrect: false,
                },
                {
                    option: 'This is option 3',
                    isCorrect: true,
                },
            ],
        },
    ];

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    const Footer = (props) => (
        <View>
            <Button size="small" status="basic">
                Cancel
            </Button>
            <Button size="small">Accept</Button>
        </View>
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation
                title="Mock test"
                alignment="center"
                accessoryLeft={BackAction}
            />
            <Divider />
            <Layout>
                <Card>
                    <Text category="h6" style={{ marginBottom: 32 }}>
                        {allQuestions[currentQuestion].question}
                    </Text>

                    <RadioGroup
                        checked={false}
                        onChange={(index) => setCurrentQuestion(1)}
                    >
                        {allQuestions[currentQuestion].options.map(
                            ({ option }, i) => (
                                <Radio>{option}</Radio>
                            )
                        )}
                    </RadioGroup>
                </Card>
            </Layout>
        </SafeAreaView>
    );
};
