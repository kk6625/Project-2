app.get('/orders', (req, res) => {
    const data = {
        title: 'Orders',
        navTitle: 'Dashboard',
        heading: 'Orders',
        navItems: [
            { label: 'Home', url: 'index.html', active: false },
            { label: 'Login', url: 'login.html', active: false },
            { label: 'Signup', url: 'signup.html', active: false },
            { label: 'Sales', url: 'sales.html', active: false },
            { label: 'Orders', url: 'orders.html', active: true },
            { label: 'Products', url: 'products.html', active: false }
        ],
        orders: []
    };
    res.render('orders', data);
});
