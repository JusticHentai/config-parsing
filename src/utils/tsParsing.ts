import path from 'path'
import dynamicImport from './dynamicImport'
import rm from './removeFile'
import shell from './shell'

export default async function tsParing(filePath: string) {
  const command = [`tsc ${filePath} --target esnext`]

  await shell(command)

  const newFilePath = filePath.replace(/(?<=[.])ts$/g, 'js')

  const res = await dynamicImport(`file:///${path.resolve(newFilePath)}`)

  await rm(newFilePath)

  return res.default
}
