module.exports = {
    validateStoring: {
        content: {
            in: ['body'],
            isAlpha: true,
            notEmpty: true
        },
        description: {
            in: ['body'],
            isAlpha: true,
        }
    }
}