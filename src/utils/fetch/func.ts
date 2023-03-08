import crypto from "../crypto";

/**
 * 加密字符串
 */
export const passwordCrypto = (password: string) => {
  const key = crypto.generatekey(8),
    encryptoEdPassword = crypto.encrypt(password, key);
  return { key, password: encryptoEdPassword };
};
//base64加密个人信息
export const userInfoCrypto = (obj: {}) => {
  const str = JSON.stringify(obj),
    res = crypto.base64Encrypt(str);
  return res;
};
