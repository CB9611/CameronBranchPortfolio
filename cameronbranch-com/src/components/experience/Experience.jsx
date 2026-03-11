import React from 'react';
import './Experience.css';

// import company logos
import sparkhoundLogo from '../../assets/work-images/sparkhound.jpg'
import youtubeLogo from '../../assets/work-images/youtube.jpg'
import walmartLogo from '../../assets/work-images/walmart.jpg'

const Education = () => {
    const experienceData = [
        {
            company: "Sparkhound LLC",
            website: "https://www.sparkhound.com/",
            logo: sparkhoundLogo,
            title: "Tier 1 Service Desk Technician",
            location: "Baton Rouge, LA, USA (Remote)",
            years: "February 2021 - Present",
            status: "Current",
            description1: "Enterprise Infrastructure Support: Deliver Tier 1 technical support within a high-volume Managed Services Provider (MSP) environment, resolving complex OS, application, and connectivity issues for diverse enterprise clients.",
            description2: "Identity & Access Management (IAM): Administer user accounts, group memberships, and security permissions through Active Directory, ensuring secure and timely access to critical business resources.",
            description3: "Virtualization & Remote Access: Troubleshoot and manage virtualized desktop environments using VMware and Citrix, maintaining high availability for remote and hybrid workforces.",
            description4: "Incident Lifecycle Management: Manage the end-to-end lifecycle of technical incidents via ServiceNow and Fresh Service, maintaining strict adherence to SLA (Service Level Agreement) targets.",
            description5: "Root Cause Analysis (RCA): Conduct deep-dive diagnostics using ConnectWise and remote monitoring tools to identify systemic issues, transitioning from surface-level fixes to permanent infrastructure resolutions.",
            description6: "Cross-Functional Collaboration: Partner with Tier 2 and Tier 3 engineering teams to facilitate complex escalations, providing detailed technical documentation and pre-flight diagnostics to expedite resolution.",
        },
        {
            company: "YouTube",
            website: "https://youtube.com/",
            logo: youtubeLogo,
            title: "Content Creator",
            location: "Remote",
            years: "July 2014 - Present",
            status: "Independent",
            description1: "Platform Growth & Engagement: Grew a digital community to 39,000+ subscribers with over 500 videos, achieving a peak reach of 3.5 million views on a single production.",
            description2: "Data-Driven Content Strategy: Utilized YouTube Analytics to monitor viewer retention, click-through rates (CTR), and demographic data to pivot content strategies across major titles like Fallout 4 and Destiny.",
            description3: "Multimedia Production: Managed the end-to-end creative lifecycle, including technical scripting, high-fidelity video editing, and SEO optimization to maintain search visibility.",
            description4: "Community Leadership: Cultivated a loyal audience through active community management, moderating discussions, and maintaining a consistent brand voice across social platforms.",
        },
        {
            company: "Walmart",
            website: "https://walmart.com/",
            logo: walmartLogo,
            title: "Electronics Sales Associate",
            location: "Denham Springs, LA, USA",
            years: "November 2016 - January 2020",
            status: "Past",
            description1: "Technical Troubleshooting: Served as the primary point of contact for customer technical inquiries, providing real-time troubleshooting for a wide range of hardware, including PCs, laptops, mobile devices, and home networking equipment.",
            description2: "Product Subject Matter Expert: Translated complex technical specifications into actionable advice for customers, assisting in product selection and ensuring device compatibility for end-users.",
            description3: "Operational Efficiency: Managed high-volume transactions and inventory systems with 100% accuracy, while maintaining a 95%+ customer satisfaction rating in a fast-paced, high-pressure retail environment.",
            description4: "System Maintenance: Assisted in the setup and maintenance of department display units and internal point-of-sale (POS) systems to ensure 24/7 operational uptime for the department.",
        }
    ];

    return (
        <section className="experience-section">
            <h2 className="section-header">Experience</h2>
            <div className="experience-container">
                {experienceData.map((exp, index) => (
                    <a href={exp.website} target="_blank" rel="noopener noreferrer" className="experience-card" key={index}>
                        <div className="exp-header">
                            <span className="exp-years">{exp.years}</span>
                            <span className="exp-status">{exp.status}</span>
                        </div>
                        <div className="company-info-wrapper">
                            <div className="logo-container">
                                <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
                            </div>
                            <h1 className="exp-company">{exp.company}</h1>
                        </div>
                        <h3 className="exp-title">{exp.title}</h3>
                        <ul className="exp-description-list">
                            {Object.keys(exp)
                                .filter((key) => key.startsWith("description"))
                                .map((key, idx) => {
                                    return (
                                        <li key={idx} className="exp-description-item">
                                            {exp[key]}
                                        </li>
                                    );
                                })}
                        </ul>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Education;