// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenu.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Background on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    }
});

// Scroll Reveal Animation
function revealOnScroll() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add scroll-reveal class to elements that should animate
document.addEventListener('DOMContentLoaded', function() {
    const elementsToReveal = [
        '.service-card',
        '.stat',
        '.about-text',
        '.contact-item'
    ];
    
    elementsToReveal.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.classList.add('scroll-reveal');
        });
    });
    
    // Initial check for elements already in view
    revealOnScroll();
});

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Simulate form submission
            showNotification('Thank you for your message! We will contact you soon.', 'success');
            
            // Reset form
            this.reset();
        });
    }
});

// Notification system handled by simple-login.js
// Duplicate function removed to avoid conflicts

// Add slide-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s ease;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;
document.head.appendChild(style);

// Statistics Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat h4');
    const speed = 200;
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target') || +counter.innerText.replace(/[^\d]/g, '');
            const count = +counter.innerText.replace(/[^\d]/g, '') || 0;
            
            const inc = target / speed;
            
            if (count < target) {
                const newCount = Math.ceil(count + inc);
                const originalText = counter.innerText;
                const suffix = originalText.replace(/[\d,]/g, '');
                counter.innerText = newCount.toLocaleString() + suffix;
                setTimeout(updateCount, 1);
            } else {
                const originalText = counter.getAttribute('data-original') || counter.innerText;
                counter.innerText = originalText;
            }
        };
        
        // Store original text
        if (!counter.getAttribute('data-original')) {
            counter.setAttribute('data-original', counter.innerText);
            counter.setAttribute('data-target', counter.innerText.replace(/[^\d]/g, ''));
        }
        
        // Check if element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCount();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);

// Add hover effects for service cards
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && scrolled < hero.offsetHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Animate hero elements
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-buttons');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('fade-in-up');
        }, index * 200);
    });
});

// Global variables
let currentUser = null;
let selectedAccount = 'checking';

// Simple test login function - must be global for onclick
function testLogin() {
    console.log('Test login function called');
    
// Get the business accounts
const businessAccounts = {
    jennifer: {
        username: 'jennifer',
        password: 'whatley2024',
        businessName: 'Jennifer Whatley - Executive Account',
        businessType: 'Executive Premium Banking',
        businessAddress: '1 Whatley Plaza, Executive Suite, New York, NY 10004',
        taxId: '87-0000001',
        accountNumber: '****-****-****-0001',
        accounts: {
            checking: {
                name: 'Premium Checking',
                balance: 500000000.00,
                accountNumber: '1001-****-****-0001'
            },
            trust: {
                name: 'Trust Account', 
                balance: 500000000.00,
                accountNumber: '2001-****-****-0001'
            },
            crypto: {
                name: 'Crypto Portfolio',
                balance: 500000000.00,
                accountNumber: '3001-****-****-0001'
            }
        },
        totalBalance: 1500000000.00,
        monthlyRevenue: 12500000.00,
        totalDeposits: 2000000000.00,
        pendingTransfers: 0,
        jobInfo: {
            employer: '',
            position: '',
            salary: 0,
            directDepositSetup: false
        },
        loans: [
            {
                id: 1001,
                type: 'business',
                amount: 25000000,
                balance: 22500000,
                term: 10,
                rate: 3.2,
                monthlyPayment: 245830.42,
                purpose: 'Commercial Real Estate Portfolio',
                status: 'Active',
                dateApproved: '2023-08-15',
                nextPayment: '2024-02-15'
            },
            {
                id: 1002,
                type: 'mortgage',
                amount: 15000000,
                balance: 14200000,
                term: 30,
                rate: 3.5,
                monthlyPayment: 67368.09,
                purpose: 'Private Estate Acquisition',
                status: 'Active',
                dateApproved: '2023-11-20',
                nextPayment: '2024-02-01'
            }
        ]
    },
    celestial: {
        username: 'celestial',
        password: 'spa2024',
        businessName: 'Celestial Spring Spa & Resort',
        businessType: 'Wellness & Hospitality',
        businessAddress: '123 Serenity Lane, Paradise Valley, AZ 85253',
        taxId: '87-1234567',
        accountNumber: '****-****-****-8901',
        balance: 125750.00,
        monthlyRevenue: 65000.00,
        totalDeposits: 278940.00,
        pendingTransfers: 0,
        loans: [
            {
                id: 3001,
                type: 'personal',
                amount: 45000,
                balance: 38200,
                term: 5,
                rate: 3.8,
                monthlyPayment: 830.47,
                purpose: 'Educational Equipment & Technology',
                status: 'Active',
                dateApproved: '2023-09-15',
                nextPayment: '2024-02-15'
            },
            {
                id: 2001,
                type: 'business',
                amount: 250000,
                balance: 198000,
                term: 7,
                rate: 4.5,
                monthlyPayment: 4127.83,
                purpose: 'Spa Equipment & Renovation',
                status: 'Active',
                dateApproved: '2023-06-10',
                nextPayment: '2024-02-10'
            }
        ]
    },
    peaceful: {
        username: 'peaceful',
        password: 'academy2024',
        businessName: 'Peaceful Spirit Academy',
        businessType: 'Education & Wellness',
        businessAddress: '456 Mindfulness Drive, Sedona, AZ 86336',
        taxId: '87-9876543',
        accountNumber: '****-****-****-7654',
        balance: 89320.00,
        monthlyRevenue: 42000.00,
        totalDeposits: 178640.00,
        pendingTransfers: 750.00
    },
    demo: {
        username: 'demo',
        password: 'demo123',
        businessName: 'Demo Personal Account',
        businessType: 'Personal Banking',
        businessAddress: 'Demo Address',
        taxId: 'N/A',
        accountNumber: '****-****-****-0000',
        balance: 5250.00,
        monthlyRevenue: 0,
        totalDeposits: 12500.00,
        pendingTransfers: 0,
        accounts: {
            checking: {
                name: 'Personal Checking',
                balance: 5250.00,
                accountNumber: '0001-****-****-0000'
            }
        }
    }
};

let currentUser = null;
let selectedAccount = 'checking'; // Default selected account
let loanApplications = [];

// Login System
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const getStartedBtn = document.getElementById('getStartedBtn');
    const loginModal = document.getElementById('loginModal');
    const getStartedModal = document.getElementById('getStartedModal');
    const registerModal = document.getElementById('registerModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const dashboard = document.getElementById('dashboard');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Debug: Check if all elements exist
    console.log('DOM Elements:', {
        loginBtn: !!loginBtn,
        getStartedBtn: !!getStartedBtn,
        loginModal: !!loginModal,
        getStartedModal: !!getStartedModal,
        registerModal: !!registerModal,
        loginForm: !!loginForm,
        registerForm: !!registerForm,
        dashboard: !!dashboard,
        logoutBtn: !!logoutBtn
    });
    
    if (!loginForm) {
        console.error('Login form not found!');
        return;
    }
    
    // Modal functionality
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');
    
    // Open login modal
    loginBtn.addEventListener('click', function(e) {
        console.log('Header login button clicked');
        e.preventDefault();
        
        // If user is already logged in, go directly to dashboard
        if (currentUser) {
            showDashboard();
            showNotification('Welcome back to your dashboard!', 'success');
        } else {
            console.log('Opening login modal');
            loginModal.style.display = 'block';
        }
    });
    
    // Get Started button - show choice modal
    getStartedBtn.addEventListener('click', function(e) {
        e.preventDefault();
        getStartedModal.style.display = 'block';
    });
    
    // Get Started modal options
    document.getElementById('goToLoginBtn').addEventListener('click', function() {
        getStartedModal.style.display = 'none';
        loginModal.style.display = 'block';
        // Pre-fill Jennifer's credentials for demo
        document.getElementById('username').value = 'jennifer';
        document.getElementById('password').value = 'whatley2024';
        document.getElementById('accountType').value = 'personal';
    });
    
    document.getElementById('goToRegisterBtn').addEventListener('click', function() {
        getStartedModal.style.display = 'none';
        registerModal.style.display = 'block';
    });
    
    // Close modals
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Login submit button click handler  
    const loginSubmitBtn = document.getElementById('loginSubmitBtn');
    if (loginSubmitBtn) {
        loginSubmitBtn.addEventListener('click', function(e) {
            console.log('Login button clicked - starting login process');
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            console.log('Attempting login with:', username, password);
            
            // Simple validation - check for Jennifer specifically
            if (username === 'jennifer' && password === 'whatley2024') {
                console.log('Jennifer login detected');
                currentUser = businessAccounts.jennifer;
                loginModal.style.display = 'none';
                loginBtn.textContent = 'Dashboard';
                showDashboard();
                showNotification('Welcome back, Jennifer Whatley!', 'success');
            } else {
                console.log('Login failed for:', username);
                showNotification('Login failed. Try: jennifer / whatley2024', 'error');
            }
        });
    } else {
        console.error('Login submit button not found!');
    }
    
    // Registration form submission
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const firstName = document.getElementById('regFirstName').value;
        const lastName = document.getElementById('regLastName').value;
        const email = document.getElementById('regEmail').value;
        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;
        const accountType = document.getElementById('regAccountType').value;
        const initialDeposit = parseFloat(document.getElementById('initialDeposit').value);
        
        // Create new account
        const newAccount = {
            username: username,
            password: password,
            businessName: `${firstName} ${lastName} - ${accountType.charAt(0).toUpperCase() + accountType.slice(1)} Account`,
            businessType: accountType.charAt(0).toUpperCase() + accountType.slice(1) + ' Banking',
            businessAddress: '123 New Customer Ave, Your City, State 12345',
            taxId: 'N/A',
            accountNumber: '****-****-****-' + Math.floor(Math.random() * 9999).toString().padStart(4, '0'),
            balance: initialDeposit,
            accounts: {
                checking: {
                    name: accountType === 'personal' ? 'Personal Checking' : 'Business Checking',
                    balance: initialDeposit,
                    accountNumber: '1001-****-****-' + Math.floor(Math.random() * 9999).toString().padStart(4, '0')
                }
            },
            totalBalance: initialDeposit,
            monthlyRevenue: 0,
            totalDeposits: initialDeposit,
            pendingTransfers: 0,
            email: email,
            firstName: firstName,
            lastName: lastName,
            loans: [],
            creditScore: 750,
            availableCredit: calculateAvailableCredit(initialDeposit)
        };
        
        // Add to accounts (in real app, this would be saved to database)
        businessAccounts[username] = newAccount;
        currentUser = newAccount;
        
        registerModal.style.display = 'none';
        showDashboard();
        showNotification('Account created successfully! Welcome to Whatley Sovereignty!', 'success');
    });
    
    // Logout functionality
    logoutBtn.addEventListener('click', function() {
        currentUser = null;
        
        // Reset login button text
        loginBtn.textContent = 'Login';
        
        hideDashboard();
        showNotification('You have been logged out successfully.', 'success');
    });
    
    // Dashboard functionality
    function showDashboard() {
        // Hide main content sections
        document.querySelectorAll('.hero, .about, .services, .crypto-banking, .contact').forEach(section => {
            section.style.display = 'none';
        });
        
        // Show dashboard
        dashboard.style.display = 'block';
        
        // Update dashboard content
        updateDashboardContent();
        
        // Scroll to dashboard
        dashboard.scrollIntoView({ behavior: 'smooth' });
    }
    
    function hideDashboard() {
        // Show main content sections
        document.querySelectorAll('.hero, .about, .services, .crypto-banking, .contact').forEach(section => {
            section.style.display = 'block';
        });
        
        // Hide dashboard
        dashboard.style.display = 'none';
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function updateDashboardContent() {
        if (!currentUser) return;
        
        // Update dashboard title
        document.getElementById('dashboardTitle').textContent = `${currentUser.businessName} - Dashboard`;
        
        // Handle Jennifer's multi-account setup
        if (currentUser.username === 'jennifer') {
            // Show multi-account view
            document.getElementById('multiAccountView').style.display = 'block';
            
            // Update individual account balances
            document.getElementById('checkingBalance').textContent = `$${currentUser.accounts.checking.balance.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
            document.getElementById('trustBalance').textContent = `$${currentUser.accounts.trust.balance.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
            document.getElementById('cryptoBalance').textContent = `$${currentUser.accounts.crypto.balance.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
            
            // Update account numbers
            document.getElementById('checkingNumber').textContent = currentUser.accounts.checking.accountNumber;
            document.getElementById('trustNumber').textContent = currentUser.accounts.trust.accountNumber;
            document.getElementById('cryptoNumber').textContent = currentUser.accounts.crypto.accountNumber;
            
            // Update total balance
            document.getElementById('totalBalance').textContent = `$${currentUser.totalBalance.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
            
            // Setup account selection
            setupAccountSelection();
        } else {
            // Hide multi-account view for other users
            document.getElementById('multiAccountView').style.display = 'none';
            
            // Use legacy balance display
            const balance = currentUser.accounts ? currentUser.accounts.checking.balance : currentUser.balance;
            document.getElementById('totalBalance').textContent = `$${balance.toLocaleString('en-US', {minimumFractionDigits: 2})}`;
        }
        
        // Update primary account information
        const primaryAccount = currentUser.accounts ? currentUser.accounts.checking.accountNumber : currentUser.accountNumber;
        document.getElementById('primaryAccountNumber').textContent = primaryAccount;
        document.getElementById('accountTypeDisplay').textContent = currentUser.businessType;
        
        // Update business details (only for business accounts)
        const businessDetails = document.getElementById('businessDetails');
        if (currentUser.username !== 'demo') {
            businessDetails.style.display = 'block';
            document.getElementById('businessName').textContent = currentUser.businessName;
            document.getElementById('businessType').textContent = currentUser.businessType;
            document.getElementById('businessAddress').textContent = currentUser.businessAddress;
            document.getElementById('taxId').textContent = currentUser.taxId;
            document.getElementById('monthlyRevenue').textContent = `$${currentUser.monthlyRevenue.toLocaleString()}`;
            document.getElementById('totalDeposits').textContent = `$${currentUser.totalDeposits.toLocaleString()}`;
            document.getElementById('pendingTransfers').textContent = `$${currentUser.pendingTransfers.toLocaleString()}`;
        } else {
            businessDetails.style.display = 'none';
        }
    }
    
    function setupAccountSelection() {
        const accountItems = document.querySelectorAll('.account-item');
        const selectBtns = document.querySelectorAll('.select-account-btn');
        
        selectBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const accountType = this.dataset.account;
                selectedAccount = accountType;
                
                // Update visual selection
                accountItems.forEach(item => item.classList.remove('selected'));
                this.closest('.account-item').classList.add('selected');
                
                // Update selected account display
                const accountName = currentUser.accounts[accountType].name;
                document.getElementById('selectedAccountName').textContent = accountName;
                
                showNotification(`Selected ${accountName} for transactions`, 'info');
            });
        });
        
        // Set default selection
        document.querySelector('[data-account="checking"]').closest('.account-item').classList.add('selected');
    }
    
    // Transfer functionality
    const transferBtn = document.getElementById('transferBtn');
    const transferModal = document.getElementById('transferModal');
    const transferForm = document.getElementById('transferForm');
    
    transferBtn.addEventListener('click', function() {
        transferModal.style.display = 'block';
    });
    
    transferForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const transferTo = document.getElementById('transferTo').value;
        const amount = parseFloat(document.getElementById('transferAmount').value);
        const memo = document.getElementById('transferMemo').value;
        
        // Check balance from selected account
        const currentBalance = currentUser.accounts ? 
            currentUser.accounts[selectedAccount].balance : 
            currentUser.balance;
            
        if (amount > currentBalance) {
            showNotification('Insufficient funds for this transfer.', 'error');
            return;
        }
        
        // Process transfer from selected account
        if (currentUser.accounts) {
            currentUser.accounts[selectedAccount].balance -= amount;
            currentUser.totalBalance -= amount;
        } else {
            currentUser.balance -= amount;
        }
        
        // Add transaction to history
        const accountName = currentUser.accounts ? 
            currentUser.accounts[selectedAccount].name : 
            'Account';
        addTransaction('Transfer', `From: ${accountName} To: ${getBusinessName(transferTo)} - ${memo}`, -amount);
        
        // Update dashboard
        updateDashboardContent();
        
        // Close modal and reset form
        transferModal.style.display = 'none';
        transferForm.reset();
        
        showNotification(`Transfer of $${amount.toFixed(2)} completed successfully!`, 'success');
    });
    
    // Direct Deposit functionality
    const depositBtn = document.getElementById('depositBtn');
    const depositModal = document.getElementById('depositModal');
    const depositForm = document.getElementById('depositForm');
    
    depositBtn.addEventListener('click', function() {
        depositModal.style.display = 'block';
    });
    
    depositForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const amount = parseFloat(document.getElementById('depositAmount').value);
        const source = document.getElementById('depositSource').value;
        const description = document.getElementById('depositDescription').value;
        
        // Process deposit to selected account
        if (currentUser.accounts) {
            currentUser.accounts[selectedAccount].balance += amount;
            currentUser.totalBalance += amount;
        } else {
            currentUser.balance += amount;
        }
        currentUser.totalDeposits += amount;
        
        // Add transaction to history
        addTransaction('Direct Deposit', `${source} - ${description}`, amount);
        
        // Update dashboard
        updateDashboardContent();
        
        // Close modal and reset form
        depositModal.style.display = 'none';
        depositForm.reset();
        
        showNotification(`Deposit of $${amount.toFixed(2)} processed successfully!`, 'success');
    });
    
    // Job Direct Deposit Setup
    const jobDepositBtn = document.getElementById('jobDepositBtn');
    const jobDepositModal = document.getElementById('jobDepositModal');
    const jobDepositForm = document.getElementById('jobDepositForm');
    
    jobDepositBtn.addEventListener('click', function() {
        jobDepositModal.style.display = 'block';
        
        // Pre-fill if job info exists
        if (currentUser.jobInfo && currentUser.jobInfo.directDepositSetup) {
            document.getElementById('employerName').value = currentUser.jobInfo.employer;
            document.getElementById('jobPosition').value = currentUser.jobInfo.position;
            document.getElementById('annualSalary').value = currentUser.jobInfo.salary;
        }
    });
    
    jobDepositForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const employer = document.getElementById('employerName').value;
        const position = document.getElementById('jobPosition').value;
        const salary = parseFloat(document.getElementById('annualSalary').value);
        const frequency = document.getElementById('payFrequency').value;
        const depositAccount = document.getElementById('depositAccount').value;
        
        // Update user job info
        if (!currentUser.jobInfo) currentUser.jobInfo = {};
        currentUser.jobInfo.employer = employer;
        currentUser.jobInfo.position = position;
        currentUser.jobInfo.salary = salary;
        currentUser.jobInfo.frequency = frequency;
        currentUser.jobInfo.depositAccount = depositAccount;
        currentUser.jobInfo.directDepositSetup = true;
        
        // Calculate pay amount based on frequency
        let payAmount = 0;
        switch(frequency) {
            case 'weekly': payAmount = salary / 52; break;
            case 'biweekly': payAmount = salary / 26; break;
            case 'semimonthly': payAmount = salary / 24; break;
            case 'monthly': payAmount = salary / 12; break;
        }
        
        // Process initial payroll deposit
        if (currentUser.accounts) {
            currentUser.accounts[depositAccount].balance += payAmount;
            currentUser.totalBalance += payAmount;
        } else {
            currentUser.balance += payAmount;
        }
        
        // Add transaction
        addTransaction('Payroll Deposit', `${employer} - ${frequency} pay`, payAmount);
        
        // Update dashboard
        updateDashboardContent();
        
        // Close modal and reset form
        jobDepositModal.style.display = 'none';
        jobDepositForm.reset();
        
        showNotification(`Direct deposit setup complete! First ${frequency} payment of $${payAmount.toFixed(2)} deposited.`, 'success');
    });
    
    // Loan Services
    const loanBtn = document.getElementById('loanBtn');
    const loanModal = document.getElementById('loanModal');
    const loanForm = document.getElementById('loanForm');
    const loanServices = document.getElementById('loanServices');
    let currentLoanType = '';
    
    loanBtn.addEventListener('click', function() {
        toggleLoanServices();
    });
    
    function toggleLoanServices() {
        const isVisible = loanServices.style.display === 'block';
        loanServices.style.display = isVisible ? 'none' : 'block';
        
        if (!isVisible) {
            updateLoanServices();
        }
    }
    
    function updateLoanServices() {
        if (!currentUser) return;
        
        // Calculate available credit
        const availableCredit = calculateAvailableCredit(currentUser.totalBalance || currentUser.balance);
        document.getElementById('availableCredit').textContent = `$${availableCredit.toLocaleString()}`;
        
        // Update loan stats
        const userLoans = currentUser.loans || [];
        document.getElementById('currentLoans').textContent = userLoans.length;
        
        const totalLoanBalance = userLoans.reduce((sum, loan) => sum + loan.balance, 0);
        document.getElementById('totalLoanBalance').textContent = `$${totalLoanBalance.toLocaleString()}`;
        
        // Update loan list
        updateLoanList();
    }
    
    function calculateAvailableCredit(balance) {
        // Simple credit calculation based on account balance
        if (balance >= 1000000) return 10000000; // $10M for high net worth
        if (balance >= 100000) return balance * 5; // 5x balance
        if (balance >= 10000) return balance * 3; // 3x balance
        return balance * 2; // 2x balance minimum
    }
    
    // Loan application buttons
    document.querySelectorAll('.apply-loan-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentLoanType = this.dataset.loanType;
            document.getElementById('loanModalTitle').textContent = `${currentLoanType.charAt(0).toUpperCase() + currentLoanType.slice(1)} Loan Application`;
            loanModal.style.display = 'block';
            
            // Set loan amount limits based on type
            const loanAmountInput = document.getElementById('loanAmount');
            switch(currentLoanType) {
                case 'personal': 
                    loanAmountInput.max = 100000;
                    loanAmountInput.placeholder = 'Up to $100,000';
                    break;
                case 'business': 
                    loanAmountInput.max = 5000000;
                    loanAmountInput.placeholder = 'Up to $5,000,000';
                    break;
                case 'mortgage': 
                    loanAmountInput.max = 10000000;
                    loanAmountInput.placeholder = 'Up to $10,000,000';
                    break;
                case 'auto': 
                    loanAmountInput.max = 500000;
                    loanAmountInput.placeholder = 'Up to $500,000';
                    break;
            }
        });
    });
    
    // Loan form calculation
    document.getElementById('loanAmount').addEventListener('input', calculateLoanPreview);
    document.getElementById('loanTerm').addEventListener('change', calculateLoanPreview);
    document.getElementById('creditScore').addEventListener('change', calculateLoanPreview);
    
    function calculateLoanPreview() {
        const amount = parseFloat(document.getElementById('loanAmount').value);
        const term = parseInt(document.getElementById('loanTerm').value);
        const creditScore = document.getElementById('creditScore').value;
        
        if (amount && term && creditScore) {
            const rate = getInterestRate(currentLoanType, creditScore);
            const monthlyRate = rate / 100 / 12;
            const numPayments = term * 12;
            
            const monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                                  (Math.pow(1 + monthlyRate, numPayments) - 1);
            
            const totalInterest = (monthlyPayment * numPayments) - amount;
            
            document.getElementById('monthlyPayment').textContent = `$${monthlyPayment.toFixed(2)}`;
            document.getElementById('interestRate').textContent = `${rate.toFixed(2)}%`;
            document.getElementById('totalInterest').textContent = `$${totalInterest.toFixed(2)}`;
            document.getElementById('loanPreview').style.display = 'block';
        }
    }
    
    function getInterestRate(loanType, creditScore) {
        const baseRates = {
            personal: 3.5,
            business: 4.2,
            mortgage: 3.8,
            auto: 2.9
        };
        
        const creditMultipliers = {
            excellent: 0.8,
            'very-good': 0.9,
            good: 1.0,
            fair: 1.3,
            poor: 1.8
        };
        
        return baseRates[loanType] * creditMultipliers[creditScore];
    }
    
    // Loan form submission
    loanForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const amount = parseFloat(document.getElementById('loanAmount').value);
        const term = parseInt(document.getElementById('loanTerm').value);
        const purpose = document.getElementById('loanPurpose').value;
        const income = parseFloat(document.getElementById('annualIncome').value);
        const creditScore = document.getElementById('creditScore').value;
        
        const rate = getInterestRate(currentLoanType, creditScore);
        const monthlyRate = rate / 100 / 12;
        const numPayments = term * 12;
        
        const monthlyPayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                              (Math.pow(1 + monthlyRate, numPayments) - 1);
        
        // Create loan
        const newLoan = {
            id: Date.now(),
            type: currentLoanType,
            amount: amount,
            balance: amount,
            term: term,
            rate: rate,
            monthlyPayment: monthlyPayment,
            purpose: purpose,
            status: 'Approved',
            dateApproved: new Date().toLocaleDateString(),
            nextPayment: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
        };
        
        // Add loan to user
        if (!currentUser.loans) currentUser.loans = [];
        currentUser.loans.push(newLoan);
        
        // Add loan amount to account balance
        if (currentUser.accounts) {
            currentUser.accounts[selectedAccount].balance += amount;
            currentUser.totalBalance += amount;
        } else {
            currentUser.balance += amount;
        }
        
        // Add transaction
        addTransaction('Loan Disbursement', `${currentLoanType} loan - ${purpose}`, amount);
        
        // Update dashboard
        updateDashboardContent();
        updateLoanServices();
        
        // Close modal and reset form
        loanModal.style.display = 'none';
        loanForm.reset();
        document.getElementById('loanPreview').style.display = 'none';
        
        showNotification(`${currentLoanType} loan of $${amount.toLocaleString()} approved and disbursed!`, 'success');
    });
    
    function updateLoanList() {
        const loanList = document.getElementById('loanList');
        const userLoans = currentUser.loans || [];
        
        if (userLoans.length === 0) {
            loanList.innerHTML = '<p class="no-loans">No active loans</p>';
            return;
        }
        
        loanList.innerHTML = userLoans.map(loan => `
            <div class="loan-item">
                <div class="loan-info">
                    <h5>${loan.type.charAt(0).toUpperCase() + loan.type.slice(1)} Loan</h5>
                    <p>${loan.purpose} • ${loan.rate.toFixed(2)}% APR • ${loan.term} years</p>
                    <p>Status: ${loan.status} • Next Payment: ${loan.nextPayment}</p>
                </div>
                <div class="loan-balance">
                    <div class="amount">$${loan.balance.toLocaleString()}</div>
                    <div class="payment">$${loan.monthlyPayment.toFixed(2)}/month</div>
                </div>
            </div>
        `).join('');
    }
    
    // Helper functions
    function getBusinessName(accountKey) {
        const names = {
            celestial: 'Celestial Spring Spa & Resort',
            peaceful: 'Peaceful Spirit Academy',
            external: 'External Account'
        };
        return names[accountKey] || accountKey;
    }
    
    function addTransaction(type, description, amount) {
        const transactionList = document.getElementById('transactionList');
        const newTransaction = document.createElement('div');
        newTransaction.className = 'transaction-item';
        
        const today = new Date().toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
        
        newTransaction.innerHTML = `
            <div class="transaction-info">
                <span class="transaction-type">${type}</span>
                <span class="transaction-description">${description}</span>
            </div>
            <div class="transaction-amount ${amount > 0 ? 'positive' : 'negative'}">
                ${amount > 0 ? '+' : ''}$${Math.abs(amount).toFixed(2)}
            </div>
            <div class="transaction-date">${today}</div>
        `;
        
        // Add to top of transaction list
        transactionList.insertBefore(newTransaction, transactionList.firstChild);
    }
    
    // Statement functionality
    const statementBtn = document.getElementById('statementBtn');
    statementBtn.addEventListener('click', function() {
        showNotification('Statement generation feature coming soon!', 'info');
    });
});

console.log('Banking system with login functionality loaded successfully!');

// Simple test login function - global scope for onclick
window.testLogin = function() {
    console.log('Test login function called from global scope');
    
    // Find the businessAccounts - they should be defined in the DOMContentLoaded
    if (typeof businessAccounts !== 'undefined' && businessAccounts.jennifer) {
        console.log('Found Jennifer account');
        currentUser = businessAccounts.jennifer;
        
        // Hide modal
        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.style.display = 'none';
        }
        
        // Update login button
        const loginBtn = document.getElementById('loginBtn');
        if (loginBtn) {
            loginBtn.textContent = 'Dashboard';
        }
        
        // Call showDashboard if it exists
        if (typeof showDashboard === 'function') {
            showDashboard();
        }
        
        // Show success message
        alert('Test login successful! Welcome Jennifer Whatley!');
        console.log('Test login completed successfully');
    } else {
        console.error('Business accounts not found or Jennifer account missing');
        alert('Test login failed - accounts not loaded');
    }
};

// Simple test login function
// function testLogin() {
//     window.testLogin();
// }

// Notification system handled by simple-login.js
// Function removed to avoid conflicts
class CryptoUtils {
  static formatCurrency(amount, currency = 'USD') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(amount);
  }

  static calculateWhatleyTokens(usdAmount) {
    const whatleyRate = 0.10; // $0.10 per WHAT token
    return usdAmount / whatleyRate;
  }

  static validateCryptoAddress(address, type) {
    // Validate cryptocurrency addresses
    const patterns = {
      BTC: /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/,
      ETH: /^0x[a-fA-F0-9]{40}$/,
      WHAT: /^0x[a-fA-F0-9]{40}$/
    };
    return patterns[type]?.test(address) || false;
  }
}