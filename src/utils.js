function getColor(elementName) {
    if (elementName === 'stopwatchWillUnmount') {
        return 'red lighten-1'
    }

    if (elementName === 'stopwatchDidUpdate') {
        return 'deep-purple lighten-2'
    }

    if (elementName === 'stopwatchDidMount') {
        return 'blue lighten-3'
    }
}

export default getColor;