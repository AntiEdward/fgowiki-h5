module.exports = {
    devServer: {
        proxy: {
            '/api': {
                //设置你调用的接口域名和端口号 别忘了加http
                // target: 'http://localhost:3000',
                target: 'https://iseefire.cn',
                changeOrigin: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}