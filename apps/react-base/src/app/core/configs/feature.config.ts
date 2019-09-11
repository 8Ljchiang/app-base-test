export enum AppFacetType {
  DOMAIN = 'APP_FACET_DOMAIN', // Domain might be something I could mean to refer to the same as module?
  FEATURE = 'APP_FACET_FEATURE',
  UTILITY = 'APP_FACET_UTILITY',
}

export enum AppFacetCategory {
  CORE = 'FAC_CORE',
  EXPERIMENTAL = 'FAC_EXP',
}

export enum AppFacetDomain {
  // TODO: Other possible types Facet: Feature, domain, functionality
  NAVIGATION = 'D_NAV',
  SOCIAL = 'D_SOCIAL',
  GLOBAL = 'D_GLOBAL',
  USER = 'D_USER',
  DATA = 'D_DATA_VISUALIZATION',
  ADMIN = 'D_ADMIN',
  ACCOUNT_MANAGEMENT = 'D_ACC_MAN',
  APPLICATION = 'D_APP',
}

export enum AppFeature {
  FEATURE_UNLOCK = 'F_UNLOCK',
  FEATURE_DASHBOARD = 'F_DASH',
  LOOM = 'F_LOOM',
  FORGE = 'F_FORGE',
  GATEWAY = 'F_GATEWAY',
  GATEWAY2 = 'F_GATEWAY2',
  TEST_FAULT = 'F_TEST_FAULT',
  TEST_NAV = 'F_TEST_NAV',
  FEEDBACK = 'F_SUBMIT_FEEDBACK',
  ACCOUNT = 'F_ACCOUNT',
  FEEDBACK_LIST = 'F_FEEDBACK_LIST'
}

export interface AppFacet {
  id: any;
  facetId: AppFeature;
  type: AppFacetType;
  domain: AppFacetDomain;
  // category: AppFacetCategory;
  tag: AppFacetCategory;
}

export const appFacets: AppFacet[] = [
  {
    id: 0,
    facetId: AppFeature.FEATURE_UNLOCK,
    type: AppFacetType.FEATURE,
    domain: AppFacetDomain.APPLICATION,
    tag: AppFacetCategory.EXPERIMENTAL,
  },
  {
    id: 1,
    facetId: AppFeature.FEATURE_DASHBOARD,
    type: AppFacetType.FEATURE,
    domain: AppFacetDomain.DATA,
    tag: AppFacetCategory.CORE
  },
  {
    id: 2,
    facetId: AppFeature.GATEWAY,
    type: AppFacetType.DOMAIN,
    domain: AppFacetDomain.NAVIGATION,
    tag: AppFacetCategory.EXPERIMENTAL
  }
];
