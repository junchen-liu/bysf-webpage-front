// vue.config.js for less-loader@6.0.0
const mainColor = '#C5CAE9';
module.exports = {
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    // If you are using less-loader@5 please spread the lessOptions to options directly
                    modifyVars: {
                        'primary-color': mainColor,
                        'info-color': mainColor,
                        'success-color':'#F8BBD0',
                        'processing-color': mainColor,
                    },
                    javascriptEnabled: true,
                },
            },
        },
    },
};