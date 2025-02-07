import { Link, SocialMedia, Copyright } from "./FooterDataType";

export const footerData: {
    links: Link[];
    socialMedia: SocialMedia[];
    copyright: Copyright;
} = {
    links: [
        {
            title: "CSDN",
            url: "https://blog.csdn.net/m0_73553411?spm=1000.2115.3001.5343",
            logo: "/asset/image/linklogo/csdn2.png", // Logo 图片路径
        },
        {
            title: "Github",
            url: "https://github.com/cqujk",
            logo: "/asset/image/linklogo/github.png", // Logo 图片路径
        },
    ],
    socialMedia: [
        {
            name: "Twitter",
            url: "https://twitter.com",
            logo: "/asset/image/linklogo/x.png", // Logo 图片路径
            additionalInfo: "Coming soon", // 额外信息
            // qrCode: "/path/to/twitter-qr.png", // 二维码图片路径
            // additionalInfo: "Scan to follow us on Twitter", // 额外信息
        },
        {
            name: "WeChat",
            url: "https://weixin.qq.com/",
            logo: "/asset/image/linklogo/wechat.png", // Logo 图片路径
            qrCode: "/asset/image/linklogo/wechatQR.png", // 二维码图片路径
            additionalInfo: "Scan to be friend", // 额外信息
        },
        {
            name: "QQ",
            url: "https://im.qq.com/",
            logo: "/asset/image/linklogo/QQ.png", // Logo 图片路径
            qrCode: "/asset/image/linklogo/qqQR.png", // 二维码图片路径
            additionalInfo: "Scan to be friend,QQ code 2686181617", // 额外信息
        },
    ],
    copyright: {
        companyName: "JiaKe",
        privacyPolicyUrl: "/privacy-policy",
        termsOfServiceUrl: "/terms-of-service",
    },
};