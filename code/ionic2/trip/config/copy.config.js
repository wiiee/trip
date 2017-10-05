// New copy task for font files
module.exports = {
  copyFontAwesome: {
    src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
    dest: '{{WWW}}/assets/fonts'
  },
  // copyBootstrap: {
  //   src: ['{{ROOT}}/node_modules/bootstrap/dist/css/**/*'],
  //   dest: '{{WWW}}/assets/css'
  // }
};