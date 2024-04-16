import { fromRollup } from "@web/dev-server-rollup";
import rollupReplace from "@rollup/plugin-replace";

const replace = fromRollup(rollupReplace);

// import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: true,
  appIndex: "public/",
  rootDir: "./",
  /** Resolve bare module imports */
  nodeResolve: {
    exportConditions: ["browser", "development"],
  },

  /** Compile JS for older browsers. Requires @web/dev-server-esbuild plugin */
  // esbuildTarget: 'auto'

  /** Set appIndex to enable SPA routing */
  // appIndex: 'demo/index.html',

  plugins: [
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    // hmr && hmrPlugin({ exclude: ['**/*/node_modules/**/*'], presets: [presets.litElement] }),
    replace({
      // setting "include" is important for performance
      "process.env.NODE_ENV": '"development"',
    }),
  ],

  // See documentation for all available options
});
