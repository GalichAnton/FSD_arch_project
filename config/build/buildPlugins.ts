import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {BuildPaths} from "./types/config";


export function buildPlugins(paths: BuildPaths): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,  // template file
      filename: 'index.html',  // output file
    }),
  new webpack.ProgressPlugin(),
  ]
}