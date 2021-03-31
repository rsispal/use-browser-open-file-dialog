import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
    input: './src/example/test-app/component.tsx',
    output: {
        file: 'example/bundle.js',
        format: 'iife',
        globals: {
            react: "React",
            "react-dom": 'ReactDOM'
        }
    },
    plugins: [
        replace({
            preventAssignment: true,
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
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