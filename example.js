/* global ipfs, all */

const run = async (files) => {
  const result = await all(ipfs.addAll(files))
   // Place your code to add a file or files here
   // or using for await...of loop
  //const result = []
  //
  //for await (const resultPart of ipfs.addAll(files)) {
  //  result.push(resultPart)
  //}

  // or when uploading one file
  // const result = await ipfs.add(files[0])

  return result
}
return run
