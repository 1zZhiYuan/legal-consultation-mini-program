// pages/consultations/consultations.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    consultations: [
      { id: 1, date: '2023-10-01', topic: '合同纠纷咨询', status: '已完成' },
      { id: 2, date: '2023-10-05', topic: '劳动争议咨询', status: '进行中' },
      { id: 3, date: '2023-11-03', topic: '劳动争议咨询', status: '进行中' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('咨询记录页面加载');
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

  viewConsultationDetail: function(e) {
    const consultationId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/consultationDetail/consultationDetail?id=${consultationId}`
    });
  }
})
