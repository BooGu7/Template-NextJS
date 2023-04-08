export const formatPhoneWithCountryCode = (countryCode, originPhone: string) => {
  switch (countryCode) {
    case 'VN':
      return originPhone.startsWith('+84') ? originPhone : '+84' + originPhone;
    default:
      return originPhone.startsWith('+84') ? originPhone : '+84' + originPhone;
  }
};
