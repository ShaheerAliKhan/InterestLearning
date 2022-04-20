import { View, StyleSheet, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import { AppColors } from '../../Colors'
import { Button, TextWrapper } from '../../Components'
import Player from 'react-native-video';

const Video = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: AppColors.backgroundColor }}>
            <StatusBar backgroundColor={AppColors.backgroundColor} barStyle='dark-content' />
            <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.backgroundColor }}>
                <View style={{ flex: 0.7 }}>
                    <Player source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        resizeMode='contain'
                        controls
                        onError={err => console.log(err)}
                        style={styles.backgroundVideo}
                    />
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center' }}>
                    <TextWrapper textAlign={'center'} variant='h3' bold>Video Tutorial</TextWrapper>
                    <TextWrapper textAlign={'center'} variant='h6' style={{ margin: 20 }} color={AppColors.textColor}>
                        Video Tutorial contains the basic understanding of how to build mobile app and use movies database api
                    </TextWrapper>
                    <Button title='Next' onPress={() => props.navigation.navigate('Challenge')} />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Video

const styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
})