console.log('NODE_ENV', process.env.NODE_ENV)
require('dotenv').config({ path: require('find-config')('.env') })

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: !!process.env.ANALYZE,
})

const env = skipPrefixes(process.env, ['__', 'NODE'])

module.exports = withBundleAnalyzer({
    env: {
        ROOT: __dirname,
        ...env,
    },
})

function skipPrefixes(obj, toSkip) {
    return Object.entries(obj).reduce((acc, [k, v]) => {
        if (!toSkip.filter((x) => k.startsWith(x)).length) {
            return { ...acc, [k]: v }
        }
        return acc
    }, {})
}
