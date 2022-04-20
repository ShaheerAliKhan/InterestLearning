import { View, ActivityIndicator, Platform } from 'react-native'
import React from 'react'
import { AppColors } from '../../Colors'

const Loader = ({
    animating = false,
    color = AppColors.primaryColor
}) => {
    if (animating) {
        return (
            <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', zIndex: 100 }}>
                <ActivityIndicator color={color} animating={true} size={Platform.OS == "ios" ? 'large' : 50} />
            </View>
        )
    } else {
        return <></>
    }
}

export default Loader