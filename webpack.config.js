const path = require("path");

module.exports = {
  mode: "development", // 可切换为 'production' 进行生产环境构建
  entry: "./src/index.js", // React 入口文件
  output: {
    filename: "bundle.js", // 输出文件名
    path: path.resolve(__dirname, "build"), // 输出路径
  },
  module: {
    rules: [
      // JS 和 JSX 文件的处理
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // 包含 JSX 支持
          },
        },
      },
      // 处理 CSS 文件
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // 处理图片文件
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "images", // 图片输出路径
            },
          },
        ],
      },
      // 处理字体文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "fonts", // 字体输出路径
            },
          },
        ],
      },
      // 处理 SVG 文件
      {
        test: /\.svg$/i,
        use: "file-loader",
      },
      // 处理视频和音频文件
      {
        test: /\.(mp4|webm|ogg|mp3|wav)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[contenthash].[ext]",
              outputPath: "media", // 媒体文件输出路径
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // 解析 .js 和 .jsx 文件
  },
};
