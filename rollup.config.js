import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/Tools/index.js",
    output: {
      name: "bt-tools-panel",
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
