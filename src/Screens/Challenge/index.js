import { View, Text, StatusBar, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { AppColors } from '../../Colors'
import { Button, TextWrapper } from '../../Components'

const Challenge = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: AppColors.backgroundColor }}>
            <StatusBar backgroundColor={AppColors.primaryColor} />
            <SafeAreaView style={{ flex: 1, backgroundColor: AppColors.backgroundColor }}>
                <View style={{ flex: 0.8, padding: 20 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TextWrapper color={AppColors.textColor} variant='h5'>
                            e-Commerce App
                            Ever since e-commerce penetrated the mainstream industry, e-commerce apps (like Amazon, Flipkart, Nykaa, etc.) have become omnipresent. These apps are now an integral part of our lives. Thus, if you build a functional e-commerce app, it will show that you have real-world skills to keep up with the latest trends in the industry. Needless to say, you will become an appealing candidate before potential employers.

                            Keep in mind that we’re talking about developing a small e-commerce project that is focused more on a particular industry and not a large marketplace like Amazon or eBay. You could choose any industry that interests you, such as electronic devices (mobiles, TVs, laptops, etc.) and develop your e-commerce app around that.

                            Your e-commerce app can either deliver products or services. In any case, you must ensure that apart from browsing products or services, customers can enjoy seamless customer service. This is crucial for app success – all-round customer support and good customer experience are two vital elements of any successful app.

                            As far as app features are concerned, keep the layout and interface neat and easy-to-navigate, include the location option for deliveries, incorporate a shopping cart, and a wishlist. Make sure the checkout process incorporates the necessary authentication options (as a guest or registered user).

                            Technologies you can use:

                            Create React App, or Gatsby are excellent choices for building the storefront that displays the products/services.
                            Algolia is perfect for creating a lightning-fast product search interface.
                            Netlify/AWS Lambda for handling the checkout process.
                            Stripe/react-stripe-elements for managing the payment process.
                            Snipcart allows you to create a cart and also manage the cart products.
                        </TextWrapper>
                    </ScrollView>
                </View>
                <View style={{ flex: 0.2, backgroundColor: AppColors.white, justifyContent: 'center' }}>
                    <Button title='Start Challenge' onPress={() => props.navigation.navigate('Submission')} />
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Challenge