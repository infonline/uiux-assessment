/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@io/react-components', '@io/web-components']);

module.exports = withTM({
    reactStrictMode: true,
    swcMinify: true,
    output: 'standalone',
    i18n: {
        locales: ['de'],
        defaultLocale: 'de'
    }
})
