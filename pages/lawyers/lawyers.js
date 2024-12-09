// pages/lawyers/lawyers.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lawyers: [
      { 
        id: 1,
        name: '张律师',
        speciality: '刑事辩护',
        contact: '13800138000',
        avatarUrl: '/images/lawyer1.jpg'
      },
      { 
        id: 2,
        name: '李律师',
        speciality: '民事诉讼',
        contact: '13900139000',
        avatarUrl: '/images/lawyer2.jpg'
      },
      { 
        id: 3,
        name: '王律师',
        speciality: '公司法',
        contact: '13700137000',
        avatarUrl: '/images/lawyer3.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    console.log('找律师页面加载')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  /**
   * 选择律师
   */
  selectLawyer: function(e) {
    const lawyerId = e.currentTarget.dataset.id;
    console.log('选择了律师ID:', lawyerId);
    // 这里可以添加选择律师后的逻辑,比如跳转到律师详情页或预约页面
  },

  /**
   * 跳转到律师聊天界面
   */
  navigateToChat: function(e) {
    const lawyerId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/chat/chat?lawyerId=${lawyerId}`
    });
  }
})
