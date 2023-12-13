// import { defineConfig } from 'vite'
// import Uni from '@dcloudio/vite-plugin-uni'
// import UniHelperManifest from '@uni-helper/vite-plugin-uni-manifest'
// import UniHelperPages from '@uni-helper/vite-plugin-uni-pages'
// import UniHelperLayouts from '@uni-helper/vite-plugin-uni-layouts'
// import UniHelperComponents from '@uni-helper/vite-plugin-uni-components'
// import { AnoResolver, UniUIResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
// import AutoImport from 'unplugin-auto-import/vite'
// import UnoCSS from 'unocss/vite'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     // https://github.com/uni-helper/vite-plugin-uni-manifest
//     UniHelperManifest(),
//     // https://github.com/uni-helper/vite-plugin-uni-pages
//     UniHelperPages({
//       dts: 'src/uni-pages.d.ts',
//     }),
//     // https://github.com/uni-helper/vite-plugin-uni-layouts
//     UniHelperLayouts(),
//     // https://github.com/uni-helper/vite-plugin-uni-components
//     UniHelperComponents({
//       include: [/\.vue$/, /\.vue\?vue/],
//       dts: 'src/components.d.ts',
//       directoryAsNamespace: true,
//       resolvers: [UniUIResolver(), AnoResolver()],
//     }),
//     Uni(),
//     // https://github.com/antfu/unplugin-auto-import
//     AutoImport({
//       imports: ['vue', '@vueuse/core', 'uni-app'],
//       dts: 'src/auto-imports.d.ts',
//       dirs: ['src/composables', 'src/stores', 'src/utils'],
//       vueTemplate: true,
//     }),
//     // https://github.com/antfu/unocss
//     // see unocss.config.ts for config
//     UnoCSS(),
//   ],
// })
import { resolve } from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from '@uni-helper/vite-plugin-uni-components'
import UniPages from '@uni-helper/vite-plugin-uni-pages'
import UniManifest from '@uni-helper/vite-plugin-uni-manifest'

import { AnoResolver } from 'ano-ui'

export default defineConfig({
  root: process.cwd(),
  base: '/ui/',
  resolve: {
    alias: {
      '~/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Components({
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      resolvers: [AnoResolver()],
    }),
    UniPages({
      routeBlockLang: 'yaml',
      minify: true,
    }),
    UniManifest({ minify: true }),
    Uni(),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    UnoCSS(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'pinia', 'uni-app'],
      dts: 'src/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
    }),
  ],
})
