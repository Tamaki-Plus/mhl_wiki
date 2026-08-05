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
    //site: IS_CHINA_SITE ? "https://nitwikit.8aka.cn" : "https://nitwikit.8aka.org",
    outDir: "./build",
    integrations: [vue(), starlight({
        title: "梦回录:先行wiki",
        description: "一盘灵古域梦回录非官方攻略",
        locales: {
            root: {
                label: "简体中文",
                lang: "zh-CN"
            }
        },
        favicon: "/favicon.ico",
        social: [{ icon: "github", label: "GitHub", href: "https://github.com/Tamaki-Plus/mhl_wiki"}],
        logo: { src: "./src/assets/logo.svg" },
        lastUpdated: true,
        editLink: {
            baseUrl: "https://github.com/Tamaki-Plus/mhl_wiki/edit/master/"
        },
        customCss: ["./src/styles/global.css"],
        plugins: [
            starlightGiscus({
                repo: "Tamaki-Plus/mhl_wiki",
                repoId: "R_kgDOTqNolg",
                category: "General",
                categoryId: "DIC_kwDOTqNols4DCe-b",
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
                        id: "occupation",
                        icon: "open-book",
                        items: [
                            {
                                label: "战士",
                                items: [
                                    "occupation/warrior/one",
                                    "occupation/warrior/two",
                                    "occupation/warrior/three",
                                    "occupation/warrior/four",
                                    "occupation/warrior/wuqi"
                                    ]
                            },
                            {
                                label: "弓箭手",
                                items: [
                                    "occupation/archers/zero",
                                    "occupation/archers/one",
                                    "occupation/archers/two",
                                    "occupation/archers/three",
                                    "occupation/archers/four",
                                    "occupation/archers/wuqi"
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
                        id: "instance",
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
                    },
                    {
                        label: "装备档案篇",
                        link: "/equip/intro",
                        id: "equip",
                        icon: "open-book",
                        items: [
                        {
                            'label': '战士武器',
                            'collapsed': true,
                            'items': [
                                'equip/sword/35_dinghaishenzhen',
                                'equip/sword/48_mojingshuanggubian',
                                'equip/sword/70_yishicanren',
                                'equip/sword/80_dingqin',
                                'equip/sword/80_hanyuanzhishuijian',
                                'equip/sword/80_mingkezhiji',
                                'equip/sword/85_shishengxueyu',
                                'equip/sword/85_xueyu',
                                'equip/sword/90_dizangliange',
                                'equip/sword/90_duoyuecanren',
                                'equip/sword/90_duoyuecanrenjie',
                                'equip/sword/90_hengguyishicanren',
                                'equip/sword/90_youyingliekongjian',
                                'equip/sword/100_tumo',
                                'equip/sword/110_yuewangjian',
                                'equip/sword/115_jingmilieren',
                                'equip/sword/115_zaixingxueren',
                                'equip/sword/120_tianditongbei',
                            ],
                        },
                        {
                            'label': '弓箭手武器',
                            'collapsed': true,
                            'items': [
                                'equip/bow/35_zhuri',
                                'equip/bow/48_wuguzhiyan',
                                'equip/bow/60_cangqiong',
                                'equip/bow/60_canyun',
                                'equip/bow/80_rishijinshuo',
                                'equip/bow/80_sanhuocangqiong',
                                'equip/bow/80_shuangying',
                                'equip/bow/90_diaocuiyin',
                                'equip/bow/90_xiaduanyunche',
                                'equip/bow/95_genguanying',
                                'equip/bow/100_shiliuzhishun',
                                'equip/bow/110_hong',
                                'equip/bow/115_e',
                                'equip/bow/120_genguanyingshenpan',
                                'equip/bow/120_jiuyouhanli',
                                'equip/bow/120_liuguangjinghong',
                            ],
                        },
                        {
                            'label': '炼丹师武器',
                            'collapsed': true,
                            'items': [
                                'equip/tripod/35_hunyuanshending',
                                'equip/tripod/37_zidian',
                                'equip/tripod/48_zhenchaoguqingding',
                                'equip/tripod/60_canxingdeng',
                                'equip/tripod/70_taiguzuo',
                                'equip/tripod/77_xingyunfuzhao',
                                'equip/tripod/80_hanshuangyin',
                                'equip/tripod/80_hengguzhizhang',
                                'equip/tripod/80_junzhaoling',
                                'equip/tripod/80_shuishuangxuebingzhiying',
                                'equip/tripod/85_shilingkedao',
                                'equip/tripod/90_youyuehundeng',
                                'equip/tripod/95_youyuehundengjing',
                                'equip/tripod/100_yonghengquanzhang',
                                'equip/tripod/110_elingzhizhao',
                                'equip/tripod/117_hundunzhong',
                            ],
                        },
                        {
                            'label': '盾之印',
                            'collapsed': true,
                            'items': [
                                {
                                    'label': '通用盾',
                                    'collapsed': true,
                                    'items': [
                                        'equip/shield/common/jinsehuayu',
                                        'equip/shield/common/mudun',
                                        'equip/shield/common/shuiyou',
                                    ],
                                },
                                {
                                    'label': '战士盾',
                                    'collapsed': true,
                                    'items': [
                                        'equip/shield/warrior/liangzijiandun',
                                        'equip/shield/warrior/yinyangbagua',
                                    ],
                                },
                            ],
                        },
                        {
                            'label': '法宝',
                            'collapsed': true,
                            'items': [
                                {
                                    'label': '通用法宝',
                                    'collapsed': true,
                                    'items': [
                                        'equip/treasured/common/anchao',
                                        'equip/treasured/common/bingwenxuefu',
                                        'equip/treasured/common/jingyuyuping',
                                        'equip/treasured/common/jinsehuayu',
                                        'equip/treasured/common/jiuwangshibingfeng',
                                        'equip/treasured/common/yinyanglingyu',
                                        'equip/treasured/common/yuhua',
                                    ],
                                },
                                {
                                    'label': '炼丹师法宝',
                                    'collapsed': true,
                                    'items': [
                                        'equip/treasured/alchemist/shenshenglingyu',
                                    ],
                                },
                                {
                                    'label': '弓箭手法宝',
                                    'collapsed': true,
                                    'items': [
                                        'equip/treasured/archers/henggushifu',
                                        'equip/treasured/archers/rongyaoanmian',
                                    ],
                                },
                                {
                                    'label': '战士法宝',
                                    'collapsed': true,
                                    'items': [
                                        'equip/treasured/warrior/xuezai',
                                        'equip/treasured/warrior/youyuezhu',
                                    ],
                                },
                            ],
                        },
                        {
                            'label': '头盔',
                            'collapsed': true,
                            'items': [
                                'equip/helmet/1_jingtanwu',
                                'equip/helmet/5_jingtanliu',
                                'equip/helmet/12_maoshixingyan',
                                'equip/helmet/13_taichutianyan',
                                'equip/helmet/14_jingtanqingmingguan',
                                'equip/helmet/15_yezhihongran',
                                'equip/helmet/16_gongzhen',
                                'equip/helmet/17_daoshuangtoujin',
                                'equip/helmet/17_xuanbingchilongguan',
                                'equip/helmet/18_shilieyixingzhumo',
                                'equip/helmet/19_henggulingguan',
                                'equip/helmet/19_yizhuantaichutianyan',
                                'equip/helmet/20_nizhuanyixingzhumo',
                                'equip/helmet/22_junlin',
                                'equip/helmet/22_yixingzhumo',
                                'equip/helmet/23_fenglihairan',
                                'equip/helmet/23_fengyuhuakui',
                                'equip/helmet/24_erzhuantaichutianyan',
                                'equip/helmet/25_anchaomingkui',
                                'equip/helmet/25_lingfengyunling',
                                'equip/helmet/26_yonghengjinsuo',
                                'equip/helmet/28_minghongjingmang',
                                'equip/helmet/29_xuezaihutui',
                                'equip/helmet/31_nanwangguishui',
                                'equip/helmet/32_xuezhoufenghun',
                                'equip/helmet/32_zhenyutianluo',
                                'equip/helmet/32_xuanmingguling',
                                'equip/helmet/36_exing',
                                'equip/helmet/37_minghongjingmangyizhuan',
                            ],
                        },
                        {
                            'label': '胸甲',
                            'collapsed': true,
                            'items': [
                                'equip/chestplate/1_jingtanwu',
                                'equip/chestplate/5_jingtanliu',
                                'equip/chestplate/10_cantianluoyu',
                                'equip/chestplate/13_yizhuantaichushenjia',
                                'equip/chestplate/15_jingtanbumiejia',
                                'equip/chestplate/15_xuehaimojia',
                                'equip/chestplate/18_hanyuanzhenhaijia',
                                'equip/chestplate/18_lingmaibingjia',
                                'equip/chestplate/19_diguiniegu',
                                'equip/chestplate/19_juexi',
                                'equip/chestplate/20_canjiangtianyun',
                                'equip/chestplate/20_funengzhongkaibilei',
                                'equip/chestplate/21_erzhuantaichushenjia',
                                'equip/chestplate/23_jingfengyijia',
                                'equip/chestplate/23_liehuocanjiangtianyun',
                                'equip/chestplate/24_yingchaohunhu',
                                'equip/chestplate/25_jinwuzheyi',
                                'equip/chestplate/25_longlinkaijia',
                                'equip/chestplate/25_xuezaikaijia',
                                'equip/chestplate/26_lingxihuzhou',
                                'equip/chestplate/28_fengmoxuanjia',
                                'equip/chestplate/28_shangguyijia',
                                'equip/chestplate/29_yonghengchangpao',
                                'equip/chestplate/31_beigucangwu',
                                'equip/chestplate/36_longlinkaijiayizhuan',
                                'equip/chestplate/37_cangmingyujie',
                                'equip/chestplate/37_huacijingjia',
                            ],
                        },
                        {
                            'label': '护腿',
                            'collapsed': true,
                            'items': [
                                'equip/leggings/1_jingtanwu',
                                'equip/leggings/5_jingtanliu',
                                'equip/leggings/12_jiutianqunju',
                                'equip/leggings/12_xingluoluoqin',
                                'equip/leggings/13_yunxingjianying',
                                'equip/leggings/14_shenhuowei',
                                'equip/leggings/15_jingtandizuijing',
                                'equip/leggings/15_mingyuxueshang',
                                'equip/leggings/16_yizhuanjiutianqunju',
                                'equip/leggings/18_bingdongjinggusuo',
                                'equip/leggings/18_huneyingsuo',
                                'equip/leggings/20_xingyuelinfeng',
                                'equip/leggings/22_erzhuanjiutianqunju',
                                'equip/leggings/25_ruoshuiqingsha',
                                'equip/leggings/26_modaozhihun',
                                'equip/leggings/26_shiliuzhizhen',
                                'equip/leggings/27_taotiefengkun',
                                'equip/leggings/29_xuezaihutui',
                                'equip/leggings/31_suohunxuanwenjie',
                                'equip/leggings/37_jiguancuizhi',
                                'equip/leggings/37_nifengxianyu',
                                'equip/leggings/37_xuanchifengku',
                                'equip/leggings/38_modaozhihunyizhuan',
                            ],
                        },
                        {
                            'label': '鞋子',
                            'collapsed': true,
                            'items': [
                                'equip/boots/1_jingtanwu',
                                'equip/boots/5_jingtanliu',
                                'equip/boots/10_xinglianxia',
                                'equip/boots/11_jingtanjingzuxue',
                                'equip/boots/11_yizhuanjiutianxuanyu',
                                'equip/boots/12_cangzhiyuyi',
                                'equip/boots/12_tahaixuanbinglv',
                                'equip/boots/14_shenhuoyuhua',
                                'equip/boots/16_henggutingfeng',
                                'equip/boots/19_tiyunzong',
                                'equip/boots/19_yuelingxue',
                                'equip/boots/21_erzhuanjiutianxuanyu',
                                'equip/boots/21_wangsheng',
                                'equip/boots/24_aofengzhanxuejie',
                                'equip/boots/25_xuhuanyuanwu',
                                'equip/boots/26_mingyingbuxue',
                                'equip/boots/27_miesuizhanxue',
                                'equip/boots/27_xinzhisuo',
                                'equip/boots/27_zaixing',
                                'equip/boots/28_shiliuzhongting',
                                'equip/boots/30_hongcaixue',
                                'equip/boots/33_taxuewuhen',
                                'equip/boots/33_xuhuanyuanwuyizhuan',
                                'equip/boots/37_beijingchunxi',
                                'equip/boots/38_bulvchanghong',
                            ],
                        },
                    ]
                }
            ]),
            starlightLinksValidator(),
            starlightImageZoom(),
            starlightDocSearch({
                appId: "BTTEBIO771",
                apiKey: "fbe84cce03b6708f36bdd0aa7f167728",
                indexName: "mhl",
                insights: true
            }),
            starlightScrollToTop()
        ],
        components: {
            LastUpdated: "./src/components/LastUpdated.astro",
            Head: "./src/components/Head.astro",
            Pagination: "./src/components/CustomPagination.astro"
        }
    }), AstroPWA({
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
            name: "mhl Wiki",
            short_name: "mhl Wiki",
            display: "standalone",
            theme_color: "#2196f3",
            background_color: "#424242"
        }
    }), mermaid({
        autoTheme: true
    })],
    vite: {
        plugins: [tailwindcss()],
        ssr: {
            noExternal: ["date-fns", "workbox-window"]
        }
    }
});