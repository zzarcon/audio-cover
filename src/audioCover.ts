// TODO: codesplit
import * as jsmediatags from 'jsmediatags-web';
import { FileInfo } from './domain';

export const getAudioCover = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    jsmediatags.read(file, {
      onSuccess({tags}: FileInfo) {
        const {picture} = tags;
        if (!picture) {
          return reject('File doesnt contain cover');
        }
        
        const {data} = picture;
        const base64String = data.map(value => String.fromCharCode(value)).join('');
        const coverSrc = `data:${picture.format};base64,${window.btoa(base64String)}`;
        
        resolve(coverSrc);
      },
      onError(error: Error) {
        reject(error);
      }
    });
  })
}