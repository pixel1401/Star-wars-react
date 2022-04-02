const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@hoc': 'src/hoc',
        '@service': 'src/service',
        '@static': 'src/static',
        '@utils': 'src/utils',
        '@style': 'src/style',
    })(config);
    return config;
}