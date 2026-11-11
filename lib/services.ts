export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  whatItInvolves: string[];
  whoItIsFor: string[];
  whyItMatters: string;
  iconName: string;
  keyHighlights: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "accounts",
    number: "01",
    title: "Accounts",
    slug: "accounts",
    category: "Accounting & Bookkeeping",
    shortDescription:
      "Professional accounting support to help maintain accurate and organized financial records.",
    fullDescription:
      "We provide systematic bookkeeping and accounting support for traders, firms, and small businesses in Payangadi. Services include transaction recording, ledger balancing, bank reconciliation, and final financial statements.",
    whatItInvolves: [
      "Recording of sales, purchases, and receipts",
      "Bank statement reconciliation",
      "Profit & loss statements and balance sheet preparation",
      "Periodic ledger reviews",
    ],
    whoItIsFor: [
      "Retailers and traders",
      "Small & medium enterprises",
      "Contractors & service providers",
    ],
    whyItMatters:
      "Accurate records prevent tax discrepancies and ensure clean financial statements for bank loans.",
    iconName: "BookOpen",
    keyHighlights: ["Ledger maintenance", "Reconciliation", "Financial statements"],
  },
  {
    id: "gst-registration",
    number: "02",
    title: "GST Registration & Returns",
    slug: "gst-registration",
    category: "Indirect Taxation",
    shortDescription:
      "Assistance with GST registration, regular monthly/quarterly return filings, and compliance.",
    fullDescription:
      "End-to-end GST support for businesses—from initial registration and threshold assessment to filing GSTR-1, GSTR-3B, annual returns, and Input Tax Credit (ITC) reconciliation.",
    whatItInvolves: [
      "New GST registration and modifications",
      "Monthly and quarterly GSTR-1 & GSTR-3B filing",
      "Input Tax Credit (ITC) reconciliation with GSTR-2B",
      "Annual returns & cancellation support",
    ],
    whoItIsFor: [
      "New businesses crossing turnover limits",
      "Wholesalers, retailers, and distributors",
      "Contractors and service professionals",
    ],
    whyItMatters:
      "Timely filing avoids suspension of GSTIN, eliminates daily late fees, and ensures customers claim ITC.",
    iconName: "Receipt",
    keyHighlights: ["Monthly filings", "ITC reconciliation", "GST registration"],
  },
  {
    id: "income-tax",
    number: "03",
    title: "Income Tax Returns",
    slug: "income-tax",
    category: "Direct Taxation",
    shortDescription:
      "Preparation and e-filing of income tax returns for individuals, professionals, and firms.",
    fullDescription:
      "Professional income tax computation and e-filing with thorough verification against Annual Information Statement (AIS), TIS, and Form 26AS records.",
    whatItInvolves: [
      "Income computation across business, salary, and capital gains",
      "AIS, TIS, and 26AS verification",
      "Filing applicable ITR forms within statutory due dates",
      "Guidance on advance tax calculations",
    ],
    whoItIsFor: [
      "Salaried individuals and professionals",
      "Proprietors and trading firms",
      "Partnerships and corporate entities",
    ],
    whyItMatters:
      "On-time filing avoids penalty interest, protects loan eligibility, and maintains a clean financial profile.",
    iconName: "FileSpreadsheet",
    keyHighlights: ["AIS/26AS check", "Tax computation", "On-time filing"],
  },
  {
    id: "tds",
    number: "04",
    title: "TDS Filing",
    slug: "tds",
    category: "Tax Compliance",
    shortDescription:
      "Quarterly TDS return preparation, challan verification, and Form 16/16A generation.",
    fullDescription:
      "Support for deductors on TAN application, challan deposit verification, quarterly TDS return e-filing (Forms 24Q, 26Q), and certificate generation on TRACES.",
    whatItInvolves: [
      "Quarterly TDS return filing (24Q & 26Q)",
      "TAN application and corrections on TRACES",
      "Generation of Form 16 and Form 16A certificates",
      "Resolution of TDS defaults and notices",
    ],
    whoItIsFor: [
      "Businesses making contract, rent, or professional payments",
      "Partnership firms and corporate employers",
      "Institutions deducting tax at source",
    ],
    whyItMatters:
      "Delayed filing attracts mandatory late fees under Section 234E and disallowance of business expenses.",
    iconName: "Percent",
    keyHighlights: ["24Q / 26Q filing", "TRACES support", "Form 16/16A"],
  },
  {
    id: "digital-signature",
    number: "05",
    title: "Digital Signature",
    slug: "digital-signature",
    category: "Statutory Identity",
    shortDescription:
      "Class 3 Digital Signature Certificate (DSC) issuance for company directors, e-tendering, and filings.",
    fullDescription:
      "Assistance with issuing and renewing secure Class 3 USB token-based digital signatures with paperless Aadhaar/PAN verification for MCA, Income Tax, GST, and e-procurement tenders.",
    whatItInvolves: [
      "Class 3 signing and encryption DSC issuance",
      "Paperless e-KYC document processing",
      "Cryptographic USB token configuration",
      "DSC portal mapping on MCA and Tax portals",
    ],
    whoItIsFor: [
      "Company directors and designated partners",
      "E-tender contractors and suppliers",
      "Authorized corporate signatories",
    ],
    whyItMatters:
      "A valid DSC is mandatory for signing statutory filings, company incorporations, and government tender submissions.",
    iconName: "KeyRound",
    keyHighlights: ["Class 3 DSC", "Paperless e-KYC", "E-tendering token"],
  },
  {
    id: "project-report",
    number: "06",
    title: "Project Report for Bank Finance",
    slug: "project-report",
    category: "Financial Planning",
    shortDescription:
      "Preparation of professional project reports and CMA data for bank loans and business funding.",
    fullDescription:
      "Comprehensive bank project reports outlining capital requirements, means of finance, multi-year projected financial statements, cash flow forecasts, and Debt Service Coverage Ratios (DSCR).",
    whatItInvolves: [
      "Project cost and working capital structuring",
      "Multi-year projected P&L, Balance Sheet, and Cash Flows",
      "CMA data preparation for CC / Overdraft limits",
      "DSCR and key financial ratio calculations",
    ],
    whoItIsFor: [
      "Entrepreneurs launching new ventures",
      "Businesses applying for machinery or term loans",
      "Trading firms seeking CC/OD working capital limits",
    ],
    whyItMatters:
      "Banks assess loan viability on financial projections; clear reporting expedites credit manager appraisal and loan sanction.",
    iconName: "Landmark",
    keyHighlights: ["CMA data", "Financial projections", "Bank-ready reports"],
  },
  {
    id: "partnership-deed",
    number: "07",
    title: "Partnership Deed",
    slug: "partnership-deed",
    category: "Legal & Documentation",
    shortDescription:
      "Assistance with drafting customized partnership deed documentation for commercial ventures.",
    fullDescription:
      "Drafting clear, legally sound partnership deeds under the Indian Partnership Act, 1932, specifying capital contributions, profit sharing, and Section 40(b) partner remuneration rules.",
    whatItInvolves: [
      "Drafting customized partnership agreement clauses",
      "Stipulation of capital ratios and partner remuneration",
      "Banking authority and dispute resolution clauses",
      "Execution and stamp paper guidelines",
    ],
    whoItIsFor: [
      "Partners starting a joint commercial venture",
      "Family businesses formalizing terms",
      "Existing firms amending deed terms or partners",
    ],
    whyItMatters:
      "A clear deed prevents internal partner disputes and fulfills income tax requirements for partner salary deduction.",
    iconName: "FileSignature",
    keyHighlights: ["Custom clauses", "Section 40(b) ready", "Dispute prevention"],
  },
  {
    id: "company-llp-formation",
    number: "08",
    title: "Company & LLP Formation",
    slug: "company-llp-formation",
    category: "Corporate Services",
    shortDescription:
      "Support for Private Limited company incorporation and Limited Liability Partnership (LLP) registration.",
    fullDescription:
      "End-to-end guidance through the Ministry of Corporate Affairs (MCA) process—from name approval (RUN/SPICe+) and DIN/DSC acquisition to MOA, AOA, and incorporation certificate issuance.",
    whatItInvolves: [
      "Company and LLP name reservation",
      "DIN and Digital Signature facilitation",
      "Drafting Memorandum & Articles of Association (MOA/AOA)",
      "SPICe+ incorporation filing, PAN, and TAN generation",
    ],
    whoItIsFor: [
      "Founders forming a corporate entity",
      "Firms transitioning from proprietary to LLP/Private Limited",
      "Businesses seeking institutional contracts or limited liability",
    ],
    whyItMatters:
      "Proper incorporation ensures valid statutory corporate standing and protects personal assets with limited liability.",
    iconName: "Building2",
    keyHighlights: ["Pvt Ltd & LLP", "MCA filing", "PAN/TAN generation"],
  },
  {
    id: "internal-audit",
    number: "09",
    title: "Internal Audit & Consultancy Services",
    slug: "internal-audit",
    category: "Management Advisory",
    shortDescription:
      "Internal audit reviews, internal control evaluation, and management consultancy services.",
    fullDescription:
      "Practical reviews of accounting workflows, cash handling, and stock documentation to minimize discrepancies, identify compliance gaps, and strengthen management oversight.",
    whatItInvolves: [
      "Review of accounting vouchers and bookkeeping systems",
      "Cash flow and payment authorization checks",
      "Stock verification and reconciliation methodology",
      "Compliance review across GST and TDS",
    ],
    whoItIsFor: [
      "Retailers and multi-branch commercial stores",
      "Wholesale distributors and dealerships",
      "Growing firms seeking tighter internal checks",
    ],
    whyItMatters:
      "Routine internal oversight catches errors early, prevents revenue leakage, and ensures readiness for external audits.",
    iconName: "ShieldCheck",
    keyHighlights: ["Internal controls", "Workflow review", "Practical guidance"],
  },
];
