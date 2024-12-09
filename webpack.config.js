import path, { resolve, join } from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin/index.js";
// import { question } from "readline-sync";
import { env } from "process";
// import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let { NODE_ENV } = env;

const webpack = {
    ignoreWarnings: [
        {
            message: /is-pseudo-class/,
        },
    ],
    entry: {
        /**
         * eg.
         * reactFromCdn: join(__dirname, "src/cdn/react.js"),
         */
        root: join(__dirname, `src/root.tsx`),
    },
    output: {
        filename: "[name].js",
        path: resolve(__dirname, "dist"),
        publicPath: "",
        library: "imgnx",
        libraryTarget: "umd",
        globalObject: "this",
    },
    mode: NODE_ENV,
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    // externals: {
    // react: "React",
    // "react-dom": "ReactDOM",
    // bootstrap: "bootstrap",
    // tailwindcss: "tailwindcss",
    // lodash: {
    //     commonjs: "lodash",
    //     commonjs2: "lodash",
    //     amd: "lodash",
    //     root: "_", // for usage in browser as a global variable
    // },
    // },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(__dirname, `src/index.html`),
            title: "Re:ImgNxSound",
        }),
    ],
    devServer: {
        static: {
            directory: join(__dirname, "cache"),
        },
        compress: true, // Enable gzip compression for everything served
        port: 3000, // Port to run the dev server on
        hot: true, // Enable Hot Module Replacement
        open: true, // Automatically open the browser,
        webSocketServer: "ws",
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all",
    //         minSize: 20000,
    //         maxSize: 244000,
    //         minChunks: 1,
    //         maxAsyncRequests: 30,
    //         maxInitialRequests: 30,
    //         automaticNameDelimiter: "~",
    //         cacheGroups: {
    //             defaultVendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10,
    //                 reuseExistingChunk: true,
    //             },
    //             default: {
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true,
    //             },
    //         },
    //     },
    // },
};

// console.log("webpack:", JSON.stringify(webpack, null, 2));
export default webpack;
