import React from "react";
import { FooterProps } from "./FooterDataType";

const Footer: React.FC<FooterProps> = ({ links, socialMedia, copyright }) => {
    return (
        <footer style={{ backgroundColor: "#1a1a1a", color: "#ffffff", padding: "2rem 0", marginTop: "4rem" }}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
                {/* 友情链接和社交媒体链接 */}
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "2rem" }}>
                    {/* 友情链接 */}
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ fontSize: "1.125rem", fontWeight: "600", margin: "0 0 1rem 0" }}>友情链接</h3>
                        <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", margin: 0, padding: 0, listStyle: "none" }}>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} style={{ color: "#ffffff", textDecoration: "none", transition: "color 0.3s ease" }}>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 社交媒体链接 */}
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ fontSize: "1.125rem", fontWeight: "600", margin: "0 0 1rem 0" }}>关注我们</h3>
                        <ul style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", margin: 0, padding: 0, listStyle: "none" }}>
                            {socialMedia.map((social, index) => (
                                <li key={index}>
                                    <a href={social.url} style={{ color: "#ffffff", textDecoration: "none", transition: "color 0.3s ease" }}>
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 分隔线 */}
                <hr style={{ border: "none", borderTop: "1px solid #4a5568", margin: "1.5rem 0" }} />

                {/* 版权信息 */}
                <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "0.875rem", margin: 0 }}>
                        © {new Date().getFullYear()} {copyright.companyName}. All rights reserved.
                    </p>
                    <p style={{ fontSize: "0.875rem", margin: "0.5rem 0 0" }}>
                        <a href={copyright.privacyPolicyUrl} style={{ color: "#ffffff", textDecoration: "none", transition: "color 0.3s ease" }}>
                            Privacy Policy
                        </a>{" "}
                        |{" "}
                        <a href={copyright.termsOfServiceUrl} style={{ color: "#ffffff", textDecoration: "none", transition: "color 0.3s ease", marginLeft: "0.5rem" }}>
                            Terms of Service
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;