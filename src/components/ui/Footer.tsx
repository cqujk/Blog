'use client';
import React from "react";
import { useState} from 'react';
import { FooterProps } from "./FooterDataType";

const Footer: React.FC<FooterProps> = ({ links, socialMedia, copyright }) => {
    const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

    return (
        <footer style={{
            backgroundColor: "#0a0a0a", // 更深的黑色，与星空蓝过渡更自然
            color: "#818cf8", // 与星空蓝相近的亮紫色文字
            padding: "2rem 0",
            marginTop: "4rem"
        }}>
            <div style={{maxWidth: "1200px", margin: "0 auto", padding: "0 1rem"}}>
                {/* 友情链接和社交媒体链接 */}
                <div style={{display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "2rem"}}>
                    {/* 友情链接 */}
                    <div style={{textAlign: "center"}}>
                        <h3 style={{fontSize: "1.125rem", fontWeight: "600", margin: "0 0 1rem 0"}}>Friend Links</h3>
                        <ul style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "1rem",
                            margin: 0,
                            padding: 0,
                            listStyle: "none"
                        }}>
                            {links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} style={{
                                        color: "#ffffff",
                                        textDecoration: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem"
                                    }}>
                                        {link.logo && (
                                            <img
                                                src={link.logo}
                                                alt={link.title}
                                                style={{width: "24px", height: "24px", objectFit: "contain"}}
                                            />
                                        )}
                                        <span>{link.title}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 社交媒体链接 */}
                    <div id="contact" style={{textAlign: "center"}}>
                        <h3 style={{fontSize: "1.125rem", fontWeight: "600", margin: "0 0 1rem 0"}}>Contact me</h3>
                        <ul style={{
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            gap: "1rem",
                            margin: 0,
                            padding: 0,
                            listStyle: "none"
                        }}>
                            {socialMedia.map((social, index) => (
                                <li
                                    key={index}
                                    onMouseEnter={() => setHoveredSocial(social.name)}
                                    onMouseLeave={() => setHoveredSocial(null)}
                                    style={{position: "relative"}}
                                >
                                    <a href={social.url} style={{
                                        color: "#ffffff",
                                        textDecoration: "none",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem"
                                    }}>
                                        {social.logo && (
                                            <img
                                                src={social.logo}
                                                alt={social.name}
                                                style={{width: "24px", height: "24px", objectFit: "contain"}}
                                            />
                                        )}
                                        <span>{social.name}</span>
                                    </a>

                                    {/* 悬停时显示的小窗 */}
                                    {hoveredSocial === social.name && (
                                        <div style={{
                                            position: "absolute",
                                            top: "100%",
                                            left: "50%",
                                            transform: "translateX(-50%)",
                                            backgroundColor: "#2d3748",
                                            padding: "0.5rem",
                                            borderRadius: "4px",
                                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                                            zIndex: 10,
                                            minWidth: "150px", // 最小宽度
                                            maxWidth: "300px", // 最大宽度
                                            textAlign: "center",
                                        }}>
                                            {/* 图片不存在时仅显示文字 */}
                                            {social.qrCode ? (
                                                <img
                                                    src={social.qrCode}
                                                    alt={`${social.name} QR Code`}
                                                    style={{
                                                        width: "100%", // 图片宽度自适应
                                                        height: "auto", // 高度自适应
                                                        maxWidth: "200px", // 最大宽度限制
                                                        maxHeight: "200px", // 最大高度限制
                                                        borderRadius: "4px",
                                                    }}
                                                />
                                            ) : (
                                                <p style={{margin: 0, fontSize: "0.875rem"}}>
                                                    {/*{social.additionalInfo || "No additional information available."}*/}
                                                </p>
                                            )}
                                            {/* 额外信息 */}
                                            {social.additionalInfo && (
                                                <p style={{margin: "0.5rem 0 0", fontSize: "0.875rem"}}>
                                                    {social.additionalInfo}
                                                </p>
                                            )}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 分隔线 */}
                <hr style={{border: "none", borderTop: "1px solid #4a5568", margin: "1.5rem 0"}}/>

                {/* 版权信息 */}
                <div style={{textAlign: "center"}}>
                    <p style={{fontSize: "0.875rem", margin: 0}}>
                        © {new Date().getFullYear()} {copyright.companyName}. All rights reserved.
                    </p>
                    <p style={{fontSize: "0.875rem", margin: "0.5rem 0 0"}}>
                        <a href={copyright.privacyPolicyUrl}
                           style={{color: "#ffffff", textDecoration: "none", transition: "color 0.3s ease"}}>
                            Privacy Policy
                        </a>{" "}
                        |{" "}
                        <a href={copyright.termsOfServiceUrl} style={{
                            color: "#ffffff",
                            textDecoration: "none",
                            transition: "color 0.3s ease",
                            marginLeft: "0.5rem"
                        }}>
                            Terms of Service
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;