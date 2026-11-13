import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {createHash} from 'node:crypto';
import {resolve,dirname,sep} from 'node:path';
const base=resolve('public'),packs=JSON.parse(readFileSync('assets/showroom/manifest.json','utf8'));
const hash=b=>createHash('sha256').update(b).digest('hex');
let count=0;
for(const pack of packs){
 const packed=readFileSync(resolve('assets/showroom',pack.file));
 if(hash(packed)!==pack.sha256)throw Error('Invalid image pack');
 for(const item of JSON.parse(gunzipSync(packed))){
  const dest=resolve(base,item.path),bytes=Buffer.from(item.data,'base64');
  if(!dest.startsWith(base+sep)||hash(bytes)!==item.sha256)throw Error('Invalid image');
  mkdirSync(dirname(dest),{recursive:true});writeFileSync(dest,bytes);count++;
 }
}
console.log(`Showroom: ${count} image files restored`);
