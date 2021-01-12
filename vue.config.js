const path = require('path')
//引入该插件
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    productionSourceMap: false,
    chainWebpack: config => {
        //发布环境
        config.when(process.env.NODE_ENV === 'production', config => {
            config.module
                .rule('images')
                .use('image-webpack-loader')
                .loader('image-webpack-loader')
                .options({ bypassOnDebug: true })
                .end()
            config.entry('app').clear().add('./src/main-prod.js')
            config.set('externals', {
                vue: 'Vue',
                'vue-router': 'VueRouter',
                vuex: 'Vuex',
                axios: 'axios',
                vant: 'vant',

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
        },
        // plugins: [
        //     new CompressionPlugin({
        //         fileName: '[path].gz[query]',
        //         //压缩算法
        //         algorithm: 'gzip',
        //         //匹配文件
        //         test: /\.js$|\.css$|\.html$/,
        //         //压缩超过此大小的文件,以字节为单位
        //         threshold: 10240,
        //         minRatio: 0.8,
        //         //删除原始文件只保留压缩后的文件
        //         deleteOriginalAssets: false
        //     })
        // ]
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, "src/assets/css/common.less")] // 引入全局样式变量
        }
    },

}
