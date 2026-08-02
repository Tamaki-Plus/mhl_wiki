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
        label: "战士武器",
        collapsed: true,
        items: [
            "equip/sword/1_shishengxueyu",
            "equip/sword/2_dizangliange",
            "equip/sword/3_duoyuecanren",
            "equip/sword/4_duoyuecanrenjie",
            "equip/sword/5_tianditongbei",
            "equip/sword/6_dinghaishenzhen",
            "equip/sword/7_dingqin",
            "equip/sword/8_hanyuanzhishuijian",
            "equip/sword/9_tumo",
            "equip/sword/10_youyingliekongjian",
            "equip/sword/11_yishicanren",
            "equip/sword/12_hengguyishicanren",
            "equip/sword/13_zaixingxueren",
            "equip/sword/14_xueyu",
            "equip/sword/15_yuewangjian",
            "equip/sword/16_mingkezhiji",
            "equip/sword/17_jingmilieren",
            "equip/sword/18_mojingshuanggubian"
        ]
    },
    {
        label: "弓箭手武器",
        collapsed: true,
        items: [
            "equip/bow/1_sanhuocangqiong",
            "equip/bow/2_jiuyouhanli",
            "equip/bow/3_genguanying",
            "equip/bow/4_genguanyingshenpan",
            "equip/bow/5_e",
            "equip/bow/6_wuguzhiyan",
            "equip/bow/7_diaocuiyin",
            "equip/bow/8_rishijinshuo",
            "equip/bow/9_shiliuzhishun",
            "equip/bow/10_canyun",
            "equip/bow/11_liuguangjinghong",
            "equip/bow/12_cangqiong",
            "equip/bow/13_hong",
            "equip/bow/14_zhuri",
            "equip/bow/15_shuangying",
            "equip/bow/16_xiaduanyunche"
        ]
    },
    {
        label: "炼丹师武器",
        collapsed: true,
        items: [
            "equip/tripod/1_junzhaoling",
            "equip/tripod/2_shilingkedao",
            "equip/tripod/3_taiguzuo",
            "equip/tripod/4_hanshuangyin",
            "equip/tripod/5_youyuehundeng",
            "equip/tripod/6_youyuehundengjing",
            "equip/tripod/7_hengguzhizhang",
            "equip/tripod/8_elingzhizhao",
            "equip/tripod/9_xingyunfuzhao",
            "equip/tripod/10_canxingdeng",
            "equip/tripod/11_shuishuangxuebingzhiying",
            "equip/tripod/12_yonghengquanzhang",
            "equip/tripod/13_hunyuanshending",
            "equip/tripod/14_hundunzhong",
            "equip/tripod/15_zidian",
            "equip/tripod/16_zhenchaoguqingding"
        ]
    },
    {
        label: "盾之印",
        collapsed: true,
        items: [
            {
                label: "战士盾",
                collapsed: true,
                items: [
                    "equip/shield/warrior/1_liangzijiandun",
                    "equip/shield/warrior/2_yinyangbagua"
                ]
            },
            {
                label: "通用盾",
                collapsed: true,
                items: [
                    "equip/shield/common/1_mudun",
                    "equip/shield/common/2_shuiyou",
                    "equip/shield/common/3_jinsehuayu"
                ]
            }
        ]
    },
    {
        label: "法宝",
        collapsed: true,
        items: [
            {
                label: "战士法宝",
                collapsed: true,
                items: [
                    "equip/treasured/warrior/1_youyuezhu",
                    "equip/treasured/warrior/2_xuezai"
                ]
            },
            {
                label: "弓箭手法宝",
                collapsed: true,
                items: [
                    "equip/treasured/archers/1_henggushifu",
                    "equip/treasured/archers/2_rongyaoanmian"
                ]
            },
            {
                label: "炼丹师法宝",
                collapsed: true,
                items: [
                    "equip/treasured/alchemist/1_shenshenglingyu"
                ]
            },
            {
                label: "通用法宝",
                collapsed: true,
                items: [
                    "equip/treasured/common/1_bingwenxuefu",
                    "equip/treasured/common/2_jingyuyuping",
                    "equip/treasured/common/3_jiuwangshibingfeng",
                    "equip/treasured/common/4_anchao",
                    "equip/treasured/common/5_yuhua",
                    "equip/treasured/common/6_jinsehuayu",
                    "equip/treasured/common/7_yinyanglingyu"
                ]
            }
        ]
    },
    {
        label: "头盔",
        collapsed: true,
        items: [
            "equip/helmet/1_yizhuantaichutianyan",
            "equip/helmet/2_erzhuantaichutianyan",
            "equip/helmet/3_gongzhen",
            "equip/helmet/4_minghongjingmang",
            "equip/helmet/5_minghongjingmangyizhuan",
            "equip/helmet/6_jingtanwu",
            "equip/helmet/7_jingtanliu",
            "equip/helmet/8_lingfengyunling",
            "equip/helmet/9_fengyuhuakui",
            "equip/helmet/10_nanwangguishui",
            "equip/helmet/11_maoshixingyan",
            "equip/helmet/12_exing",
            "equip/helmet/13_yezhihongran",
            "equip/helmet/14_junlin",
            "equip/helmet/15_shilieyixingzhumo",
            "equip/helmet/16_taichutianyan",
            "equip/helmet/17_yixingzhumo",
            "equip/helmet/18_henggulingguan",
            "equip/helmet/19_daoshuangtoujin",
            "equip/helmet/20_fenglihairan",
            "equip/helmet/21_yonghengjinsuo",
            "equip/helmet/22_xuezhoufenghun",
            "equip/helmet/23_xuezaihutui",
            "equip/helmet/24_nizhuanyixingzhumo",
            "equip/helmet/25_zhenyutianluo",
            "equip/helmet/26_anchaomingkui"
        ]
    },
    {
        label: "胸甲",
        collapsed: true,
        items: [
            "equip/chestplate/1_yizhuantaichushenjia",
            "equip/chestplate/2_shangguyijia",
            "equip/chestplate/3_erzhuantaichushenjia",
            "equip/chestplate/4_jingtanwu",
            "equip/chestplate/5_jingtanliu",
            "equip/chestplate/6_beigucangwu",
            "equip/chestplate/7_fengmoxuanjia",
            "equip/chestplate/8_yingchaohunhu",
            "equip/chestplate/9_cantianluoyu",
            "equip/chestplate/10_canjiangtianyun",
            "equip/chestplate/11_yonghengchangpao",
            "equip/chestplate/12_lingxihuzhou",
            "equip/chestplate/13_lingmaibingjia",
            "equip/chestplate/14_liehuocanjiangtianyun",
            "equip/chestplate/15_juexi",
            "equip/chestplate/16_huacijingjia",
            "equip/chestplate/17_cangmingyujie",
            "equip/chestplate/18_xuehaimojia",
            "equip/chestplate/19_xuezaikaijia",
            "equip/chestplate/20_funengzhongkaibilei",
            "equip/chestplate/21_funengzhongkaicunxu",
            "equip/chestplate/22_diguiniegu",
            "equip/chestplate/23_jinwuzheyi",
            "equip/chestplate/24_jingfengyijia",
            "equip/chestplate/25_longlinkaijia",
            "equip/chestplate/26_longlinkaijiayizhuan"
        ]
    },
    {
        label: "护腿",
        collapsed: true,
        items: [
            "equip/leggings/1_yizhuanjiutianqunju",
            "equip/leggings/2_jiutianqunju",
            "equip/leggings/3_erzhuanjiutianqunju",
            "equip/leggings/4_mingyuxueshang",
            "equip/leggings/5_jingtanwu",
            "equip/leggings/6_jingtanliu",
            "equip/leggings/7_shiliuzhizhen",
            "equip/leggings/8_xingyuelinfeng",
            "equip/leggings/9_xingluoluoqin",
            "equip/leggings/10_jiguancuizhi",
            "equip/leggings/11_xuanchifengku",
            "equip/leggings/12_shenhuowei",
            "equip/leggings/13_ruoshuiqingsha",
            "equip/leggings/14_xuezaihutui",
            "equip/leggings/15_nifengxianyu",
            "equip/leggings/16_suohunxuanwenjie",
            "equip/leggings/17_yunxingjianying",
            "equip/leggings/18_taotiefengkun",
            "equip/leggings/19_huneyingsuo",
            "equip/leggings/20_modaozhihun",
            "equip/leggings/21_modaozhihunyizhuan"
        ]
    },
    {
        label: "鞋子",
        collapsed: true,
        items: [
            "equip/boots/1_yizhuanjiutianxuanyu",
            "equip/boots/2_erzhuanjiutianxuanyu",
            "equip/boots/3_mingyingbuxue",
            "equip/boots/4_jingtanwu",
            "equip/boots/5_jingtanliu",
            "equip/boots/6_beijingchunxi",
            "equip/boots/7_xinzhisuo",
            "equip/boots/8_henggutingfeng",
            "equip/boots/9_wangsheng",
            "equip/boots/10_shiliuzhongting",
            "equip/boots/11_xinglianxia",
            "equip/boots/12_yuelingxue",
            "equip/boots/13_tiyunzong",
            "equip/boots/14_bulvchanghong",
            "equip/boots/15_cangzhiyuyi",
            "equip/boots/16_miesuizhanxue",
            "equip/boots/17_zaixing",
            "equip/boots/18_shenhuoyuhua",
            "equip/boots/19_xuhuanyuanwu",
            "equip/boots/20_xuhuanyuanwuyizhuan",
            "equip/boots/21_hongcaixue",
            "equip/boots/22_taxuewuhen",
            "equip/boots/23_aofengzhanxuejie"
        ]
    }
]
                    }
                ]
            ),
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