# Mono Reposotiory Lessons

# Todos

## Global Storybook

## Look into Essential Plugins

https://linguinecode.com/post/top-webpack-plugins

# Lerna Configuration

## Bootstrapping

### lerna.json

```
{
  "npmClient": "yarn",
  "useWorkspaces": true,
  "packages": [
    "packages/*"
  ],
  "command": {
    "publish": {
      "registry": "https://npm.pkg.github.com"
    }
  },
  "version": "0.35.1"
}

* Configures Yarn and enables workspace
* Customize registry for publish command
* Specify directory for packages
```

package.json

```
"workspaces": [
  "packages/*"
],
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
},
"repository": {
  "type": "git",
  "url": "https://github.com/jduenas/lerna.git"
},
```

## lerna publish support

All package.json of each package should define the following to publish to the proper repository

```
"repository": {
  "type": "git",
  "url": "https://github.com/jduenas/lerna.git",
  "directory": "packages/crl-component"
},
"publishConfig": {
  "registry": "https://npm.pkg.github.com"
}
```

## Streaming output

```
lerna run <command> --stream
```

# CRA + Lerna Hot Reloading with Typescript

This is done by resolving package names such as (@jduenas/my-component) to the directory of the entry point without change pkg.main or pkg.module of package.json.

react-app-rewired + react-app-rewire-alias (config-overrides.js)

```
const { alias, configPaths } = require('react-app-rewire-alias')

module.exports = function override(config) {
  return alias(configPaths('./tsconfig.paths.json'))(config)
}

* react-app-rewire-alias allows us to define the paths of where the packages are located

```

tsconfig.json + tsconfig.paths.json

```
{
  "extends": "./tsconfig.paths.json",
  "include": [
    "src"
  ],
  "compilerOptions": {
    "noEmit": true
  }
}
```

tsconfig.paths.json

```
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@jduenas/wp-component": ["../wp-component/src"],
      "@jduenas/crl-component": ["../crl-component/src"]
    }
  }
}

* This is a work around since CRA doesn't allow us to modify the Typescript paths to help resolve the module locations
* Comment the packages out if we want to force CRA to use the versions in the package repository
```

# Storybook Setup

Storybook will be its own repository. It is configured to scan all the packages of the mono-repo and adds the paths of the packages to the ts-loader that storybook's webpack users. This allows the developer to create the story directly in the storybook project through import. For example,

```
import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import WebpackComponent from '@jduenas/wp-component'

export default {
  title: 'Example/WebpackComponent',
  component: WebpackComponent,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Meta

const Template: Story = (args) => <WebpackComponent />

export const Primary = Template.bind({})
```

# Webpack Library Considerations

## Bundling a Library

### Library Target should be commonjs when configuring Webpack to output a library

```
output: {
    filename: 'index.js',
    library: '',
    libraryTarget: 'commonjs'
}
```

## Enabling Source Maps

tsconfig.json

```
compilationOptions: {
    sourceMap: true
}
```

webpack.config.json

```
{
    devtool: 'source-map'
}
```

### CSS Modules and CSS Source Maps

```
{
    test: /\.css$/,
    use: [
        'style-loader',
        {
        loader: 'css-loader',
        options: {
            importLoaders: 1,
            modules: true,
            sourceMap: true
        }
        }
    ],
    include: /\.module\.css$/
}
```

### Typescript Configs

First four options are particularly important

```
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "noEmit": false,
    "sourceMap": true
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noFallthroughCasesInSwitch": true,

  },
  "include": ["src"]
}

```
