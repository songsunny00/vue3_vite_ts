/*
 * @Author: songsunny
 * @Date: 2022-02-16 17:10:54
 * @LastEditors: songsunny
 * @LastEditTime: 2022-02-19 16:48:55
 * @Description: prettier配置-专注代码格式规范
 * @remark:参考链接https://www.jianshu.com/p/18999f6e1668
 */
module.exports = {
  printWidth: 100, // 超过最大值换行
  tabWidth: 2, // 缩进字节数
  useTabs: false, // 缩进不使用tab，使用空格
  semi: false, // 未尾不用分号
  vueIndentScriptAndStyle: true, // vue script和style标签中是否缩进,开启可能会破坏编辑器的代码折叠
  singleQuote: true, // 单引号
  quoteProps: 'as-needed', // 对象里的key是否用引号包裹;"as-needed" - 仅在须要时增加引号
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  trailingComma: 'none', // 函数最后不需要逗号
  jsxBracketSameLine: false, // 在jsx中把'>' 单独放一行
  jsxSingleQuote: false, // 在jsx中使用单引号代替双引号
  arrowParens: 'always', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号；always：总是需要
  insertPragma: false, // 自当插入pragma到已经完成的format的文件开头
  proseWrap: 'never', // "<always|never|preserve>" 文章换行,默认情况下会对你的markdown文件换行进行format会控制在printwidth以内
  endOfLine: 'lf', // "<lf|crlf|cr|auto>" 行尾换行符,默认是lf,
  htmlWhitespaceSensitivity: 'strict' //"<css|strict|ignore>" html中的空格敏感性
}
