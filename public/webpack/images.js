module.exports = function() {
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|jpeg|png|svg)$/,
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]'
					}
				}
			]
		}
	};
};