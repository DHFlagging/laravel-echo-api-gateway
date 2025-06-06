import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: './js-src/Connector.ts',
    output: [
        { file: './dist/laravel-echo-api-gateway.js', format: 'esm' },
        { file: './dist/laravel-echo-api-gateway.common.js', format: 'cjs' },
        { file: './dist/laravel-echo-api-gateway.iife.js', format: 'iife', name: 'LaravelEchoApiGateway' },
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json', // Chemin explicite vers votre fichier TypeScript
            useTsconfigDeclarationDir: true, // Respecte les options `outDir` et `declarationDir`
        }),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            extensions: ['.ts'],
            presets: ['@babel/preset-env'],
            plugins: [
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                '@babel/plugin-proposal-function-sent',
                '@babel/plugin-proposal-export-namespace-from',
                '@babel/plugin-proposal-numeric-separator',
                '@babel/plugin-proposal-throw-expressions',
                '@babel/plugin-transform-object-assign',
            ],
        }),
    ],
};
