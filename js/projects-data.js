// Projects Data - Easy management of portfolio projects
const projectsData = {
    featured: [
        {
            title: "Filo",
            subtitle: "Forensic Intelligence & Learning Operator",
            emoji: "🔍",
            icon: "🛡️",
            description: "Battle-tested file forensics platform for security professionals. Transforms unknown binary blobs into classified, repairable, and explainable artifacts with offline ML learning capabilities.",
            stats: [
                { icon: "fas fa-code", text: "Python" },
                { icon: "fas fa-star", text: "Production" },
                { icon: "fas fa-brain", text: "ML-Powered" }
            ],
            tags: ["Digital Forensics", "ML", "File Analysis", "CTF"],
            links: [
                { icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/Filo" }
            ],
            highlights: [
                "🔍 Deep file analysis with multi-layered signature detection",
                "🎯 Smart format detection (DOCX, XLSX, ZIP, JAR, APK, EPUB)",
                "🧠 Enhanced ML learning with discriminative pattern extraction",
                "🔧 Intelligent repair with 21 automated strategies",
                "⚠️ Polyglot detection (GIFAR, PNG+ZIP, PDF+JS)",
                "🖥️ CPU architecture detection (90+ architectures)",
                "🎨 zsteg-compatible steganography analysis",
                "🌐 PCAP network capture analysis"
            ]
        },
        {
            title: "CoCo",
            subtitle: "Covert Channel Framework",
            emoji: "🌊",
            icon: "🔐",
            description: "Multi-protocol covert channel framework supporting ICMP, DNS, and HTTP with 7 evasion modes. Features ChaCha20 encryption for secure data exfiltration and communication.",
            stats: [
                { icon: "fas fa-code", text: "Python" },
                { icon: "fas fa-shield-alt", text: "Encrypted" },
                { icon: "fas fa-network-wired", text: "Multi-Protocol" }
            ],
            tags: ["Covert Channels", "Data Exfiltration", "Evasion", "Encryption"],
            links: [
                { icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/CoCo" }
            ]
        },
        {
            title: "ShellHooks",
            subtitle: "Reverse Shell Generator",
            emoji: "🐚",
            icon: "💻",
            description: "Comprehensive reverse shell generator supporting 20+ languages with 66+ variants. Available as both CLI and web interface for quick payload generation during assessments.",
            stats: [
                { icon: "fas fa-code", text: "Multi-Language" },
                { icon: "fas fa-terminal", text: "CLI + Web" },
                { icon: "fas fa-cogs", text: "66+ Variants" }
            ],
            tags: ["Reverse Shells", "Payload Generation", "Pentesting", "Web Interface"],
            links: [
                { icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/ShellHooks" }
            ]
        },
        {
            title: "GTFOBins-CLI",
            subtitle: "Privilege Escalation Reference",
            emoji: "⚡",
            icon: "🔓",
            description: "Linux privilege escalation reference tool cataloging 366 binaries with 1400+ exploitation techniques. Essential CLI utility for penetration testers and security researchers.",
            stats: [
                { icon: "fas fa-code", text: "Python" },
                { icon: "fas fa-database", text: "366 Binaries" },
                { icon: "fas fa-book", text: "1400+ Techniques" }
            ],
            tags: ["Privilege Escalation", "Linux Security", "Reference Tool"],
            links: [
                { icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/GTFOBins-CLI" }
            ]
        }
    ],
    
    tools: [
        {
            title: "Epsilon2",
            emoji: "🔬",
            icon: "🤖",
            description: "AI-powered security artifact analyzer with multi-model reasoning, MITRE ATT&CK mapping, and confidence-scored analysis. Supports 10+ tool formats (nmap, Burp, SQLMap, etc.).",
            tags: ["AI", "Security Analysis", "MITRE ATT&CK"],
            links: [{ icon: "fab fa-github", text: "Private", url: "#" }]
        },
        {
            title: "Hashmind",
            emoji: "🔐",
            icon: "🧠",
            description: "Intelligent hash & format identifier using heuristics and ML. Learns as you use it for improved accuracy over time.",
            tags: ["Hash Analysis", "ML", "CLI"],
            links: [{ icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/Hashmind" }]
        },
        {
            title: "NVDI",
            emoji: "🛡️",
            icon: "📊",
            description: "Powerful CLI for querying, tracking, and analyzing CVEs from the National Vulnerability Database.",
            tags: ["CVE", "Vulnerability Management", "CLI"],
            links: [{ icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/NVDI" }]
        },
        {
            title: "Looter",
            emoji: "🔍",
            icon: "⚠️",
            description: "Advanced Linux security audit & privilege escalation scanner with automated risk scoring. Detects privilege escalation vectors, misconfigurations & system weaknesses.",
            tags: ["Security Audit", "Privilege Escalation", "Linux"],
            links: [{ icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/Looter" }]
        }
    ],
    
    creative: [
        {
            title: "Horus",
            emoji: "⏱️",
            icon: "📱",
            description: "Minimal, free, and extensible productivity app with task management, timers, and AI-powered features.",
            tags: ["Productivity", "Mobile", "Kotlin"],
            links: [{ icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/Horus" }]
        },
        {
            title: "Kaleid",
            emoji: "🎨",
            icon: "✨",
            description: "Modern glitch animation platform - Create, customize, and export stunning visual effects with real-time preview. Privacy-first with local browser storage.",
            tags: ["Animation", "WebGL", "Next.js"],
            links: [{ icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/Kaleid" }]
        },
        {
            title: "Sorta",
            emoji: "📊",
            icon: "🔄",
            description: "Interactive sorting algorithm visualizer with 12 algorithms, real-time benchmarks, step bookmarking, and comparison mode.",
            tags: ["Educational", "Algorithms", "React"],
            links: [{ icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/Sorta" }]
        },
        {
            title: "Demess",
            emoji: "✅",
            icon: "🎯",
            description: "A disciplined, state-driven personal productivity system that enforces execution through persistent presence and structured task orchestration.",
            tags: ["Productivity", "TypeScript", "State Management"],
            links: [{ icon: "fab fa-github", text: "View Code", url: "https://github.com/supunhg/Demess" }]
        }
    ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = projectsData;
}
