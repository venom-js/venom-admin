export const themeOptions: any[] = ['dark', 'light'];
export const layoutOptions: any[] = ['sider', 'header'];
export const contentLayoutOptions = [
  { label: '流式', value: 'fluid' },
  { label: '定宽', value: 'fixed' }
];
export const switchOptions = [
  {
    label: '固定header',
    key: 'fixHeader'
  },
  {
    label: '固定sider',
    key: 'fixSider',
    disabled: true
  },
  {
    label: '是否可展开多菜单',
    key: 'siderMultiple',
    disabled: true
  }
];

export const inputOptions = [
  {
    label: '页面标题',
    key: 'title'
  },
  {
    label: '头部高度',
    key: 'headerHeight',
    extra: true
  },
  {
    label: '侧栏宽度',
    key: 'siderWidth',
    disabled: true,
    extra: true
  }
];

export const colorOptions = [
  {
    label: '页头背景色',
    key: 'headerBg'
  },
  {
    label: '页头文字色',
    key: 'headerColor'
  },
  {
    label: '内容背景色',
    key: 'contentBg'
  },
  {
    label: '页脚背景色',
    key: 'footerBg'
  }
];
