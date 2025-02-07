export interface Link {
    title: string; // 网站名称
    url: string;   // 网站链接
    logo?: string; // 网站 Logo（可选）
}

export interface SocialMedia {
    name: string; // 社交媒体名称
    url: string;  // 社交媒体链接
    logo?: string; // 社交媒体 Logo（可选）
    qrCode?: string; // 二维码图片路径（可选）
    additionalInfo?: string; // 额外信息（如 ID 号码、网址等，可选）
}

export interface Copyright {
    companyName: string; // 公司名称
    privacyPolicyUrl: string; // 隐私政策链接
    termsOfServiceUrl: string; // 服务条款链接
}

export interface FooterProps {
    links: Link[]; // 友情链接列表
    socialMedia: SocialMedia[]; // 社交媒体链接列表
    copyright: Copyright; // 版权信息
}