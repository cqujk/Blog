import { Link, SocialMedia, Copyright } from "./FooterDataType";

export const footerData: {
    links: Link[];
    socialMedia: SocialMedia[];
    copyright: Copyright;
} = {
    links: [
        { title: "Example 1", url: "https://example.com" },
        { title: "Example 2", url: "https://example.com" },
        { title: "Example 3", url: "https://example.com" },
    ],
    socialMedia: [
        { name: "Twitter", url: "https://twitter.com" },
        { name: "Facebook", url: "https://facebook.com" },
        { name: "Instagram", url: "https://instagram.com" },
    ],
    copyright: {
        companyName: "Your Company Name",
        privacyPolicyUrl: "/privacy-policy",
        termsOfServiceUrl: "/terms-of-service",
    },
};