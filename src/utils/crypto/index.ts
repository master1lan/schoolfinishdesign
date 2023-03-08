import CryptoJS from "crypto-js";
export default {
  //随机生成指定数量的16进制key
  generatekey(num: number = 5): string {
    let library =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let key = "";
    for (var i = 0; i < num; i++) {
      let randomPoz = Math.floor(Math.random() * library.length);
      key += library.substring(randomPoz, randomPoz + 1);
    }
    return key;
  },
  //加密
  encrypt(word: string, keyStr: string): string {
    keyStr = keyStr ? keyStr : "XXXXXXXXXXXXX"; //判断是否存在ksy，不存在就用定义好的key
    let key = CryptoJS.enc.Utf8.parse(keyStr);
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.toString();
  },

  //base64加密
  base64Encrypt(jsonedData: string): string {
    const objArray = CryptoJS.enc.Utf8.parse(jsonedData),
      res = CryptoJS.enc.Base64.stringify(objArray);
    return res;
  },
};
