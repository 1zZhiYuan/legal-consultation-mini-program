Page({
  data: {
    caseId: null
  },

  onLoad: function(options) {
    this.setData({
      caseId: options.id
    });
    console.log('案件详情页面加载，ID:', options.id);
  }
});
