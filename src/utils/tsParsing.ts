import path from 'path'
import dynamicImport from './dynamicImport'

export default async function tsParing(filePath: string) {
  const res = await dynamicImport(`file:///${path.resolve(filePath)}`)
  console.log(res.default)
}
