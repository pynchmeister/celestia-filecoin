/* global ipfs, toBuffer */

const run = async () => {
    const fileContents = await toBuffer(ipfs.cat('QmWCscor6qWPdx53zEQmZvQvuWQYxx1ARRCXwYVE4s9wzJ'))
    const message = fileContents.toString()

    return message
}
return run
