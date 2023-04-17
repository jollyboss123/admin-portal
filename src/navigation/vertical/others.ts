export default [
  { heading: 'Others' },
  {
    title: 'Administrator',
    icon: { icon: 'mdi-account-outline' },
    children: [
      {
        title: 'User',
        children: [
          { title: 'List', to: 'other-administrator-user-list' },
          { title: 'Create', to: { name: 'other-administrator-user-view-id', params: { id: 21 } } },
        ],
      },
    ],
    action: 'read',
    subject: 'Auth',
  },
]
