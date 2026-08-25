import type { Project } from './types';

export const projects: Project[] = [
    {
        id: 0,
        title: "bip39-validator",
        description: "Published npm package for validating BIP-39 mnemonic seed phrases — wordlist checking and checksum validation for wallet/crypto tooling.",
        tools: ["TypeScript", "npm", "Web3"],
        image: "snap.webp",
        code: "https://github.com/ARichie1/bip39-validator",
        demo: "https://bip39-validator-app.vercel.app/",
        viewCode: true,
        viewDemo: true,
        inDevelopement: false,
        featured: true
    },
    {
        id: 1,
        title: "bip39-validator App",
        description: "Web application built on top of the bip39-validator package, providing a usable interface for validating BIP-39 mnemonic phrases.",
        tools: ["TypeScript", "Web3"],
        image: "team.jpg",
        code: "https://github.com/ARichie1/bip39-validator-app",
        demo: "https://bip39-validator-app.vercel.app/",
        viewCode: true,
        viewDemo: true,
        inDevelopement: false,
        featured: true
    },
    {
        id: 2,
        title: "Dead Injured Alive (DIA)",
        description: "Full-stack web game with real-time-feeling logic gameplay, built end to end: React frontend, Node.js/Express backend, MongoDB for persistence, and Zod for runtime schema validation.",
        tools: ["React", "Node.js", "Express", "MongoDB", "Zod"],
        image: "phone.jpg",
        code: "https://github.com/ARichie1/dead_injured_alive_game_basics",
        demo: "",
        viewCode: true,
        viewDemo: false,
        inDevelopement: false,
        featured: true
    },
    {
        id: 3,
        title: "FolderSynka",
        description: "CLI file-synchronization and automation tool for Linux/Termux. Profile-based sync with rsync, file watching, service management, diagnostics, and a full installer/uninstaller.",
        tools: ["Bash", "Linux", "rsync", "Git"],
        image: "snap.webp",
        code: "https://github.com/ARichie1/foldersynka",
        demo: "",
        viewCode: true,
        viewDemo: false,
        inDevelopement: false,
        featured: true
    },
    {
        id: 4,
        title: "Multiplayer Game Engine",
        description: "Real-time multiplayer platform with matchmaking, queue management, and reactive state architecture spanning player, game, match, and dice stores with clear service boundaries.",
        tools: ["TypeScript", "SvelteKit", "Node.js", "Socket.io", "MongoDB"],
        image: "team.jpg",
        code: "",
        demo: "",
        viewCode: false,
        viewDemo: false,
        inDevelopement: true,
        featured: false
    },
    {
        id: 5,
        title: "Eigen Matrix — Task Management App",
        description: "Task management application built with Svelte, covering task/project organization and state management in a clean component architecture.",
        tools: ["Svelte", "SvelteKit"],
        image: "phone.jpg",
        code: "https://github.com/ARichie1/svelte-task-management-app",
        demo: "",
        viewCode: true,
        viewDemo: false,
        inDevelopement: false,
        featured: false
    },
    {
        id: 6,
        title: "Game Web Application",
        description: "Real-time multiplayer game platform for an NDA client — rebuilt from an existing buggy codebase as part of a distributed 5-person team. Restructured the frontend architecture and implemented authentication, leaderboard, payments, and coin-store flows.",
        tools: ["SvelteKit", "TypeScript", "Git/GitHub"],
        image: "team.jpg",
        code: "",
        demo: "",
        viewCode: false,
        viewDemo: false,
        inDevelopement: false,
        featured: false
    }
]
