// pages/profile/profile.js
Page({
  
  data: {
    password: '',
    userInfo: {
      avatar: '/images/user.jpg',
      username: '',
      phone: '13500135000',
      email: 'zhangsan@example.com',
      consultations: 3,
      cases: 1
    },
    isEditing: false,
    avatarUrl: '/images/default-avatar.png' // 默认头像路径
  },

  onLoad(options) {
    console.log('个人资料页面加载');
    this.setData({
      'userInfo.username': getApp().globalData.username
    })

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

  editProfile: function() {
    this.setData({
      isEditing: true
    });
  },

  saveProfile: function(e) {
    const { name, phone, email } = e.detail.value;
    this.setData({
      'userInfo.name': name,
      'userInfo.phone': phone,
      'userInfo.email': email,
      isEditing: false
    });
    console.log('保存用户信息:', this.data.userInfo);
  },

  cancelEdit: function() {
    this.setData({
      isEditing: false
    });
  },

  viewConsultations: function() {
    console.log('查看咨询记录');
    wx.navigateTo({
      url: '/pages/consultations/consultations'
    });
  },
  
  viewCases: function() {
    console.log('查看案件记录');
    wx.navigateTo({
      url: '/pages/cases/cases'
    });
  },

  changeAvatar: function() {
    const that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        const tempFilePaths = res.tempFilePaths;
        that.setData({
          'userInfo.avatar': tempFilePaths[0] // 更新userInfo中的avatar字段
        });
        // 这里可以添加上传头像到服务器的逻辑
      }
    });
  },

  onUsernameInput: function(e) {
    this.setData({
      username: e.detail.value
    });
  },

  onPasswordInput: function(e) {
    this.setData({
      password: e.detail.value
    });
  }
})
