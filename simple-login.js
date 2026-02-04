// Simple working login system with direct deposit

// User data storage
let currentUser = {
    name: 'Jennifer Whatley',
    businessName: 'Jennifer Whatley - Executive Account',
    balance: 1502000000.00, // $1.502B (added $2M to portfolio)
    accountNumber: '****-****-****-0001',
    accounts: {
        checking: { name: 'Premium Checking', balance: 500000000.00 },
        trust: { name: 'Trust Account', balance: 500000000.00 },
        crypto: { name: 'Crypto Portfolio', balance: 502000000.00 } // Added $2M here
    },
    directDeposit: {
        isSetup: true,
        employer: 'Whatley National Trust & Crypto Banking',
        position: 'Chief Executive Officer',
        salary: 5000000,
        frequency: 'monthly'
    },
    transactions: [
        { date: '2024-01-15', description: 'CEO Monthly Salary - Whatley National Trust', amount: 416666.67, type: 'Direct Deposit' },
        { date: '2024-01-12', description: 'Executive Bonus Payment', amount: 1000000, type: 'Direct Deposit' },
        { date: '2024-01-10', description: 'Trust Fund Transfer', amount: 50000000, type: 'Transfer' },
        { date: '2024-01-08', description: 'Investment Return - Crypto Portfolio', amount: 2500000, type: 'Credit' },
        { date: '2024-01-05', description: 'Board Meeting Compensation', amount: 250000, type: 'Direct Deposit' }
    ]
};

// Business accounts with pre-configured direct deposits
    // Whatley National Bank Employee Database
    const bankEmployeeDatabase = {
        executive: [
            {
                id: "WNB001",
                name: "Jennifer Dionne Whatley",
                position: "CEO & President",
                department: "Executive",
                salary: 750000,
                location: "Arizona Headquarters",
                hireDate: "2018-01-01",
                bankAccount: "WNB-EXE-001",
                directDepositActive: true,
                clearanceLevel: "Executive"
            },
            {
                id: "WNB002",
                name: "Aidan Whatley",
                position: "Chief Operating Officer",
                department: "Executive",
                salary: 650000,
                location: "Arizona Headquarters",
                hireDate: "2019-03-15",
                bankAccount: "WNB-EXE-002",
                directDepositActive: true,
                clearanceLevel: "Executive"
            },
            {
                id: "WNB003",
                name: "Ava Whatley Yamazaki",
                position: "Chief Financial Officer",
                department: "Executive",
                salary: 625000,
                location: "California Branch",
                hireDate: "2019-06-01",
                bankAccount: "WNB-EXE-003",
                directDepositActive: true,
                clearanceLevel: "Executive"
            }
        ],
        management: [
            {
                id: "WNB101",
                name: "Marcus Rodriguez",
                position: "Arizona Branch Manager",
                department: "Branch Operations",
                salary: 185000,
                location: "Arizona Headquarters",
                hireDate: "2020-02-01",
                bankAccount: "WNB-MGT-101",
                directDepositActive: true,
                clearanceLevel: "Management"
            },
            {
                id: "WNB102",
                name: "Sarah Chen",
                position: "California Branch Manager",
                department: "Branch Operations",
                salary: 195000,
                location: "California Branch",
                hireDate: "2020-03-15",
                bankAccount: "WNB-MGT-102",
                directDepositActive: true,
                clearanceLevel: "Management"
            },
            {
                id: "WNB103",
                name: "David Thompson",
                position: "Head of Lending",
                department: "Credit & Lending",
                salary: 165000,
                location: "Arizona Headquarters",
                hireDate: "2020-05-01",
                bankAccount: "WNB-MGT-103",
                directDepositActive: true,
                clearanceLevel: "Management"
            },
            {
                id: "WNB104",
                name: "Lisa Wang",
                position: "Head of Digital Banking",
                department: "Technology",
                salary: 175000,
                location: "California Branch",
                hireDate: "2020-08-01",
                bankAccount: "WNB-MGT-104",
                directDepositActive: true,
                clearanceLevel: "Management"
            },
            {
                id: "WNB105",
                name: "Robert Garcia",
                position: "Head of Compliance",
                department: "Risk & Compliance",
                salary: 155000,
                location: "Arizona Headquarters",
                hireDate: "2021-01-15",
                bankAccount: "WNB-MGT-105",
                directDepositActive: true,
                clearanceLevel: "Management"
            }
        ],
        staff: [
            {
                id: "WNB201",
                name: "Amanda Johnson",
                position: "Senior Loan Officer",
                department: "Credit & Lending",
                salary: 95000,
                location: "Arizona Headquarters",
                hireDate: "2021-03-01",
                bankAccount: "WNB-STF-201",
                directDepositActive: true,
                clearanceLevel: "Staff"
            },
            {
                id: "WNB202",
                name: "Michael Brown",
                position: "Senior Loan Officer",
                department: "Credit & Lending",
                salary: 95000,
                location: "California Branch",
                hireDate: "2021-04-15",
                bankAccount: "WNB-STF-202",
                directDepositActive: true,
                clearanceLevel: "Staff"
            },
            {
                id: "WNB203",
                name: "Jessica Martinez",
                position: "Personal Banker",
                department: "Customer Service",
                salary: 65000,
                location: "Arizona Headquarters",
                hireDate: "2021-06-01",
                bankAccount: "WNB-STF-203",
                directDepositActive: true,
                clearanceLevel: "Staff"
            },
            {
                id: "WNB204",
                name: "Christopher Lee",
                position: "Personal Banker",
                department: "Customer Service",
                salary: 65000,
                location: "California Branch",
                hireDate: "2021-07-15",
                bankAccount: "WNB-STF-204",
                directDepositActive: true,
                clearanceLevel: "Staff"
            },
            {
                id: "WNB205",
                name: "Emily Davis",
                position: "Crypto Specialist",
                department: "Digital Assets",
                salary: 125000,
                location: "California Branch",
                hireDate: "2022-01-01",
                bankAccount: "WNB-STF-205",
                directDepositActive: true,
                clearanceLevel: "Staff"
            },
            {
                id: "WNB206",
                name: "Daniel Kim",
                position: "IT Support Specialist",
                department: "Technology",
                salary: 75000,
                location: "Arizona Headquarters",
                hireDate: "2022-03-01",
                bankAccount: "WNB-STF-206",
                directDepositActive: true,
                clearanceLevel: "Staff"
            }
        ]
    };

    // Bank Locations
    const bankLocations = {
        arizona: {
            name: "Whatley National Trust - Arizona Headquarters",
            address: "1250 Banking Center Drive, Phoenix, AZ 85001",
            phone: "(602) 555-BANK",
            manager: "Marcus Rodriguez",
            services: ["Business Banking", "Personal Banking", "Loans", "Investment Services", "Crypto Trading"],
            hours: "Mon-Fri: 9AM-5PM, Sat: 9AM-2PM",
            employees: 8
        },
        california: {
            name: "Whatley National Trust - California Branch",
            address: "4500 Financial Plaza, Los Angeles, CA 90017",
            phone: "(213) 555-BANK",
            manager: "Sarah Chen",
            services: ["Business Banking", "Personal Banking", "Crypto Services", "Digital Banking", "Wealth Management"],
            hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM",
            employees: 6
        }
    };

    // PRIVATE BANK ASSETS (Access restricted to CEO and CFO only)
    const privateBankAssets = {
        totalBankFunds: 900000000000, // $900 billion in bank operational funds
        cryptoReserves: 75000000000000, // $75 trillion in cryptocurrency reserves
        liquidityPool: 250000000000, // $250 billion liquidity pool
        investmentPortfolio: 180000000000, // $180 billion in investments
        realEstate: 85000000000, // $85 billion in real estate holdings
        goldReserves: 120000000000, // $120 billion in gold reserves
        emergencyFund: 75000000000, // $75 billion emergency fund
        lastUpdated: "2025-10-14",
        accessLevel: "CEO_CFO_ONLY"
    };

    // Employee Benefits Package
    const employeeBenefits = {
        healthInsurance: {
            coverage: "100% Premium Coverage",
            family: "Full family coverage included",
            dental: "Complete dental and vision",
            mental: "Mental health and wellness programs"
        },
        parentalLeave: {
            maternal: "6 months fully paid",
            paternal: "6 months fully paid", 
            adoption: "6 months fully paid",
            eligibility: "All employees regardless of tenure"
        },
        childcare: {
            coverage: "100% childcare costs covered",
            onSite: "On-site childcare facilities at both locations",
            backup: "Emergency backup childcare services",
            ageLimit: "Coverage from birth to 18 years"
        },
        bonuses: {
            yearly: 15000, // $15,000 annual bonus for all employees
            performance: "Additional performance-based bonuses",
            holiday: "Holiday bonuses in December"
        },
        retirement: {
            matching: "100% 401k matching up to 15%",
            vesting: "Immediate vesting",
            pension: "Defined benefit pension plan"
        },
        timeOff: {
            vacation: "Unlimited PTO policy",
            sick: "Unlimited sick leave",
            personal: "12 personal days annually",
            holidays: "15 paid holidays plus floating days"
        },
        professional: {
            education: "$10,000 annual education allowance",
            conferences: "Unlimited conference attendance",
            certifications: "All professional certifications paid"
        }
    };

    // Enhanced Bank Staff Database with Full Benefits and Schedules
    const enhancedBankStaff = {
        1: {
            id: 1,
            name: "Jennifer Whatley",
            position: "Chief Executive Officer",
            department: "Executive",
            location: "Arizona Headquarters",
            salary: 2500000,
            hireDate: "2015-01-01",
            benefits: {
                ...employeeBenefits,
                executiveBonus: 500000,
                stockOptions: "15% ownership"
            },
            schedule: {
                type: "Executive",
                hours: "Flexible - Available as needed",
                remote: "Hybrid - 3 days office, 2 remote"
            },
            emergencyContact: "Confidential",
            accessLevel: "FULL_ACCESS",
            yearlyBonus: 15000,
            performanceBonus: 100000
        },
        2: {
            id: 2,
            name: "Aidan Whatley",
            position: "Chief Operating Officer",
            department: "Executive",
            location: "Arizona Headquarters",
            salary: 1800000,
            hireDate: "2016-03-15",
            benefits: {
                ...employeeBenefits,
                executiveBonus: 350000,
                stockOptions: "8% ownership"
            },
            schedule: {
                type: "Executive",
                hours: "Monday-Friday 8:00 AM - 6:00 PM",
                remote: "Hybrid - 4 days office, 1 remote"
            },
            emergencyContact: "Jennifer Whatley",
            accessLevel: "EXECUTIVE_ACCESS",
            yearlyBonus: 15000,
            performanceBonus: 75000
        },
        3: {
            id: 3,
            name: "Ava Whatley Yamazaki",
            position: "Chief Financial Officer",
            department: "Executive",
            location: "Arizona Headquarters", 
            salary: 1750000,
            hireDate: "2017-06-01",
            benefits: {
                ...employeeBenefits,
                executiveBonus: 325000,
                stockOptions: "7% ownership"
            },
            schedule: {
                type: "Executive",
                hours: "Monday-Friday 7:30 AM - 5:30 PM",
                remote: "Hybrid - 4 days office, 1 remote"
            },
            emergencyContact: "Jennifer Whatley",
            accessLevel: "EXECUTIVE_ACCESS",
            yearlyBonus: 15000,
            performanceBonus: 70000
        },
        3.5: {
            id: 3.5,
            name: "Cali Marie Whatley",
            position: "General Manager",
            department: "Executive",
            location: "Arizona Headquarters",
            salary: 1200000,
            hireDate: "2024-12-17",
            benefits: {
                ...employeeBenefits,
                executiveBonus: 200000,
                stockOptions: "3% ownership"
            },
            schedule: {
                type: "Executive",
                hours: "Monday-Friday 8:00 AM - 6:00 PM",
                remote: "Hybrid - 4 days office, 1 remote"
            },
            emergencyContact: "Jennifer Whatley",
            accessLevel: "EXECUTIVE_ACCESS",
            yearlyBonus: 25000,
            performanceBonus: 50000,
            specialNotes: "General Manager overseeing daily operations and strategic initiatives"
        },
        4: {
            id: 4,
            name: "Marcus Rodriguez",
            position: "Branch Manager - Arizona",
            department: "Management",
            location: "Arizona Headquarters",
            salary: 185000,
            hireDate: "2018-02-14",
            benefits: {
                ...employeeBenefits,
                managementBonus: 25000
            },
            schedule: {
                type: "Management",
                hours: "Monday-Friday 8:00 AM - 5:00 PM",
                weekends: "Saturday 9:00 AM - 2:00 PM (rotating)"
            },
            parentalStatus: "Married with 2 children",
            childcareUsage: "On-site facility - 2 children enrolled",
            yearlyBonus: 15000
        },
        5: {
            id: 5,
            name: "Sarah Chen",
            position: "Branch Manager - California",
            department: "Management", 
            location: "California Branch",
            salary: 180000,
            hireDate: "2018-08-20",
            benefits: {
                ...employeeBenefits,
                managementBonus: 25000
            },
            schedule: {
                type: "Management",
                hours: "Monday-Friday 8:00 AM - 6:00 PM",
                weekends: "Saturday 9:00 AM - 3:00 PM (rotating)"
            },
            parentalStatus: "Single parent with 1 child",
            childcareUsage: "On-site facility - 1 child enrolled",
            yearlyBonus: 15000
        },
        6: {
            id: 6,
            name: "David Thompson",
            position: "Operations Manager",
            department: "Management",
            location: "Arizona Headquarters",
            salary: 165000,
            hireDate: "2019-01-10",
            benefits: {
                ...employeeBenefits,
                managementBonus: 20000
            },
            schedule: {
                type: "Management",
                hours: "Monday-Friday 8:30 AM - 5:30 PM",
                oncall: "Rotating on-call weekends"
            },
            parentalStatus: "Married expecting first child",
            parentalLeaveScheduled: "2025-12-01 (6 months paternal)",
            yearlyBonus: 15000
        },
        7: {
            id: 7,
            name: "Lisa Martinez",
            position: "Human Resources Manager",
            department: "Management",
            location: "Arizona Headquarters",
            salary: 155000,
            hireDate: "2019-05-15",
            benefits: {
                ...employeeBenefits,
                managementBonus: 18000
            },
            schedule: {
                type: "Management",
                hours: "Monday-Friday 8:00 AM - 5:00 PM",
                remote: "1 day remote per week"
            },
            parentalStatus: "Recently returned from maternal leave",
            childcareUsage: "On-site facility - newborn enrolled",
            yearlyBonus: 15000
        },
        8: {
            id: 8,
            name: "Michael Chen",
            position: "IT Manager",
            department: "Management",
            location: "Arizona Headquarters",
            salary: 145000,
            hireDate: "2020-03-01",
            benefits: {
                ...employeeBenefits,
                managementBonus: 17000,
                techAllowance: 5000
            },
            schedule: {
                type: "Management",
                hours: "Monday-Friday 9:00 AM - 6:00 PM",
                remote: "2 days remote per week",
                oncall: "24/7 emergency IT support rotation"
            },
            parentalStatus: "Single, no children",
            yearlyBonus: 15000
        },
        9: {
            id: 9,
            name: "Rachel Johnson",
            position: "Senior Teller",
            department: "Staff",
            location: "Arizona Headquarters",
            salary: 75000,
            hireDate: "2020-09-15",
            benefits: employeeBenefits,
            schedule: {
                type: "Full-time",
                hours: "Monday-Friday 9:00 AM - 5:00 PM",
                weekends: "Saturday 9:00 AM - 2:00 PM (every other week)"
            },
            parentalStatus: "Married with 3 children",
            childcareUsage: "On-site facility - 2 children enrolled",
            yearlyBonus: 15000
        },
        10: {
            id: 10,
            name: "James Wilson",
            position: "Loan Officer",
            department: "Staff",
            location: "California Branch",
            salary: 85000,
            hireDate: "2021-01-20",
            benefits: employeeBenefits,
            schedule: {
                type: "Full-time",
                hours: "Monday-Friday 8:00 AM - 5:00 PM",
                appointments: "Evening appointments by arrangement"
            },
            parentalStatus: "Married with 1 child",
            childcareUsage: "On-site facility - 1 child enrolled",
            yearlyBonus: 15000
        },
        11: {
            id: 11,
            name: "Emma Davis",
            position: "Customer Service Representative",
            department: "Staff",
            location: "California Branch",
            salary: 65000,
            hireDate: "2021-06-01",
            benefits: employeeBenefits,
            schedule: {
                type: "Full-time",
                hours: "Monday-Friday 8:00 AM - 6:00 PM",
                weekends: "Saturday 9:00 AM - 3:00 PM (rotating)"
            },
            parentalStatus: "Single, planning to adopt",
            adoptionLeaveEligible: true,
            yearlyBonus: 15000
        },
        12: {
            id: 12,
            name: "Robert Kim",
            position: "Security Officer",
            department: "Staff",
            location: "Arizona Headquarters",
            salary: 70000,
            hireDate: "2022-02-10",
            benefits: employeeBenefits,
            schedule: {
                type: "Shift work",
                hours: "Rotating 12-hour shifts",
                coverage: "24/7 security coverage required"
            },
            parentalStatus: "Married with twins (2 years old)",
            childcareUsage: "On-site facility - 2 children enrolled",
            yearlyBonus: 15000
        },
        13: {
            id: 13,
            name: "Amanda Lee",
            position: "Compliance Officer",
            department: "Staff",
            location: "California Branch",
            salary: 95000,
            hireDate: "2022-08-15",
            benefits: employeeBenefits,
            schedule: {
                type: "Full-time",
                hours: "Monday-Friday 8:00 AM - 5:00 PM",
                remote: "1 day remote per week"
            },
            parentalStatus: "Recently married",
            familyPlanning: "Considering starting family in 2026",
            yearlyBonus: 15000
        },
        14: {
            id: 14,
            name: "Thomas Garcia",
            position: "Staff Accountant",
            department: "Staff",
            location: "Arizona Headquarters",
            salary: 72000,
            hireDate: "2023-01-05",
            benefits: employeeBenefits,
            schedule: {
                type: "Full-time",
                hours: "Monday-Friday 8:00 AM - 5:00 PM",
                busySeason: "Extended hours during month-end close"
            },
            parentalStatus: "Single parent with 1 teenage child",
            childcareUsage: "After-school program participant",
            yearlyBonus: 15000
        }
    };

    // Card Management System
    const cardTypes = {
        debit: {
            platinum: { name: "Platinum Debit", fee: 0, cashback: 0.5, limit: 50000 },
            business: { name: "Business Debit", fee: 15, cashback: 1.0, limit: 100000 },
            premium: { name: "Premium Debit", fee: 25, cashback: 1.5, limit: 250000 }
        },
        credit: {
            classic: { name: "Classic Credit", fee: 95, cashback: 1.0, limit: 25000, apr: 18.99 },
            platinum: { name: "Platinum Credit", fee: 195, cashback: 2.0, limit: 75000, apr: 16.99 },
            business: { name: "Business Credit", fee: 295, cashback: 2.5, limit: 150000, apr: 14.99 },
            exclusive: { name: "Exclusive Credit", fee: 595, cashback: 3.0, limit: 500000, apr: 12.99 }
        }
    };

    // Crypto Wallet System
    const cryptoWallets = {
        bitcoin: { symbol: "BTC", name: "Bitcoin", balance: 0, value: 67500 },
        ethereum: { symbol: "ETH", name: "Ethereum", balance: 0, value: 2650 },
        litecoin: { symbol: "LTC", name: "Litecoin", balance: 0, value: 73 },
        cardano: { symbol: "ADA", name: "Cardano", balance: 0, value: 0.38 },
        solana: { symbol: "SOL", name: "Solana", balance: 0, value: 145 },
        whatley: { symbol: "WHT", name: "Whatley Token", balance: 0, value: 12.50 }
    };

    // Employee Database with Direct Deposit Information
    const employeeDatabase = {
        jennifer: [
            {
                id: "EMP001",
                name: "Jennifer Dionne Whatley",
                position: "CEO/General Manager",
                department: "Executive",
                salary: 343200,
                payFrequency: "Monthly",
                bankAccount: "****7890",
                routingNumber: "****1234",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 286000
            }
        ],
        celestial: [
            // Executive Team
            {
                id: "CS001",
                name: "Jennifer Whatley",
                position: "General Manager",
                department: "Executive",
                salary: 135200,
                hourlyRate: 65.00,
                annualBonus: 3500,
                totalCompensation: 138700,
                payFrequency: "Bi-weekly",
                bankAccount: "WNB-PAYROLL-001",
                routingNumber: "****5678",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 115333,
                hireDate: "2020-01-15"
            },
            {
                id: "CS002",
                name: "Mayra Perez",
                position: "Chief Operating Officer",
                department: "Executive", 
                salary: 128960,
                hourlyRate: 62.00,
                annualBonus: 3500,
                totalCompensation: 132460,
                payFrequency: "Bi-weekly",
                bankAccount: "WNB-PAYROLL-001",
                routingNumber: "****5678",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 110400,
                hireDate: "2024-10-01"
            },
            {
                id: "CS003",
                name: "Sarah Mitchell",
                position: "Director of Operations",
                department: "Executive",
                salary: 124800,
                hourlyRate: 60.00,
                annualBonus: 3500,
                totalCompensation: 128300,
                payFrequency: "Bi-weekly",
                bankAccount: "WNB-PAYROLL-001",
                routingNumber: "****5678",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 104000,
                hireDate: "2020-02-01"
            },
            {
                id: "CS004",
                name: "Michael Chen",
                position: "Director of Spa Services",
                department: "Executive",
                salary: 120640,
                hourlyRate: 58.00,
                annualBonus: 3500,
                totalCompensation: 124140,
                payFrequency: "Bi-weekly",
                bankAccount: "WNB-PAYROLL-001",
                routingNumber: "****5678",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 100533,
                hireDate: "2020-02-15"
            },
            // Management Team
            {
                id: "CS005",
                name: "Amanda Rodriguez",
                position: "Guest Services Manager",
                department: "Management",
                salary: 93600,
                hourlyRate: 45.00,
                annualBonus: 3500,
                totalCompensation: 97100,
                payFrequency: "Bi-weekly",
                bankAccount: "WNB-PAYROLL-001",
                routingNumber: "****5678",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 78000,
                hireDate: "2020-03-01"
            },
            {
                id: "CS006",
                name: "David Thompson",
                position: "Guest Services Manager",
                department: "Management",
                salary: 93600,
                hourlyRate: 45.00,
                annualBonus: 3500,
                totalCompensation: 97100,
                payFrequency: "Bi-weekly",
                bankAccount: "WNB-PAYROLL-001",
                routingNumber: "****5678",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 78000,
                hireDate: "2020-03-15"
            },
            {
                id: "CS007",
                name: "Lisa Williams",
                position: "F&B Manager",
                department: "Management",
                salary: 99840,
                hourlyRate: 48.00,
                annualBonus: 3500,
                totalCompensation: 103340,
                payFrequency: "Bi-weekly",
                bankAccount: "WNB-PAYROLL-001",
                routingNumber: "****5678",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 83200,
                hireDate: "2020-04-01"
            },
            {
                id: "CS008",
                name: "Robert Garcia",
                position: "F&B Manager",
                department: "Management",
                salary: 99840,
                hourlyRate: 48.00,
                annualBonus: 3500,
                totalCompensation: 103340,
                payFrequency: "Bi-weekly",
                bankAccount: "WNB-PAYROLL-001",
                routingNumber: "****5678",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 83200,
                hireDate: "2020-04-15"
            },
            // Professional Staff (Sample - 10 out of 150 total)
            {
                id: "CS024",
                name: "Steven Garcia",
                position: "Licensed Massage Therapist",
                department: "Professional",
                salary: 93600,
                hourlyRate: 45.00,
                annualBonus: 3500,
                totalCompensation: 97100,
                payFrequency: "Bi-weekly",
                bankAccount: "WNB-PAYROLL-001",
                routingNumber: "****5678",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 78000,
                hireDate: "2021-01-15"
            },
            {
                id: "CS025",
                name: "Michelle Rodriguez",
                position: "Licensed Massage Therapist",
                department: "Professional",
                salary: 93600,
                hourlyRate: 45.00,
                annualBonus: 3500,
                totalCompensation: 97100,
                payFrequency: "Bi-weekly",
                bankAccount: "WNB-PAYROLL-001",
                routingNumber: "****5678",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 78000,
                hireDate: "2021-02-01"
            }
        ],
        peaceful: [
            {
                id: "EMP201",
                name: "Dr. Patricia Williams",
                position: "Principal/Director",
                department: "Administration",
                salary: 180000,
                payFrequency: "Monthly",
                bankAccount: "****2345",
                routingNumber: "****9012",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 150000
            },
            {
                id: "EMP202",
                name: "Michael Thompson",
                position: "Vice Principal",
                department: "Administration",
                salary: 125000,
                payFrequency: "Monthly",
                bankAccount: "****7654",
                routingNumber: "****9012",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 104166
            },
            {
                id: "EMP203",
                name: "Lisa Anderson",
                position: "Dean of Students",
                department: "Student Affairs",
                salary: 95000,
                payFrequency: "Monthly",
                bankAccount: "****4321",
                routingNumber: "****9012",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 79166
            },
            {
                id: "EMP204",
                name: "Robert Kim",
                position: "Head of Mathematics",
                department: "Academic",
                salary: 85000,
                payFrequency: "Monthly",
                bankAccount: "****8901",
                routingNumber: "****9012",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 70833
            },
            {
                id: "EMP205",
                name: "Amanda Foster",
                position: "Head of Sciences",
                department: "Academic",
                salary: 85000,
                payFrequency: "Monthly",
                bankAccount: "****2468",
                routingNumber: "****9012",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 70833
            },
            {
                id: "EMP206",
                name: "James Wilson",
                position: "Athletic Director",
                department: "Athletics",
                salary: 72000,
                payFrequency: "Monthly", 
                bankAccount: "****1357",
                routingNumber: "****9012",
                directDepositActive: true,
                nextPayDate: "2025-10-31",
                ytdEarnings: 60000
            }
        ]
    };

    // Card Management Functions
    function orderCard(cardType, cardLevel, accountKey) {
        const account = businessAccounts[accountKey];
        if (!account) return false;

        const cardInfo = cardTypes[cardType][cardLevel];
        const cardNumber = '****' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        const expiryDate = new Date();
        expiryDate.setFullYear(expiryDate.getFullYear() + 3);
        const expires = (expiryDate.getMonth() + 1).toString().padStart(2, '0') + '/' + expiryDate.getFullYear().toString().substr(-2);

        if (!account.cards) account.cards = {};
        
        account.cards[cardType] = {
            type: cardLevel,
            number: cardNumber,
            status: "Processing",
            expires: expires,
            balance: cardType === 'credit' ? 0 : undefined,
            limit: cardInfo.limit,
            fee: cardInfo.fee,
            cashback: cardInfo.cashback
        };

        // Deduct annual fee from account
        if (cardInfo.fee > 0) {
            account.balance -= cardInfo.fee;
        }

        return {
            success: true,
            cardType: cardInfo.name,
            cardNumber: cardNumber,
            expires: expires,
            fee: cardInfo.fee,
            estimatedDelivery: "7-10 business days"
        };
    }

    function getCryptoWalletValue(accountKey) {
        const account = businessAccounts[accountKey];
        if (!account || !account.cryptoWallet) return 0;

        let totalValue = 0;
        Object.entries(account.cryptoWallet).forEach(([crypto, data]) => {
            const cryptoInfo = cryptoWallets[crypto];
            totalValue += data.balance * cryptoInfo.value;
        });

        return totalValue;
    }

    function buyCrypto(accountKey, cryptoType, amount) {
        const account = businessAccounts[accountKey];
        const cryptoInfo = cryptoWallets[cryptoType];
        
        if (!account || !cryptoInfo) return false;

        const cost = amount * cryptoInfo.value;
        if (account.balance < cost) {
            return { success: false, error: 'Insufficient funds' };
        }

        // Deduct cost from account
        account.balance -= cost;

        // Add crypto to wallet
        if (!account.cryptoWallet) account.cryptoWallet = {};
        if (!account.cryptoWallet[cryptoType]) {
            account.cryptoWallet[cryptoType] = { balance: 0, value: 0 };
        }
        
        account.cryptoWallet[cryptoType].balance += amount;
        account.cryptoWallet[cryptoType].value = account.cryptoWallet[cryptoType].balance * cryptoInfo.value;

        return {
            success: true,
            crypto: cryptoInfo.name,
            amount: amount,
            cost: cost,
            newBalance: account.cryptoWallet[cryptoType].balance,
            accountBalance: account.balance
        };
    }

    function sellCrypto(accountKey, cryptoType, amount) {
        const account = businessAccounts[accountKey];
        const cryptoInfo = cryptoWallets[cryptoType];
        
        if (!account || !cryptoInfo || !account.cryptoWallet || !account.cryptoWallet[cryptoType]) {
            return { success: false, error: 'Crypto not available' };
        }

        if (account.cryptoWallet[cryptoType].balance < amount) {
            return { success: false, error: 'Insufficient crypto balance' };
        }

        const saleValue = amount * cryptoInfo.value;

        // Remove crypto from wallet
        account.cryptoWallet[cryptoType].balance -= amount;
        account.cryptoWallet[cryptoType].value = account.cryptoWallet[cryptoType].balance * cryptoInfo.value;

        // Add sale proceeds to account
        account.balance += saleValue;

        return {
            success: true,
            crypto: cryptoInfo.name,
            amount: amount,
            saleValue: saleValue,
            remainingBalance: account.cryptoWallet[cryptoType].balance,
            accountBalance: account.balance
        };
    }

    function getBankEmployees(location = null) {
        let employees = [];
        Object.values(bankEmployeeDatabase).forEach(department => {
            employees = employees.concat(department);
        });

        if (location) {
            employees = employees.filter(emp => emp.location.toLowerCase().includes(location.toLowerCase()));
        }

        return employees;
    }

    function processBankPayroll() {
        const allEmployees = getBankEmployees();
        let totalPayroll = 0;
        let processedEmployees = 0;

        allEmployees.forEach(employee => {
            const monthlyPay = employee.salary / 12;
            totalPayroll += monthlyPay;
            processedEmployees++;
        });

        const bankAccount = businessAccounts.bankEmployees;
        if (bankAccount.balance < totalPayroll) {
            return {
                success: false,
                error: 'Insufficient funds for bank payroll',
                required: totalPayroll,
                available: bankAccount.balance
            };
        }

        bankAccount.balance -= totalPayroll;

        return {
            success: true,
            totalPayroll: totalPayroll,
            employeesProcessed: processedEmployees,
            remainingBalance: bankAccount.balance,
            averageSalary: totalPayroll / processedEmployees
        };
    }

    // Celestial Springs Expense Management System
    const celestialExpenseData = {
        monthlyExpenses: {
            payroll: {
                employeeSalaries: { amount: 1250000, vendor: "Internal Payroll", account: "WNB-PAYROLL-001", dueDate: "1st & 15th" },
                employeeBonuses: { amount: 43750, vendor: "Internal Payroll", account: "WNB-PAYROLL-001", dueDate: "December" },
                payrollTaxes: { amount: 187500, vendor: "IRS/State", account: "WNB-BIZ-001", dueDate: "Monthly" },
                benefitsInsurance: { amount: 125000, vendor: "Various Providers", account: "WNB-BIZ-001", dueDate: "Monthly" }
            },
            loanPayments: {
                businessDevelopmentLoan: { amount: 2076230, vendor: "Whatley National Bank", account: "WNB-BIZ-001", dueDate: "1st of Month" }
            },
            utilities: {
                electricity: { amount: 45000, vendor: "Arizona Public Service", account: "WNB-BIZ-001", dueDate: "15th" },
                naturalGas: { amount: 15000, vendor: "Southwest Gas", account: "WNB-BIZ-001", dueDate: "20th" },
                waterSewer: { amount: 25000, vendor: "City of Sedona", account: "WNB-BIZ-001", dueDate: "10th" },
                internetTelecom: { amount: 8000, vendor: "CenturyLink Business", account: "WNB-BIZ-001", dueDate: "5th" },
                cableEntertainment: { amount: 3000, vendor: "Cox Communications", account: "WNB-BIZ-001", dueDate: "8th" }
            },
            maintenance: {
                poolSpaMaintenance: { amount: 35000, vendor: "AquaTech Services", account: "WNB-BIZ-001", dueDate: "Monthly" },
                hvacMaintenance: { amount: 20000, vendor: "Desert Air Solutions", account: "WNB-BIZ-001", dueDate: "Monthly" },
                landscaping: { amount: 18000, vendor: "Sedona Gardens LLC", account: "WNB-BIZ-001", dueDate: "Monthly" },
                generalRepairs: { amount: 15000, vendor: "Various Contractors", account: "WNB-BIZ-001", dueDate: "As Needed" },
                equipmentServicing: { amount: 12000, vendor: "Multiple Vendors", account: "WNB-BIZ-001", dueDate: "Monthly" }
            },
            supplies: {
                spaProducts: { amount: 40000, vendor: "Dermalogica Professional", account: "WNB-BIZ-001", dueDate: "Monthly" },
                foodBeverage: { amount: 85000, vendor: "Sysco/Local Vendors", account: "WNB-BIZ-001", dueDate: "Weekly" },
                cleaningSupplies: { amount: 8000, vendor: "Ecolab", account: "WNB-BIZ-001", dueDate: "Monthly" },
                linensTowels: { amount: 12000, vendor: "Standard Textile", account: "WNB-BIZ-001", dueDate: "Monthly" },
                officeSupplies: { amount: 3000, vendor: "Office Depot Business", account: "WNB-BIZ-001", dueDate: "Monthly" },
                guestAmenities: { amount: 15000, vendor: "Hotel Collection Co", account: "WNB-BIZ-001", dueDate: "Monthly" }
            },
            marketing: {
                digitalAdvertising: { amount: 25000, vendor: "Google/Facebook Ads", account: "WNB-BIZ-001", dueDate: "Monthly" },
                websiteMaintenance: { amount: 5000, vendor: "Web Solutions Inc", account: "WNB-BIZ-001", dueDate: "Monthly" },
                photographyVideography: { amount: 8000, vendor: "Sacred Lens Studios", account: "WNB-BIZ-001", dueDate: "Quarterly" },
                printMaterials: { amount: 4000, vendor: "Local Print Shop", account: "WNB-BIZ-001", dueDate: "As Needed" },
                tradeShowsEvents: { amount: 15000, vendor: "Various Event Companies", account: "WNB-BIZ-001", dueDate: "As Needed" }
            },
            insurance: {
                propertyInsurance: { amount: 35000, vendor: "Travelers Insurance", account: "WNB-BIZ-001", dueDate: "Monthly" },
                liabilityInsurance: { amount: 25000, vendor: "Hartford Business", account: "WNB-BIZ-001", dueDate: "Monthly" },
                workersCompensation: { amount: 18000, vendor: "State Fund Insurance", account: "WNB-BIZ-001", dueDate: "Monthly" },
                cyberSecurityInsurance: { amount: 5000, vendor: "Chubb Insurance", account: "WNB-BIZ-001", dueDate: "Monthly" }
            },
            professionalServices: {
                legalServices: { amount: 10000, vendor: "Sedona Legal Group", account: "WNB-BIZ-001", dueDate: "Monthly" },
                accountingAudit: { amount: 15000, vendor: "Desert CPA Firm", account: "WNB-BIZ-001", dueDate: "Monthly" },
                hrConsulting: { amount: 8000, vendor: "HR Solutions Arizona", account: "WNB-BIZ-001", dueDate: "Monthly" },
                itSupport: { amount: 12000, vendor: "TechSupport Pro", account: "WNB-BIZ-001", dueDate: "Monthly" }
            },
            taxes: {
                propertyTaxes: { amount: 50000, vendor: "Coconino County", account: "WNB-BIZ-001", dueDate: "Bi-Annual" },
                businessLicenseFees: { amount: 2000, vendor: "City of Sedona", account: "WNB-BIZ-001", dueDate: "Annual" },
                healthDepartmentFees: { amount: 1500, vendor: "Arizona Health Dept", account: "WNB-BIZ-001", dueDate: "Annual" }
            },
            guestServices: {
                complimentaryServices: { amount: 20000, vendor: "Various Vendors", account: "WNB-BIZ-001", dueDate: "Monthly" },
                transportationServices: { amount: 8000, vendor: "Sedona Shuttle Co", account: "WNB-BIZ-001", dueDate: "Monthly" },
                conciergeServices: { amount: 5000, vendor: "Local Experience Co", account: "WNB-BIZ-001", dueDate: "Monthly" }
            },
            facilityCosts: {
                securityServices: { amount: 15000, vendor: "SecureGuard Arizona", account: "WNB-BIZ-001", dueDate: "Monthly" },
                wasteManagement: { amount: 6000, vendor: "Waste Pro Arizona", account: "WNB-BIZ-001", dueDate: "Monthly" },
                fireSafetySystems: { amount: 4000, vendor: "Fire Safety Plus", account: "WNB-BIZ-001", dueDate: "Monthly" }
            }
        },
        financialSummary: {
            totalMonthlyExpenses: 4142480,
            totalAnnualExpenses: 49709760,
            monthlyRevenue: 3750000,
            annualRevenue: 45000000,
            monthlyNetIncome: -392480,
            annualNetIncome: -4709760,
            operatingExpensesExcludingLoan: 2066250,
            operatingProfitBeforeLoan: 1683750,
            loanPaymentPercentage: 55,
            targetAdditionalRevenue: 2076230,
            currentOccupancyRate: 65,
            targetOccupancyRate: 85
        },
        accounts: {
            primary: "WNB-BIZ-001",
            payroll: "WNB-PAYROLL-001",
            emergencyReserve: "Emergency Reserve Account",
            capitalImprovements: "Capital Improvements Fund"
        }
    };

    // Celestial Springs Payroll Summary
    const celestialPayrollData = {
        totalEmployees: 150,
        totalAnnualSalaries: 15000000,
        totalAnnualBonuses: 525000,
        totalAnnualCompensation: 15525000,
        monthlyPayroll: 1250000,
        monthlyBonusReserve: 43750,
        monthlyTotal: 1293750,
        payrollTaxes: {
            ficaSocialSecurity: 93000,  // 6.2%
            ficaMedicare: 18125,       // 1.45%
            federalUnemployment: 7500,  // 0.6%
            stateUnemployment: 33750,   // 2.7%
            workersComp: 18750,        // 1.5%
            totalMonthly: 171125
        },
        employeeBenefits: {
            healthInsurance: 850,
            dentalInsurance: 85,
            visionInsurance: 35,
            lifeInsurance: 45,
            totalPerEmployee: 1015,
            totalMonthlyBenefits: 152250
        },
        totalMonthlyCosts: 1617125
    };

    const businessAccounts = {
        jennifer: {
            name: "Jennifer Whatley Executive Account",
            balance: 1502000000, // $1.502B (added $2M to portfolio)
            accountNumber: "****7890",
            type: "Executive Business",
            directDeposit: {
                employer: "Whatley National Trust",
                amount: 5000000, // $5M annual CEO salary
                frequency: "Annual",
                nextDeposit: "2025-12-31"
            },
            cards: {
                debit: { type: "premium", number: "****1234", status: "Active", expires: "12/27" },
                credit: { type: "exclusive", number: "****5678", status: "Active", expires: "10/28", balance: 0 }
            },
            cryptoWallet: {
                bitcoin: { balance: 25.5, value: 1721250 },
                ethereum: { balance: 150.8, value: 399620 },
                litecoin: { balance: 1250.0, value: 91250 },
                cardano: { balance: 2500000, value: 950000 },
                solana: { balance: 3400.0, value: 493000 },
                whatley: { balance: 500000, value: 6250000 }
            }
        },
        celestial: {
            name: "Celestial Springs Spa Resort",
            balance: 4200000, // $4.2M (matching business proposal revenue)
            accountNumber: "****4567",
            type: "Business Operating",
            directDeposit: {
                employer: "Resort Revenue System",
                amount: 343200, // $343.2K annual CEO salary from proposal
                frequency: "Annual", 
                nextDeposit: "2025-11-30"
            },
            cards: {
                debit: { type: "business", number: "****2345", status: "Active", expires: "08/27" },
                credit: { type: "business", number: "****6789", status: "Active", expires: "06/28", balance: 125000 }
            },
            cryptoWallet: {
                bitcoin: { balance: 8.2, value: 553500 },
                ethereum: { balance: 45.3, value: 120045 },
                litecoin: { balance: 500.0, value: 36500 },
                cardano: { balance: 850000, value: 323000 },
                solana: { balance: 1200.0, value: 174000 },
                whatley: { balance: 150000, value: 1875000 }
            }
        },
        peaceful: {
            name: "Peaceful Academy Educational",
            balance: 750000, // $750K (increased educational funding)
            accountNumber: "****2345",
            type: "Educational Institution",
            directDeposit: {
                employer: "Academy Board of Directors",
                amount: 180000, // $180K annual Principal salary
                frequency: "Annual",
                nextDeposit: "2025-10-31"
            },
            cards: {
                debit: { type: "business", number: "****3456", status: "Active", expires: "09/27" },
                credit: { type: "classic", number: "****7890", status: "Active", expires: "11/27", balance: 15000 }
            },
            cryptoWallet: {
                bitcoin: { balance: 2.1, value: 141750 },
                ethereum: { balance: 12.8, value: 33920 },
                litecoin: { balance: 150.0, value: 10950 },
                cardano: { balance: 200000, value: 76000 },
                solana: { balance: 250.0, value: 36250 },
                whatley: { balance: 50000, value: 625000 }
            }
        },
        // Bank Employee Accounts
        bankEmployees: {
            name: "Whatley National Bank - Employee Banking",
            balance: 25000000, // $25M operational fund
            accountNumber: "****BANK",
            type: "Bank Operations",
            location: "Multi-location",
            cards: {
                debit: { type: "business", number: "****BANK", status: "Active", expires: "12/29" }
            }
        }
    };

// Quick business account login
function quickBusinessLogin(accountType) {
    console.log(`Quick login for ${accountType} account`);
    
    if (businessAccounts[accountType]) {
        currentUser = businessAccounts[accountType];
        
        // Hide modals
        const loginModal = document.getElementById('loginModal');
        const getStartedModal = document.getElementById('getStartedModal');
        if (loginModal) loginModal.style.display = 'none';
        if (getStartedModal) getStartedModal.style.display = 'none';
        
        // Show dashboard
        const dashboard = document.getElementById('dashboard');
        if (dashboard) {
            document.querySelectorAll('.hero, .about, .services, .crypto-banking, .contact').forEach(section => {
                section.style.display = 'none';
            });
            dashboard.style.display = 'block';
            updateDashboardContent();
            dashboard.scrollIntoView({ behavior: 'smooth' });
        }
        
        // Update login button
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.textContent = 'Dashboard';
        }
        
        showNotification(`Welcome to ${currentUser.businessName}!`, 'success');
    } else {
        showNotification(`Account ${accountType} not found`, 'error');
    }
}

// Global test login function
function testLogin() {
    console.log('Test login function called');
    
    // Hide the login modal
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.style.display = 'none';
    }
    
    // Show the dashboard
    const dashboard = document.getElementById('dashboard');
    if (dashboard) {
        // Hide main content sections
        document.querySelectorAll('.hero, .about, .services, .crypto-banking, .contact').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show dashboard
        dashboard.style.display = 'block';
        
        // Update dashboard with Jennifer's info
        updateDashboardContent();
        
        // Scroll to dashboard
        dashboard.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Update login button
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.textContent = 'Dashboard';
    }
    
    showNotification('Login Successful! Welcome Jennifer Whatley!', 'success');
    console.log('Test login completed successfully');
}

// Update dashboard content
function updateDashboardContent() {
    const user = getCurrentUser();
    if (!user) {
        console.error('No current user found for dashboard update');
        return;
    }

    console.log('Updating dashboard content for user:', user.username);

    // Update dashboard title
    const dashboardTitle = document.getElementById('dashboardTitle');
    if (dashboardTitle) {
        dashboardTitle.textContent = `${user.businessName || user.name} - Dashboard`;
    }

    // Basic account info
    const userName = document.getElementById('userName');
    if (userName) userName.textContent = user.name || user.businessName;
    
    // Update total balance display based on display mode
    let displayBalance = user.balance;
    let accountTypeText = 'Business Banking';
    
    if (user.displayMode === 'personal' && user.username === 'jennifer.whatley') {
        // Personal account mode - show checking account balance only
        if (user.accounts && user.accounts.checking) {
            displayBalance = user.accounts.checking.balance;
        }
        accountTypeText = 'Personal Banking';
        console.log('Displaying personal account - balance:', displayBalance);
    } else {
        // Business account mode - show total portfolio value
        if (user.username === 'jennifer.whatley' && user.accounts) {
            // For Jennifer, calculate total across all accounts
            displayBalance = (user.accounts.checking?.balance || 0) + 
                           (user.accounts.trust?.balance || 0) + 
                           (user.accounts.crypto?.balance || 0);
        } else {
            // For other business accounts, use main balance
            displayBalance = user.balance;
        }
        accountTypeText = user.businessType || 'Business Banking';
        console.log('Displaying business account - balance:', displayBalance);
    }

    const accountBalance = document.getElementById('accountBalance');
    if (accountBalance) accountBalance.textContent = `$${displayBalance.toLocaleString()}.00`;
    
    const totalBalance = document.getElementById('totalBalance');
    if (totalBalance) totalBalance.textContent = `$${displayBalance.toLocaleString()}.00`;
    
    const accountNumber = document.getElementById('accountNumber');
    if (accountNumber) accountNumber.textContent = user.accountNumber || '****-****-****-0001';

    const primaryAccountNumber = document.getElementById('primaryAccountNumber');
    if (primaryAccountNumber) {
        if (user.accounts && user.accounts.checking) {
            primaryAccountNumber.textContent = user.accounts.checking.accountNumber;
        } else {
            primaryAccountNumber.textContent = user.accountNumber || '****-****-****-0001';
        }
    }

    const accountTypeDisplay = document.getElementById('accountTypeDisplay');
    if (accountTypeDisplay) {
        accountTypeDisplay.textContent = accountTypeText;
    }
    
    // Update individual account cards if they exist
    if (user.accounts) {
        Object.keys(user.accounts).forEach(accountType => {
            const balanceElement = document.getElementById(`${accountType}Balance`);
            if (balanceElement) {
                balanceElement.textContent = `$${user.accounts[accountType].balance.toLocaleString()}.00`;
            }
        });
    }
    
    // Update direct deposit status
    updateDirectDepositStatus();
    
    // Update transactions
    updateTransactionsList();
}

// Update direct deposit status
function updateDirectDepositStatus() {
    const user = getCurrentUser();
    if (!user) return;

    const directDepositStatus = document.getElementById('directDepositStatus');
    if (directDepositStatus) {
        if (user.directDeposit && user.directDeposit.isSetup) {
            directDepositStatus.innerHTML = `
                <strong>✅ Direct Deposit Active</strong><br>
                Employer: ${user.directDeposit.employer}<br>
                Position: ${user.directDeposit.position}<br>
                Salary: $${user.directDeposit.salary.toLocaleString()}/year<br>
                Frequency: ${user.directDeposit.frequency}
            `;
        } else {
            directDepositStatus.innerHTML = `
                <strong>⚠️ Direct Deposit Not Setup</strong><br>
                <small>Click "Setup Job Direct Deposit" to configure</small>
            `;
        }
    }
}

// Update transactions list
function updateTransactionsList() {
    const user = getCurrentUser();
    if (!user) return;

    const transactionsList = document.getElementById('transactionsList');
    if (transactionsList && user.transactions) {
        transactionsList.innerHTML = user.transactions.map(transaction => `
            <div class="transaction-item">
                <div class="transaction-info">
                    <span class="transaction-date">${transaction.date}</span>
                    <span class="transaction-description">${transaction.description}</span>
                    <span class="transaction-type">${transaction.type}</span>
                </div>
                <div class="transaction-amount positive">+$${transaction.amount.toLocaleString()}</div>
            </div>
        `).join('');
    }
}

// Setup direct deposit
    // Process full payroll for Celestial Springs (150 employees)
    function processFullCelestialPayroll(businessKey) {
        if (businessKey !== 'celestial') {
            return processPayroll(businessKey); // Use regular payroll for other accounts
        }

        const business = businessAccounts[businessKey];
        const payrollData = celestialPayrollData;
        
        // Calculate bi-weekly payroll (26 pay periods per year)
        const biWeeklyPayroll = payrollData.monthlyPayroll / 2; // $625,000
        const biWeeklyTaxes = payrollData.payrollTaxes.totalMonthly / 2; // $85,562.50
        const biWeeklyBenefits = payrollData.employeeBenefits.totalMonthlyBenefits / 2; // $76,125
        const totalBiWeeklyPayroll = biWeeklyPayroll + biWeeklyTaxes + biWeeklyBenefits; // $786,687.50

        // Check sufficient funds
        if (business.balance < totalBiWeeklyPayroll) {
            return {
                success: false,
                error: 'Insufficient funds for full payroll processing',
                required: totalBiWeeklyPayroll,
                available: business.balance,
                shortfall: totalBiWeeklyPayroll - business.balance
            };
        }

        // Process payroll
        business.balance -= totalBiWeeklyPayroll;
        
        // Update current user balance if viewing this account
        if (currentUser.name === business.name) {
            currentUser.balance = business.balance;
        }

        // Add comprehensive transaction record
        if (!currentUser.transactions) {
            currentUser.transactions = [];
        }
        
        currentUser.transactions.unshift({
            id: 'PAYROLL' + Date.now(),
            type: 'Full Payroll Processing',
            amount: -totalBiWeeklyPayroll,
            description: `Bi-weekly Payroll - ${payrollData.totalEmployees} Employees`,
            date: new Date().toLocaleDateString(),
            category: 'Payroll',
            breakdown: {
                grossPay: biWeeklyPayroll,
                employerTaxes: biWeeklyTaxes,
                employeeBenefits: biWeeklyBenefits,
                total: totalBiWeeklyPayroll
            }
        });

        return {
            success: true,
            totalEmployees: payrollData.totalEmployees,
            grossPayroll: biWeeklyPayroll,
            employerTaxes: biWeeklyTaxes,
            employeeBenefits: biWeeklyBenefits,
            totalPayroll: totalBiWeeklyPayroll,
            remainingBalance: business.balance,
            payPeriod: 'Bi-weekly',
            nextPayDate: '2025-10-31'
        };
    }

    // Expense Management Functions
    function processMonthlyExpenses(businessKey) {
        if (businessKey !== 'celestial') {
            return { success: false, error: 'Expense management only available for Celestial Springs' };
        }

        const business = businessAccounts[businessKey];
        const expenses = celestialExpenseData.financialSummary.totalMonthlyExpenses;
        
        if (business.balance < expenses) {
            return {
                success: false,
                error: 'Insufficient funds for monthly expenses',
                required: expenses,
                available: business.balance,
                shortfall: expenses - business.balance
            };
        }

        // Process expenses
        business.balance -= expenses;
        
        // Update current user balance if viewing this account
        if (currentUser.name === business.name) {
            currentUser.balance = business.balance;
        }

        // Add transaction record
        if (!currentUser.transactions) {
            currentUser.transactions = [];
        }
        
        currentUser.transactions.unshift({
            id: 'EXPENSES' + Date.now(),
            type: 'Monthly Expenses',
            amount: -expenses,
            description: 'Full Monthly Operating Expenses - All Categories',
            date: new Date().toLocaleDateString(),
            category: 'Operating Expenses',
            breakdown: celestialExpenseData.financialSummary
        });

        return {
            success: true,
            totalExpenses: expenses,
            remainingBalance: business.balance,
            categories: Object.keys(celestialExpenseData.monthlyExpenses).length,
            cashFlowStatus: business.balance > (expenses * 3) ? 'Healthy' : 'Monitor Closely'
        };
    }

    function getExpensesByCategory(category) {
        return celestialExpenseData.monthlyExpenses[category] || {};
    }

    function generateExpenseReport() {
        const expenses = celestialExpenseData.monthlyExpenses;
        const summary = celestialExpenseData.financialSummary;
        
        let report = {
            categories: {},
            topExpenses: [],
            cashFlow: {
                revenue: summary.monthlyRevenue,
                totalExpenses: summary.totalMonthlyExpenses,
                netIncome: summary.monthlyNetIncome,
                operatingProfit: summary.operatingProfitBeforeLoan,
                loanPayment: expenses.loanPayments.businessDevelopmentLoan.amount
            }
        };

        // Calculate category totals
        Object.keys(expenses).forEach(category => {
            let categoryTotal = 0;
            Object.values(expenses[category]).forEach(expense => {
                categoryTotal += expense.amount;
            });
            report.categories[category] = categoryTotal;
        });

        return report;
    }

    // Enhanced payroll processing function
    function processPayroll(businessKey) {
        const employees = employeeDatabase[businessKey] || [];
        const business = businessAccounts[businessKey];
        let totalPayroll = 0;
        let processedEmployees = 0;

        employees.forEach(employee => {
            if (employee.directDepositActive) {
                let payAmount = 0;
                
                // Calculate pay based on frequency
                switch(employee.payFrequency) {
                    case 'Monthly':
                        payAmount = employee.salary / 12;
                        break;
                    case 'Bi-weekly':
                        payAmount = employee.salary / 26;
                        break;
                    case 'Weekly':
                        payAmount = employee.salary / 52;
                        break;
                    default:
                        payAmount = employee.salary / 12;
                }

                totalPayroll += payAmount;
                processedEmployees++;
                
                // Update YTD earnings
                employee.ytdEarnings += payAmount;
                
                // Add transaction record
                if (!currentUser.transactions) {
                    currentUser.transactions = [];
                }
                
                currentUser.transactions.unshift({
                    id: 'PAY' + Date.now() + Math.random().toString(36).substr(2, 5),
                    type: 'Payroll Deposit',
                    amount: -payAmount,
                    description: `Payroll - ${employee.name} (${employee.position})`,
                    date: new Date().toLocaleDateString(),
                    category: 'Payroll'
                });
            }
        });

        // Deduct total payroll from business account
        business.balance -= totalPayroll;
        
        // Update current user balance if viewing this account
        if (currentUser.name === business.name) {
            currentUser.balance = business.balance;
        }

        return {
            totalPayroll: totalPayroll,
            employeesProcessed: processedEmployees,
            remainingBalance: business.balance
        };
    }

    // Get employee list for current business
    function getEmployeeList(businessKey) {
        return employeeDatabase[businessKey] || [];
    }

    // Update employee direct deposit settings
    function updateEmployeeDirectDeposit(businessKey, employeeId, settings) {
        const employees = employeeDatabase[businessKey] || [];
        const employee = employees.find(emp => emp.id === employeeId);
        
        if (employee) {
            Object.assign(employee, settings);
            return true;
        }
        return false;
    }

    // Add new employee
    function addEmployee(businessKey, employeeData) {
        if (!employeeDatabase[businessKey]) {
            employeeDatabase[businessKey] = [];
        }
        
        const newEmployee = {
            id: 'EMP' + Date.now(),
            directDepositActive: true,
            ytdEarnings: 0,
            nextPayDate: new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0],
            ...employeeData
        };
        
        employeeDatabase[businessKey].push(newEmployee);
        return newEmployee;
    }

    function setupDirectDeposit() {
    const employer = document.getElementById('jobEmployer');
    const position = document.getElementById('jobPosition');
    const salary = document.getElementById('jobSalary');
    const frequency = document.getElementById('jobFrequency');
    
    if (!employer || !position || !salary || !frequency) {
        showNotification('Direct deposit form elements not found', 'error');
        return;
    }
    
    const employerValue = employer.value.trim();
    const positionValue = position.value.trim();
    const salaryValue = parseFloat(salary.value);
    const frequencyValue = frequency.value;
    
    if (!employerValue || !positionValue || !salaryValue || salaryValue <= 0) {
        showNotification('Please fill in all required fields with valid information', 'error');
        return;
    }
    
    // Update user data
    currentUser.directDeposit = {
        isSetup: true,
        employer: employerValue,
        position: positionValue,
        salary: salaryValue,
        frequency: frequencyValue
    };
    
    // Calculate deposit amount based on frequency
    let depositAmount = 0;
    switch(frequencyValue) {
        case 'weekly':
            depositAmount = salaryValue / 52;
            break;
        case 'bi-weekly':
            depositAmount = salaryValue / 26;
            break;
        case 'monthly':
            depositAmount = salaryValue / 12;
            break;
        case 'annually':
            depositAmount = salaryValue;
            break;
    }
    
    // Add deposit to account
    currentUser.balance += depositAmount;
    currentUser.accounts.checking.balance += depositAmount;
    
    // Add transaction
    const today = new Date().toLocaleDateString();
    currentUser.transactions.unshift({
        date: today,
        description: `${frequencyValue} Direct Deposit - ${employerValue}`,
        amount: depositAmount,
        type: 'Direct Deposit'
    });
    
    // Update dashboard
    updateDashboardContent();
    
    // Hide modal
    const jobModal = document.getElementById('jobModal');
    if (jobModal) {
        jobModal.style.display = 'none';
    }
    
    // Clear form
    employer.value = '';
    position.value = '';
    salary.value = '';
    frequency.value = 'monthly';
    
    showNotification(`Direct deposit setup complete! First ${frequencyValue} payment of $${depositAmount.toLocaleString()} deposited.`, 'success');
}

// Process manual deposit
function processDeposit() {
    const depositAmount = document.getElementById('depositAmount');
    const depositDescription = document.getElementById('depositDescription');
    
    if (!depositAmount || !depositDescription) {
        showNotification('Deposit form elements not found', 'error');
        return;
    }
    
    const amount = parseFloat(depositAmount.value);
    const description = depositDescription.value.trim();
    
    if (!amount || amount <= 0) {
        showNotification('Please enter a valid deposit amount', 'error');
        return;
    }
    
    if (!description) {
        showNotification('Please enter a deposit description', 'error');
        return;
    }

    // Get current user
    const user = getCurrentUser();
    if (!user) {
        showNotification('No user logged in', 'error');
        return;
    }
    
    // Add deposit to account
    user.balance += amount;
    if (user.accounts && user.accounts.checking) {
        user.accounts.checking.balance += amount;
    }
    
    // Add transaction
    const today = new Date().toLocaleDateString();
    if (!user.transactions) user.transactions = [];
    user.transactions.unshift({
        date: today,
        description: description,
        amount: amount,
        type: 'Manual Deposit'
    });

    // Save updated user data
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem(`user_${user.username}`, JSON.stringify(user));
    
    // Update dashboard
    updateDashboardContent();
    
    // Hide modal
    const depositModal = document.getElementById('depositModal');
    if (depositModal) depositModal.style.display = 'none';
    
    // Clear form
    depositAmount.value = '';
    depositDescription.value = '';
    
    showNotification(`Deposit of $${amount.toFixed(2)} processed successfully!`, 'success');
}

// duplicate cleanup: removed repeated DOM operations and extra closing brace

// Process transfer
function processTransfer() {
    const transferTo = document.getElementById('transferTo');
    const transferAmount = document.getElementById('transferAmount');
    const transferMemo = document.getElementById('transferMemo');
    
    if (!transferTo || !transferAmount || !transferMemo) {
        showNotification('Transfer form elements not found', 'error');
        return;
    }
    
    const toAccount = transferTo.value;
    const amount = parseFloat(transferAmount.value);
    const memo = transferMemo.value.trim();
    
    if (!toAccount || !amount || amount <= 0) {
        showNotification('Please fill in all required fields with valid information', 'error');
        return;
    }

    // Get current user
    const user = getCurrentUser();
    if (!user) {
        showNotification('No user logged in', 'error');
        return;
    }
    
    if (user.balance < amount) {
        showNotification('Insufficient funds for this transfer', 'error');
        return;
    }
    
    // Process transfer
    user.balance -= amount;
    if (user.accounts && user.accounts.checking) {
        user.accounts.checking.balance -= amount;
    }
    
    // Add transaction
    const today = new Date().toLocaleDateString();
    if (!user.transactions) user.transactions = [];
    user.transactions.unshift({
        date: today,
        description: `Transfer to ${toAccount} - ${memo}`,
        amount: -amount,
        type: 'Transfer Out'
    });

    // Save updated user data
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem(`user_${user.username}`, JSON.stringify(user));
    
    // Update dashboard
    updateDashboardContent();
    
    // Hide modal
    const transferModal = document.getElementById('transferModal');
    if (transferModal) {
        transferModal.style.display = 'none';
    }
    
    // Clear form
    transferTo.value = '';
    transferAmount.value = '';
    transferMemo.value = '';
    
    showNotification(`Transfer of $${amount.toFixed(2)} completed successfully!`, 'success');
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 10000;
        font-family: Arial, sans-serif;
        font-size: 14px;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        max-width: 400px;
        word-wrap: break-word;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', function() {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Simple modal opening function
function openLoginModal() {
    console.log('Opening login modal');
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.style.display = 'block';
    } else {
        console.error('Login modal not found');
    }
}

// Handle login functionality
function handleLogin() {
    console.log('Processing login...');
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const accountType = document.getElementById('accountType').value;

    console.log('Login attempt:', { username, accountType });

    if (!username || !password || !accountType) {
        alert('Please fill in all fields');
        return;
    }

    // Check for predefined users first (respect account type selection)

    const user = {
        'jennifer.whatley': {
            password: 'whatley2024',
            name: 'Jennifer Whatley',
            accountType: 'executive',
            balance: 1502000000, // $1.502B
            businessName: 'Jennifer Whatley - Executive Account',
            accounts: {
                checking: { name: 'Premium Checking', balance: 500000000.00, accountNumber: '****-****-****-0001' },
                trust: { name: 'Trust Account', balance: 500000000.00, accountNumber: '****-****-****-0002' },
                crypto: { name: 'Crypto Portfolio', balance: 502000000.00, accountNumber: '****-****-****-0003' }
            },
            transactions: []
        },
        'celestial.spa': {
            password: 'spa2024',
            name: 'Celestial Springs',
            accountType: 'business',
            balance: 4200000, // $4.2M
            businessName: 'Celestial Spring Spa & Resort',
            transactions: []
        },
        'peaceful.academy': {
            password: 'academy2024',
            name: 'Peaceful Academy',
            accountType: 'business',
            balance: 750000, // $750K
            businessName: 'Peaceful Spirit Academy',
            transactions: []
        },
        'dionne.whatley': {
            password: 'dionne2024',
            name: 'Dionne Whatley',
            accountType: 'executive',
            balance: 2000000, // $2M total
            businessName: 'Dionne Whatley - Executive VP Account',
            accounts: {
                checking: { name: 'Executive Checking', balance: 500000.00 },
                trust: { name: 'Executive Trust Fund', balance: 1000000.00 },
                crypto: { name: 'Crypto Investment Portfolio', balance: 500000.00 }
            },
            transactions: [
                { date: '2024-01-15', description: 'Executive VP Monthly Salary', amount: 200000, type: 'Direct Deposit' },
                { date: '2024-01-10', description: 'Trust Fund Dividend', amount: 50000, type: 'Credit' },
                { date: '2024-01-05', description: 'Crypto Portfolio Gain', amount: 25000, type: 'Investment' }
            ]
        }
    }[username];
    if (user && user.password === password) {
        console.log('Predefined user login successful');
        
        // Get or create user with transactions
        let fullUser = JSON.parse(localStorage.getItem(`user_${username}`)) || {
            username: username,
            ...user,
            transactions: user.transactions || []
        };

        // Respect the selected account type
        if (accountType === 'personal' && username === 'jennifer.whatley') {
            fullUser.displayMode = 'personal';
            fullUser.balance = fullUser.accounts.checking.balance;
        } else {
            fullUser.displayMode = 'business';
        }

        // Store current user
        currentUser = fullUser;
        localStorage.setItem('currentUser', JSON.stringify(fullUser));
        localStorage.setItem(`user_${username}`, JSON.stringify(fullUser));

        // Close modal and show dashboard
        document.getElementById('loginModal').style.display = 'none';
        showDashboard();
        return;
    }

    // Check business accounts if not found in predefined users
    const businessAccount = businessAccounts[username];
    if (businessAccount && businessAccount.password === password) {
        console.log('Business account login successful');
        
        // Store current user in localStorage
        currentUser = {
            username: username,
            accountType: 'business',
            businessName: businessAccount.businessName,
            balance: businessAccount.balance || businessAccount.accounts?.primary?.balance || 0,
            transactions: [],
            ...businessAccount
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // Close modal and show dashboard
        document.getElementById('loginModal').style.display = 'none';
        showDashboard();
        return;
    }

    // If no match found
    alert('Invalid username or password. Please try again.');
    console.log('Login failed - invalid credentials');
}

// Show dashboard after successful login
function showDashboard() {
    console.log('Showing dashboard...');
    
    // Hide the main website content
    const heroSection = document.querySelector('.hero');
    const aboutSection = document.querySelector('.about');
    const servicesSection = document.querySelector('.services');
    const cryptoSection = document.querySelector('.crypto');
    const contactSection = document.querySelector('.contact');
    
    if (heroSection) heroSection.style.display = 'none';
    if (aboutSection) aboutSection.style.display = 'none';
    if (servicesSection) servicesSection.style.display = 'none';
    if (cryptoSection) cryptoSection.style.display = 'none';
    if (contactSection) contactSection.style.display = 'none';

    // Use existing dashboard from HTML
    const dashboardElement = document.getElementById('dashboard');
    if (dashboardElement) {
        dashboardElement.style.display = 'block';
        updateDashboardContent();
    } else {
        console.error('Dashboard element not found in HTML');
    }
}

// Main dashboard update function
function updateDashboard() {
    console.log('Updating dashboard...');
    
    const currentUser = getCurrentUser();
    if (!currentUser) {
        console.error('No current user found');
        return;
    }

    // Create dashboard HTML if it doesn't exist
    const dashboardElement = document.getElementById('dashboard');
    if (dashboardElement && !dashboardElement.innerHTML) {
        dashboardElement.innerHTML = `
            <div class="container">
                <div class="dashboard-header">
                    <h2 id="dashboardTitle">Account Dashboard</h2>
                    <button id="logoutBtn" class="btn btn-secondary">Logout</button>
                </div>
                
                <!-- Account Overview -->
                <div class="account-overview">
                    <div class="account-card">
                        <h3>Total Portfolio Value</h3>
                        <div class="balance" id="totalBalance">$0.00</div>
                        <div class="account-info">
                            <p>Primary Account: <span id="primaryAccountNumber">****-****-****-1234</span></p>
                            <p>Type: <span id="accountTypeDisplay">Business</span></p>
                        </div>
                    </div>
                    
                    <div class="account-card">
                        <h3>Quick Actions</h3>
                        <div class="quick-actions">
                            <button class="btn btn-primary" id="transferBtn">Transfer Funds</button>
                            <button class="btn btn-success" id="depositBtn">Deposit</button>
                            <button class="btn btn-info" id="statementBtn">Statement</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Add logout functionality
        document.getElementById('logoutBtn').addEventListener('click', logout);
    }

    // Update dashboard content
    updateDashboardContent();
}

// Get current user from localStorage
function getCurrentUser() {
    const currentUserData = localStorage.getItem('currentUser');
    return currentUserData ? JSON.parse(currentUserData) : null;
}

// Test login function (for quick access)
function testLogin() {
    document.getElementById('username').value = 'jennifer.whatley';
    document.getElementById('password').value = 'whatley2024';
    document.getElementById('accountType').value = 'personal';
    handleLogin();
}

// Logout function
function logout() {
    localStorage.removeItem('currentUser');
    location.reload();
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Simple login system loaded');
    
    // Clear any existing focus locks and reset page state
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-open');
    
    // Remove any existing focus traps
    const allModals = document.querySelectorAll('.modal');
    allModals.forEach(modal => {
        modal.style.display = 'none';
        modal.removeAttribute('aria-hidden');
    });

    // Show system status notification
    setTimeout(() => {
        showNotification('Banking System Ready! Fixed: Button functionality, account balance display, login account type selection. Try Test Login for Jennifer Whatley account.', 'success');
    }, 2000);
    
    // Header login button
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Header login button clicked');
            clearFocusLock(); // Clear any focus locks
            openLoginModal();
        });
    }

    // Login form submission
    const loginForm = document.getElementById('loginForm');
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    
    if (loginSubmitBtn) {
        loginSubmitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Login submit button clicked');
            handleLogin();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Login form submitted');
            handleLogin();
        });
    }
    
    // Get started button
    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Get started button clicked');
            const getStartedModal = document.getElementById('getStartedModal');
            if (getStartedModal) {
                getStartedModal.style.display = 'block';
            }
        });
    }

    // Dashboard button event listeners
    setupDashboardButtons();

    // Modal close buttons
    setupModalCloseButtons();

    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }

    console.log('All event listeners set up successfully');
});

// Setup dashboard button event listeners
function setupDashboardButtons() {
    // Transfer button
    const transferBtn = document.getElementById('transferBtn');
    if (transferBtn) {
        transferBtn.addEventListener('click', function() {
            console.log('Transfer button clicked');
            const transferModal = document.getElementById('transferModal');
            if (transferModal) {
                transferModal.style.display = 'block';
            } else {
                showNotification('Transfer functionality coming soon!', 'info');
            }
        });
    }

    // Deposit button
    const depositBtn = document.getElementById('depositBtn');
    if (depositBtn) {
        depositBtn.addEventListener('click', function() {
            console.log('Deposit button clicked');
            const depositModal = document.getElementById('depositModal');
            if (depositModal) {
                depositModal.style.display = 'block';
            } else {
                showNotification('Deposit functionality coming soon!', 'info');
            }
        });
    }

    // Job Deposit Setup button
    const jobDepositBtn = document.getElementById('jobDepositBtn');
    if (jobDepositBtn) {
        jobDepositBtn.addEventListener('click', function() {
            console.log('Job deposit setup button clicked');
            const jobDepositModal = document.getElementById('jobDepositModal');
            if (jobDepositModal) {
                jobDepositModal.style.display = 'block';
            } else {
                showNotification('Job deposit setup functionality coming soon!', 'info');
            }
        });
    }

    // Cards button
    const cardsBtn = document.getElementById('cardsBtn');
    if (cardsBtn) {
        cardsBtn.addEventListener('click', function() {
            console.log('Cards button clicked');
            const cardOrderModal = document.getElementById('cardOrderModal');
            if (cardOrderModal) {
                cardOrderModal.style.display = 'block';
            } else {
                showNotification('Card services functionality coming soon!', 'info');
            }
        });
    }

    // Crypto button
    const cryptoBtn = document.getElementById('cryptoBtn');
    if (cryptoBtn) {
        cryptoBtn.addEventListener('click', function() {
            console.log('Crypto button clicked');
            const cryptoModal = document.getElementById('cryptoModal');
            if (cryptoModal) {
                cryptoModal.style.display = 'block';
            } else {
                showNotification('Crypto wallet functionality coming soon!', 'info');
            }
        });
    }

    // Employee Management button
    const employeeBtn = document.getElementById('employeeBtn');
    if (employeeBtn) {
        employeeBtn.addEventListener('click', function() {
            console.log('Employee management button clicked');
            const employeeSection = document.getElementById('employeeManagement');
            if (employeeSection) {
                // Toggle visibility
                employeeSection.style.display = employeeSection.style.display === 'none' ? 'block' : 'none';
            } else {
                showNotification('Employee management functionality coming soon!', 'info');
            }
        });
    }

    // Expense Management button
    const expenseBtn = document.getElementById('expenseBtn');
    if (expenseBtn) {
        expenseBtn.addEventListener('click', function() {
            console.log('Expense management button clicked');
            const expenseSection = document.getElementById('expenseManagement');
            if (expenseSection) {
                // Toggle visibility
                expenseSection.style.display = expenseSection.style.display === 'none' ? 'block' : 'none';
            } else {
                showNotification('Expense management functionality coming soon!', 'info');
            }
        });
    }

    // Bank Staff button
    const bankStaffBtn = document.getElementById('bankStaffBtn');
    if (bankStaffBtn) {
        bankStaffBtn.addEventListener('click', function() {
            console.log('Bank staff button clicked');
            showNotification('Bank staff management functionality coming soon!', 'info');
        });
    }

    // Payroll button
    const payrollBtn = document.getElementById('payrollBtn');
    if (payrollBtn) {
        payrollBtn.addEventListener('click', function() {
            console.log('Payroll button clicked');
            showNotification('Payroll processing functionality coming soon!', 'info');
        });
    }

    // Loan Services button
    const loanBtn = document.getElementById('loanBtn');
    if (loanBtn) {
        loanBtn.addEventListener('click', function() {
            console.log('Loan services button clicked');
            const loanSection = document.getElementById('loanServices');
            if (loanSection) {
                // Toggle visibility
                loanSection.style.display = loanSection.style.display === 'none' ? 'block' : 'none';
            } else {
                showNotification('Loan services functionality coming soon!', 'info');
            }
        });
    }

    console.log('Dashboard button event listeners set up');
}

// Setup modal close buttons
function setupModalCloseButtons() {
    const closeButtons = document.querySelectorAll('.close, .modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Click outside modal to close
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}
const getStartedBtn = document.getElementById('getStartedBtn');
if (getStartedBtn) {
    getStartedBtn.addEventListener('click', function(e) {
        console.log('Get started button clicked');
        const getStartedModal = document.getElementById('getStartedModal');
        if (getStartedModal) {
            getStartedModal.style.display = 'block';
        }
    });
}

// Direct deposit button
const depositBtn = document.getElementById('depositBtn');
if (depositBtn) {
    depositBtn.addEventListener('click', function() {
        console.log('Direct deposit button clicked');
        const depositModal = document.getElementById('depositModal');
        if (depositModal) {
            depositModal.style.display = 'block';
        }
    });
}

// Job direct deposit button
const jobDepositBtn = document.getElementById('jobDepositBtn');
if (jobDepositBtn) {
    jobDepositBtn.addEventListener('click', function() {
        console.log('Job direct deposit button clicked');
        const jobModal = document.getElementById('jobDepositModal');
        if (jobModal) {
            jobModal.style.display = 'block';
        }
    });
}

// Transfer button
const transferBtn = document.getElementById('transferBtn');
if (transferBtn) {
    transferBtn.addEventListener('click', function() {
        console.log('Transfer button clicked');
        const transferModal = document.getElementById('transferModal');
        if (transferModal) {
            transferModal.style.display = 'block';
        }
    });
}

// Direct deposit form submission
const depositForm = document.getElementById('depositForm');
if (depositForm) {
    depositForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Processing manual deposit');
        processDeposit();
    });
}

// Job direct deposit form submission
const jobForm = document.getElementById('jobForm');
if (jobForm) {
    jobForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Setting up direct deposit');
        setupDirectDeposit();
    });
}

// Transfer form submission
const transferForm = document.getElementById('transferForm');
if (transferForm) {
    transferForm.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Processing transfer');
        processTransfer();
    });
}

// Get Started modal options
const goToLoginBtn = document.getElementById('goToLoginBtn');
if (goToLoginBtn) {
    goToLoginBtn.addEventListener('click', function() {
        const getStartedModal = document.getElementById('getStartedModal');
        const loginModal = document.getElementById('loginModal');
        if (getStartedModal) getStartedModal.style.display = 'none';
        if (loginModal) loginModal.style.display = 'block';
        
        // Pre-fill Jennifer's credentials
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        if (username) username.value = 'jennifer';
        if (password) password.value = 'whatley2024';
    });
}
    
    const goToRegisterBtn = document.getElementById('goToRegisterBtn');
    if (goToRegisterBtn) {
        goToRegisterBtn.addEventListener('click', function() {
            const getStartedModal = document.getElementById('getStartedModal');
            const registerModal = document.getElementById('registerModal');
            if (getStartedModal) getStartedModal.style.display = 'none';
            if (registerModal) registerModal.style.display = 'block';
        });
    }
    
    // Expense Management Functions
    function showExpenseManagement() {
        // Hide other sections
        const multiAccountView = document.getElementById('multiAccountView');
        const businessDetails = document.getElementById('businessDetails');
        const employeeManagement = document.getElementById('employeeManagement');
        if (multiAccountView) multiAccountView.style.display = 'none';
        if (businessDetails) businessDetails.style.display = 'none';
        if (employeeManagement) employeeManagement.style.display = 'none';
        
        // Show expense management
        const expenseManagement = document.getElementById('expenseManagement');
        if (expenseManagement) {
            expenseManagement.style.display = 'block';
        }
    }

    function processAllMonthlyExpenses() {
        const accountKey = getCurrentAccountKey();
        
        if (accountKey !== 'celestial') {
            alert('Expense management is only available for Celestial Springs account.');
            return;
        }
        
        const result = processMonthlyExpenses(accountKey);
        
        if (result.success) {
            const summaryMessage = `
🏢 MONTHLY EXPENSES PROCESSED

💰 Total Expenses: $${result.totalExpenses.toLocaleString()}
📊 Expense Categories: ${result.categories}
💳 Remaining Balance: $${result.remainingBalance.toLocaleString()}
📈 Cash Flow Status: ${result.cashFlowStatus}

⚠️ Note: This includes the $2.08M loan payment
            `;
            alert(summaryMessage);
        } else {
            const errorMessage = `
❌ EXPENSE PROCESSING FAILED

💰 Required Amount: $${result.required.toLocaleString()}
💳 Available Balance: $${result.available.toLocaleString()}
🚫 Shortfall: $${result.shortfall.toLocaleString()}

Please ensure sufficient funds before processing expenses.
            `;
            alert(errorMessage);
        }
        
        updateBalanceDisplay();
    }

    function processOperatingExpensesOnly() {
        const accountKey = getCurrentAccountKey();
        
        if (accountKey !== 'celestial') {
            alert('Expense management is only available for Celestial Springs account.');
            return;
        }
        
        const business = businessAccounts[accountKey];
        const operatingExpenses = celestialExpenseData.financialSummary.operatingExpensesExcludingLoan;
        
        if (business.balance < operatingExpenses) {
            alert(`Insufficient funds for operating expenses.\nRequired: $${operatingExpenses.toLocaleString()}\nAvailable: $${business.balance.toLocaleString()}`);
            return;
        }
        
        business.balance -= operatingExpenses;
        if (currentUser.name === business.name) {
            currentUser.balance = business.balance;
        }
        
        alert(`Operating expenses processed!\n\nAmount: $${operatingExpenses.toLocaleString()}\nRemaining Balance: $${business.balance.toLocaleString()}\n\nNote: Loan payment ($2.08M) not included`);
        updateBalanceDisplay();
    }

    function generateFinancialReport() {
        const report = generateExpenseReport();
        
        let reportText = `
🏢 CELESTIAL SPRINGS FINANCIAL REPORT
Generated: ${new Date().toLocaleDateString()}

💰 REVENUE & CASH FLOW:
Monthly Revenue: $${report.cashFlow.revenue.toLocaleString()}
Total Expenses: $${report.cashFlow.totalExpenses.toLocaleString()}
Net Income: $${report.cashFlow.netIncome.toLocaleString()}
Operating Profit (before loan): $${report.cashFlow.operatingProfit.toLocaleString()}

📊 EXPENSE BREAKDOWN BY CATEGORY:
        `;
        
        Object.entries(report.categories).forEach(([category, amount]) => {
            const percentage = ((amount / report.cashFlow.totalExpenses) * 100).toFixed(1);
            reportText += `${category.toUpperCase()}: $${amount.toLocaleString()} (${percentage}%)\n`;
        });
        
        reportText += `
🏦 FINANCIAL ANALYSIS:
• Loan payment represents ${celestialExpenseData.financialSummary.loanPaymentPercentage}% of total expenses
• Need $${celestialExpenseData.financialSummary.targetAdditionalRevenue.toLocaleString()} additional monthly revenue for profitability
• Current occupancy: ${celestialExpenseData.financialSummary.currentOccupancyRate}% | Target: ${celestialExpenseData.financialSummary.targetOccupancyRate}%
• Break-even point requires ${((celestialExpenseData.financialSummary.targetOccupancyRate / celestialExpenseData.financialSummary.currentOccupancyRate - 1) * 100).toFixed(1)}% increase in occupancy
        `;
        
        alert(reportText);
    }
    
    // Employee Management Functions
    function showEmployeeManagement() {
        // Hide other sections
        const multiAccountView = document.getElementById('multiAccountView');
        const businessDetails = document.getElementById('businessDetails');
        if (multiAccountView) multiAccountView.style.display = 'none';
        if (businessDetails) businessDetails.style.display = 'none';
        
        // Show employee management
        const employeeManagement = document.getElementById('employeeManagement');
        if (employeeManagement) {
            employeeManagement.style.display = 'block';
            loadEmployeeList();
        }
    }

        function loadEmployeeList() {
            const currentAccountKey = getCurrentAccountKey();
            const employees = getEmployeeList(currentAccountKey);
            const employeeListContainer = document.getElementById('employeeList');
            
            if (!employeeListContainer) return;
            
            if (employees.length === 0) {
                employeeListContainer.innerHTML = '<p>No employees found for this account.</p>';
                return;
            }
            
            // Special handling for Celestial Springs (show summary + sample employees)
            if (currentAccountKey === 'celestial') {
                let employeeHTML = `
                    <div class="employee-summary">
                        <h4>Celestial Springs Spa Resort - Employee Overview</h4>
                        <div class="summary-stats">
                            <div class="summary-item">
                                <span class="label">Total Employees:</span>
                                <span class="value">150</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Departments:</span>
                                <span class="value">Executive (4), Management (4), Professional (142)</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Pay Schedule:</span>
                                <span class="value">Bi-weekly (1st & 15th of month)</span>
                            </div>
                            <div class="summary-item">
                                <span class="label">Direct Deposit Account:</span>
                                <span class="value">WNB-PAYROLL-001</span>
                            </div>
                        </div>
                        <p><em>Showing key employees - Full roster of 150 employees processed during payroll</em></p>
                    </div>
                    <div class="employee-grid">
                `;
                
                employees.forEach(employee => {
                    const biWeeklyPay = employee.salary / 26;
                    
                    employeeHTML += `
                        <div class="employee-card" data-employee-id="${employee.id}">
                            <div class="employee-header">
                                <h4>${employee.name}</h4>
                                <span class="employee-status ${employee.directDepositActive ? 'active' : 'inactive'}">
                                    ${employee.directDepositActive ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                            <div class="employee-details">
                                <p><strong>Position:</strong> ${employee.position}</p>
                                <p><strong>Department:</strong> ${employee.department}</p>
                                <p><strong>Employee ID:</strong> ${employee.id}</p>
                                <p><strong>Hire Date:</strong> ${employee.hireDate || 'N/A'}</p>
                                <p><strong>Hourly Rate:</strong> $${employee.hourlyRate ? employee.hourlyRate.toFixed(2) : 'N/A'}</p>
                                <p><strong>Annual Salary:</strong> $${employee.salary.toLocaleString()}</p>
                                <p><strong>Annual Bonus:</strong> $${employee.annualBonus ? employee.annualBonus.toLocaleString() : '0'}</p>
                                <p><strong>Total Compensation:</strong> $${employee.totalCompensation ? employee.totalCompensation.toLocaleString() : employee.salary.toLocaleString()}</p>
                                <p><strong>Bi-weekly Pay:</strong> $${biWeeklyPay.toLocaleString()}</p>
                                <p><strong>YTD Earnings:</strong> $${employee.ytdEarnings.toLocaleString()}</p>
                                <p><strong>Bank Account:</strong> ${employee.bankAccount}</p>
                            </div>
                            <div class="employee-actions">
                                <button class="btn btn-small btn-primary" onclick="editEmployee('${employee.id}')">Edit</button>
                                <button class="btn btn-small ${employee.directDepositActive ? 'btn-warning' : 'btn-success'}" 
                                        onclick="toggleDirectDeposit('${employee.id}')">
                                    ${employee.directDepositActive ? 'Disable' : 'Enable'} DD
                                </button>
                                <button class="btn btn-small btn-info" onclick="payEmployee('${employee.id}')">Pay Now</button>
                            </div>
                        </div>
                    `;
                });
                
                employeeHTML += '</div>';
            } else {
                // Regular employee display for other accounts
                let employeeHTML = '<div class="employee-grid">';
                
                employees.forEach(employee => {
                    const monthlyPay = employee.payFrequency === 'Monthly' ? employee.salary / 12 : 
                                     employee.payFrequency === 'Bi-weekly' ? employee.salary / 26 : 
                                     employee.salary / 52;
                    
                    employeeHTML += `
                        <div class="employee-card" data-employee-id="${employee.id}">
                            <div class="employee-header">
                                <h4>${employee.name}</h4>
                                <span class="employee-status ${employee.directDepositActive ? 'active' : 'inactive'}">
                                    ${employee.directDepositActive ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                            <div class="employee-details">
                                <p><strong>Position:</strong> ${employee.position}</p>
                                <p><strong>Department:</strong> ${employee.department}</p>
                                <p><strong>Annual Salary:</strong> $${employee.salary.toLocaleString()}</p>
                                <p><strong>Pay Frequency:</strong> ${employee.payFrequency}</p>
                                <p><strong>Next Pay:</strong> ${employee.nextPayDate}</p>
                                <p><strong>YTD Earnings:</strong> $${employee.ytdEarnings.toLocaleString()}</p>
                            </div>
                            <div class="employee-actions">
                                <button class="btn btn-small btn-primary" onclick="editEmployee('${employee.id}')">Edit</button>
                                <button class="btn btn-small ${employee.directDepositActive ? 'btn-warning' : 'btn-success'}" 
                                        onclick="toggleDirectDeposit('${employee.id}')">
                                    ${employee.directDepositActive ? 'Disable' : 'Enable'} DD
                                </button>
                                <button class="btn btn-small btn-info" onclick="payEmployee('${employee.id}')">Pay Now</button>
                            </div>
                        </div>
                    `;
                });
                
                employeeHTML += '</div>';
            }
            
            employeeListContainer.innerHTML = employeeHTML;
        }    function getCurrentAccountKey() {
        // Determine current account key based on current user
        if (currentUser && currentUser.name) {
            if (currentUser.name.includes('Jennifer')) return 'jennifer';
            if (currentUser.name.includes('Celestial')) return 'celestial';
            if (currentUser.name.includes('Peaceful')) return 'peaceful';
        }
        return 'jennifer'; // default
    }

        function processCurrentPayroll() {
            const accountKey = getCurrentAccountKey();
            
            if (accountKey === 'celestial') {
                const result = processFullCelestialPayroll(accountKey);
                
                if (result.success) {
                    const summaryMessage = `
🏦 CELESTIAL SPRINGS PAYROLL PROCESSED

👥 Employees Paid: ${result.totalEmployees}
💰 Gross Payroll: $${result.grossPayroll.toLocaleString()}
🏛️ Employer Taxes: $${result.employerTaxes.toLocaleString()}
🏥 Employee Benefits: $${result.employeeBenefits.toLocaleString()}
📊 Total Deduction: $${result.totalPayroll.toLocaleString()}
💳 Remaining Balance: $${result.remainingBalance.toLocaleString()}

📅 Pay Period: ${result.payPeriod}
📅 Next Pay Date: ${result.nextPayDate}
                    `;
                    alert(summaryMessage);
                } else {
                    const errorMessage = `
❌ PAYROLL PROCESSING FAILED

💰 Required Amount: $${result.required.toLocaleString()}
💳 Available Balance: $${result.available.toLocaleString()}
🚫 Shortfall: $${result.shortfall.toLocaleString()}

Please ensure sufficient funds before processing payroll.
                    `;
                    alert(errorMessage);
                }
            } else {
                const result = processPayroll(accountKey);
                alert(`Payroll Processed!\n\nTotal Payroll: $${result.totalPayroll.toLocaleString()}\nEmployees Paid: ${result.employeesProcessed}\nRemaining Balance: $${result.remainingBalance.toLocaleString()}`);
            }
            
            // Refresh displays
            loadEmployeeList();
            updateBalanceDisplay();
        }    function payEmployee(employeeId) {
        const accountKey = getCurrentAccountKey();
        const employees = getEmployeeList(accountKey);
        const employee = employees.find(emp => emp.id === employeeId);
        
        if (!employee) {
            alert('Employee not found!');
            return;
        }
        
        let payAmount = 0;
        switch(employee.payFrequency) {
            case 'Monthly':
                payAmount = employee.salary / 12;
                break;
            case 'Bi-weekly':
                payAmount = employee.salary / 26;
                break;
            case 'Weekly':
                payAmount = employee.salary / 52;
                break;
            default:
                payAmount = employee.salary / 12;
        }
        
        const business = businessAccounts[accountKey];
        if (business.balance < payAmount) {
            alert('Insufficient funds for payroll!');
            return;
        }
        
        // Process individual payment
        business.balance -= payAmount;
        employee.ytdEarnings += payAmount;
        
        alert(`Payment processed for ${employee.name}\nAmount: $${payAmount.toLocaleString()}\nRemaining Balance: $${business.balance.toLocaleString()}`);
        
        // Refresh displays
        loadEmployeeList();
        updateBalanceDisplay();
    }

    function toggleDirectDeposit(employeeId) {
        const accountKey = getCurrentAccountKey();
        const employees = getEmployeeList(accountKey);
        const employee = employees.find(emp => emp.id === employeeId);
        
        if (employee) {
            employee.directDepositActive = !employee.directDepositActive;
            alert(`Direct deposit ${employee.directDepositActive ? 'enabled' : 'disabled'} for ${employee.name}`);
            loadEmployeeList();
        }
    }

    function updateBalanceDisplay() {
        if (currentUser && document.getElementById('totalBalance')) {
            document.getElementById('totalBalance').textContent = '$' + currentUser.balance.toLocaleString();
        }
    }

    function editEmployee(employeeId) {
        alert('Employee editing feature coming soon!');
    }

    function showAddEmployeeForm() {
        // Simple form for demonstration
        const name = prompt('Employee Name:');
        const position = prompt('Position:');
        const department = prompt('Department:');
        const salary = parseFloat(prompt('Annual Salary:'));
        const payFrequency = prompt('Pay Frequency (Monthly/Bi-weekly/Weekly):') || 'Monthly';
        
        if (name && position && department && salary) {
            const accountKey = getCurrentAccountKey();
            const newEmployee = addEmployee(accountKey, {
                name: name,
                position: position,
                department: department,
                salary: salary,
                payFrequency: payFrequency,
                bankAccount: '****' + Math.floor(Math.random() * 10000),
                routingNumber: '****' + Math.floor(Math.random() * 10000)
            });
            
            alert(`Employee ${name} added successfully!`);
            loadEmployeeList();
        }
    }

    // Show card management section
    function showCards() {
        hideAllSections();
        document.getElementById('cardManagement').style.display = 'block';
        loadCurrentCards();
    }

    // Show crypto wallet section
    function showCrypto() {
        hideAllSections();
        document.getElementById('cryptoWallet').style.display = 'block';
        loadCryptoPortfolio();
    }

    // Show bank staff management section
    function showBankStaff() {
        hideAllSections();
        document.getElementById('bankStaffManagement').style.display = 'block';
        loadBankStaff();
    }

    // Bank Staff Management Functions
    function loadBankStaff() {
        const bankStaffList = document.getElementById('bankStaffList');
        if (!bankStaffList) return;

        let staffHTML = '';
        Object.values(enhancedBankStaff).forEach(employee => {
            const benefits = employee.benefits ? '✓ Full Benefits' : 'Basic Benefits';
            const childcare = employee.childcareUsage ? '🧸 Uses Childcare' : '';
            const parental = employee.parentalLeaveScheduled ? '👶 Parental Leave Scheduled' : '';
            
            staffHTML += `
                <div class="staff-member">
                    <h6>${employee.name}</h6>
                    <div class="position">${employee.position}</div>
                    <div class="location">${employee.location}</div>
                    <div class="salary">$${employee.salary.toLocaleString()}/year</div>
                    <div class="bonus">Yearly Bonus: $${employee.yearlyBonus || 15000}</div>
                    <div class="benefits">${benefits}</div>
                    <div class="family-info">${childcare} ${parental}</div>
                    <div class="schedule">${employee.schedule ? employee.schedule.hours : 'Standard hours'}</div>
                </div>
            `;
        });

        bankStaffList.innerHTML = staffHTML;
    }

    function processBankPayroll() {
        let totalPayroll = 0;
        let processed = 0;

        Object.values(enhancedBankStaff).forEach(employee => {
            const biweeklyPay = employee.salary / 26; // 26 pay periods per year
            totalPayroll += biweeklyPay;
            processed++;
        });

        const currentUser = getCurrentUser();
        if (currentUser && currentUser.username === 'jennifer.whatley') {
            // Deduct from Jennifer's account (bank owner)
            currentUser.balance -= totalPayroll;
            
            // Add transaction
            const transaction = {
                type: 'Bank Payroll',
                description: `Processed payroll for ${processed} bank employees`,
                amount: -totalPayroll,
                date: new Date().toLocaleDateString(),
                balance: currentUser.balance
            };
            currentUser.transactions.unshift(transaction);

            saveUserData(currentUser);
            updateDashboard();
        }

        alert(`Bank payroll processed successfully!\n\nEmployees Paid: ${processed}\nTotal Amount: $${totalPayroll.toFixed(2)}\nAverage Pay: $${(totalPayroll / processed).toFixed(2)}\n\nNote: Use 'Enhanced Payroll' for full benefits breakdown`);
    }

    function viewStaffDetails() {
        let details = 'Whatley National Bank - Enhanced Staff Directory\n\n';
        
        // Group by location
        const locations = {};
        Object.values(enhancedBankStaff).forEach(employee => {
            if (!locations[employee.location]) {
                locations[employee.location] = [];
            }
            locations[employee.location].push(employee);
        });

        Object.keys(locations).forEach(location => {
            details += `${location}:\n`;
            locations[location].forEach(employee => {
                const childcare = employee.childcareUsage ? ' | Uses Childcare' : '';
                const parental = employee.parentalLeaveScheduled ? ` | ${employee.parentalLeaveScheduled}` : '';
                details += `  • ${employee.name} - ${employee.position} ($${employee.salary.toLocaleString()})${childcare}${parental}\n`;
            });
            details += '\n';
        });

        details += '\nEmployee Benefits Summary:\n';
        details += '• $15,000 yearly bonus for all employees\n';
        details += '• 6 months parental leave (both parents)\n';
        details += '• 100% childcare coverage\n';
        details += '• Unlimited PTO and sick leave\n';
        details += '• Full health insurance coverage\n';

        alert(details);
    }

    // Private Bank Asset Access (CEO/CFO Only)
    function getPrivateBankAssets(username) {
        // Only CEO and CFO can access private bank assets
        if (username === 'jennifer.whatley' || username === 'ava.whatley') {
            return privateBankAssets;
        }
        return null;
    }

    function displayPrivateBankAssets() {
        const currentUser = getCurrentUser();
        if (!currentUser) return;
        
        const assets = getPrivateBankAssets(currentUser.username);
        if (!assets) {
            alert('Access Denied: Private bank assets are restricted to CEO and CFO only.');
            return;
        }

        const totalAssets = assets.totalBankFunds + assets.cryptoReserves + assets.liquidityPool + 
                           assets.investmentPortfolio + assets.realEstate + assets.goldReserves + assets.emergencyFund;

        const assetsDetails = `
WHATLEY NATIONAL TRUST - PRIVATE BANK ASSETS
═══════════════════════════════════════════════

🏦 OPERATIONAL FUNDS
Bank Operating Capital: $${(assets.totalBankFunds / 1000000000).toFixed(1)}B

₿ CRYPTOCURRENCY RESERVES  
Total Crypto Holdings: $${(assets.cryptoReserves / 1000000000000).toFixed(1)}T

💰 LIQUIDITY & INVESTMENTS
Liquidity Pool: $${(assets.liquidityPool / 1000000000).toFixed(1)}B
Investment Portfolio: $${(assets.investmentPortfolio / 1000000000).toFixed(1)}B

🏗️ PHYSICAL ASSETS
Real Estate Holdings: $${(assets.realEstate / 1000000000).toFixed(1)}B
Gold Reserves: $${(assets.goldReserves / 1000000000).toFixed(1)}B

🛡️ EMERGENCY FUNDS
Emergency Reserve: $${(assets.emergencyFund / 1000000000).toFixed(1)}B

═══════════════════════════════════════════════
TOTAL BANK ASSETS: $${(totalAssets / 1000000000000).toFixed(2)}T

Last Updated: ${assets.lastUpdated}
Access Level: ${assets.accessLevel}
        `;

        alert(assetsDetails);
    }

    // Enhanced Employee Benefits Summary
    function displayEmployeeBenefits() {
        const currentDate = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const benefitsInfo = `
WHATLEY NATIONAL TRUST - EMPLOYEE BENEFITS PACKAGE
═══════════════════════════════════════════════════
📅 Generated: ${currentDate}
🏢 Effective Date: January 1, 2025
📋 Next Review: December 31, 2025

💊 HEALTH & WELLNESS
✓ 100% Premium Health Insurance Coverage
✓ Full Family Coverage Included
✓ Complete Dental & Vision Care
✓ Mental Health & Wellness Programs
📅 Open Enrollment: November 1-30 annually

👶 PARENTAL LEAVE (INDUSTRY LEADING)
✓ Maternal Leave: 6 months fully paid
✓ Paternal Leave: 6 months fully paid
✓ Adoption Leave: 6 months fully paid
✓ Available to all employees regardless of tenure
📅 Must notify HR 30 days in advance

🧸 CHILDCARE BENEFITS
✓ 100% Childcare Costs Covered
✓ On-site Childcare Facilities (Both Locations)
✓ Emergency Backup Childcare Services
✓ Coverage from Birth to 18 Years
⏰ Hours: Monday-Friday 6:00 AM - 7:00 PM

💰 BONUSES & COMPENSATION
✓ Annual Bonus: $15,000 (All Employees)
✓ Performance-Based Bonuses Available
✓ Holiday Bonuses in December
✓ Executive Bonuses (Leadership Team)
📅 Bonus Distribution: December 15th annually

🏖️ TIME OFF & FLEXIBILITY
✓ Unlimited PTO Policy
✓ Unlimited Sick Leave
✓ 12 Personal Days Annually
✓ 15 Paid Holidays + Floating Days
📅 PTO requests must be submitted 2 weeks in advance

🎓 PROFESSIONAL DEVELOPMENT
✓ $10,000 Annual Education Allowance
✓ Unlimited Conference Attendance
✓ All Professional Certifications Paid
📅 Education budget resets January 1st

🏦 RETIREMENT & FINANCIAL
✓ 100% 401k Matching up to 15%
✓ Immediate vesting
✓ Defined Benefit Pension Plan
📅 Enrollment available first day of employment

⏰ WORK SCHEDULES
Executive: Flexible hours, available as needed
Management: Monday-Friday 8:00 AM - 5:30 PM
Staff: Standard business hours with flexibility
Remote Work: Hybrid options available

═══════════════════════════════════════════════════
"Investing in our employees is investing in our future"
📞 HR Hotline: (602) 555-BANK ext. 1001
📧 benefits@whatleynationaltrust.com
        `;

        alert(benefitsInfo);
    }

console.log('Simple login system with banking functionality loaded successfully!');

