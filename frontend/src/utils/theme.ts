import type { ThemeConfig } from 'antd'

export const theme: ThemeConfig  = {
  token: {
    colorPrimary: "#212121",
    colorInfo: "#212121",
    colorBgBase: "#212121",
    colorTextBase: "#f6f6f6",
    colorLink: "#0c1023",
  },
  components: {
    Layout: {
      siderBg: "#212121",
      triggerBg: "#212121",
    },
    Card: {
      headerBg: "#212121"
    }
  }
}