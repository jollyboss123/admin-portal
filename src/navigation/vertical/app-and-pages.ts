export default [
  { heading: 'Apps & Pages' },
  {
    title: 'General Settings',
    icon: { icon: 'mdi-cog-outline' },
    children: [
      {
        title: 'Company',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Country',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'POS Setting',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Approval Reason',
        children: [
          { title: 'Price Override', to: null },
          { title: 'Refund', to: null },
        ],
      },
    ],
  },
  {
    title: 'Product Listing',
    icon: { icon: 'mdi-shopping-outline' },
    children: [
      {
        title: 'Product Type',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Product Category',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Product Brand',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Product Set',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Product',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
          { title: 'Update Price', to: null },
        ],
      },
    ],
  },
  {
    title: 'Promotion',
    icon: { icon: 'mdi-sale-outline' },
    children: [
      { title: 'List', to: null },
      { title: 'Create Combo', to: null },
      { title: 'Create GWP', to: null },
      { title: 'Create Tier Discount', to: null },
      { title: 'Create Card Promo', to: null },
    ],
  },
  {
    title: 'Cart Management',
    icon: { icon: 'mdi-cart-outline', to: null },

    children: [
      {
        title: 'Seal',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Cart Category',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Drawer',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Cart Template',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
    ],
  },
  {
    title: 'Airline Data',
    icon: { icon: 'mdi-airplane-takeoff' },
    children: [
      {
        title: 'Flight',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
    ],
  },
  {
    title: 'Cashier & Finance',
    icon: { icon: 'mdi-currency-usd' },
    children: [
      {
        title: 'Currency',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Exchange Rate',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Tax Rate',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Cash Bag',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Card Blacklist',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
      {
        title: 'Card Whitelist',
        children: [
          { title: 'List', to: null },
          { title: 'Create', to: null },
        ],
      },
    ],
  },
  {
    title: 'Reporting',
    icon: { icon: 'mdi-chart-box-outline' },
    children: [
      {
        title: 'Master Sales Report', to: null,
      },
      {
        title: 'Overall Sales Summary Report', to: null,
      },
      {
        title: 'Missed Sales Report', to: null,
      },
      {
        title: 'Cash Bag (Crew) Report', to: null,
      },
      {
        title: 'Cashier Cash Collection Report', to: null,
      },
      {
        title: 'Crew Position Report', to: null,
      },
      {
        title: 'Sales By Flight Number Report', to: null,
      },
      {
        title: 'Cart Device Report', to: null,
      },
      {
        title: 'Seal Report', to: null,
      },
      {
        title: 'Stock Report', to: null,
      },
    ],
  },
  {
    title: 'Transactions',
    icon: { icon: 'mdi-point-of-sale' },
    children: [
      { title: 'List', to: null },
      { title: 'Create', to: null },
    ],
  },
]
