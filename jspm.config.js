SystemJS.config({
  meta: {
    '*.js': {
      babelOptions: {
        plugins: ['babel-plugin-transform-react-jsx']
      }
    }
  }
})
