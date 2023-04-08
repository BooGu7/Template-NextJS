export enum ROUTE {
  AUTHENTICATED = '/dashboard',

  UN_AUTHENTICATED = '/login',

  DASHBOARD = '/dashboard',
  OVERVIEW = '/dashboard/overview',
  STATISTICS = '/dashboard/statistics',
  SHIPPING = '/shipping',
  HOME = '/home',
  LOGIN = '/login',
  VERIFY_OTP = '/verify-otp',
  SIGN_IN = '/sign-in',
  USER = '/users',
  LOCATION = '/locations',
  SCHEDULE = '/schedules',
  SETTING = '/settings',
  // profile
  USER_PROFILE = '/profile/user',
  FACILITY_PROFILE = '/profile/facility',
  BRANCH_PROFILE = '/profile/branch',
  ORDER = '/order',
}

export enum PAGE_ACTIVE {
  '/dashboard' = ROUTE.DASHBOARD,
  '/users' = ROUTE.USER,
  '/locations' = ROUTE.LOCATION,
  '/schedules' = ROUTE.SCHEDULE,
  '/settings' = ROUTE.SETTING,
}
