# audio-cover [![Build Status](https://travis-ci.org/zzarcon/audio-cover.svg?branch=master)](https://travis-ci.org/zzarcon/audio-cover) [DEMO](https://zzarcon.github.io/audio-cover)
> Get the cover from an audio file in the browser

### Installation

```
$ yarn add audio-cover
```

### Demo

[https://zzarcon.github.io/audio-cover](https://zzarcon.github.io/audio-cover)

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

### Example

```jsx
import getAudioCover from 'audio-cover';

class App extends React.Component {
  state = {}

  onChange = async (e) => {
    try {
      const file = e.target.files[0];
      const coverSrc = await getAudioCover(file);
      this.setState({coverSrc});
    } catch(e) {
      console.log('error:', e)
    }
  }

  render() {
    const {coverSrc} = this.state;

    return (
      <div>
        <input type="file" onChange={this.onChange}/>
        <img src={coverSrc} />
      </div>
    )
  }
}
```

### Author 👶🏼

[@zzarcon](https://twitter.com/zzarcon)