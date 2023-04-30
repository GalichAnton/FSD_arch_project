import type webpack from 'webpack'
import { type BuildPaths } from '../build/types/config'
import path from 'path'
import { buildCSSLoaders } from '../build/loaders/buildCSSLoaders'
import { DefinePlugin } from 'webpack'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  }
  config.resolve.modules.push(paths.src)
  config.resolve.extensions.push('.ts', '.tsx')

  const rules = config.module.rules as webpack.RuleSetRule[]

  config.module.rules = rules.map((rule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  })

  config.module.rules.push(buildCSSLoaders(true))

  config.plugins.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify('https://testapi.ru'),
    __PROJECT__: JSON.stringify('storybook'),
  }))

  return config
}
