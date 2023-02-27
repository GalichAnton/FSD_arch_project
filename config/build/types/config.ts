import type webpack from 'webpack'

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildOptions {
  mode: webpack.Configuration['mode']
  paths: BuildPaths
  isDev: boolean
  apiUrl: string
  port: number
}

export interface BuildEnv {
  mode: webpack.Configuration['mode']
  port: number
  apiUrl: string
}
