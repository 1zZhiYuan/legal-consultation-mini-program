Page({
  data: {
    banners: [
      { id: 1, imageUrl: '/images/banner1.jpg' },
      { id: 2, imageUrl: '/images/banner2.jpg' },
      { id: 3, imageUrl: '/images/banner3.jpg' }
    ],
    lawyers: [
      { id: 1, name: '张律师', speciality: '刑事辩护' },
      { id: 2, name: '李律师', speciality: '民事诉讼' },
      { id: 3, name: '王律师', speciality: '公司法' }
    ],
    legalIssues: [
      { id: 1, title: '如何处理交通事故纠纷？' },
      { id: 2, title: '签订劳动合同需要注意什么？' }
    ]
  },

  onLoad: function() {
    console.log('主页加载');
  },

  startAssessment: function() {
    wx.navigateTo({
      url: '/pages/assessment/assessment'
    })
  },

  navigateToDetail: function(event) {
    const issueId = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/issueDetail/issueDetail?id=${issueId}`
    });
  },

  navigateToLawyerDetail: function(e) {
    const lawyerId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/lawyerDetail/lawyerDetail?lawyerId=${lawyerId}`
    });
  }
})
