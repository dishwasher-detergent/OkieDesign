const okieInfo = require('./package.json')
const components = require('./dist/components')
const base = require('./dist/base')

const mainFunction = ({addComponents,addBase}) => {
    console.log()
    console.log('   ','\x1b[45m','            ','\x1b[0m')
    console.log('   ','    ','\x1b[45m','       ','\x1b[0m')
    console.log('   ','    ','\x1b[45m','       ','\x1b[0m')
    console.log()
    console.log('\x1b[35m%s\x1b[1m%s\x1b[0m', 'Okie.Design v' + okieInfo.version, '\x1b[0m', okieInfo.homepage)
    console.group()

    addBase(base)
    addComponents(components)

    console.log()
    console.groupEnd()
}

// check if tailwindcss package exists
let isTailwindInstalled = false;
try {
  require.resolve('tailwindcss/plugin')
  isTailwindInstalled = true
} catch (er) {
  isTailwindInstalled = false
}

if (isTailwindInstalled !== false) {
  module.exports = require("tailwindcss/plugin")(
    mainFunction
  );
} else {
  module.exports = mainFunction;
}