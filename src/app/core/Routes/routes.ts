export const ROUTES = {
  INDEX: {
    PATH: '/',
  },
  APP: {
    PATH: '',
    ROUTES: {
      HOME: {
        PATH: '',
        FULL_PATH: '',
        PAGE_NAME: 'home',
      },
      CONTRACTS: {
        PATH: 'contracts',
        FULL_PATH: 'contracts',
        PAGE_NAME: 'contracts',
        ROUTES: {
          DASHBOARD: {
            PATH: 'dashboard',
            FULL_PATH: 'contracts/dashboard',
            PAGE_NAME: 'contracts/dashboard',
          },
        },
      },
      DOCUMENTS: {
        PATH: 'documents',
        FULL_PATH: 'documents',
        PAGE_NAME: 'documents',
        ROUTES: {
          DASHBOARD: {
            PATH: 'all',
            FULL_PATH: 'documents/all',
            PAGE_NAME: 'documents/all',
          },
        },
      },
    },
  },

};
