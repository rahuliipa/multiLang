module.exports = {
    componentPropsMap: {
      Translate: {
        one: 'msgid',
        many: 'msgid_plural',
        context: 'msgctxt',
        comment: 'comment',
      }
    },
    funcArgumentsMap: {
      translate: ['msgid', 'msgid_plural', 'msgctxt'],
    },
    trim: true,
  }