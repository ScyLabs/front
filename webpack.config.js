var Encore = require('@symfony/webpack-encore');

const glob = require('glob')
const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs');
const console = require('console');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/app/app.js')
    .addEntry('style', './assets/vitrine/css/style.less')


    .enablePostCssLoader((options) => {
        options.postcssOptions = {
            path: './postcss.config.js'
        };
    })

    // enables the Symfony UX Stimulus bridge (used in assets/bootstrap.js)
    //    .enableStimulusBridge('./assets/app/controllers.json')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
        config.plugins.push("babel-plugin-macros")
    })

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    .enableLessLoader()
    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    .enableTypeScriptLoader()
    .enableForkedTypeScriptTypesChecking()
    // uncomment if you use React
    .enableReactPreset()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    .enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
    /*
    .configureDefinePlugin(options => {

        const env = dotenv.config({ path: __dirname + '/.env.dev.local' });
        if (env.error) {
            throw env.error;
        }

        if (env.parsed.STRIPE_FAMILY_ID) {
            options['process.env'].STRIPE_FAMILY_ID = JSON.stringify(env.parsed.STRIPE_FAMILY_ID)
        }
        if (env.parsed.STRIPE_SOLO_ID) {
            //options['process.env'].REACT_APP_STRIPE_SOLO_ID = env.STRIPE_SOLO_ID
        }
        console.log(options['process.env'])
    })
    */
    ;


glob.sync('./assets/vitrine/js/*.js').reduce((acc, path) => {

    const entry = path.replace('.js', '').split('/')
    Encore.addEntry(entry[entry.length - 1], path)
}, {})
glob.sync('./assets/vitrine/js/zone/*.js').reduce((acc, path) => {
    const entry = path.replace('.js', '').split('/')
    Encore.addEntry(`zone.${entry[entry.length - 1]}`, path)
}, {})
const config = Encore.getWebpackConfig();

module.exports = config;
