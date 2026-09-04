export const firstName = "Richard"
export const lastName = "Akinmade"
export const fullName = firstName + " " +lastName

export const aboutMini = {
    intro: `I'm ${fullName}, a Full-Stack Developer who ships real product work for clients, from restructuring an existing codebase's architecture to implementing the pages that run on top of it. Recent work spans a real-time multiplayer web app rebuilt for an NDA client, and technical architecture for a counterfeit-verification platform.`,
    beyond: "Outside client work, I build and maintain my own tools, including a CLI file-sync utility for Linux/Termux and a real-time multiplayer game engine, because I like owning a problem end to end, not just the parts that are visible.",
    end: "With a background in Mathematical Sciences, I bring analytical thinking to system design, and a hands-on, get-it-working discipline from earlier years in technical field support and fabrication."
}

export const aboutFull = {
    intro: `I'm ${fullName}, a Full-Stack Developer with experience building and restructuring production web applications for clients, alongside independent architecture and technical-documentation work. I'm comfortable owning a codebase end to end, from system design through implementation.`,
    software: "My most recent client work includes rebuilding a real-time multiplayer game web app as part of a distributed team of five, reviewing and restructuring an existing, buggy frontend architecture, then implementing the redesigned authentication, leaderboard, payments, and coin-store flows. Before that, I led the technical architecture for a counterfeit-verification platform, authoring the full technical specification: database schema, 30+ API endpoints, a security model, and smart-contract design, built on TypeScript, Node.js, Svelte/SvelteKit, React, and PostgreSQL.",
    web3: "That counterfeit-verification work also gave me hands-on experience with Web3 fundamentals, smart-contract architecture, Solidity, and decentralized verification design, which I continue to build on.",
    hardware: "Before moving fully into software, I worked in technical field support and led a team in arc welding and fabrication. That background shaped a practical, disciplined approach to problem-solving that still shows up in how I debug and ship today.",
    mindset: "I hold a Bachelor's degree in Mathematical Sciences and bring an analytical mindset to system design and architecture decisions. I'm currently focused on deepening my backend and real-time systems work through independent projects like FolderSynka and a multiplayer game engine."
}

export const experience = [
  {
    title: "Independent Software Consultant",
    org: "Multiple Engagements",
    dates: "2024 – 2026",
    points: [
      "Provided paid technical consultation on architecture, product direction, and development approach across confidential client engagements."
    ]
  },
  {
    title: "Freelance Frontend Developer — Game Web Application",
    org: "NDA Client Engagement",
    dates: "Nov 2025 – Jan 2026",
    points: [
      "Joined a distributed team of five (product manager, team lead, two developers) to rebuild a buggy production web app.",
      "Reviewed and restructured the existing frontend architecture, then implemented redesigned pages across authentication, leaderboard, payments, and coin-store flows.",
      "Contributed to product/UI flow design for the application prototype, working from an existing Git/GitHub repository under delivery constraints."
    ]
  },
  {
    title: "Technical Architecture Consultant",
    org: "Product Counterfeit-Verification Platform",
    dates: "Jul – Sep 2025",
    points: [
      "Defined the technical architecture for a Svelte/SvelteKit/Node.js platform with Supabase, PostgreSQL, and smart-contract components.",
      "Authored full technical documentation: database schema (7 tables with RLS policies), 30+ API endpoints, smart-contract functions, and a security model.",
      "Produced investor-facing product and roadmap documentation alongside the technical specification."
    ]
  },
  {
    title: "Web Development & IT Support Intern",
    org: "ECKIG Global Services Limited",
    dates: "May 2022 – Nov 2022",
    points: [
      "Formal experience combining web-development and IT-support responsibilities."
    ]
  },
  {
    title: "Technical / Web Development",
    org: "Pharmaceutical Consulting Company",
    dates: "Mar 2020 – Mar 2021",
    points: [
        "Produced project flow-chart diagrams and translated project requirements into technical implementation flows.",
        "Worked with PHP, WordPress CMS, JavaScript, and Google SEO."
    ]
  },
  {
    title: "Student-Trainee Network Technician",
    org: "Teltwine Networks Solutions",
    dates: "Aug 2019 – Jan 2020",
    points: [
      "Technical support, troubleshooting, hardware/software assistance, and field/office operations"
    ]
  },
  {
    title: "Team Lead, Arc Welding & Fabrication",
    org: "AB Building and Metal Construction Company",
    dates: "Sep 2016 – Jan 2019",
    points: [
      "Technical leadership, welding and fabrication, coordination, and practical problem solving."
    ]
  }
]
