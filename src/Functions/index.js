export const getFontSize = (variant) => {
    let fontSize
    switch (variant) {
        case 'h1':
            fontSize = 30
            break;
        case 'h2':
            fontSize = 27
            break;
        case 'h3':
            fontSize = 24
            break;
        case 'h4':
            fontSize = 21
            break;
        case 'h5':
            fontSize = 18
            break;
        case 'h6':
            fontSize = 15
            break;
        default:
            throw new Error('`variant` prop must contain any one of the values from h1, h2, h3, h4, h5, h6.')
    }
    return fontSize
}