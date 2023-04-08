import { ThemeConfig } from 'antd/es/config-provider';

export const theme: ThemeConfig = {
  token: {
    controlHeightSM: 36,
    controlHeight: 40,
    controlHeightLG: 50,
    controlHeightXS: 32,

    colorPrimary: '#007723',
    colorError: '#dc2626',
    colorSuccess: '#2563EB',
  },
  components: {
    Button: {
      borderRadius: 6,
    },
    Typography: {
      fontSize: 16,
      padding: 0,
      margin: 0,
      colorLink: 'var(--main-primary-color)',
      colorLinkHover: 'var(--main-primary-color)',
      colorLinkActive: 'var(--main-primary-color)',
      linkDecoration: 'underline',
    },
    Layout: {
      colorBgBody: 'var(--screen-color)',
      colorBgHeader: 'var(--black-dark-color)',
      colorInfoBg: 'red',
    },
    Menu: {
      colorBgBase: 'var(--black-dark-color)',
      colorItemBg: 'var(--black-dark-color)',
      colorItemText: 'var(--white-color)',
    },
    Radio: {
      colorPrimary: 'var(--success-primary-color)',
    },
    Table: {
      borderRadiusLG: 0,
    },
  },
};
