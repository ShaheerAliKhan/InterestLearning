import { View, Text, TextStyle } from 'react-native'
import React from 'react'
import { getFontSize } from '../../Functions'
import PropTypes from 'prop-types'

const TextWrapper = ({
    children,
    variant = "h1",
    fontFamily,
    color = "black",
    bold = false,
    textAlign = "left",
    style = {}
}) => {
    let fontSize = typeof variant == "string" ? getFontSize(variant) : variant
    return <Text style={{
        fontSize,
        color,
        fontFamily,
        textAlign,
        fontWeight: bold ? 'bold' : 'normal',
        ...style
    }}>{children}</Text>
}

export default TextWrapper

TextWrapper.propTypes = {
    variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired
}
