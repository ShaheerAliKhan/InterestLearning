import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { AppColors } from '../../Colors'
import { Button, Loader, TextWrapper } from '../../Components'
import DocumentPicker from 'react-native-document-picker'

const Submission = (props) => {
    React.useLayoutEffect(() => {
        props?.navigation?.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => props.navigation.goBack()} >
                    <Text style={{ color: AppColors.white }}>Skip</Text>
                </TouchableOpacity >
            ),
        });
    }, [props.navigation]);

    const [documentName, setDocumentName] = React.useState()
    const [loader, setLoader] = React.useState(false)

    const uploadFiles = async () => {
        try {
            const res = await DocumentPicker.pick({
                // type: [DocumentPicker.types.pdf],
            })
            setDocumentName(res[0].name);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                // User cancelled the picker, exit any dialogs or menus and move on
            } else {
                throw err
            }
        }
    }

    const submit = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
            Alert.alert('File Uploaded!', ' Your submission is successful!', [
                {
                    text: "Ok",
                    onPress: () => props.navigation.replace('Dashboard')
                }
            ])
        }, 1500);
    }

    return (
        <View style={{ backgroundColor: '#9E9FAE', flex: 1 }}>
            <Loader animating={loader} color={AppColors.black} />
            <StatusBar backgroundColor={AppColors.primaryColor} barStyle='light-content' />
            <SafeAreaView style={{ backgroundColor: '#9E9FAE', flex: 1, justifyContent: 'center' }}>
                <View style={{ backgroundColor: AppColors.white, borderRadius: 20, marginHorizontal: 25, padding: 15 }}>
                    <TextWrapper textAlign="center" variant='h3' style={{ marginTop: 20, marginBottom: 10 }}>Submit Code/Solution</TextWrapper>
                    <TextWrapper variant='h5' style={{ marginBottom: 20 }} color={AppColors.textColor} textAlign="center">Submit the code it will be reviewed by team</TextWrapper>
                    {
                        !documentName ?
                            <Button onPress={uploadFiles} title='Upload' /> :
                            <Button onPress={submit} title='Submit' />
                    }
                    {documentName && <TextWrapper variant='h5' style={{ marginTop: 20 }} color={AppColors.textColor} textAlign="center">{documentName}</TextWrapper>}
                    <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ alignSelf: 'center', alignContent: 'center' }}>
                        <TextWrapper variant='h4' color={AppColors.textColor} style={{ marginVertical: 20 }}>
                            {'<- back'}
                        </TextWrapper>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Submission