module.exports = function() {
    return  {
        devServer: {
      		historyApiFallback: true,
            stats: 'errors-only',
            port: 9000
        }
    }
};

