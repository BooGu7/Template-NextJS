const endpoints = {
  // Auth
  loginPhoneNumber: 'POST /api/v1/login_phone_number',
  verifyOTP: 'POST /api/v1/verify_otp',
  resendOTP: 'POST /api/v1/resend_otp',
  checkToastAuth: 'POST /api/v1/common/is-auth',

  // Common
  getConstants: 'GET /api/v1/common/constants',
  getS3Signatures: 'POST /api/v1/common/s3_signatures',
  checkExists: 'POST /api/v1/common/check_exists',

  // Me
  getMe: 'GET /api/v1/seller/me',
  updateMe: 'PUT /api/v1/seller/me',
  deteleAvatar: 'DELETE /api/v1/seller/me/avatar',
  trackActivity: 'POST /api/v1/seller/me/track_activity',
  logout: 'DELETE /api/v1/seller/me/logout',

  // Users
  getUsers: 'GET /api/v1/seller/users',
  createUser: 'POST api/v1/seller/users',
  searchUsers: 'GET /api/v1/seller/users/search',
  getUser: 'GET /api/v1/seller/users/:id',
  updateUser: 'PUT /api/v1/seller/users/:id',
  approveUser: 'PUT /api/v1/seller/users/:id/approve',
  rejectUser: 'DELETE /api/v1/seller/users/:id/reject',
  getUserSchdules: 'GET /api/v1/seller/users/:user_id/schedules',
  deleteUser: 'DELETE /api/v1/seller/users/:id/archive',

  // User Address
  getUserAddress: 'GET /api/v1/seller/users/addresses',
  searchAddress: 'GET /api/v1/common/search_addresses',
  createUserAddress: 'POST /api/v1/seller/users/:id/addresses',
  updateUserAddress: 'PUT /api/v1/seller/users/:id/addresses/:addressId',
  deleteUserAddress: 'DELETE /api/v1/seller/users/:id/addresses/:addressId/archive',

  // Order
  getOrders: 'GET /api/v1/seller/orders',
  getOrder: 'GET /api/v1/seller/order/:id',
  createOrder: 'POST /api/v1/seller/order',
  updateOrder: 'PUT /api/v1/seller/order/:id',
  deleteOrder: 'DELETE /api/v1/seller/order/:id',

  // Label
  createLabel: 'POST /api/v1/seller/order/create_label',

  // Estimated Cost
  getEstimatedCost: 'POST /api/v1/seller/order/estimated_costs',

  // User Change Number
  resendOtpChangeNumber: 'POST /api/v1/seller/users/:user_id/change_phone_number/resend_otp',
  verifyOtpChangeNumber: 'POST /api/v1/seller/users/:user_id/change_phone_number/verify_otp',

  // Supported Location Level
  getSupportedLocationLevel1: 'GET /api/v1/common/supported_locations/level_1',
  getSupportedLocationLevel2: 'GET /api/v1/common/supported_locations/level_2',
  getSupportedLocationLevel3: 'GET /api/v1/common/supported_locations/level_3',
};

export default endpoints;
