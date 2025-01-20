module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "react-router-dom": "./node_modules/react-router-dom",
        },
      },
    ],
  ],
};
