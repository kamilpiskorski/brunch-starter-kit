module.exports = {

    paths: {
        public: 'dist',
        watched: ['src']
    },

    files: {
        javascripts: {
            joinTo: {
                'scripts/vendor.js': /^(?!src)/,
                'scripts/app.js': /^src/
            }
        },
        stylesheets: {
            joinTo: 'styles/app.css'
        }
    },

    modules: {
        nameCleaner: path => path.replace(/^src\//, '')
    },

    plugins: {
        babel: {
            presets: ['latest']
        },
        postcss: {
            processors: [require('autoprefixer')]
        }
    }
};