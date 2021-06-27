module.exports = {
    validateStoring: {
        title: {
            in: ['body'],
            isAlpha: true,
            notEmpty: true
        }
    },
    validateUpdate: {
        title: {
            in: ['body'],
            isAlpha: true,
        }
    }
}