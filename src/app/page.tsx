// app/page.tsx
'use client'
import { Card } from "@/components/sections/Card";
import { SectionTitle } from "@/components/sections/SectionTitle";
import { Timeline } from "@/components/sections/Timeline";
import { motion} from 'framer-motion';
import React from "react";
export default function Home() {
    // 通用样式配置
    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 16px'
    };

    const heroSectionStyle = {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    };

    const gridLayoutStyle = {
        display: 'grid',
        gap: '32px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    };

    return (
        <>
            <motion.section
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    // 容器样式
                    overflow: 'hidden',
                    isolation: 'isolate',
                    '::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1,
                        background: `
                linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.8) 0%,
                    rgba(0, 0, 0, 0.6) 50%,
                    rgba(0, 0, 0, 0.4) 100%
                )`,
                        backdropFilter: 'blur(4px)',
                        WebkitBackdropFilter: 'blur(4px)'
                    }
                }}
            >
                {/* 背景图片层 */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-10%', // 扩大边界
                        left: '-10%',
                        right: '-10%',
                        bottom: '-10%',
                        zIndex: -100,
                        backgroundImage: 'url(/asset/image/background/home.jpg)', // 替换为你的图片路径
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(1px) brightness(0.4)', // 毛玻璃效果
                        transform: 'scale(1)' ,// 消除模糊边缘
                        maskImage: `
                linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 0.8) 50%,
                    rgba(0, 0, 0, 0) 100%
                )`
                    }}
                />
                {/* 动态渐变蒙版层 */}
                <motion.div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -50,
                        backgroundImage: `
        linear-gradient(
          180deg,
          rgba(255,255,255,0.1) 0%,
          rgba(255,255,255,0.2) 25%,
          rgba(255,255,255,0.3) 50%,
          rgba(255,255,255,0.05) 75%,
          rgba(255,255,255,0.0) 100%
        )`,

                        backdropFilter: 'blur(8px)',
                        WebkitBackdropFilter: 'blur(8px)'
                    }}
                    initial={{
                        backgroundPosition: '0% 50%',
                        opacity: 0.0
                    }}
                    animate={{
                        backgroundPosition: '100% 50%',
                        opacity: 0.3
                    }}
                    transition={{
                        backgroundPosition: {
                            duration: 8,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: "linear"
                        },
                        opacity: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: "easeInOut"
                        }
                    }}
                />
                <motion.div
                    initial={{y: 50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{delay: 0.3}}
                    style={{textAlign: 'center', maxWidth: '800px'}}
                >
                    {/* 标题优化 */}
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: 700,
                        backgroundImage: 'linear-gradient(to right, #e0e7ff, #c7d2fe)',
                        backgroundClip: 'text',
                        color: 'transparent',
                        WebkitBackgroundClip: 'text',
                        textShadow: '0 2px 4px rgba(37, 99, 235, 0.15)'
                    }}>
                        嗨，我是贾轲
                    </h1>

                    {/* 副标题优化 */}
                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 0.5}}
                        style={{
                            fontSize: '1.25rem',
                            color: 'rgba(255, 255, 255, 0.9)', // 柔光白
                            margin: '24px 0',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
                        }}
                    >
                        充满热情的计算机领域探索者 | 正在寻找研究机会
                    </motion.p>

                    {/* 按钮组优化 */}
                    <motion.div
                        style={{display: 'flex', gap: '16px', justifyContent: 'center'}}
                        initial={{scale: 0.8, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{delay: 0.7}}
                    >
                        <a href="#contact" style={{
                            padding: '12px 24px',
                            background: 'rgba(255, 255, 255, 0.9)',
                            color: '#4f46e5', // 深靛蓝
                            borderRadius: '8px',
                            textDecoration: 'none',
                            boxShadow: '0 4px 6px rgba(79, 70, 229, 0.1)',
                            transition: 'all 0.2s ease',
                            border: '1px solid rgba(79, 70, 229, 0.2)'
                        }}>
                            立即联系
                        </a>
                        <a href="#projects" style={{
                            padding: '12px 24px',
                            background: 'rgba(199, 210, 254, 0.2)', // 浅薰衣草
                            color: '#e0e7ff', // 月光白
                            borderRadius: '8px',
                            textDecoration: 'none',
                            boxShadow: '0 4px 6px rgba(224, 231, 255, 0.1)',
                            transition: 'all 0.2s ease',
                            border: '1px solid rgba(224, 231, 255, 0.3)'
                        }}>
                            查看项目
                        </a>
                    </motion.div>
                </motion.div>
            </motion.section>

            <div style={{
                ...containerStyle,
                position: 'relative',
                background: `linear-gradient(
        to bottom,
        rgba(15, 23, 42, 0.8) 0%,      // 星空蓝（顶部）
        rgba(30, 41, 59, 0.9) 30%,     // 深蓝过渡
        rgba(55, 65, 81, 0.95) 60%,    // 中灰过渡
        rgba(0, 0, 0, 1) 100%          // 纯黑（底部）
    )`,
                padding: '4rem 2rem',
                '::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background: `linear-gradient(
            to bottom,
            rgba(15, 23, 42, 1) 0%,
            rgba(15, 23, 42, 0) 100%
        )`,
                    zIndex: -1
                },
                '::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '200px',
                    background: `linear-gradient(
            to top,
            rgba(0, 0, 0, 1) 0%,
            rgba(0, 0, 0, 0) 100%
        )`,
                    zIndex: -1,
                    isolation: 'isolate'
                }
            }}>
                {/* 核心内容区块 */}
                <div style={{
                    padding: '4rem 2rem',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderRadius: '24px',
                    boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(224, 231, 255, 0.3)'
                }}>
                    {/* 个人简介 */}
                    <section id="about" style={{margin: '80px 0'}}>
                        <SectionTitle title="关于我"/>
                        <div style={{
                            display: 'grid',
                            gap: '32px',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            alignItems: 'center'
                        }}>
                            <div style={{display: 'grid', gap: '16px'}}>
                                <p style={{
                                    fontSize: '1.125rem',
                                    lineHeight: 1.6,
                                    color: '#374151',
                                    paddingRight: '20px'
                                }}>
                                    重庆大学计算机科学与技术（卓越）专业大三学生（GPA
                                    3.89/4.0，学院排名3/333），主攻计算机系统与数据科学方向。参与浮点时序数据无损压缩研究，实现压缩率提升22%，已申请项目专利。获全国大学生数学建模竞赛国家二等奖、计算机系统能力大赛优秀奖，擅长系统级开发（Verilog/C++），具备从算法设计到系统实践的全流程研发经验。
                                </p>
                                <ul style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gap: '8px',
                                    listStyleType: 'none',
                                    padding: 0
                                }}>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '8px',
                                        backgroundColor: '#f3f4f6',
                                        borderRadius: '8px'
                                    }}>
                    <span style={{
                        marginRight: '8px',
                        fontSize: '1.2em'
                    }}>🏅</span>
                                        学院TOP 0.09%
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '8px',
                                        backgroundColor: '#f3f4f6',
                                        borderRadius: '8px'
                                    }}>
                    <span style={{
                        marginRight: '8px',
                        fontSize: '1.2em'
                    }}>🔬</span>
                                        软件著作1项
                                    </li>
                                    <li style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        padding: '8px',
                                        backgroundColor: '#f3f4f6',
                                        borderRadius: '8px'
                                    }}>
                    <span style={{
                        marginRight: '8px',
                        fontSize: '1.2em'
                    }}>🏆</span>
                                        国家奖学金
                                    </li>
                                </ul>
                            </div>
                            <div style={{
                                position: 'relative',
                                aspectRatio: '1/1',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                                transition: 'transform 0.3s ease'
                            }}>
                                <img
                                    src="/asset/image/introduce/altar.jpg"
                                    alt="实验室"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(10%)'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '16px',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                                    color: 'white'
                                }}>
                                    <p style={{
                                        margin: 0,
                                        fontSize: '0.9em',
                                        opacity: 0.9,
                                        textAlign: 'center'
                                    }}>个人风采</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 教育背景 */}
                    <section id="education" style={{margin: '80px 0'}}>
                        <SectionTitle title="学术历程"/>
                        <Timeline items={[
                            {
                                time: "2022-2026",
                                title: "重庆大学",
                                institution: "计算机科学与技术（卓越）",
                                description: "核心课程：数据结构与算法(93)、操作系统(91)、机器学习基础(92)、大数据架构与技术(95)"
                            }
                        ]}/>
                    </section>


                    {/* 项目展示 */}
                    <section id="projects" style={{margin: '80px 0'}}>
                        <SectionTitle title="研究项目"/>
                        <div style={{
                            display: 'grid',
                            gap: '32px',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
                        }}>
                            <Card
                                title="小精灵Elf--浮点时序数据无损压缩利器 "
                                tags={["JAVA", "数据压缩", "算法优化"]}
                                description={[
                                    "● 在重庆大学时空实验室参与优化浮点数据压缩方案",
                                    "● 基于擦除策略的无损压缩算法Elf的开发，实现压缩率提升22%、解压时间缩短18%",
                                    "● 设计多格式兼容架构，支持Excel/CSV等格式的无损/有损混合压缩模式，开发交互式软件界面",
                                    "● 完成软件著作权登记（2024SR2194674），发明专利实审中"
                                ].join('\n')}
                                links={[
                                    {
                                        href: "/asset/documents/software.pdf",
                                        label: "专利详情",
                                        download: true
                                    },
                                    {
                                        href: "https://github.com/cqujk/ELF-application",
                                        label: "核心代码"
                                    },
                                    {
                                        href: "/asset/documents/elf.pdf",
                                        label: "参考论文",
                                        download: true
                                    }
                                ]}
                                style={{
                                    border: '2px solid #3b82f6',
                                    background: 'linear-gradient(to bottom right, #f8fafc, #e0f2fe)'
                                }}
                            />
                        </div>
                    </section>

                    {/* 技能矩阵 */}
                    <section id="skills" style={{margin: '80px 0'}}>
                        <SectionTitle title="技术能力"/>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                            gap: '24px',
                            padding: '0 16px'
                        }}>
                            {[
                                {
                                    icon: '🛠️',
                                    title: '工具框架',
                                    skills: ['Git', 'Docker', 'CMake', 'Hadoop'],
                                    color: '#f59e0b'
                                },
                                {
                                    icon: '💻',
                                    title: '系统开发',
                                    skills: ['C/C++/Rust', '系统编程', 'Verilog', '硬件编程'],
                                    color: '#10b981'
                                },
                                {
                                    icon: '🧠',
                                    title: '机器学习',
                                    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn'],
                                    color: '#3b82f6'
                                },
                                {
                                    icon: '🌐',
                                    title: '全栈开发',
                                    skills: ['React/Next.js', 'Java', 'Spring Boot', 'Nginx'],
                                    color: '#ef4444'
                                },
                                {
                                    icon: '📊',
                                    title: '数据分析',
                                    skills: ['Matlab', 'Python', 'Spark'],
                                    color: '#8b5cf6'
                                },

                            ].map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{delay: index * 0.1}}
                                    style={{
                                        textAlign: 'center',
                                        padding: '32px 24px',
                                        borderRadius: '16px',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease',
                                        ':hover': {
                                            transform: 'translateY(-5px)'
                                        }
                                    }}
                                >
                                    <div style={{
                                        fontSize: '2.5rem',
                                        color: skill.color,
                                        marginBottom: '20px',
                                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                                    }}>
                                        {skill.icon}
                                    </div>
                                    <h3 style={{
                                        margin: '0 0 16px',
                                        fontSize: '1.375rem',
                                        fontWeight: 600,
                                        color: '#1f2937'
                                    }}>
                                        {skill.title}
                                    </h3>
                                    <div style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '8px',
                                        justifyContent: 'center'
                                    }}>
                                        {skill.skills.map((item, i) => (
                                            <span key={i} style={{
                                                padding: '6px 12px',
                                                borderRadius: '20px',
                                                fontSize: '0.875rem',
                                                backgroundColor: `${skill.color}10`,
                                                color: skill.color,
                                                border: `1px solid ${skill.color}30`
                                            }}>
                            {item}
                        </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* 联系区块 */}
                    <section id="contact" style={{
                        textAlign: 'center',
                        padding: '80px 0',
                        background: 'linear-gradient(to right, #f8fafc, #f1f5f9)'
                    }}>
                        <SectionTitle title="期待交流"/>
                        <p style={{fontSize: '1.25rem', marginBottom: '32px'}}>
                            寻找研究合作机会，欢迎随时联系
                        </p>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '24px',
                            position: 'relative' // 为箭头定位
                        }}>
                            <select
                                style={{
                                    padding: '12px 48px 12px 24px', // 右侧留出箭头空间
                                    backgroundColor: '#4f46e5',
                                    color: 'white',
                                    borderRadius: '8px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                    fontWeight: '500',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                    transition: 'background-color 0.3s ease, transform 0.2s ease',
                                    appearance: 'none', // 移除默认的下拉箭头
                                    WebkitAppearance: 'none', // 兼容 Safari
                                    MozAppearance: 'none', // 兼容 Firefox
                                    backgroundImage: 'none', // 移除自定义箭头
                                    position: 'relative' // 为伪元素定位
                                }}
                                onChange={(e) => {
                                    window.location.href = `mailto:${e.target.value}`;
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#4338ca'; // 悬停时颜色变深
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = '#3b82f6'; // 恢复默认颜色
                                }}
                                // onMouseEnter={(e) => {
                                //     e.target.style.backgroundColor = '#1d4ed8'; // 悬停时颜色变深
                                // }}
                                // onMouseLeave={(e) => {
                                //     e.target.style.backgroundColor = '#3b82f6'; // 恢复默认颜色
                                // }}
                            >
                                <option value="" disabled selected>选择邮箱地址</option>
                                <option value="2686181617@qq.com">📧 2686181617@qq.com</option>
                                <option value="20220669@stu.cqu.edu.cn">📧 20220669@stu.cqu.edu.cn</option>
                            </select>
                            <div style={{display: 'flex', gap: '24px'}}>
                                <a href="https://github.com/cqujk" style={{
                                    padding: '8px 16px',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    color: '#1e40af'
                                }}>
                                    GitHub
                                </a>
                                <a href="/not-found" style={{
                                    padding: '8px 16px',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    color: '#1e40af'
                                }}>
                                    LinkedIn
                                </a>
                                <a href="/not-found" style={{
                                    padding: '8px 16px',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    color: '#1e40af'
                                }}>
                                    Google Scholar
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}