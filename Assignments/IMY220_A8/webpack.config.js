//u23524121 Jamean Groenewald

const path = require("path");

module.exports = {
    
    entry: "./src/index.js",
    
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},

    mode: "development",

    module: {
        
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: '/node_modules/',
			},
            
        ]
        
    }
}