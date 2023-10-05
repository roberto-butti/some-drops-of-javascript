const path = require('path')

const folderName = 'documents'
const fileName = 'file.txt'

const filePath = `user${path.sep}${folderName}${path.sep}${fileName}`

console.log(`File Path: ${filePath}`)
//Linux: File Path: user/documents/file.txt
//Windows: File Path: user\documents\file.txt
