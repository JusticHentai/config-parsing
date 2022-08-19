import path from 'path'
import dynamicImport from './dynamicImport'

export default async function jsParing(filePath: string) {
  const prefix = process.platform === 'win32' ? 'file:///' : ''

  const res = await dynamicImport(`${prefix}${path.resolve(filePath)}`)

  return res.default
}
