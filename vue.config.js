module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',    //设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}