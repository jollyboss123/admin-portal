export default [
  { heading: 'Others' },
  {
    title: 'Administrator',
    icon: { icon: 'mdi-account-outline' },
    children: [
      { title: 'List', to: 'apps-user-list' },
      { title: 'Create', to: { name: 'apps-user-view-id', params: { id: 21 } } },
    ],
    action: 'read',
    subject: 'Auth',
  },
]
