import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/ToolsPanel/ToolsPanel.js",
    output: {
      name: "bttoolspanel",
      file: "dist/index.js",
      format: "es"
    },
    external: [
      "react",
      "@material-ui/core",
      "clsx",
      "@material-ui/icons",
      "react-draggable",
      "prop-types"
    ],
    plugins: [
      babel({
        exclude: "node_modules/.**"
      })
    ]
  }
];
