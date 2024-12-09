Page({
  data: {
    consultations: [
      { id: 1, date: '2023-10-01', topic: '合同纠纷咨询', status: '已完成' },
      { id: 2, date: '2023-10-05', topic: '劳动争议咨询', status: '进行中' },
      { id: 3, date: '2023-11-03', topic: '劳动争议咨询', status: '进行中' }
    ]
  },

  onLoad: function() {
    console.log('咨询记录页面加载');
  }
});