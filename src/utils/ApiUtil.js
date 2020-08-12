import { uuid } from "@/util/helps";
import config from "@/config.json";

/**
 * 接口类。负责解析接口相关操作，包括导入、导出、同步、新增、编辑、删除等
 */
class ApiUtil {
  static import() {
    // 导入应该是用普通的 input type="file" 就行
  }
  static async export() {
    const apiList = await ApiUtil.get();
    const result = JSON.stringify(apiList);

    // https://stackoverflow.com/questions/23160600/chrome-extension-local-storage-how-to-export
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    const url = "data:," + result;
    chrome.downloads.download({
      url: url,
      filename: "apiList.txt"
    });
  }
  static sync() {
    // 查看仓库代码是否更新
    // 若更新，则同步
    return new Promise(resolve => {
      const { apiListPath } = config;
      fetch(apiListPath)
        .then(res => res.json())
        .then(async ({ list }) => {
          // 添加唯一id
          list.forEach(i => (i.id = uuid()));
          const apiList = await ApiUtil.get();
          const manualList = apiList.filter(i => i.manual);
          // 保留用户手动添加的
          const mergeList = list.concat(manualList);
          await ApiUtil.saveAll(mergeList);
          resolve(true);
        });
    });
  }
  static async create(item) {
    item.id = uuid();
    // 用户手动添加的
    item.manual = true;
    const apiList = await ApiUtil.get();
    apiList.push(item);
    return ApiUtil.saveAll(apiList);
  }
  static async update(item) {
    const apiList = await ApiUtil.get();
    const target = apiList.find(i => i.id === item.id);
    if (target) {
      Object.assign(target, item);
      return ApiUtil.saveAll(apiList);
    }
    return Promise.reject("没有该对象");
  }
  static async remove(item) {
    let apiList = await ApiUtil.get();
    apiList = apiList.filter(i => i.id !== item.id);
    return ApiUtil.saveAll(apiList);
  }
  static get({ id } = {}) {
    return new Promise(resolve => {
      chrome.storage.sync.get({ apiList: [] }, ({ apiList }) => {
        const result =
          typeof id !== "undefined" ? apiList.find(i => i.id === id) : apiList;
        resolve(result);
      });
    });
  }
  static async saveAll(apiList) {
    return new Promise(resolve => {
      chrome.storage.sync.set(
        {
          apiList
        },
        () => resolve(true)
      );
    });
  }
}

export default ApiUtil;
