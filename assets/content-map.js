const contentMap = {
  homepage: {
    url: "https://homezh-hth.com.cn",
    title: "首页",
    sections: [
      {
        id: "banner",
        tags: ["华体会", "推荐", "焦点"],
        keywords: ["华体会", "体育", "娱乐"]
      },
      {
        id: "sports",
        tags: ["华体会", "赛事", "体育"],
        keywords: ["篮球", "足球", "华体会体育"]
      },
      {
        id: "esports",
        tags: ["华体会", "电竞", "游戏"],
        keywords: ["英雄联盟", "DOTA2", "华体会电竞"]
      }
    ]
  },
  about: {
    url: "https://homezh-hth.com.cn/about",
    title: "关于我们",
    sections: [
      {
        id: "intro",
        tags: ["华体会", "介绍"],
        keywords: ["华体会平台", "公司简介"]
      },
      {
        id: "contact",
        tags: ["联系", "支持"],
        keywords: ["客服", "邮箱", "电话"]
      }
    ]
  },
  help: {
    url: "https://homezh-hth.com.cn/help",
    title: "帮助中心",
    sections: [
      {
        id: "faq",
        tags: ["华体会", "常见问题"],
        keywords: ["注册", "登录", "充值", "华体会"]
      },
      {
        id: "rules",
        tags: ["规则", "条款"],
        keywords: ["使用条款", "隐私政策"]
      }
    ]
  }
};

function findSectionsByTag(tag) {
  const results = [];
  for (const pageKey in contentMap) {
    const page = contentMap[pageKey];
    for (const section of page.sections) {
      if (section.tags.includes(tag)) {
        results.push({
          page: page.title,
          url: page.url,
          sectionId: section.id,
          tags: section.tags
        });
      }
    }
  }
  return results;
}

function findSectionsByKeyword(keyword) {
  const results = [];
  const lowerKeyword = keyword.toLowerCase();
  for (const pageKey in contentMap) {
    const page = contentMap[pageKey];
    for (const section of page.sections) {
      const match = section.keywords.some(k => k.toLowerCase().includes(lowerKeyword));
      if (match) {
        results.push({
          page: page.title,
          url: page.url,
          sectionId: section.id,
          keywords: section.keywords
        });
      }
    }
  }
  return results;
}

function searchContent(query) {
  const byTag = findSectionsByTag(query);
  const byKeyword = findSectionsByKeyword(query);
  const combined = [...byTag, ...byKeyword];
  const unique = combined.filter((item, index, self) =>
    index === self.findIndex(t => t.sectionId === item.sectionId && t.page === item.page)
  );
  return unique;
}

console.log("所有含 '华体会' 标签的分区:");
console.log(findSectionsByTag("华体会"));

console.log("\n所有包含 '体育' 关键词的分区:");
console.log(findSectionsByKeyword("体育"));

console.log("\n搜索 '华体会' 的结果:");
console.log(searchContent("华体会"));