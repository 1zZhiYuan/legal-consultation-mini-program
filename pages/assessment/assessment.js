Page({
  data: {
    questions: [
      {
        id: 1,
        question: "您的法律问题属于哪个领域？",
        options: [
          {value: "civil", label: "民事纠纷"},
          {value: "criminal", label: "刑事案件"},
          {value: "administrative", label: "行政诉讼"},
          {value: "commercial", label: "商业纠纷"}
        ]
      },
      {
        id: 2,
        question: "您的问题是否涉及到合同纠纷？",
        options: [
          {value: "yes", label: "是"},
          {value: "no", label: "否"}
        ]
      },
      {
        id: 3,
        question: "您是否已经咨询过律师？",
        options: [
          {value: "yes", label: "是"},
          {value: "no", label: "否"}
        ]
      }
    ],
    answers: {}
  },

  handleAnswer(e) {
    const { id } = e.currentTarget.dataset;
    const { value } = e.detail;
    this.setData({
      [`answers.${id}`]: value
    });
  },

  submitAssessment() {
    const { questions, answers } = this.data;
    const unansweredQuestions = questions.filter(q => !answers[q.id]);

    if (unansweredQuestions.length > 0) {
      wx.showToast({
        title: '请完成所有题目',
        icon: 'none'
      });
    } else {
      console.log('提交的答案:', answers);
      wx.showToast({
        title: '评估已提交',
        icon: 'success',
        duration: 2000
      });
      // 可以在这里添加跳转到结果页面的逻辑
    }
  },

  onLoad: function() {
    console.log('评估页面加载');
  },

  completeAssessment: function() {
    const { questions, answers } = this.data;
    const unansweredQuestions = questions.filter(q => !answers[q.id]);

    if (unansweredQuestions.length > 0) {
      wx.showToast({
        title: '请将答卷填写完整',
        icon: 'none'
      });
    } else {
      wx.showToast({
        title: '评估成功',
        icon: 'success',
        duration: 2000,
        complete: () => {
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/index/index'
            });
          }, 2000);
        }
      });
    }
  }
})
