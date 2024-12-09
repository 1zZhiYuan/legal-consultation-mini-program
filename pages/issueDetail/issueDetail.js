Page({
  data: {
    issue: {}
  },

  onLoad: function(options) {
    const issues = [
      {
        id: 1,
        question: "问题1：如何处理交通事故纠纷？",
        answer: "迅速报警救助，保存证据，调解赔偿，依法诉讼，专业咨询。"
      },
      {
        id: 2,
        question: "问题2：忘记密码怎么办？",
        answer: "您可以通过点击忘记密码链接，按照提示重置密码。"
      },
      {
        id: 3,
        question: "问题3：如何联系客服？",
        answer: "您可以通过应用内的客服功能，直接与客服人员联系。"
      },
      {
        id: 4,
        question: "问题4：如何查看咨询记录？",
        answer: "您可以在个人资料页面点击咨询记录，查看您的所有咨询历史。"
      },
      {
        id: 5,
        question: "问题5：如何更改个人信息？",
        answer: "在个人资料页面，点击编辑资料按钮即可更改您的个人信息。"
      }
    ];

    const issueId = parseInt(options.id, 10);
    const issue = issues.find(item => item.id === issueId);

    if (issue) {
      this.setData({ issue });
    } else {
      console.error('未找到对应的问题');
    }
  }
});
