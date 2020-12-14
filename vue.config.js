const path = require('path')
module.exports = {
    chainWebpack: config => {
        //发布环境
        config.when(process.env.NODE_ENV === 'production', config => {
            config.entry('app').clear().add('./src/main-prod.js')
            config.set('externals',{
                vue:'Vue',
                'vue-router': 'VueRouter',
                vuex:'Vuex',
                axios:'axios',
                vant: 'vant'
            })
        })
        //开发环境
        config.when(process.env.NODE_ENV === 'development', config => {
            config.entry('app').clear().add('./src/main-dev.js')
        })
    },
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
    },

}
