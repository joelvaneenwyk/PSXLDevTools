/* markdown.config.js */
module.exports = {
  matchWord: 'MDMAGIC',
  transforms: {
    /* Match <!-- AUTO-GENERATED-CONTENT:START (transformOne) --> */
    transformOne(content, options) {
      return 
        return `This section was generated by the cli config md.config.js file`
      },
      functionName() {
        return `xyz`
      }
    }
  }
