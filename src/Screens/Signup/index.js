import { View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { AppColors } from '../../Colors'
import { TextWrapper, Input, Button, Loader } from '../../Components'
import { Assets } from '../../Assets'
import { signupService } from '../../Services'

const Signup = (props) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [repeatPassword, setRepeatPassword] = useState()
    const [loader, setLoader] = useState(false)

    const signup = () => signupService(email, password, repeatPassword, props, setLoader, "SelectInterest")

    return (
        <View style={{ flex: 1, backgroundColor: AppColors.backgroundColor }}>
            <Loader animating={loader} />
            <ScrollView>
                <View style={{ paddingBottom: 20 }}>
                    <View style={{ marginVertical: 50, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TextWrapper variant='h6' textAlign={'center'} style={{ margin: 20 }} color={AppColors.textColor}>Signup for interest based learning</TextWrapper>
                    </View>
                    <View style={{ justifyContent: 'center', marginVertical: 30 }}>
                        <Input
                            placeholder='Email*'
                            onChangeText={setEmail}
                            keyboardType='email-address'
                        />
                        <Input
                            placeholder='Choose Password*'
                            onChangeText={setPassword}
                            password
                            style={{ marginVertical: 10 }}
                        />
                        <Input
                            placeholder='Repeat Password*'
                            password
                            onChangeText={setRepeatPassword}
                        />
                    </View>
                    <View>
                        <View style={{ marginHorizontal: 20, flexDirection: 'row' }}>
                            <View style={{ height: 15, width: 15, overflow: 'hidden' }}>
                                <Image source={Assets.tick} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                            </View>
                            <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                                <TextWrapper variant='h6' textAlign={'center'} style={{}} color={AppColors.textColor}>Has atleast 8 characters</TextWrapper>
                            </View>
                        </View>
                        <View style={{ marginHorizontal: 20, flexDirection: 'row', marginTop: 5 }}>
                            <View style={{ height: 15, width: 15, overflow: 'hidden' }}>
                                <Image source={Assets.tick} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                            </View>
                            <View style={{ marginLeft: 10, justifyContent: 'center' }}>
                                <TextWrapper variant='h6' textAlign={'center'} style={{}} color={AppColors.textColor}>Has atleast 1 number</TextWrapper>
                            </View>
                        </View>
                        <TextWrapper variant='h6' textAlign={'center'} style={{ margin: 20, marginTop: 100 }} color={AppColors.textColor}>
                            By proceeding you also agree to the Terms of Service and Privacy Policy
                        </TextWrapper>
                        <Button title='Sign up' onPress={signup} />
                        <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
                            <TextWrapper variant='h6' textAlign={'center'} style={{ marginTop: 20 }} color={AppColors.textColor}>Already have an account? Login!</TextWrapper>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Signup