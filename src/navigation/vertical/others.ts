export default [
  { heading: 'Others' },
  {
    title: 'Administrator',
    icon: { icon: 'mdi-account-outline' },
    children: [
      { title: 'List', to: 'other-administrator-list' },
      { title: 'Create', to: { name: 'other-administrator-view-id', params: { id: 21 } } },
    ],
    action: 'read',
    subject: 'Auth',
  },
]
