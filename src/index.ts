import getFileType from './utils/getFileType'
import jsonParing from './utils/jsonParing'
import jsParing from './utils/jsParsing'
import tsParing from './utils/tsParsing'

const parsingMap = {
  ts: tsParing,
  js: jsParing,
  json: jsonParing,
}

/**
 * 解析自定义 config 文件
 * @param filePath 文件路径
 */
export default function configParsing(filePath: string) {
  // 获取文件类型
  const fileType = getFileType(filePath)

  // 解析对应文件
  parsingMap[fileType](filePath)
}
