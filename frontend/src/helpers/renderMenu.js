export const renderMenu = (text) => {
    switch (text) {
        case 'Dashboard':
            return <DashboardIcon />;
        case 'Card':
            return <CreditCardIcon />;
        case 'Transaction':
            return <CompareArrowsIcon />;

        default:
            break;
    }
};