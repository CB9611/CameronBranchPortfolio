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
            description1: "Delivered Tier 1 technical support within a high-volume Managed Services Provider (MSP) environment, resolving complex OS, application, and connectivity issues for diverse enterprise clients.",
            description2: "Administered user accounts, group memberships, and security permissions through Active Directory, gaining hands-on familiarity with identity and access management concepts foundational to modern application security.",
            description3: "Troubleshot and managed virtualized desktop environments using VMware and Citrix, developing strong intuition for how large enterprise systems interact and fail.",
            description4: "Managed the end-to-end lifecycle of technical incidents via ServiceNow, FreshService, and ConnectWise, maintaining strict adherence to SLA targets and reinforcing habits around structured documentation and technical communication.",
            description5: "Conducted deep-dive diagnostics using remote monitoring tools to identify systemic issues, developing systematic debugging habits directly transferable to development and QA workflows.",
        },
        {
            company: "YouTube",
            website: "https://youtube.com/",
            logo: youtubeLogo,
            title: "Content Creator",
            location: "Remote",
            years: "July 2014 - Present",
            status: "Independent",
            description1: "Grew a YouTube channel to 39,000+ subscribers with over 500 videos published, achieving a peak of 3.5 million views on a single video.",
            description2: "Analyzed YouTube Analytics data including viewer retention, click-through rates, and demographic insights to identify trending topics and adjust content strategy accordingly.",
            description3: "Managed video production including editing and thumbnail design using Adobe Photoshop, maintaining consistent output across long-running gaming series.",
            description4: "Optimized video metadata, titles, and tags for search visibility, growing organic reach across popular titles including Fallout 4 and Destiny.",
        },
        {
            company: "Walmart",
            website: "https://walmart.com/",
            logo: walmartLogo,
            title: "Electronics Sales Associate",
            location: "Denham Springs, LA, USA",
            years: "November 2016 - January 2020",
            status: "Past",
            description1: "Served as the primary point of contact for customer technical inquiries in the Electronics department, providing real-time troubleshooting and product recommendations for PCs, laptops, and mobile devices.",
            description2: "Conducted daily cell phone inventory audits, maintaining accurate accountability for approximately $50,000 worth of in-store mobile inventory.",
            description3: "Assisted in the setup and maintenance of department display units and point-of-sale systems.",
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