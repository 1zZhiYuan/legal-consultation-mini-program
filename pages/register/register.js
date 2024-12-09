// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: '',
    userInfo: {
      avatar: '/images/default-avatar.png',
      name: '张三',
      phone: '13500135000',
      email: 'zhangsan@example.com',
      consultations: 3,
      cases: 1
    },
    isEditing: false,
    avatarUrl: '/images/default-avatar.png' // 默认头像路径
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log('个人资料页面加载')
    // 这里可以添加获取用户信息的逻辑
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
    console.log('查看咨询记录')
    // 这里可以添加跳转到咨询记录页面的逻辑
  },

  viewCases: function() {
    console.log('查看案件记录')
    // 这里可以添加跳转到案件记录页面的逻辑
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
  },

  register: function() {
    const { username, password } = this.data;
    
    if (!username || !password) {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '注册中...',
    });

    const sql = `insert into users (username, password) values('${username}', '${password}');`;
    console.log('执行的 SQL 语句:', sql);

    wx.request({
      url: 'https://m.huaxio.cn/sqlapi/getapi.php',
      method: 'POST',
      data: {
        apiname: 'apis140110036', // 接口名称
        apipswd: '9804e5ed4f04427c7b12f66facddd634', // 接口密码
        getysql: sql  // 执行语句
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (res) => {
        wx.hideLoading();
        console.log('注册成功:', res.data);
        wx.showToast({
          title: '注册成功',
          icon: 'success'
        });
      },
      fail: (err) => {
        wx.hideLoading();
        console.error('请求失败:', err);
        wx.showToast({
          title: '注册失败，请重试',
          icon: 'none'
        });
      }
    });
  },

  login: function() {
    const { username, password } = this.data;
    
    if (!username || !password) {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '登录中...',
    });

    wx.request({
      url: 'https://m.huaxio.cn/sqlapi/getapi.php',
      data: {
        apiname: 'apis140110036', 
        apipswd: '9804e5ed4f04427c7b12f66facddd634',
        getysql: `select * from users where username='${username}' and password='${password}'`
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: (res) => {
        wx.hideLoading();
        console.log('服务器返回的数据:', res.data);
  
        if (res.data.result && res.data.result.length > 0) {
          console.log('登录成功:', res.data);
          wx.showToast({
            title: '登录成功',
            icon: 'success'
          });

          // 更新全局变量
          getApp().globalData.username = username;

          // 登录成功后跳转到 index 页面
          wx.switchTab({
            url: `/pages/index/index`
          });
        } else {
          console.log('用户名或密码错误');
          wx.showToast({
            title: '用户名或密码错误',
            icon: 'none'
          });
        }
      },
      fail: (err) => {
        wx.hideLoading();
        console.error('登录失败:', err);
        wx.showToast({
          title: '登录失败，请检查网络连接',
          icon: 'none'
        });
      }
    });
  }
})
