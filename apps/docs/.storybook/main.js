const path = require('path');

module.exports = {
    'stories': [
        '../stories/**/*.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    'addons': [
        '@storybook/addon-links',
        'storybook-addon-pseudo-states',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
                outline: false
            }
        },
        '@storybook/addon-mdx-gfm'
    ],
    framework: {
        name: '@storybook/web-components-webpack5',
        options: {}
    },
    webpackFinal: async (config) => {
        config.module.rules = config.module.rules.filter(f => f.test && f.test.toString() !== '/\\.css$/');
        config.module.rules.push({
            test: /\.css$/,
            use: [{
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                }
            }, {
                loader: 'postcss-loader'
            }],
            include: path.resolve(__dirname, '../')
        });

        // Return the altered config
        return config;
    },
    docs: {
        autodocs: 'tag',
        source: {
            format: 'dedent'
        }
    }
};
