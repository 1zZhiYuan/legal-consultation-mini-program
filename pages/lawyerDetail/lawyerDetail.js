Page({
  data: {
    lawyer: {}
  },

  onLoad: function(options) {
    const lawyerId = options.lawyerId;
    const lawyers = [
      { 
        id: 1, 
        name: '张律师', 
        speciality: '刑事辩护', 
        contact: '13800138000', 
        avatarUrl: '/images/lawyer1.jpg', 
        description: '张律师擅长刑事辩护，拥有丰富的经验。',
        experience: '湖北德来颂（重庆）律师事务所执业律师，2016年开始从事法律工作，执业以来，办理大量民事、公司案件，擅长领域：借贷纠纷、婚姻家庭、刑事辩护、合同纠纷、建设施工合同纠纷及劳动法等，认真负责、勤勉敬业。曾担任和现任多家单位的法律顾问，执业以来本着专业专心专注的理念，维护当事人及顾问单位的合法权益，以事实为基础，以法律为准绳，深受当事人的信任，赢得广泛赞誉。'
      },
      { 
        id: 2, 
        name: '李律师', 
        speciality: '民事诉讼', 
        contact: '13900139000', 
        avatarUrl: '/images/lawyer2.jpg', 
        description: '李律师专注于民事诉讼，帮助客户解决复杂的法律问题。',
        experience: '贵州贵达（重庆）律师事务所执业律师，执业以来办理大量民商事纠纷，擅长办理合同纠纷，民间借贷纠纷，买卖合同纠纷，婚姻家庭纠纷，劳动争议等案件。'
      },
      { 
        id: 3, 
        name: '王律师', 
        speciality: '公司法', 
        contact: '13700137000', 
        avatarUrl: '/images/lawyer3.jpg', 
        description: '王律师在公司法领域有着深厚的造诣。',
        experience: '四川兴蓉（重庆）律师事务所执业律师，擅长：交通事故、民事纠纷、婚姻家庭、借贷纠纷、刑事辩护'
      }
    ];
    const lawyer = lawyers.find(lawyer => lawyer.id == lawyerId);
    if (lawyer) {
      this.setData({ lawyer });
    } else {
      console.error('未找到对应的律师信息');
    }
  }
});
