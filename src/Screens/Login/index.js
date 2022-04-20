import { View, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { AppColors } from '../../Colors'
import { TextWrapper, Input, Button, Loader } from '../../Components'
import { Assets } from '../../Assets'
import { loginService } from '../../Services'

const Login = (props) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loader, setLoader] = useState(false)

    const login = () => loginService(email, password, props, setLoader, "Dashboard")

    return (
        <View style={{ flex: 1, backgroundColor: AppColors.backgroundColor }}>
            <Loader animating={loader} />
            <ScrollView>
                <View style={{ paddingBottom: 20 }}>
                    <View style={{ marginTop: 100, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <TextWrapper bold>Sign in</TextWrapper>
                        <TextWrapper variant='h6' textAlign={'center'} style={{ margin: 20 }} color={AppColors.textColor}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</TextWrapper>
                    </View>
                    <View style={{ justifyContent: 'center', marginVertical: 30 }}>
                        <Input
                            placeholder='Email*'
                            style={{ marginBottom: 10 }}
                            onChangeText={setEmail}
                            keyboardType='email-address'
                        />
                        <Input
                            placeholder='Password*'
                            password
                            onChangeText={setPassword}
                        />
                    </View>
                    <View>
                        <Button title='Sign in' onPress={login} />
                        <TextWrapper variant='h6' textAlign={'center'} style={{ marginTop: 20 }} color={AppColors.textColor}>OR</TextWrapper>
                        <TouchableOpacity style={{ backgroundColor: AppColors.primaryColor, marginHorizontal: 20, borderRadius: 200, alignItems: 'center', marginTop: 20, justifyContent: 'center' }}>
                            <View style={{ height: 28, width: 28, position: 'absolute', left: 20 }}>
                                <Image source={Assets.fb} style={{ height: '100%', width: '100%', resizeMode: 'cover' }} />
                            </View>
                            <TextWrapper bold variant='h6' color={AppColors.white} style={{ padding: 17 }}>
                                Sign in with Facebook
                            </TextWrapper>
                        </TouchableOpacity>
                        <TextWrapper variant='h6' textAlign={'center'} style={{ margin: 20 }} color={AppColors.textColor}>
                            By proceeding you also agree to the Terms of Service and Privacy Policy
                        </TextWrapper>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                            <TextWrapper variant='h6' textAlign={'center'} style={{}} color={AppColors.textColor}>Don't have an account? Signup!</TextWrapper>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Login