import { View, Text, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppColors } from '../../Colors'
import { TextWrapper } from '../../Components'

const Dashboard = (props) => {
    React.useLayoutEffect(() => {
        props?.navigation?.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => props.navigation.navigate('Result')}>
                    <Text style={{ color: AppColors.white }}>See Results</Text>
                </TouchableOpacity >
            ),
        });
    }, [props.navigation]);
    return (
        <View style={{ flex: 1, backgroundColor: AppColors.backgroundColor }}>
            <StatusBar barStyle='light-content' backgroundColor={AppColors.primaryColor} />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 0.3, justifyContent: 'center' }}>
                    <TextWrapper bold variant='h4' color={AppColors.black} textAlign={"center"}>
                        Learning based on your interest
                    </TextWrapper>
                    <TextWrapper variant='h6' color={AppColors.textColor} style={{ marginTop: 10 }} textAlign={"center"}>
                        Pick any challenge to learn and develop something related to your interest
                    </TextWrapper>
                </View>
                <View style={{ flex: 0.7 }}>
                    <FlatList
                        numColumns={3}
                        contentContainerStyle={{ alignItems: 'center' }}
                        data={cards}
                        renderItem={({ item }) => <Card label={item} props={props} />}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}

const cards = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9"
]

const Card = ({
    label = "",
    props = {}
}) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('Video')} style={{ backgroundColor: AppColors.white, borderRadius: 8, paddingVertical: 50, paddingHorizontal: 20, margin: 10 }}>
            <TextWrapper variant='h5' color={AppColors.textColor}>{label}</TextWrapper>
        </TouchableOpacity>
    )
}

export default Dashboard