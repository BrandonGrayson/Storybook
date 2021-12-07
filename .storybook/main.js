// Current Glob Problems
// 1) Storybook is Intended for stories components to be in same file as its react counterpart.... This is customizable



module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // "stories": ['../src/**/*.stories.js'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@chakra-ui/react",
    '@snek-at/storybook-addon-chakra-ui'
  ],
  "framework": "@storybook/react"
}

// const path = require("path");
// const toPath = (_path) => path.join(process.cwd(), _path);

// module.exports = {
//   stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
//   addons: [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     "@storybook/preset-create-react-app",
//   ],
//   webpackFinal: async (config) => {
//     return {
//       ...config,
//       resolve: {
//         ...config.resolve,
//         alias: {
//           ...config.resolve.alias,
//           "@emotion/core": toPath("node_modules/@emotion/react"),
//           "emotion-theming": toPath("node_modules/@emotion/react"),
//         },
//       },
//     };
//   },
// };