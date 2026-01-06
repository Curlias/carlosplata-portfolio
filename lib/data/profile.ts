import type {
  Profile,
  Skill,
  Experience,
  Project,
  Certification,
  Volunteering,
  Education,
  Article,
} from './types';

// Professional profile data
export const profile: Profile = {
  name: 'Carlos Alberto Plata Monroy',
  title: {
    en: 'Network & Telecommunications Engineer',
    es: 'Ingeniero en Redes y Telecomunicaciones',
  },
  location: 'Querétaro, Mexico',
  email: 'info@carlosplata.dev',
  linkedin: 'https://linkedin.com/in/carlohpl/',
  languages: [
    {
      name: { en: 'Spanish', es: 'Español' },
      level: { en: 'Native', es: 'Nativo' },
    },
    {
      name: { en: 'English', es: 'Inglés' },
      level: { en: 'B1 – Professional technical communication', es: 'B1 – Comunicación técnica profesional' },
    },
  ],
};

// Core skills organized by category
export const skills: Skill[] = [
  {
    category: {
      en: 'Networking Protocols & Fundamentals',
      es: 'Protocolos de Red y Fundamentos',
    },
    items: {
      en: [
        'BGP, OSPF, MPLS routing protocols',
        'VLANs, QoS, STP configuration',
        'IPv4/IPv6 addressing and subnetting',
        'VPN technologies (IPsec, OpenVPN)',
      ],
      es: [
        'Protocolos de enrutamiento BGP, OSPF, MPLS',
        'Configuración de VLANs, QoS, STP',
        'Direccionamiento y subnetting IPv4/IPv6',
        'Tecnologías VPN (IPsec, OpenVPN)',
      ],
    },
  },
  {
    category: {
      en: 'Monitoring & Diagnostics',
      es: 'Monitoreo y Diagnóstico',
    },
    items: {
      en: [
        'Network analysis: traceroute, ping, MTR',
        'Traffic analysis with Wireshark',
        'SNMP monitoring and alerting',
        'Performance testing: iPerf, Speedtest CLI',
      ],
      es: [
        'Análisis de red: traceroute, ping, MTR',
        'Análisis de tráfico con Wireshark',
        'Monitoreo y alertas SNMP',
        'Pruebas de rendimiento: iPerf, Speedtest CLI',
      ],
    },
  },
  {
    category: {
      en: 'ISP Infrastructure & Tooling',
      es: 'Infraestructura ISP y Herramientas',
    },
    items: {
      en: [
        'ONT configuration (Nokia, Huawei)',
        'MikroTik and Cisco router management',
        'Managed switches administration',
        'Incident escalation and resolution',
      ],
      es: [
        'Configuración de ONT (Nokia, Huawei)',
        'Gestión de routers MikroTik y Cisco',
        'Administración de switches gestionados',
        'Escalamiento y resolución de incidentes',
      ],
    },
  },
];

// Work experience
export const experiences: Experience[] = [
  {
    id: 'quattrocom',
    role: {
      en: 'Network Support Engineer – Level 1 (ISP)',
      es: 'Ingeniero de Soporte de Redes – Nivel 1 (ISP)',
    },
    company: 'Quattrocom',
    period: {
      start: '2024-11',
      end: null,
    },
    isISP: true,
    responsibilities: {
      en: [
        'Monitoring and diagnostics of IP networks, analyzing latency, packet loss, and route optimization using traceroute, ping, and MTR',
        'Supporting stability in BGP, OSPF, and MPLS environments',
        'Configuration and troubleshooting of telecommunications infrastructure: ONTs (Nokia, Huawei), MikroTik and Cisco routers, managed switches',
        'Application of networking standards: VLANs, QoS, STP',
        'Optimization and escalation of critical incidents',
        'VPN configuration and diagnostics (IPsec, OpenVPN)',
        'Throughput and speed testing using iPerf and Speedtest CLI',
        'Traffic analysis using Wireshark and SNMP',
      ],
      es: [
        'Monitoreo y diagnóstico de redes IP, analizando latencia, pérdida de paquetes y optimización de rutas usando traceroute, ping y MTR',
        'Soporte de estabilidad en entornos BGP, OSPF y MPLS',
        'Configuración y resolución de problemas de infraestructura de telecomunicaciones: ONTs (Nokia, Huawei), routers MikroTik y Cisco, switches gestionados',
        'Aplicación de estándares de redes: VLANs, QoS, STP',
        'Optimización y escalamiento de incidentes críticos',
        'Configuración y diagnóstico de VPN (IPsec, OpenVPN)',
        'Pruebas de rendimiento y velocidad usando iPerf y Speedtest CLI',
        'Análisis de tráfico usando Wireshark y SNMP',
      ],
    },
  },
  {
    id: 'amazon',
    role: {
      en: 'OTR Associate',
      es: 'Asociado OTR',
    },
    company: 'Amazon Logistics',
    period: {
      start: '2024-04',
      end: '2024-08',
    },
    responsibilities: {
      en: [
        'Process automation using Excel, reducing administrative time by up to 80%',
        'Operation in large-scale logistics environments using internal enterprise tools',
        'Incident resolution with a strong customer service and time-critical focus',
      ],
      es: [
        'Automatización de procesos usando Excel, reduciendo el tiempo administrativo hasta en un 80%',
        'Operación en entornos logísticos a gran escala usando herramientas empresariales internas',
        'Resolución de incidentes con un fuerte enfoque en servicio al cliente y tiempo crítico',
      ],
    },
  },
];

// Projects - structured for technical case studies
export const projects: Project[] = [
  // Placeholder structure - ready for real projects
  // {
  //   id: 'network-monitoring',
  //   title: {
  //     en: 'Network Monitoring Dashboard',
  //     es: 'Dashboard de Monitoreo de Red',
  //   },
  //   description: {
  //     en: 'Custom monitoring solution for ISP network metrics',
  //     es: 'Solución de monitoreo personalizada para métricas de red ISP',
  //   },
  //   technologies: ['Python', 'SNMP', 'Grafana'],
  //   github: 'https://github.com/...',
  // },
];

// Certifications
export const certifications: Certification[] = [
  {
    id: 'aruba-dc',
    name: 'Aruba Data Center Essentials',
    issuer: 'Aruba Networks',
  },
  {
    id: 'aruba-mobility',
    name: 'Aruba Networking Mobility',
    issuer: 'Aruba Networks',
  },
  {
    id: 'aruba-wifi7',
    name: 'Aruba Networking Wi-Fi 7 Essentials',
    issuer: 'Aruba Networks',
  },
];

// Volunteering
export const volunteering: Volunteering[] = [
  {
    id: 'robofest',
    role: {
      en: 'Collaborator',
      es: 'Colaborador',
    },
    organization: 'Robofest LATAM',
    period: {
      start: '2018-03',
      end: null,
    },
    description: {
      en: 'Long-term participation in science and technology initiatives. Support for robotics and educational technology events. Highlight continuity, technical community involvement, and commitment over multiple years.',
      es: 'Participación a largo plazo en iniciativas de ciencia y tecnología. Apoyo para eventos de robótica y tecnología educativa. Destaca continuidad, participación en la comunidad técnica y compromiso durante múltiples años.',
    },
  },
];

// Education
export const education: Education = {
  degree: {
    en: 'Bachelor\'s Degree in Networks and Telecommunications Engineering',
    es: 'Ingeniería en Redes y Telecomunicaciones',
  },
  institution: 'Universidad Politécnica de Querétaro',
  period: {
    start: '2023-09',
    end: null,
  },
};

// Articles - structured for future blog posts
export const articles: Article[] = [
  // Placeholder structure - ready for technical articles
  // {
  //   id: 'bgp-troubleshooting',
  //   title: {
  //     en: 'BGP Troubleshooting in ISP Networks',
  //     es: 'Resolución de Problemas BGP en Redes ISP',
  //   },
  //   excerpt: {
  //     en: 'A practical guide to diagnosing and fixing BGP issues in production',
  //     es: 'Una guía práctica para diagnosticar y resolver problemas BGP en producción',
  //   },
  //   date: '2024-01-15',
  //   slug: 'bgp-troubleshooting-isp-networks',
  // },
];
