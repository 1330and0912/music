const path = require('path')
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'common': '@/common',
                'assets': '@/assets',
                'components': '@/components',
                'api': '@/api',
                'views': '@/views'
            }
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "src/assets/css/common.less")] // 引入全局样式变量
        }
    }
}
