import { View, Text, SafeAreaView, useWindowDimensions } from 'react-native'
import React from 'react'
import { AppColors } from '../../Colors'
import { Button, TextWrapper } from '../../Components'
import { LineChart } from "react-native-chart-kit";

const Result = (props) => {

    const { width } = useWindowDimensions()
    return (
        <View style={{ flex: 1, backgroundColor: AppColors.backgroundColor }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.backgroundColor }}>
                <View style={{ flex: 0.5, backgroundColor: AppColors.primaryColor }}>
                    <TextWrapper style={{ margin: 10 }} bold>Progess chart</TextWrapper>
                    <LineChart
                        data={data}
                        withHorizontalLabels={false}
                        width={width} // from react-native
                        height={220}
                        chartConfig={chartConfig}
                        bezier
                        style={{ paddingRight: 0, alignSelf: 'center' }}
                    />
                    <TextWrapper style={{ margin: 10 }} bold color={AppColors.white}>OK</TextWrapper>
                </View>
                <View style={{ flex: 0.5, justifyContent: 'center' }}>

                    <View style={{ backgroundColor: AppColors.white, paddingVertical: 20, marginHorizontal: 20, borderRadius: 12 }}>
                        <TextWrapper style={{ margin: 10, marginBottom: 40 }} bold color={AppColors.black}>Total Points: 2000</TextWrapper>
                        <Button title='Back to home' onPress={() => props.navigation.goBack()} />
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const chartConfig = {
    propsForBackgroundLines: { strokeDasharray: "" },
    fillShadowGradientOpacity: 0,
    fillShadowGradientToOpacity: 0,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    backgroundColor: AppColors.backgroundColor,
    backgroundGradientFrom: AppColors.backgroundColor,
    backgroundGradientTo: AppColors.backgroundColor,
    color: (opacity = 1) => `rgba(94, 98, 125, ${1})`,
    propsForDots: { r: "0" }
}

const data = {
    datasets: [
        {
            data: [
                1, 3, 2, 5, 4, 6
            ],
            color: (opacity = 1) => `rgba(255, 255, 255, ${1})`,
            strokeWidth: 5,
        }
    ]
}

export default Result