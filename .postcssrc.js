//需要设计稿尺寸除以2的解决方案
// module.exports = {
//     plugins: {
//         autoprefixer: {
//             overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
//         },
//         'postcss-px-to-viewport': {
//             //由于vant ui 组件的团队是按照375进行开发的，所以viewportWidth要设置为375，
//             //如果我们的设计稿为750,则在写样式时，所有单位/2  比如：200px/2
//             viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度一般是750,750/2,插件会自动转换为对应的vw
//             unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
//             viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
//             selectorBlackList: ['.ignore'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
//             minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
//             mediaQuery: false // 允许在媒体查询中转换`px`
//         }
//     }
// }


//不用设计稿尺寸除以2的解决方案
// .postcssrc.js文件，它除了暴露一个对象，也可以暴露一个函数，无论暴露什么，在webpack运行时，都会被我们配置的海量文件读取并执行。
// 暴露函数有一个好处，可以拿到webpack运行的当前执行文件的信息。
// 那么我们可以有这样一个思路：如果读取的是vant相关的文件，viewportWidth就设为375，如果是其他的文件，我们就按照我们UI的宽度来设置viewportWidth，即750。
const path = require('path');
module.exports = ({ webpack }) => {
    const designWidth = webpack.resourcePath.includes(path.join('node_modules', 'vant')) ? 375 : 750;
    return {
        plugins: {
            autoprefixer: {
                overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8']
            },
            "postcss-px-to-viewport": {
                unitToConvert: "px",
                viewportWidth: designWidth,
                unitPrecision: 6,
                propList: ["*"],
                viewportUnit: "vw",
                fontViewportUnit: "vw",
                selectorBlackList: [],
                minPixelValue: 1,
                mediaQuery: true,
                exclude: [],
                landscape: false
            }
        }
    }

}
