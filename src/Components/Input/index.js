import { View, Platform, TextInput } from 'react-native'
import React from 'react'
import { AppColors } from '../../Colors'

const Input = ({
    placeholder = "",
    onChangeText = () => { },
    password = false,
    style = {},
    keyboardType = "default"
}) => {
    return (
        <View style={{
            padding: 10,
            paddingVertical: Platform.OS == "ios" ? 14 : 7,
            backgroundColor: AppColors.white,
            marginHorizontal: 15,
            borderRadius: 8,
            ...style
        }}>
            <TextInput
                keyboardType={keyboardType}
                secureTextEntry={password}
                placeholder={placeholder}
                onChangeText={onChangeText}
            />
        </View>
    )
}

export default Input