/* global ipfs, all */
const run = async (files) => {

  // Using Array.map():

  let fileObjectsArray = files.map((file) => {
    return {
      path: file.name,
      content: file
    }
  })

  // Alternatively, using Array.forEach():
  //
  // let fileObjectsArray = []
  //
  // files.forEach((file) => {
  //   let fileObject = {
  //     path: file.name,
  //     content: file
  //   }
  //
  //   fileObjectsArray.push(fileObject)
  // })

  const results = await all(ipfs.addAll(fileObjectsArray, { wrapWithDirectory: true }))

  return results

}
return run
