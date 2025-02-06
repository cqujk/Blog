export interface Link {
    title: string;
    url: string;
}

export interface SocialMedia {
    name: string;
    url: string;
}

export interface Copyright {
    companyName: string;
    privacyPolicyUrl: string;
    termsOfServiceUrl: string;
}

export interface FooterProps {
    links: Link[];
    socialMedia: SocialMedia[];
    copyright: Copyright;
}