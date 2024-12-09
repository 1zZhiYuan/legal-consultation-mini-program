Page({
  data: {
    cases: [
      { id: 1, date: '2023-09-15', title: '交通事故案件', status: '已结案' }
    ]
  },

  onLoad: function() {
    console.log('案件记录页面加载');
  },

  viewCaseDetail: function(e) {
    const caseId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/caseDetail/caseDetail?id=${caseId}`
    });
  }
});
