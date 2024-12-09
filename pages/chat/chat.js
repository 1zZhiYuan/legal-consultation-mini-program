Page({
  data: {
    lawyer: {},
    messages: [
      { id: 1, sender: 'system', content: '您好，律师事务所为您服务，有问题请先留言！', avatar: '/images/lawyers.jpg' },
    ],
    inputMessage: '',
    userAvatar: '/images/user.jpg'
  },

  onLoad: function(options) {
    const lawyerId = options.lawyerId;
    const lawyers = [
      { id: 1, name: '张律师', avatarUrl: '/images/lawyer1.jpg' },
      { id: 2, name: '李律师', avatarUrl: '/images/lawyer2.jpg' },
      { id: 3, name: '王律师', avatarUrl: '/images/lawyer3.jpg' }
    ];
    const lawyer = lawyers.find(lawyer => lawyer.id == lawyerId);
    this.setData({ lawyer });
    console.log('聊天页面加载', lawyer);
  },

  onInput: function(e) {
    this.setData({
      inputMessage: e.detail.value
    });
  },

  sendMessage: function() {
    const { inputMessage, messages, userAvatar, lawyer } = this.data;

    if (!inputMessage.trim()) {
      wx.showToast({
        title: '请输入消息',
        icon: 'none'
      });
      return;
    }

    // 添加用户消息到消息列表
    messages.push({
      id: messages.length + 1,
      sender: 'user',
      content: inputMessage,
      avatar: userAvatar
    });

    this.setData({
      messages,
      inputMessage: ''
    });

    // 模拟对方自动回复
    setTimeout(() => {
      messages.push({
        id: messages.length + 1,
        sender: 'system',
        content: '已收到您的消息，稍后联系您。',
        avatar: lawyer.avatarUrl // 使用律师的头像
      });

      this.setData({
        messages
      });
    }, 1000);
  }
});
