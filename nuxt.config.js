const path = require('path');
const fs = require('fs')
import Mode from "frontmatter-markdown-loader/mode";
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({
  html: false,
  linkify: true,
  xhtmlOut: true,
  typographer: true
});
md.use(require("markdown-it-prism"));
md.use(require("markdown-it-anchor"));
md.use(require("markdown-it-imsize"), {
  autofill: true
});
md.use(require('markdown-it-multimd-table'), {
  multiline: false,
  rowspan: false,
  headerless: false,
});
md.use(require("markdown-it-toc-done-right"), {
  listType: "ul",
  listClass: "toc-ul"
});
md.use(require("markdown-it-external-links"), {
  externalClassName: "el-link is-underline one-pan-link-mark"
})
md.use(require('markdown-it-task-checkbox'), {
  disabled: true,
  divWrap: false,
  divClass: 'checkbox',
  idPrefix: 'cbx_',
  ulClass: 'task-list',
  liClass: 'task-list-item'
});

function getPaths(type) {
  return fs.readdirSync(path.resolve(__dirname, 'content', `${type}`))
    .filter(filename => path.extname(filename) === '.md')
    .map(filename => `/${type}/${path.parse(filename).name}`)
}


export default {
  server: {
    host: '0.0.0.0',
    port: 3333
  },
  head: {
    title: process.env.npm_package_name || '',
    htmlAttrs: {
      lang: 'zh-cmn-Hans'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        'http-equiv': 'cleartype',
        content: 'on'
      },
      {
        'http-equiv': 'Cache-Control'
      },
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'dns-prefetch',
        href: '//api.solaokiu.moe'
      }
    ]
  },
  loading: {
    color: '#63BB0A',
    height: '3px'
  },
  css: [
    'normalize.css/normalize.css',
    '@/assets/scss/index.scss',
    'animate.css/animate.css',
    '@/assets/scss/animation.scss',
    '@/assets/scss/prism-tomorrow.scss',
  ],
  plugins: [
    '~/plugins/globalComponents',
    {
      src: '~/plugins/lazyload.js',
      ssr: true
    },
    {
      src: '~/plugins/element.js',
      ssr: true
    },
  ],

  buildModules: [
    // ['@nuxtjs/google-analytics', {
    //   id: 'UA-136882582-1'
    // }],
    'nuxt-moment-jalaali',
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-responsive-loader',
    'nuxt-webfontloader',
    'nuxt-purgecss',
  ],
  moment: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
    timezone: {
      matchZones: ['zh-cn'],
      startYear: 2010,
      endYear: 2030
    }
  },

  // styleResources: {
  //   scss: ['./assets/scss/variables.scss', './assets/scss/mixin.scss']
  // },

  axios: {},
  build: {
    babel: {
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    extractCSS: true,
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       style: {
    //         name: 'style',
    //         test: /\.(scss|vue)$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     }
    //   }
    // },
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    analyze: true,
    analyze: {
      analyzerMode: 'static'
    },
    extend(config, ctx) {
      // frontmatter-markdown-loader
      config.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader",
        include: path.resolve(__dirname, "content"),
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT, Mode.META],
          vue: {
            root: "dynamicMarkdown",
          },
          markdown(body) {
            return md.render(body)
          }
        },
      }, {
        test: /\.(gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1024,
          fallback: require.resolve('nuxt-responsive-loader')
        }
      });
    }
  },
  responsiveLoader: {
    name: 'images/[name]/[hash:8]-[width].[ext]',
    min: 480,
    max: 1920,
    quality: 75,
    placeholder: true,
    adapter: require('responsive-loader/sharp'),
  },

  webfontloader: {
    custom: {
      families: ['Noto Sans'],
      urls: ['./fonts/fonts.css']
    }
  },

  generate: {
    routes: [
        '404'
      ]
      // .concat(bloglist.map(w => `/archive/${w}`))
      .concat(getPaths('archive'))
  }
}
