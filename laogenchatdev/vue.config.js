module.exports = {
    configureWebpack: {
        resolve: {
            //后缀名不用写
            // extensions: [],
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/assets',
                'network': '@/assets',
            }
        }
    }
}