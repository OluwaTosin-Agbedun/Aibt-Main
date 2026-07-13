export type ProgrammeTrack =
  | "certificate"
  | "mita"
  | "executive"
  | "corporate"
  | "emerging";

export type DeliveryMode = "Online" | "Physical" | "Blended";

export interface Programme {
  slug: string;
  track: ProgrammeTrack;
  title: string;
  filterTags: string[];
  duration: string;
  mode: DeliveryMode;
  audience: string;
  fee: string;
  overview: string;
  outcomes: string[];
  modules: string[];
  certificateAwarded: string;
  startDate: string;
  applicationDeadline: string;
  featured?: boolean;
}

const FEE_ON_REQUEST = "Fee available on request";
const ROLLING_START = "Rolling cohorts — next intake to be confirmed";
const ROLLING_DEADLINE = "Applications open — deadline announced per cohort";

export const certificateCourses: Programme[] = [
  {
    slug: "policy-analysis-and-memo-writing",
    track: "certificate",
    title: "Certificate in Policy Analysis and Memo Writing",
    filterTags: ["Public Sector", "Governance"],
    duration: "4 weeks",
    mode: "Blended",
    audience:
      "Policy analysts, civil servants, researchers and graduates working on or studying public policy.",
    fee: FEE_ON_REQUEST,
    overview:
      "This course builds practical skills in analysing policy problems, structuring evidence, and writing memos that influence decision-makers. Participants work through real policy scenarios drawn from Nigerian and African public institutions.",
    outcomes: [
      "Structure a policy problem and identify the decision it requires",
      "Write a clear, decision-ready policy memo",
      "Use evidence and data responsibly in policy argument",
      "Present policy recommendations to non-specialist audiences",
    ],
    modules: [
      "Foundations of policy analysis",
      "Framing problems and options",
      "Evidence, data and sourcing",
      "Memo writing and structure",
      "Briefing decision-makers",
    ],
    certificateAwarded: "AIBT Professional Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
    featured: true,
  },
  {
    slug: "public-administration-and-service-delivery",
    track: "certificate",
    title: "Certificate in Public Administration and Service Delivery",
    filterTags: ["Public Sector", "Governance"],
    duration: "4 weeks",
    mode: "Blended",
    audience:
      "Public servants, MDA staff and professionals working on service delivery and administration.",
    fee: FEE_ON_REQUEST,
    overview:
      "A practical course on how public administration functions in Nigeria and Africa, covering service delivery models, coordination across MDAs, and performance improvement in government institutions.",
    outcomes: [
      "Explain how administrative structures shape service delivery",
      "Identify common bottlenecks in public service processes",
      "Apply basic performance-improvement tools in a government setting",
      "Coordinate effectively across departments and agencies",
    ],
    modules: [
      "Structure of public administration",
      "Service delivery models",
      "Inter-agency coordination",
      "Performance management basics",
      "Citizen-facing service improvement",
    ],
    certificateAwarded: "AIBT Professional Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "procurement-and-contract-management",
    track: "certificate",
    title: "Certificate in Procurement and Contract Management",
    filterTags: ["Public Sector", "Business", "Governance"],
    duration: "5 weeks",
    mode: "Blended",
    audience:
      "Procurement officers, contract administrators and finance staff in public and private institutions.",
    fee: FEE_ON_REQUEST,
    overview:
      "Covers the procurement cycle, contract administration, due diligence and compliance, with reference to Nigerian public procurement law and standard institutional practice.",
    outcomes: [
      "Apply the stages of the procurement cycle correctly",
      "Draft and manage contracts with clear obligations",
      "Identify compliance and due-diligence requirements",
      "Manage vendor performance and disputes",
    ],
    modules: [
      "Procurement cycle and planning",
      "Bidding and evaluation",
      "Contract drafting and administration",
      "Compliance and due diligence",
      "Vendor and dispute management",
    ],
    certificateAwarded: "AIBT Professional Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
    featured: true,
  },
  {
    slug: "public-finance-accounting-and-audit",
    track: "certificate",
    title: "Certificate in Public Finance, Accounting and Audit",
    filterTags: ["Public Sector", "Business", "Governance"],
    duration: "5 weeks",
    mode: "Blended",
    audience:
      "Accountants, audit officers and finance staff in government and public institutions.",
    fee: FEE_ON_REQUEST,
    overview:
      "Practical grounding in public finance management, budgeting, accounting standards and audit practice for government and public-sector institutions.",
    outcomes: [
      "Apply core public finance and budgeting principles",
      "Prepare and interpret public-sector financial statements",
      "Understand internal and external audit processes",
      "Identify common financial control weaknesses",
    ],
    modules: [
      "Public finance management fundamentals",
      "Budgeting and expenditure control",
      "Public-sector accounting standards",
      "Internal controls",
      "Audit practice and reporting",
    ],
    certificateAwarded: "AIBT Professional Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "data-governance-for-public-institutions",
    track: "certificate",
    title: "Certificate in Data Governance for Public Institutions",
    filterTags: ["Public Sector", "Technology", "Data and AI"],
    duration: "4 weeks",
    mode: "Blended",
    audience:
      "Records officers, IT staff and administrators responsible for institutional data.",
    fee: FEE_ON_REQUEST,
    overview:
      "Introduces data governance frameworks, records management and data protection practice for public institutions managing sensitive citizen and administrative data.",
    outcomes: [
      "Establish basic data governance policy for an institution",
      "Apply data protection principles to public records",
      "Design a records classification and retention approach",
      "Identify data risks in digital government systems",
    ],
    modules: [
      "Principles of data governance",
      "Records management",
      "Data protection and privacy basics",
      "Digital records systems",
      "Risk and compliance",
    ],
    certificateAwarded: "AIBT Professional Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "digital-skills-and-ai-productivity",
    track: "certificate",
    title: "Certificate in Digital Skills and AI Productivity",
    filterTags: ["Technology", "Data and AI"],
    duration: "3 weeks",
    mode: "Online",
    audience: "Professionals and graduates looking to build practical digital and AI-assisted work skills.",
    fee: FEE_ON_REQUEST,
    overview:
      "A hands-on course on digital productivity tools and responsible use of AI assistants for research, writing, analysis and workplace tasks.",
    outcomes: [
      "Use common digital productivity tools confidently",
      "Apply AI tools responsibly to research and writing tasks",
      "Organise digital workflows for a professional office",
      "Evaluate AI output critically before use",
    ],
    modules: [
      "Digital workplace tools",
      "Introduction to AI assistants",
      "AI for research and writing",
      "Data handling basics",
      "Responsible and ethical use of AI",
    ],
    certificateAwarded: "AIBT Professional Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
    featured: true,
  },
  {
    slug: "leadership-and-corporate-governance",
    track: "certificate",
    title: "Certificate in Leadership and Corporate Governance",
    filterTags: ["Leadership", "Business", "Governance"],
    duration: "5 weeks",
    mode: "Blended",
    audience: "Mid-level managers and professionals moving into leadership roles.",
    fee: FEE_ON_REQUEST,
    overview:
      "Builds foundational leadership and governance capability, covering decision-making, team leadership and governance principles for organisations of any size.",
    outcomes: [
      "Apply core leadership and decision-making frameworks",
      "Understand board and governance fundamentals",
      "Lead teams through change and performance challenges",
      "Communicate effectively as an emerging leader",
    ],
    modules: [
      "Foundations of leadership",
      "Governance fundamentals",
      "Decision-making under uncertainty",
      "Leading teams and change",
      "Leadership communication",
    ],
    certificateAwarded: "AIBT Professional Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "project-management-for-public-programmes",
    track: "certificate",
    title: "Certificate in Project Management for Public Programmes",
    filterTags: ["Public Sector", "Leadership", "Governance"],
    duration: "5 weeks",
    mode: "Blended",
    audience:
      "Programme officers and managers responsible for delivering public or donor-funded projects.",
    fee: FEE_ON_REQUEST,
    overview:
      "Applies core project management methods to the realities of public-sector and donor-funded programme delivery, including monitoring, reporting and stakeholder management.",
    outcomes: [
      "Plan and scope a public-sector project",
      "Apply monitoring and evaluation basics",
      "Manage stakeholders across government and partners",
      "Report programme progress clearly to oversight bodies",
    ],
    modules: [
      "Project planning and scoping",
      "Budgeting and resourcing",
      "Monitoring and evaluation",
      "Stakeholder management",
      "Reporting and closeout",
    ],
    certificateAwarded: "AIBT Professional Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "public-policy-regulation-and-government-engagement",
    track: "certificate",
    title:
      "Executive Certificate in Public Policy, Regulation and Government Engagement",
    filterTags: ["Public Sector", "Leadership", "Governance"],
    duration: "6 weeks",
    mode: "Blended",
    audience:
      "Senior professionals and executives who engage regularly with regulators and government.",
    fee: FEE_ON_REQUEST,
    overview:
      "Prepares senior professionals to engage effectively with regulators and government institutions, covering policy processes, regulatory strategy and stakeholder engagement.",
    outcomes: [
      "Map how policy and regulatory decisions are made",
      "Build a government engagement strategy",
      "Anticipate regulatory risk to an organisation",
      "Represent an organisation credibly before public institutions",
    ],
    modules: [
      "How policy and regulation are made",
      "Regulatory risk and strategy",
      "Stakeholder and government engagement",
      "Case studies in public-private engagement",
    ],
    certificateAwarded: "AIBT Executive Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
];

export const mitaAcademyCourses: Programme[] = [
  {
    slug: "school-leadership-certificate",
    track: "mita",
    title: "School Leadership Certificate",
    filterTags: ["Public Sector", "Leadership", "Governance"],
    duration: "6 weeks",
    mode: "Blended",
    audience: "Head teachers, principals and school administrators (state basic and secondary education).",
    fee: FEE_ON_REQUEST,
    overview:
      "A structured, career-linked certificate for school leaders covering instructional leadership, school administration and performance management, delivered through MITA Academy's cadre-based training ladder.",
    outcomes: [
      "Apply instructional leadership practices in a school setting",
      "Manage staff, resources and school administration effectively",
      "Use basic performance data to improve school outcomes",
      "Engage parents, communities and education authorities professionally",
    ],
    modules: [
      "Instructional leadership",
      "School administration and compliance",
      "Staff management and supervision",
      "Performance data for school leaders",
      "Community and stakeholder engagement",
    ],
    certificateAwarded: "MITA Academy Certificate — QR-verifiable",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
    featured: true,
  },
  {
    slug: "schedule-officer-certificate",
    track: "mita",
    title: "Schedule Officer Certificate",
    filterTags: ["Public Sector", "Governance"],
    duration: "4 weeks",
    mode: "Blended",
    audience: "Schedule officers and junior-to-mid cadre civil servants (typically Level 8–12).",
    fee: FEE_ON_REQUEST,
    overview:
      "Builds the core administrative, correspondence and file-management competencies expected of schedule officers, with practical assessment tied to real civil-service workflows.",
    outcomes: [
      "Manage files and correspondence to civil-service standards",
      "Draft memos, minutes and routine reports correctly",
      "Apply basic public administration procedure",
      "Support supervisors with accurate scheduling and tracking",
    ],
    modules: [
      "Civil service procedure and structure",
      "File and records management",
      "Memo and minute writing",
      "Basic office administration",
    ],
    certificateAwarded: "MITA Academy Certificate — QR-verifiable",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "middle-management-certificate",
    track: "mita",
    title: "Middle Management Certificate",
    filterTags: ["Public Sector", "Leadership", "Governance"],
    duration: "5 weeks",
    mode: "Blended",
    audience: "Mid-level civil servants moving into supervisory roles (typically Level 12–14).",
    fee: FEE_ON_REQUEST,
    overview:
      "Prepares mid-cadre officers for supervisory responsibility, covering team management, delegation and coordination within a government structure.",
    outcomes: [
      "Supervise and delegate to junior officers effectively",
      "Coordinate work across units and departments",
      "Apply basic performance management to a team",
      "Escalate issues appropriately within the civil-service hierarchy",
    ],
    modules: [
      "Supervisory responsibility",
      "Delegation and coordination",
      "Team performance basics",
      "Communication for middle managers",
    ],
    certificateAwarded: "MITA Academy Certificate — QR-verifiable",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "directorate-leadership-certificate",
    track: "mita",
    title: "Directorate Leadership Certificate",
    filterTags: ["Public Sector", "Leadership", "Governance"],
    duration: "6 weeks",
    mode: "Blended",
    audience: "Directors and senior civil servants (typically Level 15–17).",
    fee: FEE_ON_REQUEST,
    overview:
      "A senior-cadre certificate for directorate leadership, covering strategic direction-setting, cross-agency coordination and accountability at the top of the civil-service structure.",
    outcomes: [
      "Set direction for a directorate in line with institutional strategy",
      "Coordinate across agencies and with political leadership",
      "Apply accountability and reporting standards expected of senior officers",
      "Manage risk and institutional reputation",
    ],
    modules: [
      "Strategic leadership at directorate level",
      "Cross-agency and political coordination",
      "Accountability and reporting",
      "Risk and institutional reputation",
    ],
    certificateAwarded: "MITA Academy Certificate — QR-verifiable",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "procurement-contract-management-certificate-mita",
    track: "mita",
    title: "Procurement and Contract Management Certificate",
    filterTags: ["Public Sector", "Governance"],
    duration: "5 weeks",
    mode: "Blended",
    audience: "Procurement cadre officers in ministries, departments and agencies.",
    fee: FEE_ON_REQUEST,
    overview:
      "A cadre-specific certificate for procurement officers, aligned to public procurement law and standard MDA procurement practice.",
    outcomes: [
      "Run a compliant procurement process from planning to award",
      "Administer contracts and manage vendor performance",
      "Apply due-diligence and anti-fraud checks",
      "Prepare procurement documentation to audit standard",
    ],
    modules: [
      "Public procurement law and process",
      "Bid evaluation and award",
      "Contract administration",
      "Due diligence and audit readiness",
    ],
    certificateAwarded: "MITA Academy Certificate — QR-verifiable",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "accounting-and-audit-certificate-mita",
    track: "mita",
    title: "Public Finance, Accounting and Audit Certificate",
    filterTags: ["Public Sector", "Governance"],
    duration: "5 weeks",
    mode: "Blended",
    audience: "Accounting, treasury and audit cadre officers in government institutions.",
    fee: FEE_ON_REQUEST,
    overview:
      "A cadre-specific certificate covering public finance, accounting and audit practice for finance and audit officers in government institutions.",
    outcomes: [
      "Apply public-sector accounting standards to daily work",
      "Prepare basic financial reports to government standard",
      "Support internal and external audit processes",
      "Identify and escalate control weaknesses",
    ],
    modules: [
      "Public finance fundamentals",
      "Government accounting standards",
      "Internal control and audit support",
      "Financial reporting",
    ],
    certificateAwarded: "MITA Academy Certificate — QR-verifiable",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "public-service-communication-and-memo-writing",
    track: "mita",
    title: "Public Service Communication and Memo Writing Certificate",
    filterTags: ["Public Sector", "Governance"],
    duration: "3 weeks",
    mode: "Online",
    audience: "Civil servants across cadres who produce official correspondence and reports.",
    fee: FEE_ON_REQUEST,
    overview:
      "Focused, practical training in the written communication standards expected across the Nigerian civil service — memos, briefs, minutes and official letters.",
    outcomes: [
      "Write memos and briefs in correct civil-service format",
      "Communicate clearly to superiors, peers and the public",
      "Avoid common errors in official correspondence",
      "Adapt tone and structure to different official audiences",
    ],
    modules: [
      "Civil-service writing standards",
      "Memos and briefs",
      "Minutes and official letters",
      "Editing for clarity and tone",
    ],
    certificateAwarded: "MITA Academy Certificate — QR-verifiable",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "digital-records-and-data-governance",
    track: "mita",
    title: "Digital Records and Data Governance Certificate",
    filterTags: ["Public Sector", "Technology", "Data and AI", "Governance"],
    duration: "4 weeks",
    mode: "Blended",
    audience: "Records, IT and administrative officers managing institutional and citizen data.",
    fee: FEE_ON_REQUEST,
    overview:
      "Prepares public-sector staff to manage the shift from paper to digital records, with attention to data governance, protection and integrity in government systems.",
    outcomes: [
      "Manage the transition from paper to digital records",
      "Apply data governance and protection principles",
      "Maintain data integrity in shared government systems",
      "Identify and report digital records risks",
    ],
    modules: [
      "Digital records management",
      "Data governance for government",
      "Data protection basics",
      "Systems and data integrity",
    ],
    certificateAwarded: "MITA Academy Certificate — QR-verifiable",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
];

export const executiveEducationCourses: Programme[] = [
  {
    slug: "strategic-leadership-and-corporate-governance",
    track: "executive",
    title: "Executive Certificate in Strategic Leadership and Corporate Governance",
    filterTags: ["Leadership", "Governance", "Business"],
    duration: "6 weeks",
    mode: "Blended",
    audience:
      "Commissioners, permanent secretaries, board members and senior corporate leaders.",
    fee: FEE_ON_REQUEST,
    overview:
      "A senior-level programme on strategic leadership and governance, built for commissioners, permanent secretaries and senior corporate executives making institution-level decisions.",
    outcomes: [
      "Apply strategic leadership frameworks at institutional level",
      "Strengthen governance and board-level oversight",
      "Lead institutional change with accountability",
      "Manage risk and reputation at the executive level",
    ],
    modules: [
      "Strategic leadership at the top of an institution",
      "Corporate and public governance",
      "Institutional change management",
      "Executive risk and reputation management",
    ],
    certificateAwarded: "AIBT Executive Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
    featured: true,
  },
  {
    slug: "digital-transformation-for-leaders",
    track: "executive",
    title: "Executive Certificate in Digital Transformation for Leaders",
    filterTags: ["Leadership", "Technology", "Data and AI"],
    duration: "5 weeks",
    mode: "Blended",
    audience: "Commissioners, permanent secretaries and senior corporate leaders overseeing digital transformation.",
    fee: FEE_ON_REQUEST,
    overview:
      "Equips senior leaders to direct digital transformation in their institutions without needing to become technical specialists themselves.",
    outcomes: [
      "Set a digital transformation agenda at institutional level",
      "Evaluate technology investment and risk as a non-specialist",
      "Lead organisational change through digital adoption",
      "Govern data and AI use responsibly at the top level",
    ],
    modules: [
      "Digital transformation strategy",
      "Technology investment and risk for executives",
      "Leading change through digital adoption",
      "Governing data and AI responsibly",
    ],
    certificateAwarded: "AIBT Executive Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "governance-risk-and-compliance",
    track: "executive",
    title: "Executive Certificate in Governance, Risk and Compliance",
    filterTags: ["Governance", "Business", "Leadership"],
    duration: "5 weeks",
    mode: "Blended",
    audience: "Commissioners, permanent secretaries and senior corporate leaders responsible for institutional risk.",
    fee: FEE_ON_REQUEST,
    overview:
      "Builds executive-level capability in governance, risk management and regulatory compliance across public and corporate institutions.",
    outcomes: [
      "Design institutional governance and risk frameworks",
      "Oversee compliance with regulatory requirements",
      "Anticipate and manage institutional risk",
      "Report on governance and risk to boards or oversight bodies",
    ],
    modules: [
      "Governance frameworks for institutions",
      "Risk management at executive level",
      "Regulatory compliance",
      "Reporting to boards and oversight bodies",
    ],
    certificateAwarded: "AIBT Executive Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "public-policy-and-executive-decision-making",
    track: "executive",
    title: "Executive Certificate in Public Policy and Executive Decision-Making",
    filterTags: ["Public Sector", "Governance", "Leadership"],
    duration: "6 weeks",
    mode: "Blended",
    audience: "Commissioners, permanent secretaries and senior public officials.",
    fee: FEE_ON_REQUEST,
    overview:
      "Sharpens the policy analysis and decision-making capability of senior public officials operating at cabinet and permanent-secretary level.",
    outcomes: [
      "Analyse complex policy problems under political and time pressure",
      "Structure executive decisions with clear trade-offs",
      "Engage cabinet-level and legislative processes effectively",
      "Communicate policy decisions to the public and press",
    ],
    modules: [
      "Policy analysis at the executive level",
      "Executive decision-making under pressure",
      "Engaging cabinet and legislative processes",
      "Public communication of policy decisions",
    ],
    certificateAwarded: "AIBT Executive Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "political-economy-and-public-leadership",
    track: "executive",
    title: "Executive Certificate in Political Economy and Public Leadership",
    filterTags: ["Public Sector", "Governance", "Leadership"],
    duration: "6 weeks",
    mode: "Blended",
    audience: "Commissioners, permanent secretaries and senior public leaders.",
    fee: FEE_ON_REQUEST,
    overview:
      "Examines the political and economic forces that shape public leadership decisions in Nigeria and Africa, and builds the judgement required to lead through them.",
    outcomes: [
      "Analyse political economy factors shaping institutional decisions",
      "Balance political, economic and administrative pressures",
      "Lead public institutions through contested environments",
      "Build durable coalitions for institutional reform",
    ],
    modules: [
      "Political economy fundamentals for leaders",
      "Balancing political and administrative pressure",
      "Leading through contested environments",
      "Building coalitions for reform",
    ],
    certificateAwarded: "AIBT Executive Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "leadership-for-state-and-local-government",
    track: "executive",
    title: "Executive Certificate in Leadership for State and Local Government",
    filterTags: ["Public Sector", "Governance", "Leadership"],
    duration: "6 weeks",
    mode: "Blended",
    audience: "Commissioners, permanent secretaries and senior state and local government officials.",
    fee: FEE_ON_REQUEST,
    overview:
      "A programme built specifically for state and local government leadership, addressing the distinct governance, fiscal and political realities at the sub-national level.",
    outcomes: [
      "Apply governance frameworks suited to state and local structures",
      "Manage sub-national fiscal and administrative constraints",
      "Lead public service delivery at state and local level",
      "Engage federal, state and community stakeholders effectively",
    ],
    modules: [
      "Governance at state and local level",
      "Sub-national fiscal management",
      "Service delivery leadership",
      "Multi-level stakeholder engagement",
    ],
    certificateAwarded: "AIBT Executive Certificate",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
];

export const corporateGovernmentProgrammes: Programme[] = [
  {
    slug: "custom-public-sector-training-programmes",
    track: "corporate",
    title: "Custom Public Sector Training Programmes",
    filterTags: ["Public Sector", "Governance"],
    duration: "Custom",
    mode: "Blended",
    audience: "Ministries, departments and agencies.",
    fee: "Request Quote",
    overview:
      "Tailored training designed around a specific MDA's capacity gaps, delivered as a closed cohort with assessment and certification.",
    outcomes: [
      "Address a defined institutional capacity gap",
      "Assess and certify participants against agreed standards",
      "Deliver a post-training performance report to the commissioning institution",
    ],
    modules: [
      "Needs assessment",
      "Custom curriculum design",
      "Cohort delivery",
      "Assessment and certification",
      "Post-training report",
    ],
    certificateAwarded: "AIBT / MITA Certificate (as applicable)",
    startDate: "Scheduled per engagement",
    applicationDeadline: "By request",
  },
  {
    slug: "state-government-cohort-programmes",
    track: "corporate",
    title: "State Government Cohort Programmes",
    filterTags: ["Public Sector", "Governance"],
    duration: "Custom",
    mode: "Blended",
    audience: "State governments and civil service commissions.",
    fee: "Request Quote",
    overview:
      "State-wide cohort training built on MITA Academy's cadre-based ladder, structured for delivery to civil servants across a state's ministries and agencies.",
    outcomes: [
      "Train civil servants at scale across a defined cadre",
      "Apply a consistent, verifiable certification standard state-wide",
      "Provide the state with a post-training capacity report",
    ],
    modules: [
      "State-wide needs assessment",
      "Cadre-based curriculum alignment",
      "Cohort delivery across locations",
      "Computer-based assessment",
      "State capacity report",
    ],
    certificateAwarded: "MITA Academy Certificate — QR-verifiable",
    startDate: "Scheduled per engagement",
    applicationDeadline: "By request",
  },
  {
    slug: "mda-capacity-building-programmes",
    track: "corporate",
    title: "MDA Capacity-Building Programmes",
    filterTags: ["Public Sector", "Governance"],
    duration: "Custom",
    mode: "Blended",
    audience: "Ministries, departments and agencies.",
    fee: "Request Quote",
    overview:
      "Focused capacity-building for a single MDA or a small group of related agencies, scoped to a specific operational or governance gap.",
    outcomes: [
      "Close a defined operational or governance capacity gap",
      "Build internal capability to sustain improvements",
      "Certify participating staff",
    ],
    modules: [
      "Needs assessment",
      "Targeted curriculum design",
      "Delivery and coaching",
      "Assessment and certification",
    ],
    certificateAwarded: "AIBT / MITA Certificate (as applicable)",
    startDate: "Scheduled per engagement",
    applicationDeadline: "By request",
  },
  {
    slug: "corporate-governance-and-regulatory-engagement-training",
    track: "corporate",
    title: "Corporate Governance and Regulatory Engagement Training",
    filterTags: ["Business", "Governance"],
    duration: "Custom",
    mode: "Blended",
    audience: "Corporate organisations and regulated companies.",
    fee: "Request Quote",
    overview:
      "Applied training for corporate teams on governance standards and effective engagement with regulators and government institutions.",
    outcomes: [
      "Strengthen internal governance practice",
      "Build a structured approach to regulatory engagement",
      "Reduce regulatory and reputational risk",
    ],
    modules: [
      "Corporate governance standards",
      "Regulatory landscape and risk",
      "Engaging regulators and government",
    ],
    certificateAwarded: "AIBT Certificate of Completion",
    startDate: "Scheduled per engagement",
    applicationDeadline: "By request",
  },
  {
    slug: "leadership-retreats-and-management-workshops",
    track: "corporate",
    title: "Leadership Retreats and Management Workshops",
    filterTags: ["Leadership", "Business"],
    duration: "1–3 days",
    mode: "Physical",
    audience: "Corporate leadership teams and management groups.",
    fee: "Request Quote",
    overview:
      "Short, high-intensity leadership and management workshops designed for offsite retreats and management team development.",
    outcomes: [
      "Align a leadership team around shared priorities",
      "Build practical management and communication skills",
      "Leave with an agreed action plan",
    ],
    modules: [
      "Facilitated leadership sessions",
      "Applied management exercises",
      "Team alignment and action planning",
    ],
    certificateAwarded: "AIBT Certificate of Participation",
    startDate: "Scheduled per engagement",
    applicationDeadline: "By request",
  },
  {
    slug: "bespoke-institutional-training-programmes",
    track: "corporate",
    title: "Bespoke Institutional Training Programmes",
    filterTags: ["Business", "Governance", "Public Sector"],
    duration: "Custom",
    mode: "Blended",
    audience: "Companies and development partners.",
    fee: "Request Quote",
    overview:
      "Fully bespoke training designed from the ground up for an organisation's specific goals, audience and delivery constraints.",
    outcomes: [
      "Address goals unique to the commissioning organisation",
      "Deliver in the mode and location the organisation requires",
      "Provide certification and reporting to the organisation's standard",
    ],
    modules: [
      "Discovery and needs assessment",
      "Bespoke curriculum design",
      "Delivery",
      "Assessment, certification and reporting",
    ],
    certificateAwarded: "AIBT Certificate (as scoped)",
    startDate: "Scheduled per engagement",
    applicationDeadline: "By request",
  },
];

export const emergingProfessionalsCourses: Programme[] = [
  {
    slug: "career-launchpad-certificate",
    track: "emerging",
    title: "Career Launchpad Certificate",
    filterTags: ["Young Professionals", "Leadership"],
    duration: "4 weeks",
    mode: "Online",
    audience: "Recent graduates and early-career professionals preparing to enter the workforce.",
    fee: FEE_ON_REQUEST,
    overview:
      "A practical foundation course for graduates and early-career professionals, covering workplace readiness, communication and professional habits.",
    outcomes: [
      "Present and communicate professionally in the workplace",
      "Apply basic workplace productivity habits",
      "Approach job applications and interviews with confidence",
      "Understand workplace expectations and professional conduct",
    ],
    modules: [
      "Workplace readiness",
      "Professional communication",
      "Productivity habits",
      "Job search and interview skills",
    ],
    certificateAwarded: "AIBT Certificate of Completion",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
    featured: true,
  },
  {
    slug: "digital-skills-and-workplace-productivity-certificate",
    track: "emerging",
    title: "Digital Skills and Workplace Productivity Certificate",
    filterTags: ["Young Professionals", "Technology"],
    duration: "3 weeks",
    mode: "Online",
    audience: "Young professionals building foundational digital and productivity skills.",
    fee: FEE_ON_REQUEST,
    overview:
      "Covers core digital tools and productivity practices needed in most entry-level professional roles today.",
    outcomes: [
      "Use common office and collaboration tools confidently",
      "Organise digital work and communication effectively",
      "Apply basic data handling and presentation skills",
    ],
    modules: [
      "Digital workplace tools",
      "Communication and collaboration platforms",
      "Basic data handling and presentation",
    ],
    certificateAwarded: "AIBT Certificate of Completion",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "business-communication-and-professional-writing-certificate",
    track: "emerging",
    title: "Business Communication and Professional Writing Certificate",
    filterTags: ["Young Professionals", "Business"],
    duration: "3 weeks",
    mode: "Online",
    audience: "Young professionals looking to strengthen written and verbal communication.",
    fee: FEE_ON_REQUEST,
    overview:
      "Builds practical business writing and communication skills for everyday professional tasks — emails, reports, presentations and meetings.",
    outcomes: [
      "Write clear, professional business emails and reports",
      "Structure and deliver a short business presentation",
      "Communicate effectively in meetings",
    ],
    modules: [
      "Business writing fundamentals",
      "Reports and presentations",
      "Meeting and verbal communication",
    ],
    certificateAwarded: "AIBT Certificate of Completion",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "introduction-to-public-policy-and-governance-certificate",
    track: "emerging",
    title: "Introduction to Public Policy and Governance Certificate",
    filterTags: ["Young Professionals", "Public Sector", "Governance"],
    duration: "3 weeks",
    mode: "Online",
    audience: "Graduates and young professionals interested in public policy or public-sector careers.",
    fee: FEE_ON_REQUEST,
    overview:
      "An accessible introduction to how public policy and governance work in Nigeria, designed for graduates considering public-sector or policy careers.",
    outcomes: [
      "Explain how policy is made and implemented",
      "Understand the basic structure of government institutions",
      "Identify entry points for a public-sector or policy career",
    ],
    modules: [
      "How government and policy work",
      "Institutions and governance structures",
      "Career pathways in public policy",
    ],
    certificateAwarded: "AIBT Certificate of Completion",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
  {
    slug: "graduate-employability-and-leadership-certificate",
    track: "emerging",
    title: "Graduate Employability and Leadership Certificate",
    filterTags: ["Young Professionals", "Leadership"],
    duration: "4 weeks",
    mode: "Online",
    audience: "Final-year students and recent graduates.",
    fee: FEE_ON_REQUEST,
    overview:
      "Combines employability skills with early leadership development, helping graduates stand out in competitive job markets and take on responsibility early in their careers.",
    outcomes: [
      "Build a strong CV and application strategy",
      "Demonstrate early leadership and initiative at work",
      "Set and track personal professional development goals",
    ],
    modules: [
      "Employability and application strategy",
      "Early-career leadership",
      "Professional goal-setting",
    ],
    certificateAwarded: "AIBT Certificate of Completion",
    startDate: ROLLING_START,
    applicationDeadline: ROLLING_DEADLINE,
  },
];

export const allProgrammes: Programme[] = [
  ...certificateCourses,
  ...mitaAcademyCourses,
  ...executiveEducationCourses,
  ...corporateGovernmentProgrammes,
  ...emergingProfessionalsCourses,
];

export function getProgrammeBySlug(slug: string): Programme | undefined {
  return allProgrammes.find((p) => p.slug === slug);
}

export function getFeaturedProgrammes(): Programme[] {
  return allProgrammes.filter((p) => p.featured);
}

export const filterTagOptions = [
  "Public Sector",
  "Leadership",
  "Business",
  "Technology",
  "Data and AI",
  "Governance",
  "Young Professionals",
];
