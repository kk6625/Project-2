app.get('/signup', (req, res) => {
    const data = {
        title: 'Signup',
        navTitle: 'Dashboard',
        heading: 'Signup',
        signupAction: '/signup',
        emailLabel: 'Email address',
        passwordLabel: 'Password',
        confirmPasswordLabel: 'Confirm Password',
        signupButton: 'Signup',
        navItems: [
            { label: 'Home', url: 'index.html', active: false },
            { label: 'Login', url: 'login.html', active: false },
            { label: 'Signup', url: 'signup.html', active: true },
            { label: 'Sales', url: 'sales.html', active: false },
            { label: 'Orders', url: 'orders.html', active: false },
            { label: 'Products', url: 'products.html', active: false }
        ]
    };
    res.render('signup', data);
});
