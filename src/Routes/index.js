import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    Login,
    Signup,
    SelectInterest,
    Dashboard,
    Video,
    Challenge,
    Result,
    Submission
} from '../Screens';
import { AppColors } from '../Colors'

const Stack = createNativeStackNavigator();

const Routes = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: AppColors.primaryColor }, headerTintColor: AppColors.white }}>
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Login" component={Login} options={{ headerTitle: 'Sign in' }} />
                <Stack.Screen name="SelectInterest" component={SelectInterest} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Video" component={Video} options={{ headerShown: false }} />
                <Stack.Screen name="Challenge" component={Challenge} options={{ headerTitle: 'Details of task' }} />
                <Stack.Screen name="Submission" component={Submission} />
                <Stack.Screen name="Result" component={Result} options={{ headerTitle: 'Results' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;