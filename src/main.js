
import './style.css';

/* =========================================================
   SHELBY PREDATOR — VENOM FIELD COMMAND
   Enterprise Command Center + Software Catalogue
   + Factory Operations + VEG Production Workflow

   Frontend prototype. Data is local to this browser session.
========================================================= */

const app = document.querySelector('#app');

if (!app) {
  throw new Error('VENOM FIELD: #app element was not found in index.html');
}

/* =========================================================
   1. SOFTWARE MASTER REGISTER
========================================================= */

const softwareCatalog = [
  // ACTIVE APPLICATIONS
  ['SW-001','VENOM FIELD COMMAND','Business Operations','Prototype','Field-sales operating system for leads, territories, campaigns, customers, appointments, pipeline, contracts, hiring and analytics.','Shelby Predator Enterprise','Core'],
  ['SW-002','VENOM Code Studio','Development Platforms','Architected','Software development environment for building, editing, testing and managing VENOM applications.','VENOM Software Factory','Core'],
  ['SW-003','VENOM Semiconductor Design Studio','Engineering Software','Architected','Semiconductor architecture, design and engineering workspace.','Shelby Predator Engineering','Strategic'],
  ['SW-004','Shelby Explorer','Blockchain & Web3','Architected','Blockchain explorer with Sui connectivity, indexing, normalized data and network visibility.','Shelby Blockchain Infrastructure','Core'],

  // OPERATING SYSTEMS
  ['SW-005','COBRA OS / VENOM Code','Operating Systems','Architected','Core operating architecture and software control environment.','Shelby Predator Enterprise','Core'],
  ['SW-006','VENOM RE:CORE','Operating Systems','Architected','Core system reconstruction, reconfiguration and lifecycle architecture.','VENOM Software Factory','Core'],
  ['SW-007','VENOM Factory OS','Operating Systems','Architected','Operating layer for coordinating software factories and production workflows.','VENOM Software Factory','Core'],
  ['SW-008','VENOM Temporal OS','Operating Systems','Architected','Time-aware orchestration, event sequencing and temporal workflow architecture.','Shelby Predator Enterprise','Strategic'],
  ['SW-009','VENOM Agentic OS','Operating Systems','Architected','Agent coordination, tool execution, policy enforcement and human oversight.','Shelby Intelligence Systems','Core'],
  ['SW-010','VENOM Reconfiguration OS','Operating Systems','Architected','System adaptation and controlled reconfiguration across enterprise modules.','VENOM Software Factory','Strategic'],
  ['SW-011','COBRA OSaaS','Operating Systems','Architected','COBRA operating-system architecture delivered as a service.','Shelby Predator Enterprise','Strategic'],
  ['SW-012','AMCES','Engineering Software','Architected','Advanced Motorsports Control and Engineering System.','Shelby Predator Motorsports','Core'],
  ['SW-013','HYPERDAX','Infrastructure & Data','Architected','High-performance compute and data architecture across designated compute platforms.','Shelby Predator Infrastructure','Strategic'],
  ['SW-014','ETE Engine','Infrastructure & Data','Architected','Enterprise technology engine concept supporting the broader architecture.','Shelby Predator Enterprise','Strategic'],
  ['SW-015','DAX','Infrastructure & Data','Architected','Data and analytics architecture supporting enterprise operations.','Shelby Predator Infrastructure','Strategic'],
  ['SW-016','Temporal Index Fabric','Infrastructure & Data','Architected','Time-indexed data architecture for event history, retrieval and system coordination.','Shelby Predator Infrastructure','Strategic'],

  // INTELLIGENCE SYSTEMS
  ['SW-017','ELEANOR','AI & Intelligence','Architected','Central intelligence layer for analysis, coordination and decision support.','Shelby Intelligence Systems','Core'],
  ['SW-018','TITAN','AI & Intelligence','Architected','Vehicle and operational intelligence with post-session analysis and dialogue.','Shelby Intelligence Systems','Core'],
  ['SW-019','KRONOS','AI & Intelligence','Architected','Digital twin, simulation and Monte Carlo analysis architecture.','Shelby Intelligence Systems','Core'],
  ['SW-020','OMEGA','AI & Intelligence','Architected','Adversarial testing, red-team analysis and system resilience evaluation.','Shelby Intelligence Systems','Core'],
  ['SW-021','HELIOS','AI & Intelligence','Architected','Ingress, intake and information acquisition layer.','Shelby Intelligence Systems','Strategic'],
  ['SW-022','ZEUS','AI & Intelligence','Architected','Orchestration and coordination across intelligence and execution systems.','Shelby Intelligence Systems','Core'],
  ['SW-023','ARES','AI & Intelligence','Architected','Execution layer for approved system actions and workflows.','Shelby Intelligence Systems','Core'],
  ['SW-024','THOR','AI & Intelligence','Planned','Supporting intelligence capability within the wider AI architecture.','Shelby Intelligence Systems','Future'],
  ['SW-025','RECON','AI & Intelligence','Architected','Reconnaissance, research and structured information analysis.','Shelby Intelligence Systems','Strategic'],
  ['SW-026','APEX','AI & Intelligence','Architected','Performance analysis and optimization intelligence.','Shelby Intelligence Systems','Strategic'],

  // FACTORIES AND DEVELOPMENT
  ['SW-027','VENOM World Builder','Development Platforms','Architected','Environment and world creation platform.','VENOM Interactive Worlds Enterprise','Strategic'],
  ['SW-028','VENOM World Software Factory','Development Platforms','Architected','Factory for developing and producing interactive-world software.','VENOM Interactive Worlds Enterprise','Strategic'],
  ['SW-029','VENOM Universe Factory','Development Platforms','Architected','Universe creation and world-building production environment.','VENOM Interactive Worlds Enterprise','Strategic'],
  ['SW-030','VENOM ForgeGrid','Development Platforms','Architected','Factory coordination and production-grid architecture.','VENOM Software Factory','Strategic'],
  ['SW-031','VENOM Digital Test & Partner Factory','Development Platforms','Architected','Digital testing, partner integration and validation factory.','VENOM Software Factory','Strategic'],
  ['SW-032','427 Factory','Development Platforms','Architected','Factory concept aligned with the 427 Protocol and Cobra Way.','Shelby Predator Enterprise','Strategic'],
  ['SW-033','VENOM Genesis (VEG)','Development Platforms','Architected','Seven-stage genesis engine: Engine → Software → System → Network → RWA → Blockchain → Factory.','Shelby Predator Enterprise','Core'],
  ['SW-034','VURRA','Development Platforms','Architected','VENOM Universal Refinery-to-Reality Architecture shared across product development.','Shelby Predator Enterprise','Core'],
  ['SW-035','VEME','Manufacturing Software','Architected','VENOM manufacturing ecosystem covering architecture, manufacturing, testing, QA and certification, replication and customization.','Shelby Predator Enterprise','Core'],
  ['SW-036','VIWE','Development Platforms','Architected','VENOM Interactive Worlds Enterprise for interactive environments and game-engine ecosystems.','Shelby Predator Enterprise','Strategic'],
  ['SW-037','IRON FORGE','Development Platforms','Architected','Software and business development factory for building, training and deploying operating capabilities.','Shelby Predator Enterprise','Core'],
  ['SW-038','ECF — Enterprise Command Foundry','Business Operations','Architected','Private founder command application for enterprise oversight and operational control.','Shelby Predator Enterprise','Core'],
  ['SW-039','V-STACK','Education & Training','Architected','Training, sales enablement and operational learning platform.','Shelby Predator Enterprise','Strategic'],

  // BLOCKCHAIN AND FINANCE
  ['SW-040','Shelby Chain','Blockchain & Web3','Architected','Shelby blockchain network and ecosystem architecture.','Shelby Blockchain Infrastructure','Core'],
  ['SW-041','VENOM F1 Blockchain Network','Blockchain & Web3','Architected','Blockchain network concept for motorsports and connected racing operations.','Shelby Blockchain Infrastructure','Strategic'],
  ['SW-042','Cobra Racing Blockchain','Blockchain & Web3','Architected','Racing-focused blockchain and digital operations architecture.','Shelby Blockchain Infrastructure','Strategic'],
  ['SW-043','American Muscle Network','Blockchain & Web3','Architected','Digital network concept for American performance and automotive communities.','Shelby Blockchain Infrastructure','Strategic'],
  ['SW-044','VENOM RWA Platform','Blockchain & Web3','Architected','Real-world asset platform architecture for digital asset representation and lifecycle management.','Shelby Blockchain Infrastructure','Core'],
  ['SW-045','VENOM Modular Body RWA Platform','Blockchain & Web3','Architected','Modular asset representation and lifecycle platform concept.','Shelby Blockchain Infrastructure','Strategic'],
  ['SW-046','American Muscle Digital Wallet','Blockchain & Web3','Architected','Digital wallet concept for the American Muscle ecosystem.','Shelby Blockchain Infrastructure','Strategic'],
  ['SW-047','VENOM Fintech Financial','Finance & Treasury','Architected','Financial technology and financial operations architecture.','Shelby Financial Systems','Strategic'],
  ['SW-048','Exchange & Liquidity Protocols','Finance & Treasury','Planned','Exchange, liquidity and asset-market protocol concepts.','Shelby Financial Systems','Strategic'],
  ['SW-049','Asset Tokenization Software','Finance & Treasury','Architected','Software for representing and managing tokenized assets.','Shelby Financial Systems','Strategic'],
  ['SW-050','Smart Contracts & Settlement Rules','Finance & Treasury','Architected','Contract lifecycle, rule evaluation and settlement architecture.','Shelby Financial Systems','Core'],
  ['SW-051','VENOM IP Registry','Business Operations','Architected','Registry concept for tracking intellectual property, ownership and records.','Shelby Predator Enterprise','Core'],
  ['SW-052','VENOM IP Conveyor (VIPC)','Business Operations','Architected','Intellectual-property workflow and transfer pipeline concept.','Shelby Predator Enterprise','Strategic'],

  // INTEGRATION AND OPERATIONS
  ['SW-053','VENOM CONNECT','Integration & Security','Architected','Integration and connectivity platform linking systems, services, APIs and enterprise workspaces.','Shelby Predator Enterprise','Core'],
  ['SW-054','Shelby Bridge','Integration & Security','Architected','Integration bridge between enterprise systems and external networks.','Shelby Predator Infrastructure','Strategic'],
  ['SW-055','Shelby Bridge Matrix','Integration & Security','Architected','Matrix of adapters, routes and integration relationships.','Shelby Predator Infrastructure','Strategic'],
  ['SW-056','Shelby Deployment as a Service','Infrastructure & Data','Architected','Deployment and release-management service architecture.','Shelby Predator Infrastructure','Strategic'],
  ['SW-057','Universal Factory Adapter','Integration & Security','Architected','Adapter architecture for connecting different factory systems and tools.','VENOM Software Factory','Core'],
  ['SW-058','VENOM SectorForge Architecture as a Service','Development Platforms','Architected','Reusable sector and industry architecture delivery model.','Shelby Predator Enterprise','Strategic'],
  ['SW-059','VUOCS','Business Operations','Architected','VENOM sales and marketing operating system.','Shelby Sales & Marketing','Core'],
  ['SW-060','VDAP','Integration & Security','Architected','Two-person approval and authorization process.','Shelby Governance','Core'],
  ['SW-061','IRON DOME','Integration & Security','Architected','Security operations and defensive architecture.','Shelby Security Systems','Core'],

  // SPECIALIZED APPLICATIONS AND INTERFACES
  ['SW-062','Shelby Predator Enterprise Interface','Interfaces & Applications','Planned','Enterprise-wide command and visibility interface.','Shelby Predator Enterprise','Core'],
  ['SW-063','DeFi Operations Interface','Interfaces & Applications','Planned','Interface for decentralized finance operations and monitoring.','Shelby Financial Systems','Strategic'],
  ['SW-064','Racing Intelligence Interface','Interfaces & Applications','Planned','Motorsports intelligence and race operations interface.','Shelby Predator Motorsports','Core'],
  ['SW-065','Governance Interface','Interfaces & Applications','Planned','Governance proposals, approvals, policies and decision visibility.','Shelby Governance','Strategic'],
  ['SW-066','Security Operations Interface','Interfaces & Applications','Planned','Security monitoring, incident workflows and control visibility.','Shelby Security Systems','Core'],
  ['SW-067','Payment Applications','Finance & Treasury','Planned','Payment workflow and transaction application concepts.','Shelby Financial Systems','Strategic'],
  ['SW-068','Treasury Applications','Finance & Treasury','Planned','Treasury operations, balances and financial control applications.','Shelby Financial Systems','Strategic'],
  ['SW-069','Sponsorship Applications','Business Operations','Planned','Sponsorship management, deliverables and relationship workflows.','Shelby Predator Motorsports','Strategic'],
  ['SW-070','Supplier & Licensing Applications','Business Operations','Planned','Supplier relationships, licensing and commercial agreement workflows.','Shelby Predator Enterprise','Strategic'],
  ['SW-071','Developer API Applications','Integration & Security','Planned','Developer-facing API access, documentation and integration tools.','Shelby Predator Infrastructure','Strategic'],
  ['SW-072','Reporting & Analytics Applications','Interfaces & Applications','Planned','Reporting, analytics and enterprise performance interfaces.','Shelby Predator Enterprise','Core']
].map(([id,name,category,status,purpose,parent,priority]) => ({
  id,
  name,
  category,
  status,
  purpose,
  parent,
  priority,
  version: '0.1.0',
  owner: parent,
  dependencies: [],
  inputs: ['Approved requirements','Source data','Architecture specification'],
  outputs: ['Defined system output','Review record','Versioned deliverable'],
  approvalGate: 'Human review required before production release',
  handoff: 'Submit approved output to the next authorized stage',
  workflow: 'Scope → Design → Build → Test → Review → Release'
}));

/* =========================================================
   2. DEPENDENCY REGISTER

   These are initial architecture relationships.
   They are not live technical integrations.
========================================================= */

const dependencyMap = {
  'SW-001': ['SW-053','SW-059','SW-038'],
  'SW-002': ['SW-007','SW-030','SW-057'],
  'SW-004': ['SW-040','SW-053','SW-015'],
  'SW-006': ['SW-007','SW-010'],
  'SW-007': ['SW-030','SW-031','SW-057'],
  'SW-009': ['SW-017','SW-022','SW-023','SW-060'],
  'SW-013': ['SW-015','SW-016'],
  'SW-017': ['SW-020','SW-022','SW-025'],
  'SW-019': ['SW-017','SW-020'],
  'SW-022': ['SW-017','SW-023','SW-060'],
  'SW-033': ['SW-034','SW-007','SW-057'],
  'SW-034': ['SW-033','SW-035','SW-037'],
  'SW-035': ['SW-031','SW-057'],
  'SW-037': ['SW-002','SW-007','SW-039'],
  'SW-038': ['SW-053','SW-060','SW-072'],
  'SW-040': ['SW-053','SW-015'],
  'SW-044': ['SW-040','SW-050','SW-060'],
  'SW-050': ['SW-060','SW-061'],
  'SW-053': ['SW-054','SW-055','SW-057'],
  'SW-057': ['SW-007','SW-030','SW-031'],
  'SW-059': ['SW-001','SW-060'],
  'SW-060': ['SW-061','SW-038']
};

softwareCatalog.forEach(item => {
  item.dependencies = dependencyMap[item.id] || [];
});

/* =========================================================
   3. VEG SEVEN-STAGE PRODUCTION MODEL
========================================================= */

const vegStages = [
  {
    id: 1,
    name: 'ENGINE',
    subtitle: 'Define the originating requirement',
    purpose: 'Identify the problem, opportunity, customer need or physical/digital capability that starts the production cycle.',
    inputs: ['Problem statement','Customer requirement','Research','Opportunity thesis'],
    outputs: ['Approved concept','Requirements brief','Initial success criteria'],
    gate: 'Concept approval',
    handoff: 'Approved concept moves to Software.'
  },
  {
    id: 2,
    name: 'SOFTWARE',
    subtitle: 'Design and develop the software',
    purpose: 'Translate the approved concept into software architecture, specifications, code and testable components.',
    inputs: ['Approved concept','Software requirements','Architecture standards'],
    outputs: ['Software design','Source code','Build package','Test plan'],
    gate: 'Architecture and code review',
    handoff: 'Verified software moves to System.'
  },
  {
    id: 3,
    name: 'SYSTEM',
    subtitle: 'Integrate the components',
    purpose: 'Combine software, hardware, services, data and operating procedures into a coherent system.',
    inputs: ['Software package','Hardware requirements','Interfaces','Configuration'],
    outputs: ['Integrated system','System configuration','Integration test results'],
    gate: 'System integration approval',
    handoff: 'Validated system moves to Network.'
  },
  {
    id: 4,
    name: 'NETWORK',
    subtitle: 'Connect and coordinate',
    purpose: 'Define the communication, API, identity, routing and interoperability requirements.',
    inputs: ['Integrated system','API contracts','Identity model','Network requirements'],
    outputs: ['Network architecture','API definitions','Connectivity test results'],
    gate: 'Connectivity and security review',
    handoff: 'Approved network moves to RWA.'
  },
  {
    id: 5,
    name: 'RWA',
    subtitle: 'Represent real-world value',
    purpose: 'Where applicable, define the real-world asset, rights, ownership, evidence, valuation and lifecycle controls.',
    inputs: ['Asset definition','Ownership evidence','Rights and restrictions','Valuation methodology'],
    outputs: ['Asset record','Rights model','Lifecycle specification'],
    gate: 'Legal, compliance and asset verification',
    handoff: 'Verified asset model moves to Blockchain.'
  },
  {
    id: 6,
    name: 'BLOCKCHAIN',
    subtitle: 'Implement the authorized ledger layer',
    purpose: 'Where applicable, define smart contracts, ledger records, transaction rules and verification.',
    inputs: ['Approved asset model','Contract specification','Network requirements'],
    outputs: ['Contract package','Ledger configuration','Test results'],
    gate: 'Security, contract and release approval',
    handoff: 'Approved implementation moves to Factory.'
  },
  {
    id: 7,
    name: 'FACTORY',
    subtitle: 'Produce, deploy and maintain',
    purpose: 'Package the approved design into a repeatable production process with quality controls and lifecycle management.',
    inputs: ['Approved system package','Production specification','QA requirements'],
    outputs: ['Release package','Production record','Quality report','Maintenance plan'],
    gate: 'Final production authorization',
    handoff: 'Release enters controlled operations and feedback.'
  }
];

/* =========================================================
   4. APPLICATION STATE
========================================================= */

const state = {
  page: 'dashboard',
  catalogSearch: '',
  catalogCategory: 'All',
  catalogStatus: 'All',
  selectedSoftware: null,
  selectedStage: 1,
  approvedStages: [],
  factorySearch: '',

  leads: [
    { id: 1001, name: 'Marcus Johnson', company: 'Apex Motors', email: 'marcus@example.com', source: 'Referral', status: 'New', value: 12500 },
    { id: 1002, name: 'Sarah Williams', company: 'West Coast Solar', email: 'sarah@example.com', source: 'Website', status: 'Contacted', value: 8400 },
    { id: 1003, name: 'David Carter', company: 'Carter Industries', email: 'david@example.com', source: 'Campaign', status: 'Qualified', value: 22000 }
  ],

  contracts: [
    { id: 'CTR-001', client: 'Apex Motors', type: 'Service Agreement', value: 12500, status: 'Draft' },
    { id: 'CTR-002', client: 'West Coast Solar', type: 'Sales Agreement', value: 8400, status: 'Review' }
  ],

  candidates: [
    { id: 'CAN-001', name: 'Jordan Lee', role: 'Sales Representative', stage: 'Applied' },
    { id: 'CAN-002', name: 'Taylor Morgan', role: 'Operations Manager', stage: 'Interview' }
  ],

  activities: [
    { title: 'Software register loaded', detail: '72 software records available', time: 'Today' },
    { title: 'VEG workflow initialized', detail: 'Seven production stages defined', time: 'Today' },
    { title: 'Factory Operations workspace initialized', detail: 'Local prototype workspace', time: 'Today' }
  ]
};

const categories = ['All', ...new Set(softwareCatalog.map(item => item.category))];

const navigation = [
  {
    label: 'COMMAND',
    items: [
      { id: 'dashboard', label: 'Command Center', icon: '◈' },
      { id: 'catalog', label: 'Software Catalogue', icon: '▦' },
      { id: 'factory', label: 'Factory Operations', icon: '⚒' }
    ]
  },
  {
    label: 'SALES OPERATIONS',
    items: [
      { id: 'salesapp', label: 'Sales Application', icon: '⌁' },
      { id: 'leads', label: 'Lead Management', icon: '◎' },
      { id: 'territories', label: 'Territories', icon: '⌖' },
      { id: 'campaigns', label: 'Campaigns', icon: '✳' },
      { id: 'customers', label: 'Customers', icon: '♙' },
      { id: 'appointments', label: 'Appointments', icon: '◷' },
      { id: 'pipeline', label: 'Sales Pipeline', icon: '⇢' },
      { id: 'contracts', label: 'Contracts', icon: '▤' }
    ]
  },
  {
    label: 'PEOPLE & PERFORMANCE',
    items: [
      { id: 'hiring', label: 'Hiring', icon: '♧' },
      { id: 'analytics', label: 'Analytics', icon: '▥' },
      { id: 'ironforge', label: 'Iron Forge', icon: '⚒' }
    ]
  },
  {
    label: 'PLATFORM',
    items: [
      { id: 'connect', label: 'VENOM CONNECT', icon: '⌘' },
      { id: 'governance', label: 'Governance', icon: '⬡' }
    ]
  }
];

const pageTitles = {
  dashboard: 'Enterprise Command Center',
  catalog: 'Software Catalogue',
  factory: 'Factory Operations',
  salesapp: 'Sales Application',
  leads: 'Lead Management',
  territories: 'Territory Management',
  campaigns: 'Campaign Management',
  customers: 'Customer Management',
  appointments: 'Appointments',
  pipeline: 'Sales Pipeline',
  contracts: 'Contracts & Transactions',
  hiring: 'Hiring & Recruitment',
  analytics: 'Analytics & Performance',
  ironforge: 'IRON FORGE',
  connect: 'VENOM CONNECT',
  governance: 'Governance & Controls'
};

/* =========================================================
   5. HELPERS
========================================================= */

const money = value => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
}).format(Number(value || 0));

const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#039;'
})[char]);

const statusClass = status =>
  String(status).toLowerCase().replace(/[^a-z0-9]+/g, '-');

function addActivity(title, detail) {
  state.activities.unshift({ title, detail, time: 'Just now' });
  state.activities = state.activities.slice(0, 10);
}

function setPage(page) {
  state.page = page;
  state.selectedSoftware = null;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function softwareById(id) {
  return softwareCatalog.find(item => item.id === id);
}

function renderMetrics(items, className = '') {
  return `
    <div class="metric-grid ${className}">
      ${items.map(item => `
        <article class="metric-card">
          <span class="metric-label">${escapeHTML(item.label)}</span>
          <strong>${escapeHTML(item.value)}</strong>
          <span class="metric-foot">${escapeHTML(item.note)}</span>
        </article>
      `).join('')}
    </div>
  `;
}

/* =========================================================
   6. APPLICATION SHELL
========================================================= */

function renderSidebar() {
  return `
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-mark">V</div>
        <div class="brand-copy">
          <strong>SHELBY PREDATOR</strong>
          <span>VENOM ENTERPRISE</span>
        </div>
      </div>

      <div class="sidebar-status">
        <span class="status-dot"></span>
        ENTERPRISE SYSTEM ONLINE
      </div>

      <nav class="side-nav">
        ${navigation.map(group => `
          <div class="nav-group">
            <div class="nav-label">${group.label}</div>
            ${group.items.map(item => `
              <button class="nav-item ${state.page === item.id ? 'active' : ''}"
                data-page="${item.id}" type="button">
                <span class="nav-icon">${item.icon}</span>
                <span>${item.label}</span>
                ${item.id === 'catalog' ? `<small>${softwareCatalog.length}</small>` : ''}
              </button>
            `).join('')}
          </div>
        `).join('')}
      </nav>

      <div class="sidebar-footer">
        <div class="sidebar-footer-mark">427</div>
        <div>
          <strong>THE COBRA WAY</strong>
          <span>One enterprise. One architecture.</span>
        </div>
      </div>
    </aside>
  `;
}

function renderTopbar() {
  return `
    <header class="topbar">
      <div class="topbar-heading">
        <span class="eyebrow">SHELBY PREDATOR / COMMAND</span>
        <h2>${escapeHTML(pageTitles[state.page] || 'Enterprise Module')}</h2>
      </div>
      <div class="topbar-actions">
        <div class="global-search">
          <span>⌕</span>
          <input id="globalSearch" type="search"
            placeholder="Search software..." aria-label="Search software"/>
        </div>
        <div class="topbar-indicator">
          <span class="status-dot"></span>
          SYSTEM ACTIVE
        </div>
        <div class="user-chip">RM</div>
      </div>
    </header>
  `;
}

function renderShell(content) {
  return `
    <div class="app-shell">
      ${renderSidebar()}
      <main class="main-area">
        ${renderTopbar()}
        <section class="content-area">
          ${content}
          <footer class="app-footer">
            <span>SHELBY PREDATOR ENTERPRISE</span>
            <span>THE COBRA WAY · 427 PROTOCOL</span>
            <span>VENOM FIELD COMMAND</span>
          </footer>
        </section>
      </main>
    </div>
  `;
}

/* =========================================================
   7. COMMAND CENTER
========================================================= */

function renderDashboard() {
  const totalPipeline = state.leads.reduce((sum, lead) => sum + lead.value, 0);
  const qualified = state.leads.filter(lead => lead.status === 'Qualified').length;
  const prototypeCount = softwareCatalog.filter(x => x.status === 'Prototype').length;
  const architectedCount = softwareCatalog.filter(x => x.status === 'Architected').length;

  return `
    <section class="welcome-panel">
      <div class="welcome-copy">
        <span class="eyebrow">PREDATOR COMMAND / 427 PROTOCOL</span>
        <h1>THE COBRA WAY<span>.</span></h1>
        <p>One enterprise. Multiple factories. One integrated operating architecture.</p>
        <div class="welcome-actions">
          <button class="btn-primary" data-page="catalog">OPEN SOFTWARE CATALOGUE ↗</button>
          <button class="btn-secondary" data-page="factory">OPEN FACTORY OPERATIONS</button>
        </div>
      </div>
      <div class="welcome-graphic">
        <div class="graphic-ring ring-one"></div>
        <div class="graphic-ring ring-two"></div>
        <div class="graphic-core">427</div>
        <span class="graphic-caption">PREDATOR SYSTEMS</span>
      </div>
    </section>

    <div class="section-heading">
      <div><span class="eyebrow">LIVE OPERATING PICTURE</span><h3>Enterprise Overview</h3></div>
      <span class="live-label"><span class="status-dot"></span> LOCAL DEMO DATA</span>
    </div>

    ${renderMetrics([
      { label: 'SOFTWARE REGISTER', value: softwareCatalog.length, note: 'Catalogued systems and applications' },
      { label: 'PROTOTYPE', value: prototypeCount, note: 'Working prototype started' },
      { label: 'ARCHITECTED', value: architectedCount, note: 'Defined system concepts' },
      { label: 'PIPELINE VALUE', value: money(totalPipeline), note: 'Illustrative demo value' }
    ])}

    <div class="dashboard-grid">
      <section class="panel">
        <div class="panel-heading">
          <div><span class="eyebrow">SYSTEM DIRECTORY</span><h3>Enterprise Workspaces</h3></div>
        </div>
        <div class="quick-access-grid">
          ${[
            ['catalog','SOFTWARE CATALOGUE','72 registered entries','▦'],
            ['factory','FACTORY OPERATIONS','VEG production workflow','⚒'],
            ['salesapp','SALES COMMAND','Lead and pipeline controls','⌁'],
            ['connect','VENOM CONNECT','Integration architecture','⌘']
          ].map(([page,title,desc,icon]) => `
            <button class="quick-access-card" data-page="${page}">
              <span class="quick-icon">${icon}</span>
              <strong>${title}</strong>
              <small>${desc}</small>
            </button>
          `).join('')}
        </div>
      </section>

      <section class="panel">
        <div class="panel-heading">
          <div><span class="eyebrow">RECENT ACTIVITY</span><h3>Command Feed</h3></div>
        </div>
        ${renderActivityFeed()}
      </section>
    </div>

    <section class="panel workflow-panel">
      <div class="panel-heading">
        <div><span class="eyebrow">VENOM ENTERPRISE GENESIS</span><h3>Seven-Stage Production Architecture</h3></div>
        <button class="text-button" data-page="factory">OPEN WORKFLOW ↗</button>
      </div>
      ${renderVegStrip()}
    </section>
  `;
}

function renderActivityFeed() {
  return `
    <div class="activity-feed">
      ${state.activities.map(item => `
        <div class="activity-item">
          <span class="activity-marker"></span>
          <div>
            <strong>${escapeHTML(item.title)}</strong>
            <p>${escapeHTML(item.detail)}</p>
            <small>${escapeHTML(item.time)}</small>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderVegStrip() {
  return `
    <div class="workflow-steps">
      ${vegStages.map((stage,index) => `
        <button class="workflow-step ${state.approvedStages.includes(stage.id) ? 'stage-approved' : ''}"
          data-stage="${stage.id}" type="button">
          <span>${String(stage.id).padStart(2,'0')}</span>
          <strong>${stage.name}</strong>
        </button>
        ${index < vegStages.length - 1 ? '<div class="workflow-arrow">›</div>' : ''}
      `).join('')}
    </div>
  `;
}

/* =========================================================
   8. SOFTWARE CATALOGUE
========================================================= */

function renderCatalog() {
  const search = state.catalogSearch.toLowerCase().trim();

  const filtered = softwareCatalog.filter(item => {
    const categoryMatch = state.catalogCategory === 'All' || item.category === state.catalogCategory;
    const statusMatch = state.catalogStatus === 'All' || item.status === state.catalogStatus;
    const text = [
      item.id,item.name,item.category,item.purpose,item.parent,item.status,
      item.owner,item.version,...item.dependencies
    ].join(' ').toLowerCase();
    return categoryMatch && statusMatch && text.includes(search);
  });

  const count = status => softwareCatalog.filter(item => item.status === status).length;

  return `
    <div class="page-intro">
      <div>
        <span class="eyebrow">SHELBY PREDATOR / MASTER REGISTER</span>
        <h1>SOFTWARE <span>CATALOGUE</span></h1>
        <p>Central directory of software products, operating systems, intelligence systems, factories and platforms.</p>
      </div>
      <div class="catalog-count-block"><strong>${softwareCatalog.length}</strong><span>REGISTERED ENTRIES</span></div>
    </div>

    ${renderMetrics([
      { label:'PROTOTYPE', value:count('Prototype'), note:'Working prototype started' },
      { label:'ARCHITECTED', value:count('Architected'), note:'Defined system or product concept' },
      { label:'PLANNED', value:count('Planned'), note:'Requires further design and build' },
      { label:'CATEGORIES', value:categories.length - 1, note:'Portfolio groupings' }
    ],'catalog-metrics')}

    <section class="panel catalog-panel">
      <div class="panel-heading">
        <div><span class="eyebrow">MASTER SOFTWARE REGISTER</span><h3>Product Directory</h3></div>
        <span class="catalog-result-count">${filtered.length} / ${softwareCatalog.length} ENTRIES</span>
      </div>

      <div class="catalog-controls">
        <label class="catalog-search">
          <span>⌕</span>
          <input id="catalogSearch" type="search"
            placeholder="Search name, purpose, ID, parent or dependency..."
            value="${escapeHTML(state.catalogSearch)}"/>
        </label>
        <select id="catalogStatus" aria-label="Filter by development status">
          ${['All','Prototype','Architected','Planned'].map(status => `
            <option value="${status}" ${state.catalogStatus === status ? 'selected' : ''}>
              ${status === 'All' ? 'All statuses' : status}
            </option>
          `).join('')}
        </select>
      </div>

      <div class="catalog-category-strip">
        ${categories.map(category => `
          <button class="catalog-filter ${state.catalogCategory === category ? 'selected' : ''}"
            data-category="${escapeHTML(category)}">${escapeHTML(category)}</button>
        `).join('')}
      </div>

      <div class="catalog-table-wrap">
        <table class="catalog-table">
          <thead><tr><th>SYSTEM ID</th><th>SOFTWARE / PLATFORM</th><th>CATEGORY</th><th>STATUS</th><th>VERSION</th><th>PRIORITY</th><th></th></tr></thead>
          <tbody>
            ${filtered.length ? filtered.map(item => `
              <tr>
                <td class="catalog-id">${item.id}</td>
                <td><strong>${escapeHTML(item.name)}</strong><small class="catalog-parent">${escapeHTML(item.parent)}</small></td>
                <td>${escapeHTML(item.category)}</td>
                <td><span class="status-pill ${statusClass(item.status)}">${item.status}</span></td>
                <td>${item.version}</td>
                <td><span class="priority-label">${escapeHTML(item.priority)}</span></td>
                <td><button class="catalog-open" data-software="${item.id}" aria-label="View ${escapeHTML(item.name)}">↗</button></td>
              </tr>
            `).join('') : '<tr><td colspan="7" class="empty-state">No matching software entries.</td></tr>'}
          </tbody>
        </table>
      </div>
    </section>

    ${state.selectedSoftware ? renderSoftwareDetail(state.selectedSoftware) : ''}

    <div class="catalog-note">
      <strong>REGISTER CONTROL NOTE</strong>
      <p>Catalogue status is a development classification. Architected does not mean coded, tested, deployed or revenue-generating. Dependencies and workflow fields are initial architecture records requiring validation.</p>
    </div>
  `;
}

function renderSoftwareDetail(id) {
  const item = softwareById(id);
  if (!item) return '';

  const dependencies = item.dependencies.map(dep => softwareById(dep)).filter(Boolean);

  return `
    <section class="panel software-detail" id="softwareDetail">
      <div class="panel-heading">
        <div><span class="eyebrow">${item.id} / SYSTEM RECORD</span><h3>${escapeHTML(item.name)}</h3></div>
        <button class="text-button" data-close-detail>✕ CLOSE</button>
      </div>

      <div class="detail-grid">
        <div><span class="detail-label">PURPOSE</span><p>${escapeHTML(item.purpose)}</p></div>
        <div><span class="detail-label">PARENT DIVISION</span><p>${escapeHTML(item.parent)}</p></div>
        <div><span class="detail-label">SYSTEM OWNER</span><p>${escapeHTML(item.owner)}</p></div>
        <div><span class="detail-label">CATEGORY</span><p>${escapeHTML(item.category)}</p></div>
        <div><span class="detail-label">DEVELOPMENT STATUS</span><p><span class="status-pill ${statusClass(item.status)}">${item.status}</span></p></div>
        <div><span class="detail-label">VERSION</span><p>${item.version}</p></div>
        <div><span class="detail-label">PRIORITY</span><p>${escapeHTML(item.priority)}</p></div>
        <div><span class="detail-label">APPROVAL GATE</span><p>${escapeHTML(item.approvalGate)}</p></div>
        <div><span class="detail-label">WORKFLOW</span><p>${escapeHTML(item.workflow)}</p></div>
        <div><span class="detail-label">HANDOFF</span><p>${escapeHTML(item.handoff)}</p></div>
      </div>

      <div class="detail-grid">
        <div>
          <span class="detail-label">INPUTS</span>
          <ul>${item.inputs.map(x => `<li>${escapeHTML(x)}</li>`).join('')}</ul>
        </div>
        <div>
          <span class="detail-label">OUTPUTS</span>
          <ul>${item.outputs.map(x => `<li>${escapeHTML(x)}</li>`).join('')}</ul>
        </div>
        <div>
          <span class="detail-label">DEPENDENCIES</span>
          ${dependencies.length
            ? `<ul>${dependencies.map(dep => `<li><button class="inline-link" data-software="${dep.id}">${dep.id} · ${escapeHTML(dep.name)}</button></li>`).join('')}</ul>`
            : '<p>No dependencies registered yet.</p>'}
        </div>
      </div>
    </section>
  `;
}

/* =========================================================
   9. FACTORY OPERATIONS
========================================================= */

function renderFactoryOperations() {
  const approved = state.approvedStages.length;
  const selected = vegStages.find(stage => stage.id === state.selectedStage) || vegStages[0];
  const factoryItems = softwareCatalog.filter(item =>
    ['Development Platforms','Manufacturing Software','Operating Systems'].includes(item.category)
  );

  return `
    <div class="page-intro">
      <div>
        <span class="eyebrow">VENOM SOFTWARE FACTORY / OPERATIONS</span>
        <h1>FACTORY <span>OPERATIONS</span></h1>
        <p>Coordinate product intake, architecture, development, integration, verification, approval and production handoff.</p>
      </div>
      <div class="catalog-count-block"><strong>VEG</strong><span>GENESIS ENGINE</span></div>
    </div>

    ${renderMetrics([
      { label:'VEG STAGES', value:7, note:'End-to-end production model' },
      { label:'APPROVED STAGES', value:`${approved} / 7`, note:'Local approval simulation' },
      { label:'FACTORY SYSTEMS', value:factoryItems.length, note:'Factory and platform register' },
      { label:'SOFTWARE REGISTER', value:softwareCatalog.length, note:'Portfolio entries' }
    ])}

    <section class="panel">
      <div class="panel-heading">
        <div><span class="eyebrow">VENOM ENTERPRISE GENESIS</span><h3>Seven-Stage Production Workflow</h3></div>
        <span class="catalog-result-count">${approved} STAGES APPROVED</span>
      </div>
      <p class="panel-footnote">Select a stage to inspect its requirements, inputs, outputs, approval gate and handoff.</p>
      <div class="workflow-steps factory-workflow">
        ${vegStages.map((stage,index) => `
          <button type="button"
            class="workflow-step ${state.selectedStage === stage.id ? 'selected-stage' : ''} ${state.approvedStages.includes(stage.id) ? 'stage-approved' : ''}"
            data-stage="${stage.id}">
            <span>${String(stage.id).padStart(2,'0')}</span>
            <strong>${stage.name}</strong>
            <small>${state.approvedStages.includes(stage.id) ? 'APPROVED' : 'PENDING'}</small>
          </button>
          ${index < 6 ? '<div class="workflow-arrow">›</div>' : ''}
        `).join('')}
      </div>
    </section>

    <section class="panel stage-detail">
      <div class="panel-heading">
        <div>
          <span class="eyebrow">STAGE ${String(selected.id).padStart(2,'0')} / VEG WORKFLOW</span>
          <h3>${selected.name} — ${escapeHTML(selected.subtitle)}</h3>
        </div>
        <span class="status-pill ${state.approvedStages.includes(selected.id) ? 'approved' : 'planned'}">
          ${state.approvedStages.includes(selected.id) ? 'APPROVED' : 'AWAITING APPROVAL'}
        </span>
      </div>

      <p>${escapeHTML(selected.purpose)}</p>

      <div class="detail-grid">
        <div>
          <span class="detail-label">REQUIRED INPUTS</span>
          <ul>${selected.inputs.map(x => `<li>${escapeHTML(x)}</li>`).join('')}</ul>
        </div>
        <div>
          <span class="detail-label">EXPECTED OUTPUTS</span>
          <ul>${selected.outputs.map(x => `<li>${escapeHTML(x)}</li>`).join('')}</ul>
        </div>
        <div>
          <span class="detail-label">APPROVAL GATE</span>
          <p>${escapeHTML(selected.gate)}</p>
          <span class="detail-label">HANDOFF</span>
          <p>${escapeHTML(selected.handoff)}</p>
        </div>
      </div>

      <div class="welcome-actions">
        <button class="btn-primary" data-approve-stage="${selected.id}">
          ${state.approvedStages.includes(selected.id) ? 'REVOKE LOCAL APPROVAL' : 'RECORD HUMAN APPROVAL'}
        </button>
        ${selected.id < 7 ? `<button class="btn-secondary" data-next-stage="${selected.id}">NEXT STAGE →</button>` : ''}
      </div>
      <p class="panel-footnote">Approval is a local demonstration control. It does not authorize a real deployment, financial transaction, legal action or production release.</p>
    </section>

    <div class="dashboard-grid">
      <section class="panel">
        <div class="panel-heading">
          <div><span class="eyebrow">FACTORY DIRECTORY</span><h3>Factory Software Systems</h3></div>
          <button class="text-button" data-page="catalog">OPEN REGISTER ↗</button>
        </div>
        <div class="factory-system-list">
          ${factoryItems.map(item => `
            <button class="factory-system-row" data-software="${item.id}">
              <span class="catalog-id">${item.id}</span>
              <span><strong>${escapeHTML(item.name)}</strong><small>${escapeHTML(item.category)} · ${escapeHTML(item.parent)}</small></span>
              <span class="status-pill ${statusClass(item.status)}">${item.status}</span>
              <b>↗</b>
            </button>
          `).join('')}
        </div>
      </section>

      <section class="panel">
        <div class="panel-heading">
          <div><span class="eyebrow">PRODUCTION CONTROL</span><h3>Factory Control Gates</h3></div>
        </div>
        <div class="quick-action-list">
          ${[
            ['01','Requirements intake','Capture and validate the originating request'],
            ['02','Architecture review','Check scope, dependencies and interfaces'],
            ['03','Build and integration','Coordinate implementation and system assembly'],
            ['04','Testing and QA','Verify expected behavior and quality criteria'],
            ['05','Human authorization','Record approval before controlled release'],
            ['06','Release and feedback','Record handoff, version and lessons learned']
          ].map(([n,title,desc]) => `
            <div class="quick-action-row">
              <span>${n}</span><div><strong>${title}</strong><small>${desc}</small></div>
            </div>
          `).join('')}
        </div>
      </section>
    </div>

    <section class="panel">
      <div class="panel-heading">
        <div><span class="eyebrow">REFINERY-TO-REALITY</span><h3>VURRA Production Loop</h3></div>
      </div>
      <div class="workflow-steps">
        ${['INGEST','ANALYZE','CLASSIFY','REFINE','VALIDATE','APPROVE','RELEASE'].map((x,i) => `
          <div class="workflow-step"><span>${String(i+1).padStart(2,'0')}</span><strong>${x}</strong></div>
          ${i < 6 ? '<div class="workflow-arrow">›</div>' : ''}
        `).join('')}
      </div>
      <p class="panel-footnote">The refinery loop is an architectural workflow concept. It provides a place to define how incoming ideas, contracts, assets or software are analyzed, refined, validated and routed.</p>
    </section>

    ${state.selectedSoftware ? renderSoftwareDetail(state.selectedSoftware) : ''}
  `;
}

/* =========================================================
   10. SALES APPLICATION
========================================================= */

function renderSalesApp() {
  const total = state.leads.reduce((sum, lead) => sum + lead.value, 0);

  return `
    <div class="page-intro">
      <div><span class="eyebrow">VENOM FIELD / SALES OPERATIONS</span><h1>SALES <span>COMMAND</span></h1>
      <p>Manage field activity, customer acquisition and sales execution from one workspace.</p></div>
    </div>

    ${renderMetrics([
      {label:'TOTAL LEADS',value:state.leads.length,note:'Local demo records'},
      {label:'PIPELINE VALUE',value:money(total),note:'Illustrative value'},
      {label:'QUALIFIED',value:state.leads.filter(x=>x.status==='Qualified').length,note:'Qualified records'},
      {label:'CONTRACTS',value:state.contracts.length,note:'Local contract records'}
    ])}

    <div class="dashboard-grid">
      <section class="panel">
        <div class="panel-heading"><div><span class="eyebrow">FIELD INTAKE</span><h3>Create New Lead</h3></div></div>
        <form id="leadForm" class="data-form">
          <label>Full name<input name="name" required placeholder="Customer name"/></label>
          <label>Company<input name="company" required placeholder="Company name"/></label>
          <label>Email<input name="email" type="email" placeholder="name@example.com"/></label>
          <label>Lead source<select name="source"><option>Field</option><option>Referral</option><option>Website</option><option>Campaign</option><option>Inbound</option></select></label>
          <label>Estimated value<input name="value" type="number" min="0" value="0"/></label>
          <button class="btn-primary" type="submit">＋ CREATE LEAD</button>
        </form>
      </section>
      <section class="panel">
        <div class="panel-heading"><div><span class="eyebrow">SALES WORKFLOW</span><h3>Field Execution</h3></div></div>
        <div class="quick-action-list">
          ${[['leads','Lead Management','Review and advance lead records'],['territories','Territories','Organize field coverage'],['appointments','Appointments','Coordinate customer meetings'],['contracts','Contracts','Review agreements and status']].map(([page,title,desc])=>`
            <button data-page="${page}"><span>↗</span><div><strong>${title}</strong><small>${desc}</small></div><b>↗</b></button>
          `).join('')}
        </div>
      </section>
    </div>
    ${renderLeadTable()}
  `;
}

function renderLeadTable() {
  return `
    <section class="panel">
      <div class="panel-heading"><div><span class="eyebrow">CUSTOMER ACQUISITION</span><h3>Lead Register</h3></div><span class="catalog-result-count">${state.leads.length} RECORDS</span></div>
      <div class="catalog-table-wrap">
        <table class="catalog-table">
          <thead><tr><th>LEAD</th><th>COMPANY</th><th>SOURCE</th><th>VALUE</th><th>STATUS</th><th>ACTION</th></tr></thead>
          <tbody>
            ${state.leads.map(lead=>`
              <tr>
                <td><strong>${escapeHTML(lead.name)}</strong><small class="catalog-parent">${escapeHTML(lead.email)}</small></td>
                <td>${escapeHTML(lead.company)}</td><td>${escapeHTML(lead.source)}</td><td>${money(lead.value)}</td>
                <td><span class="status-pill ${statusClass(lead.status)}">${lead.status}</span></td>
                <td><button class="catalog-open" data-advance-lead="${lead.id}">→</button></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <p class="panel-footnote">Demo control: advance a lead through New → Contacted → Qualified → Won.</p>
    </section>
  `;
}

function renderLeads() {
  return `
    <div class="page-intro"><div><span class="eyebrow">SALES OPERATIONS</span><h1>LEAD <span>MANAGEMENT</span></h1><p>Track prospect records and move opportunities through the sales process.</p></div></div>
    ${renderLeadTable()}
  `;
}

function renderPipeline() {
  const stages = ['New','Contacted','Qualified','Won'];

  return `
    <div class="page-intro"><div><span class="eyebrow">SALES OPERATIONS</span><h1>SALES <span>PIPELINE</span></h1><p>Visual overview of the current local sales pipeline.</p></div></div>
    <div class="pipeline-grid">
      ${stages.map(stage=>{
        const leads=state.leads.filter(x=>x.status===stage);
        return `<section class="pipeline-column">
          <div class="pipeline-column-head"><strong>${stage}</strong><span>${leads.length}</span></div>
          ${leads.map(lead=>`
            <article class="pipeline-card">
              <strong>${escapeHTML(lead.name)}</strong><small>${escapeHTML(lead.company)}</small><b>${money(lead.value)}</b>
              <button class="btn-secondary" data-advance-lead="${lead.id}">ADVANCE →</button>
            </article>
          `).join('')||'<div class="pipeline-empty">No records</div>'}
        </section>`;
      }).join('')}
    </div>
  `;
}

/* =========================================================
   11. CONTRACTS
========================================================= */

function renderContracts() {
  return `
    <div class="page-intro"><div><span class="eyebrow">SALES OPERATIONS / COMMERCIAL CONTROL</span><h1>CONTRACTS <span>& TRANSACTIONS</span></h1><p>Track agreements, review stages and contract lifecycle records.</p></div></div>

    ${renderMetrics([
      {label:'CONTRACT RECORDS',value:state.contracts.length,note:'Local demo records'},
      {label:'DRAFTS',value:state.contracts.filter(x=>x.status==='Draft').length,note:'Awaiting review'},
      {label:'IN REVIEW',value:state.contracts.filter(x=>x.status==='Review').length,note:'Review stage'},
      {label:'TOTAL VALUE',value:money(state.contracts.reduce((s,x)=>s+x.value,0)),note:'Illustrative contract value'}
    ])}

    <section class="panel">
      <div class="panel-heading"><div><span class="eyebrow">CONTRACT REGISTER</span><h3>Agreement Lifecycle</h3></div></div>
      <div class="catalog-table-wrap">
        <table class="catalog-table">
          <thead><tr><th>REFERENCE</th><th>CLIENT</th><th>TYPE</th><th>VALUE</th><th>STATUS</th><th>ACTION</th></tr></thead>
          <tbody>${state.contracts.map(c=>`
            <tr><td class="catalog-id">${c.id}</td><td><strong>${escapeHTML(c.client)}</strong></td><td>${escapeHTML(c.type)}</td><td>${money(c.value)}</td>
            <td><span class="status-pill ${statusClass(c.status)}">${c.status}</span></td><td><button class="catalog-open" data-advance-contract="${c.id}">→</button></td></tr>
          `).join('')}</tbody>
        </table>
      </div>
      <p class="panel-footnote">Demo only: Draft → Review → Approved. This does not create or sign a legally binding contract.</p>
    </section>

    <section class="panel">
      <div class="panel-heading"><div><span class="eyebrow">CONTROL REQUIREMENTS</span><h3>Contract Review Gates</h3></div></div>
      <div class="workflow-steps">
        ${['INTAKE','ANALYSIS','RISK REVIEW','APPROVAL','EXECUTION'].map((x,i)=>`
          <div class="workflow-step"><span>${String(i+1).padStart(2,'0')}</span><strong>${x}</strong></div>${i<4?'<div class="workflow-arrow">›</div>':''}
        `).join('')}
      </div>
    </section>
  `;
}

/* =========================================================
   12. HIRING
========================================================= */

function renderHiring() {
  return `
    <div class="page-intro"><div><span class="eyebrow">PEOPLE & PERFORMANCE</span><h1>HIRING <span>COMMAND</span></h1><p>Candidate intake and recruitment pipeline.</p></div></div>

    <div class="dashboard-grid">
      <section class="panel">
        <div class="panel-heading"><div><span class="eyebrow">TALENT INTAKE</span><h3>Add Candidate</h3></div></div>
        <form id="candidateForm" class="data-form">
          <label>Candidate name<input name="name" required placeholder="Full name"/></label>
          <label>Role<input name="role" required placeholder="Position"/></label>
          <button class="btn-primary" type="submit">＋ ADD CANDIDATE</button>
        </form>
      </section>
      <section class="panel">
        <div class="panel-heading"><div><span class="eyebrow">RECRUITMENT OVERVIEW</span><h3>Candidate Pipeline</h3></div></div>
        <div class="metric-inline"><strong>${state.candidates.length}</strong><span>Candidate records in this prototype</span></div>
        <p class="panel-footnote">Local demo data only. No external applicant tracking system is connected.</p>
      </section>
    </div>

    <section class="panel">
      <div class="panel-heading"><div><span class="eyebrow">CANDIDATE REGISTER</span><h3>Recruitment Records</h3></div></div>
      <div class="catalog-table-wrap">
        <table class="catalog-table">
          <thead><tr><th>REFERENCE</th><th>CANDIDATE</th><th>ROLE</th><th>STAGE</th><th>ACTION</th></tr></thead>
          <tbody>${state.candidates.map(c=>`
            <tr><td class="catalog-id">${c.id}</td><td><strong>${escapeHTML(c.name)}</strong></td><td>${escapeHTML(c.role)}</td>
            <td><span class="status-pill ${statusClass(c.stage)}">${c.stage}</span></td><td><button class="catalog-open" data-advance-candidate="${c.id}">→</button></td></tr>
          `).join('')}</tbody>
        </table>
      </div>
    </section>
  `;
}

/* =========================================================
   13. ANALYTICS
========================================================= */

function renderAnalytics() {
  const statusCounts = ['New','Contacted','Qualified','Won'].map(status=>({
    status,count:state.leads.filter(x=>x.status===status).length
  }));
  const max=Math.max(1,...statusCounts.map(x=>x.count));

  return `
    <div class="page-intro"><div><span class="eyebrow">PEOPLE & PERFORMANCE</span><h1>ANALYTICS <span>& INTELLIGENCE</span></h1><p>Operational visibility across the current prototype.</p></div></div>

    ${renderMetrics([
      {label:'SOFTWARE ENTRIES',value:softwareCatalog.length,note:'Master catalogue'},
      {label:'LEADS',value:state.leads.length,note:'Sales records'},
      {label:'CANDIDATES',value:state.candidates.length,note:'Hiring records'},
      {label:'CONTRACTS',value:state.contracts.length,note:'Contract records'}
    ])}

    <section class="panel">
      <div class="panel-heading"><div><span class="eyebrow">SALES PERFORMANCE</span><h3>Lead Distribution</h3></div></div>
      <div class="analytics-bars">
        ${statusCounts.map(x=>`
          <div class="analytics-bar-row"><span>${x.status}</span>
          <div class="analytics-bar-track"><div class="analytics-bar-fill" style="width:${x.count/max*100}%"></div></div><strong>${x.count}</strong></div>
        `).join('')}
      </div>
    </section>

    <section class="panel">
      <div class="panel-heading"><div><span class="eyebrow">PORTFOLIO BREAKDOWN</span><h3>Software by Category</h3></div></div>
      <div class="analytics-bars">
        ${categories.filter(x=>x!=='All').map(category=>{
          const count=softwareCatalog.filter(x=>x.category===category).length;
          return `<div class="analytics-bar-row"><span>${escapeHTML(category)}</span>
            <div class="analytics-bar-track"><div class="analytics-bar-fill" style="width:${count/softwareCatalog.length*100}%"></div></div><strong>${count}</strong></div>`;
        }).join('')}
      </div>
    </section>
  `;
}

/* =========================================================
   14. OTHER PLATFORM MODULES
========================================================= */

function renderGeneric(page) {
  const modules = {
    territories: {
      eyebrow:'SALES OPERATIONS',title:'TERRITORY MANAGEMENT',
      description:'Organize sales coverage, regional assignments and field execution.',
      items:['Territory definitions','Regional ownership','Coverage planning','Performance review']
    },
    campaigns: {
      eyebrow:'SALES OPERATIONS',title:'CAMPAIGN MANAGEMENT',
      description:'Coordinate prospecting campaigns and track their performance.',
      items:['Campaign planning','Audience definition','Campaign assignment','Response tracking']
    },
    customers: {
      eyebrow:'SALES OPERATIONS',title:'CUSTOMER MANAGEMENT',
      description:'Centralize customer profiles and relationship history.',
      items:['Customer profiles','Account history','Relationship ownership','Customer follow-up']
    },
    appointments: {
      eyebrow:'SALES OPERATIONS',title:'APPOINTMENT MANAGEMENT',
      description:'Coordinate meetings and customer follow-up activities.',
      items:['Appointment intake','Calendar coordination','Meeting outcomes','Follow-up actions']
    },
    ironforge: {
      eyebrow:'PEOPLE & PERFORMANCE',title:'IRON FORGE',
      description:'The development and training factory for building people, processes and business capabilities.',
      items:['Training pathways','Sales enablement','Operational playbooks','Performance development']
    },
    connect: {
      eyebrow:'PLATFORM / INTEGRATION',title:'VENOM CONNECT',
      description:'The integration architecture connecting Shelby Predator systems, external providers, APIs and enterprise workspaces.',
      items:['Provider adapters','API registry','Authentication and permissions','Data routing','Integration monitoring','Human approval gates']
    },
    governance: {
      eyebrow:'PLATFORM / CONTROL',title:'GOVERNANCE & CONTROLS',
      description:'A control layer for permissions, approval gates, auditability and human oversight.',
      items:['Role-based access','Two-person approval','Audit trail design','Policy registry','Human override','Change control']
    }
  };

  const module=modules[page]||{
    eyebrow:'SHELBY PREDATOR',title:'ENTERPRISE MODULE',
    description:'Module workspace.',items:['Architecture','Workflow','Operations','Reporting']
  };

  return `
    <div class="page-intro"><div><span class="eyebrow">${module.eyebrow}</span><h1>${module.title}</h1><p>${module.description}</p></div></div>
    <section class="panel">
      <div class="panel-heading"><div><span class="eyebrow">MODULE WORKSPACE</span><h3>Operating Components</h3></div><span class="status-pill planned">DESIGN WORKSPACE</span></div>
      <div class="quick-access-grid">
        ${module.items.map((item,i)=>`
          <article class="quick-access-card"><span class="quick-icon">${String(i+1).padStart(2,'0')}</span><strong>${escapeHTML(item)}</strong><small>Module component</small></article>
        `).join('')}
      </div>
      <div class="catalog-note"><strong>MODULE STATUS</strong><p>This is a structured workspace placeholder. Its workflows, integrations and production services still require implementation and testing.</p></div>
    </section>
  `;
}

/* =========================================================
   15. PAGE ROUTER
========================================================= */

function renderPage() {
  switch(state.page) {
    case 'dashboard': return renderDashboard();
    case 'catalog': return renderCatalog();
    case 'factory': return renderFactoryOperations();
    case 'salesapp': return renderSalesApp();
    case 'leads': return renderLeads();
    case 'pipeline': return renderPipeline();
    case 'contracts': return renderContracts();
    case 'hiring': return renderHiring();
    case 'analytics': return renderAnalytics();
    default: return renderGeneric(state.page);
  }
}

function render() {
  app.innerHTML=renderShell(renderPage());
  bindEvents();
}

/* =========================================================
   16. EVENT HANDLERS
========================================================= */

function bindEvents() {
  app.querySelectorAll('[data-page]').forEach(button=>{
    button.addEventListener('click',()=>setPage(button.dataset.page));
  });

  app.querySelectorAll('[data-catalog-category]').forEach(button=>{
    button.addEventListener('click',()=>{
      state.catalogCategory=button.dataset.catalogCategory;
      state.catalogSearch='';
      state.catalogStatus='All';
      setPage('catalog');
    });
  });

  app.querySelectorAll('[data-category]').forEach(button=>{
    button.addEventListener('click',()=>{
      state.catalogCategory=button.dataset.category;
      state.selectedSoftware=null;
      render();
    });
  });

  const search=document.querySelector('#catalogSearch');
  if(search) {
    search.addEventListener('input',event=>{
      state.catalogSearch=event.target.value;
      const cursor=event.target.selectionStart;
      render();
      const next=document.querySelector('#catalogSearch');
      if(next) {
        next.focus();
        next.setSelectionRange(cursor,cursor);
      }
    });
  }

  const status=document.querySelector('#catalogStatus');
  if(status) status.addEventListener('change',event=>{
    state.catalogStatus=event.target.value;
    render();
  });

  app.querySelectorAll('[data-software]').forEach(button=>{
    button.addEventListener('click',()=>{
      state.selectedSoftware=button.dataset.software;
      render();
      document.querySelector('#softwareDetail')?.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  app.querySelector('[data-close-detail]')?.addEventListener('click',()=>{
    state.selectedSoftware=null;
    render();
  });

  app.querySelectorAll('[data-stage]').forEach(button=>{
    button.addEventListener('click',()=>{
      state.selectedStage=Number(button.dataset.stage);
      render();
    });
  });

  app.querySelectorAll('[data-next-stage]').forEach(button=>{
    button.addEventListener('click',()=>{
      state.selectedStage=Math.min(7,Number(button.dataset.nextStage)+1);
      render();
    });
  });

  app.querySelectorAll('[data-approve-stage]').forEach(button=>{
    button.addEventListener('click',()=>{
      const id=Number(button.dataset.approveStage);
      if(state.approvedStages.includes(id)) {
        state.approvedStages=state.approvedStages.filter(x=>x!==id);
        addActivity('Stage approval revoked',`VEG stage ${id}`);
      } else {
        state.approvedStages.push(id);
        addActivity('Human approval recorded',`VEG stage ${id}`);
      }
      render();
    });
  });

  app.querySelector('#leadForm')?.addEventListener('submit',event=>{
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const lead={
      id:Date.now(),
      name:String(form.get('name')).trim(),
      company:String(form.get('company')).trim(),
      email:String(form.get('email')).trim(),
      source:form.get('source'),
      status:'New',
      value:Number(form.get('value')||0)
    };
    state.leads.unshift(lead);
    addActivity('New lead created',`${lead.name} · ${lead.company}`);
    render();
  });

  app.querySelectorAll('[data-advance-lead]').forEach(button=>{
    button.addEventListener('click',()=>{
      const lead=state.leads.find(x=>x.id===Number(button.dataset.advanceLead));
      if(!lead)return;
      const stages=['New','Contacted','Qualified','Won'];
      lead.status=stages[Math.min(stages.indexOf(lead.status)+1,stages.length-1)];
      addActivity('Lead status updated',`${lead.name} · ${lead.status}`);
      render();
    });
  });

  app.querySelectorAll('[data-advance-contract]').forEach(button=>{
    button.addEventListener('click',()=>{
      const contract=state.contracts.find(x=>x.id===button.dataset.advanceContract);
      if(!contract)return;
      const stages=['Draft','Review','Approved'];
      contract.status=stages[Math.min(stages.indexOf(contract.status)+1,stages.length-1)];
      addActivity('Contract status updated',`${contract.id} · ${contract.status}`);
      render();
    });
  });

  app.querySelector('#candidateForm')?.addEventListener('submit',event=>{
    event.preventDefault();
    const form=new FormData(event.currentTarget);
    const candidate={
      id:`CAN-${String(Date.now()).slice(-5)}`,
      name:String(form.get('name')).trim(),
      role:String(form.get('role')).trim(),
      stage:'Applied'
    };
    state.candidates.unshift(candidate);
    addActivity('Candidate added',`${candidate.name} · ${candidate.role}`);
    render();
  });

  app.querySelectorAll('[data-advance-candidate]').forEach(button=>{
    button.addEventListener('click',()=>{
      const candidate=state.candidates.find(x=>x.id===button.dataset.advanceCandidate);
      if(!candidate)return;
      const stages=['Applied','Interview','Review','Offer','Hired'];
      candidate.stage=stages[Math.min(stages.indexOf(candidate.stage)+1,stages.length-1)];
      addActivity('Candidate stage updated',`${candidate.name} · ${candidate.stage}`);
      render();
    });
  });

  app.querySelector('#globalSearch')?.addEventListener('keydown',event=>{
    if(event.key==='Enter') {
      state.catalogSearch=event.target.value;
      state.catalogCategory='All';
      state.catalogStatus='All';
      setPage('catalog');
    }
  });
}

/* =========================================================
   17. START APPLICATION
========================================================= */

render();

console.info(
  `VENOM FIELD COMMAND ONLINE — ${softwareCatalog.length} software entries — VEG workflow initialized.`
);




