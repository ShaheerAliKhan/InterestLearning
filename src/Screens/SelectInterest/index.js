import { View, SafeAreaView, StatusBar, FlatList } from 'react-native'
import React, { useState } from 'react'
import { AppColors } from '../../Colors'
import { Button, TextWrapper } from '../../Components'
import CheckBox from '@react-native-community/checkbox';

const SelectInterest = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: AppColors.white }}>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.white }}>
                <View style={{ flex: 0.2 }}>
                    <TextWrapper style={{ margin: 30 }} bold>Select your interests from the list</TextWrapper>
                </View>
                <View style={{ flex: 0.7 }}>
                    <FlatList
                        data={listData}
                        renderItem={({ item }) => <ListItem label={item} />}
                    />
                </View>
                <View style={{ flex: 0.1, paddingTop: 10 }}>
                    <Button title='Next' onPress={() => props.navigation.replace('Dashboard')} />
                </View>
            </SafeAreaView>
        </View>
    )
}

const listData = ["Gaming", "Movies", "Mobile Development", "Physics", "Business", "Web Development", "Travelling", "Cryptocurrency", "Technology"]

const ListItem = ({ label = "Default" }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={{ flexDirection: 'row', borderBottomWidth: 0.3, borderBottomColor: AppColors.primaryColor, borderTopWidth: 0.3, borderTopColor: AppColors.primaryColor, paddingVertical: 10 }}>
            <View style={{ marginHorizontal: 10 }}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                />
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                <TextWrapper variant='h5'>{label}</TextWrapper>
            </View>
        </View>
    )
}

export default SelectInterest