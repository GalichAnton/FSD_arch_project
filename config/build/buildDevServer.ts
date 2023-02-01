import {BuildOptions} from "./types/config";
import webpackDevServer from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): webpackDevServer.Configuration {
  const {paths, isDev} = options

  return {
    open: true,
    compress: true,
    port: 3000,
    hot: isDev,
    historyApiFallback: true,
  }
}