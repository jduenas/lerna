const path = require('path')
const { lstatSync, readdirSync } = require('fs')

// Iterates over the packages in the mono repo and add them as paths to the ts-loader for module resolution
const basePath = path.resolve(__dirname, '../../../', 'packages')
const packages = readdirSync(basePath).filter((name) =>
  lstatSync(path.join(basePath, name)).isDirectory()
)

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: (config) => {
    const finalConfig = {
      ...config
    }

    Object.assign(config.resolve.alias, {
      ...packages.reduce(
        (acc, name) => ({
          ...acc,
          [`@jduenas/${name}`]: path.join(basePath, name, 'src')
        }),
        {}
      )
    })

    console.log(JSON.stringify(config, null, 2))
    console.log(`1111111111111111111111111`)
    return finalConfig
  }
}
