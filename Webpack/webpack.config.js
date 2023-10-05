const path = require('path');

// 모듈을 밖으로 빼내는 노드 JS 문법입니다. 엔트리, 아웃풋 그리고 번들링 모드를 설정할 수 있습니다.
module.exports = {
    mode : 'development',

    entry : {
        main: path.resolve('./src/app.js') 
    },

    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },

    module: {
        //로더를 추가하는 장소입니다.
        rules: [
            // {
            //     test: /\.js$/,
            //     use: [
            //         path.resolve('./myLoader.js')
            //     ]
            // }
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}