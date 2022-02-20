/*
 * @Author: songsunny
 * @Date: 2022-02-17 18:04:04
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-17 18:04:32
 * @Description:
 * @Github: https://github.com/songsunny00
 */
module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'block-no-empty': true,
    'comment-empty-line-before': [
      'always',
      {
        ignore: ['stylelint-commands', 'after-comment']
      }
    ],
    indentation: [2],
    'max-empty-lines': 2
  }
}
