import { TouchableOpacity } from 'react-native'
import React from 'react'
import { TextWrapper } from '..'
import { AppColors } from '../../Colors'

const Button = ({
    title = "",
    onPress = () => { }
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: AppColors.primaryColor, marginHorizontal: 20, borderRadius: 200, alignItems: 'center' }}>
            <TextWrapper bold variant='h5' color={AppColors.white} style={{ padding: 15 }}>
                {title}
            </TextWrapper>
        </TouchableOpacity>
    )
}

export default Button
