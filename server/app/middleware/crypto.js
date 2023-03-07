'use strict'
const CryptoJS=require('crypto-js');
function decrypt(word, keyStr) {
    keyStr = keyStr ? keyStr : 'XXXXXXXXXXXXX';
    const key = CryptoJS.enc.Utf8.parse(keyStr);
    const decrypt = CryptoJS.AES.decrypt(word, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 });
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
function base64Decrypt(str=''){
    const wordArray=CryptoJS.enc.Base64.parse(str),
    parsedStr=wordArray.toString(CryptoJS.enc.Utf8);
    return JSON.parse(parsedStr);
}


module.exports=()=>{
    return async(ctx,next)=>{
        const {data}=ctx.request.body;
        ctx.request.body=base64Decrypt(data);
        const {password,key}=ctx.request.body;
        const ans=decrypt(password,key);
        ctx.request.body.password=ans;
        await next();
    }
}