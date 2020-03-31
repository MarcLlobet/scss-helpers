const App = '[SCSS Helpers]',
  src = './index.scss',
  dest = 'dist'
outputFile = 'output.css'

const sass = require('node-sass'),
  fs = require('fs'),
  path = require('path');

function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath)
  return fs.existsSync(dirname)
}


if (!ensureDirectoryExistence(dest)) fs.mkdirSync(dest)

try {
  sass.render({
    file: path.resolve(src),
    outputStyle: 'expanded'
  }, (sassErr, result) => {
    if (sassErr) throw Error(`${App} - sass error - ${sassErr}`)

    fs.writeFile(path.resolve(dest, outputFile), result.css, fsErr => {
      if (fsErr) throw Error(`${App} - fs error - ${fsErr}`)

      console.log(`${App} - Successfully compiled`)
    })
  })
} catch (err) {
  console.error(err)
}

