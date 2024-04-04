import type { ThemeConfig } from 'antd'

export const theme: ThemeConfig  = {
  token: {
    colorPrimary: '#2F2F2F',
    colorInfo: '#4A4A4A',
    colorBgBase: '#1E1E1E',
    colorTextBase: '#FFFFFF',
  },
  components: {
    Layout: {
      siderBg: '#1E1E1E',
      triggerBg: '#2F2F2F',
    },
    Card: {
      headerBg: '#2F2F2F',
    },
  },
}