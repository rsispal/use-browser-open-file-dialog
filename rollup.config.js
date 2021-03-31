import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: './src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: 'UseBrowserFileUpload',
        globals: {
            react: "React",
            "react-dom": 'ReactDOM'
        }
    },
    plugins: [
        nodeResolve({
            extensions: ['.js', '.jsx']
        }),
        typescript({
            clean: true,
            tsconfig: undefined,
            tsconfigOverride: {
                compilerOptions: {
                    moduleResolution: 'node',
                    declaration: false,
                    sourceMap: false,
                    declarationMap: false,
                }
            }
        }),
        commonjs({
            include: [
                'node_modules/**',
            ]
        })
    ]
};