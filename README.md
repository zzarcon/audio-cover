# audio-cover
> Get the cover from an audio file in the browser

### Installation

```
$ yarn add audio-cover
```

### Usage

```javascript
import getAudioCover from 'audio-cover';

try {
  const coverSrc = await getAudioCover(file);
  
  console.log('base64 encoded cover', coverSrc)
} catch (e) {
  console.log('no cover available', e)
}
```

### Api

```typescript
getAudioCover: (file: File) => Promise<string>
```

> given a file, returns a promise with the cover in base64, otherwise will reject if cover is not present

