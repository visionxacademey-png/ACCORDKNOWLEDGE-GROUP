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
      "Professional accounting support to help maintain accurate, organized, and compliant financial records.",
    fullDescription:
      "Accurate accounting forms the backbone of every sound business decision and statutory compliance. Accord Knowledge Group provides systematic bookkeeping and financial record-keeping support tailored to sole proprietors, partnerships, trading firms, and growing enterprises in Kerala. We assist with day-to-day transaction recording, ledger maintenance, bank reconciliation, and structured financial statements.",
    whatItInvolves: [
      "Systematic recording of sales, purchases, receipts, and payments",
      "Bank statement reconciliation and ledger balancing",
      "Preparation of trial balance, profit & loss accounts, and balance sheets",
      "Maintenance of fixed asset registers and inventory transaction records",
      "Periodic financial statement reviews for business owners",
    ],
    whoItIsFor: [
      "Retailers, traders, and local commercial establishments",
      "Small and medium enterprises (SMEs) without an in-house accounting department",
      "Partnership firms and family-owned businesses requiring formal ledgers",
      "Contractors, service providers, and self-employed professionals",
    ],
    whyItMatters:
      "Orderly financial records prevent costly tax assessment discrepancies, enable smoother bank loan processing, and provide business owners with a clear view of cash flows and operating margins.",
    iconName: "BookOpen",
    keyHighlights: [
      "Structured ledger maintenance",
      "Periodic reconciliation",
      "Financial statement preparation",
      "Documentation organization",
    ],
  },
  {
    id: "gst-registration",
    number: "02",
    title: "GST Registration & Returns",
    slug: "gst-registration",
    category: "Indirect Taxation",
    shortDescription:
      "Assistance with GST registration, regular return filing, and ongoing statutory GST compliance.",
    fullDescription:
      "Navigating Goods and Services Tax (GST) requirements is essential to avoid penalties, interest, and supply chain disruptions. We assist businesses through the full lifecycle of GST requirements—from initial registration and threshold assessment to the regular filing of GSTR-1, GSTR-3B, annual reconciliation statements, and responding to GST notices.",
    whatItInvolves: [
      "New GST registration assistance for businesses and professionals",
      "Monthly and quarterly GST return filing (GSTR-1, GSTR-3B)",
      "Input Tax Credit (ITC) reconciliation with GSTR-2B",
      "Filing of annual GST returns and turnover reconciliation",
      "Amendments, core/non-core field updates, and GST cancellation support",
    ],
    whoItIsFor: [
      "New businesses crossing mandatory turnover thresholds or entering inter-state trade",
      "Traders, wholesalers, distributors, and registered dealers in Kerala",
      "Service providers and contractors subject to GST compliance",
      "Existing taxpayers needing structured ITC verification and regular return filing",
    ],
    whyItMatters:
      "Timely and accurate GST return filing prevents registration suspension, avoids substantial late fee accumulation, and protects your customers' eligibility for Input Tax Credit.",
    iconName: "Receipt",
    keyHighlights: [
      "Timely monthly/quarterly filings",
      "Accurate ITC reconciliation",
      "GST registration & modifications",
      "Compliance verification",
    ],
  },
  {
    id: "income-tax",
    number: "03",
    title: "Income Tax Returns",
    slug: "income-tax",
    category: "Direct Taxation",
    shortDescription:
      "Support for income tax return preparation and filing for individuals, professionals, and business entities.",
    fullDescription:
      "Income tax compliance requires thorough computation across diverse income heads, consideration of allowable business expenses, and alignment with Annual Information Statement (AIS) and Form 26AS data. We provide professional assistance in preparing and e-filing income tax returns (ITR-1 through ITR-6) with careful verification of reported figures.",
    whatItInvolves: [
      "Computation of total taxable income from business, profession, salary, house property, or capital gains",
      "Verification against AIS, TIS, and Form 26AS tax credits",
      "Identification of eligible statutory deductions and business expenditure claims",
      "Filing of applicable ITR forms within statutory due dates",
      "Guidance on advance tax computations and self-assessment tax payments",
    ],
    whoItIsFor: [
      "Salaried individuals and professionals with multiple income streams",
      "Sole proprietors, traders, and small business owners",
      "Partnership firms and corporate entities",
      "Non-resident Indians (NRIs) with taxable income or property transactions in Kerala",
    ],
    whyItMatters:
      "Filing accurate returns within due dates ensures compliance with the Income Tax Act, prevents interest under sections 234A/B/C, and maintains a clean financial profile essential for visa applications and bank financing.",
    iconName: "FileSpreadsheet",
    keyHighlights: [
      "AIS / 26AS reconciliation",
      "Accurate tax computation",
      "Business & individual ITRs",
      "Due-date compliance",
    ],
  },
  {
    id: "tds",
    number: "04",
    title: "TDS Filing",
    slug: "tds",
    category: "Tax Compliance",
    shortDescription:
      "TDS-related filing, TAN application, quarterly returns, and compliance support for deductors.",
    fullDescription:
      "Entities making payments such as contractor charges, professional fees, rent, commissions, or salaries are required under Indian tax laws to deduct tax at source and remit it periodically. We assist deductors with TAN applications, timely tax deposit challan generation, quarterly TDS returns (Form 24Q, 26Q), and Form 16/16A generation.",
    whatItInvolves: [
      "Quarterly TDS return preparation and e-filing (Forms 24Q, 26Q, 27Q)",
      "TAN application and data correction requests on the TRACES portal",
      "Generation and delivery of TDS certificates (Form 16 / Form 16A)",
      "Addressing TDS defaults, demand notices, and justification reports",
      "Periodic verification of PAN validity to prevent higher deduction rates",
    ],
    whoItIsFor: [
      "Commercial entities, businesses, and proprietary concerns making deductible payments",
      "Partnership firms, societies, and educational institutions",
      "Contractors and organizations disbursing sub-contract fees, rent, or professional fees",
    ],
    whyItMatters:
      "Non-deduction or delayed filing of TDS returns attracts heavy late fees (Rs. 200 per day under Section 234E) as well as disallowance of corresponding business expenses under Section 40(a)(ia).",
    iconName: "Percent",
    keyHighlights: [
      "Quarterly 24Q / 26Q filing",
      "TRACES portal compliance",
      "TDS certificate issuance",
      "Correction return assistance",
    ],
  },
  {
    id: "digital-signature",
    number: "05",
    title: "Digital Signature",
    slug: "digital-signature",
    category: "Statutory Identity",
    shortDescription:
      "Digital signature certificate (DSC) services for company directors, professionals, e-tendering, and statutory filings.",
    fullDescription:
      "Digital Signature Certificates (Class 3 DSC) are legally valid cryptographic instruments mandatory for filing returns on MCA, Income Tax, GST, EPFO, and participating in government e-procurement tenders. Accord Knowledge Group facilitates the issuance and renewal of secure USB token-based digital signatures with identity verification.",
    whatItInvolves: [
      "Assistance with Class 3 DSC issuance for signing and encryption",
      "Document collection and identity verification guidance (Aadhaar/PAN e-KYC)",
      "DSC renewal and cryptographic USB token configuration",
      "DSC registration and mapping on MCA, Income Tax, and GST portals",
    ],
    whoItIsFor: [
      "Company directors and designated partners of LLPs",
      "Contractors, builders, and suppliers participating in government e-tenders",
      "Professionals and chartered business representatives authorizing digital documents",
      "Authorized signatories of registered business entities",
    ],
    whyItMatters:
      "A valid, properly mapped DSC is required to execute statutory company filings, sign GST/IT returns, and submit legally binding e-tender bids without delays.",
    iconName: "KeyRound",
    keyHighlights: [
      "Class 3 DSC issuance",
      "Paperless e-KYC process",
      "E-tendering & MCA compatibility",
      "USB token configuration",
    ],
  },
  {
    id: "project-report",
    number: "06",
    title: "Project Report for Bank Finance",
    slug: "project-report",
    category: "Financial Planning",
    shortDescription:
      "Preparation of professional project reports for bank finance, term loans, working capital, and business funding.",
    fullDescription:
      "Securing funding from commercial banks, cooperative institutions, or financial bodies requires a realistic and well-structured project report. We draft comprehensive financial proposals that outline capital expenditure, means of finance, projected balance sheets, profit & loss projections, cash flow statements, and debt-service coverage ratios (DSCR).",
    whatItInvolves: [
      "Assessment of project costs, capital requirements, and working capital needs",
      "Preparation of multi-year projected financial statements (P&L, Balance Sheet, Cash Flow)",
      "Calculation of vital financial ratios including DSCR, Current Ratio, and Break-Even Point",
      "Structuring CMA data (Credit Monitoring Arrangement) for working capital limits / CC / OD",
      "Clear presentation of promoter contributions and security collateral structure",
    ],
    whoItIsFor: [
      "Entrepreneurs launching new ventures or manufacturing/service setups",
      "Existing business owners seeking term loans for machinery, vehicle, or facility expansion",
      "Trading firms and contractors applying for Cash Credit (CC) or Overdraft (OD) limits",
      "Applicants under government entrepreneurship or MSME loan schemes",
    ],
    whyItMatters:
      "Banks and credit managers evaluate loan feasibility based on financial clarity and realistic assumptions. A well-prepared project report significantly improves appraisal speed and sanction prospects.",
    iconName: "Landmark",
    keyHighlights: [
      "Comprehensive CMA data",
      "Realistic financial projections",
      "DSCR and ratio analysis",
      "Bank-ready documentation",
    ],
  },
  {
    id: "partnership-deed",
    number: "07",
    title: "Partnership Deed",
    slug: "partnership-deed",
    category: "Legal & Documentation",
    shortDescription:
      "Professional drafting and assistance with partnership deed documentation for commercial ventures.",
    fullDescription:
      "A clear, legally drafted partnership deed is essential to safeguard the interests of all business partners, define capital contributions, establish profit-sharing ratios, and set out operating rules. We assist in drafting comprehensive partnership agreements that align with the Indian Partnership Act, 1932, and fulfill tax department requirements.",
    whatItInvolves: [
      "Drafting customized partnership deed clauses reflecting mutual business terms",
      "Clear stipulation of capital contribution, profit/loss sharing, and partner remuneration",
      "Provisions for interest on capital, operational responsibilities, and banking powers",
      "Clauses for partner admission, retirement, dispute resolution, and dissolution",
      "Assistance with stamp paper requirements and documentation execution",
    ],
    whoItIsFor: [
      "Individuals joining together to launch a new commercial enterprise or agency",
      "Family businesses formalizing their mutual rights and responsibilities",
      "Existing partnerships amending deed clauses, profit ratios, or partner composition",
    ],
    whyItMatters:
      "An ambiguous deed often leads to avoidable disputes, bank account opening hurdles, or tax disallowance of partner salary and interest under Section 40(b) of the Income Tax Act.",
    iconName: "FileSignature",
    keyHighlights: [
      "Customized clauses",
      "Section 40(b) compliance",
      "Clear dispute prevention",
      "Execution assistance",
    ],
  },
  {
    id: "company-llp-formation",
    number: "08",
    title: "Company & LLP Formation",
    slug: "company-llp-formation",
    category: "Corporate Services",
    shortDescription:
      "Support for company registration, Limited Liability Partnership (LLP) incorporation, and initial statutory documentation.",
    fullDescription:
      "Forming a Private Limited Company or Limited Liability Partnership gives your venture formal corporate identity, limited liability protection, and enhanced credibility with clients and investors. We guide promoters through the entire Ministry of Corporate Affairs (MCA) process—from name availability checks and DIN/DSC acquisition to incorporation documentation and post-incorporation formalities.",
    whatItInvolves: [
      "Name reservation (RUN / SPICe+ Part A / RUN-LLP)",
      "Digital signature (DSC) and Director Identification Number (DIN) facilitation",
      "Drafting Memorandum of Association (MOA), Articles of Association (AOA), or LLP Agreement",
      "Filing SPICe+ incorporation forms with MCA, PAN/TAN generation, and certificate issuance",
      "Guidance on initial board resolutions, bank account opening, and commencement of business filings",
    ],
    whoItIsFor: [
      "Founders and startup teams establishing a formal corporate entity",
      "Partnership firms seeking to transition into an LLP or Private Limited Company",
      "Businesses seeking external investment, institutional contracts, or corporate vendor registration",
    ],
    whyItMatters:
      "Proper incorporation ensures valid statutory standing, protects personal assets through limited liability, and prevents legal defects in founding charter documents.",
    iconName: "Building2",
    keyHighlights: [
      "Private Limited & LLP formation",
      "MCA portal documentation",
      "PAN, TAN & incorporation certificate",
      "MOA / AOA / LLP agreement drafting",
    ],
  },
  {
    id: "internal-audit",
    number: "09",
    title: "Internal Audit & Consultancy Services",
    slug: "internal-audit",
    category: "Management Advisory",
    shortDescription:
      "Internal audit reviews, internal control evaluation, and management consultancy services for organizational efficiency.",
    fullDescription:
      "Effective internal oversight helps organizations minimize revenue leakage, strengthen internal checks, and maintain financial discipline. Accord Knowledge Group provides internal audit and management advisory services designed to review operational workflows, verify cash and stock handling, and recommend practical improvements for management.",
    whatItInvolves: [
      "Review of internal accounting systems, vouchers, and documentation processes",
      "Evaluation of cash flow management, expenditure approvals, and payment authorizations",
      "Stock verification methodology and inventory reconciliation checks",
      "Identification of compliance gaps across GST, TDS, and statutory obligations",
      "Structured reporting with practical management recommendations",
    ],
    whoItIsFor: [
      "Growing business enterprises seeking objective review of internal workflows",
      "Retail chains, distributors, and dealers with multiple sales counters or warehouses",
      "Service firms and institutions seeking to prevent fraud, errors, or operational inefficiencies",
      "Management teams needing independent verification of reported figures",
    ],
    whyItMatters:
      "Routine internal oversight gives management peace of mind, catches errors before external statutory audits, and strengthens financial controls across business operations.",
    iconName: "ShieldCheck",
    keyHighlights: [
      "Internal control evaluation",
      "Operational workflow review",
      "Discrepancy prevention",
      "Actionable management advice",
    ],
  },
];

