/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
    pages: {
        index: {
            entry: 'src/app/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        other: {
            entry: 'src/other/main.js',
            template: 'public/other.html',
            filename: 'other.html',
            title: 'Other Page',
            chunks: ['chunk-vendors', 'chunk-common', 'other']
        }
    }
}