import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import AstroPWA from "@vite-pwa/astro";
import mermaid from "astro-mermaid";
import { defineConfig } from "astro/config";
import starlightGiscus from "starlight-giscus";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightDocSearch from "@astrojs/starlight-docsearch";
import starlightScrollToTop from "starlight-scroll-to-top";
import vue from "@astrojs/vue";

const IS_CHINA_SITE = process.env.CHINA === "true";

export default defineConfig({
    //site: IS_CHINA_SITE ? "https://nitwikit.8aka.cn" : "https://nitwikit.8aka.org", //
    outDir: "./build",
    integrations: [
        vue(),
        starlight({
            title: "梦回录:先行wiki",
            description: "一盘灵古域梦回录非官方攻略",
            locales: {
                root: {
                    label: "简体中文",
                    lang: "zh-CN"
                }
            },
            favicon: "/favicon.ico",
            //social: [{ icon: "github", label: "GitHub", href: "https://github.com/Cubic-Project/NitWikit" }],
            logo: { src: "./src/assets/logo.svg" },
            lastUpdated: true,
            /*editLink: {
                baseUrl: "https://github.com/Cubic-Project/NitWikit/edit/main/"
            },*/
            customCss: ["./src/styles/global.css"],
            plugins: [
                starlightGiscus({
                    repo: "tameki/mhlwiki",
                    repoId: "R_kgDOQWQ-Ng",
                    category: "General",
                    categoryId: "DIC_kwDOQWQ-Ns4Cx2No",
                    mapping: "og:title",
                    lazy: true
                }),
                starlightSidebarTopics(
                    [
                        {
                            label: "引导",
                            link: "/intro",
                            icon: "seti:bazel",
                            id: "basics",
                            items: [
                                {
                                    label: "从这里开始",
                                    collapsed: false,
                                    items: ["intro"]
                                }
                            ]
                        },
                        {
                            label: "职业指导篇",
                            link: "/occupation/intro",
                            id: "java",
                            icon: "open-book",
                            items: [
                                {
                                    label: "战士",
                                    items: [
                                        "occupation/warrior/one",
                                        "occupation/warrior/two",
                                        "occupation/warrior/three",
                                        "occupation/warrior/four"
                                        ]
                                },
                                {
                                    label: "弓箭手",
                                    items: [
                                        "occupation/archers/zero",
                                        "occupation/archers/one",
                                        "occupation/archers/two",
                                        "occupation/archers/three",
                                        "occupation/archers/four"
                                        ]
                                },
                                {
                                    label: "炼丹师",
                                    items: [
                                        "occupation/alchemist/zero",
                                        "occupation/alchemist/one",
                                        "occupation/alchemist/two",
                                        "occupation/alchemist/three",
                                        "occupation/alchemist/four"
                                        ]
                                }
                            ]
                        },
                        {
                            label: "副本档案篇",
                            link: "/instance/intro",
                            id: "java",
                            icon: "open-book",
                            items: [
                                {
                                    label: "常规副本",
                                    items: [
                                        "instance/common/1_huangcao",
                                        "instance/common/2_lingmu",
                                        "instance/common/3_jinzita",
                                        "instance/common/4_fushe",
                                        "instance/common/5_jisu",
                                        "instance/common/6_wangshi",
                                        "instance/common/7_bing",
                                        "instance/common/8_wuchang",
                                        "instance/common/9_jian",
                                        "instance/common/10_xueshen",
                                        "instance/common/11_lei",
                                        "instance/common/12_yuangu",
                                        "instance/common/13_feng",
                                        "instance/common/14_zhengta",
                                        "instance/common/15_shihuang",
                                        "instance/common/16_homo",
                                        "instance/common/17_kugu",
                                        "instance/common/18_yue",
                                        "instance/common/19_chengbao",
                                        "instance/common/20_an",
                                        "instance/common/21_shijian",
                                        "instance/common/22_fanta",
                                        "instance/common/23_hong",
                                        "instance/common/24_huo",
                                        "instance/common/25_dian",
                                        "instance/common/26_zai",
                                        "instance/common/27_hua",
                                        "instance/common/28_tian"
                                        ]
                                },
                                {
                                    label: "特殊副本",
                                    items: [
                                        "instance/special/1_shamota",
                                        "instance/special/2_huanjing"
                                        ]
                                }
                            ]
                        }
                    ]
                ),
                starlightLinksValidator(),
                starlightImageZoom(),
                starlightDocSearch({
                    appId: "D1KV1BYF3B",
                    apiKey: "4bb3573e59f2c49f30f057ce54edab3f",
                    indexName: "yizhan",
                    insights: true
                }),
                starlightScrollToTop()
            ],
            components: {
                LastUpdated: "./src/components/LastUpdated.astro",
                Head: "./src/components/Head.astro",
                Pagination: "./src/components/CustomPagination.astro"
            }
        }),
        AstroPWA({
            registerType: "autoUpdate",
            workbox: {
                skipWaiting: true,
                clientsClaim: true,
                navigateFallback: "/404",
                ignoreURLParametersMatching: [/./],
                globPatterns: ["**/*.{html,js,css,png,svg,json,ttf,pf_fragment,pf_index,pf_meta,pagefind,wasm}"]
            },
            experimental: {
                directoryAndTrailingSlashHandler: true
            },
            manifest: {
                name: "Cubic Wiki",
                short_name: "Cubic Wiki",
                display: "standalone",
                theme_color: "#2196f3",
                background_color: "#424242"
            }
        }),
        mermaid({
            autoTheme: true
        })
    ],
    vite: {
        plugins: [tailwindcss()],
        ssr: {
            noExternal: ["date-fns", "workbox-window"]
        }
    }
});
