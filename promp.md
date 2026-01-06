You are a senior frontend engineer and technical portfolio architect.

Your task is to generate a professional personal website for a Network & Telecommunications Engineer,
designed for technical recruiters and long-term personal branding.

This website MUST be implemented as a SINGLE PAGE (Home only),
with all content rendered in clearly defined sections.
This is NOT a marketing landing page.

==================================================
SOURCE OF TRUTH — PROFESSIONAL PROFILE (REAL DATA)
==================================================

Name: Carlos Alberto Plata Monroy
Title: Network & Telecommunications Engineer
Location: Querétaro, Mexico
Primary contact email (ONLY): info@carlosplata.dev
LinkedIn: https://linkedin.com/in/carlohpl/

Languages:
- Spanish (native)
- English (B1 – professional technical communication)

--------------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------------
Network and Telecommunications Engineer with hands-on experience in ISP environments,
network monitoring, incident management, and infrastructure troubleshooting.
Focused on reliability, observability, and real-world production networks.

--------------------------------------------------
WORK EXPERIENCE
--------------------------------------------------

1) Network Support Engineer – Level 1 (ISP)
Company: Quattrocom
Period: November 2024 – Present

Scope and responsibilities:
- Monitoring and diagnostics of IP networks, analyzing latency, packet loss,
  and route optimization using traceroute, ping, and MTR.
- Supporting stability in BGP, OSPF, and MPLS environments.
- Configuration and troubleshooting of telecommunications infrastructure:
  ONTs (Nokia, Huawei), MikroTik and Cisco routers, managed switches.
- Application of networking standards: VLANs, QoS, STP.
- Optimization and escalation of critical incidents.
- VPN configuration and diagnostics (IPsec, OpenVPN).
- Throughput and speed testing using iPerf and Speedtest CLI.
- Traffic analysis using Wireshark and SNMP.

This role MUST be positioned as real ISP / production network experience.

2) OTR Associate
Company: Amazon Logistics
Period: April 2024 – August 2024

Responsibilities:
- Process automation using Excel, reducing administrative time by up to 80%.
- Operation in large-scale logistics environments using internal enterprise tools.
- Incident resolution with a strong customer service and time-critical focus.

--------------------------------------------------
EDUCATION
--------------------------------------------------
Bachelor’s Degree:
Engineering in Networks and Telecommunications
Institution: Universidad Politécnica de Querétaro
Period: September 2023 – Present

--------------------------------------------------
CERTIFICATIONS
--------------------------------------------------
- Aruba Data Center Essentials
- Aruba Networking Mobility
- Aruba Networking Wi-Fi 7 Essentials

--------------------------------------------------
VOLUNTEERING
--------------------------------------------------
Role: Collaborator
Organization: Robofest LATAM
Period: March 2018 – Present

Description:
- Long-term participation in science and technology initiatives.
- Support for robotics and educational technology events.
- Highlight continuity, technical community involvement,
  and commitment over multiple years.

==================================================
TECHNICAL REQUIREMENTS
==================================================

Stack:
- Next.js (App Router preferred)
- TypeScript
- Semantic HTML5
- Modern CSS (Tailwind or clean CSS modules)
- Accessible, responsive design
- Component-based architecture
- Data-driven content (NO hardcoded text inside components)

--------------------------------------------------
INTERNATIONALIZATION (MANDATORY)
--------------------------------------------------
- The website MUST support English and Spanish.
- Language selection MUST be automatic based on browser cookies.
- Implement clean i18n architecture (middleware + dictionaries).
- English and Spanish content must be professionally written,
  not literal translations.
- No language switch gimmicks required (auto-detect only).

==================================================
SINGLE PAGE STRUCTURE (MANDATORY)
==================================================

The entire site must be implemented as ONE PAGE (/).

Sections rendered in this exact order:

1) Hero
   - Name
   - Title
   - Short positioning statement focused on:
     network infrastructure, ISP operations, monitoring, reliability
   - No buzzwords, no motivational phrases

2) Professional Summary
   - Engineering-focused overview
   - No personal biography tone

3) Core Skills & Focus Areas
   - Networking protocols and fundamentals
   - Monitoring & diagnostics
   - ISP infrastructure and tooling

4) Experience
   - ISP role first (Quattrocom)
   - Amazon role second
   - Action-oriented descriptions only

5) Projects
   - Structured technical case studies
   - Emphasis on networking, monitoring, or systems work
   - Scalable structure (even if few projects initially)

6) Certifications
   - Aruba certifications clearly listed

7) Volunteering
   - Robofest LATAM as long-term technical involvement
   - Positioned as community contribution, not a hobby

8) Writing / Knowledge Sharing
   - Blog-style scaffold
   - Intended for technical articles:
     troubleshooting, monitoring, networking concepts

9) Contact
   - Email: info@carlosplata.dev (ONLY)
   - LinkedIn link
   - Location: Mexico
   - No forms, no phone numbers

--------------------------------------------------
NAVIGATION
--------------------------------------------------
- Anchor-based navigation only (e.g. #experience, #projects)
- Fixed or static top navigation
- Clean labels:
  About | Experience | Projects | Certifications | Volunteering | Contact

--------------------------------------------------
DESIGN SYSTEM
--------------------------------------------------
- Minimalist, professional, engineering-oriented
- Neutral color palette
- Sans-serif typography (Inter or similar)
- Flat design only
- No gradients
- No distracting animations
- Clear section separation
- Optimized for fast scanning by recruiters

--------------------------------------------------
ARCHITECTURE CONSTRAINT
--------------------------------------------------
Although implemented as a single page,
the internal architecture must allow easy future separation
into multiple routes without refactoring content logic.

Components and data models must be reusable.

--------------------------------------------------
NON-NEGOTIABLE RULES
--------------------------------------------------
- No buzzwords
- No exaggerated claims
- No “passionate”, “motivated”, or generic soft phrasing
- No marketing language
- This must read like a serious network engineer profile

--------------------------------------------------
OUTPUT EXPECTATIONS
--------------------------------------------------
- Project folder structure
- Home layout and section components
- Centralized data models for content
- i18n setup with EN / ES dictionaries
- Clean, production-ready code
- Clear comments explaining architectural decisions

Build this as if it were the personal website of a network engineer
working in real ISP environments.
