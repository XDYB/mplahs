// pages/found/video_topic.js
const ListPage = require('../../base/list_page.js')


ListPage({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.showList()
  },
  showList(type) {
    this.loadData("/video/topic/")
  },
})