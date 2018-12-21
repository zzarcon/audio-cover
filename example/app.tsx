import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import getAudioCover from '../src';
import {AppWrapper} from './styled';

export interface AppState {
  coverSrc?: string
}

const repoUrl = 'https://github.com/zzarcon/audio-cover';

export default class App extends Component <{}, AppState> {
  state: AppState = {

  }

  onChange = async (e: any) => {
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
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl} />
        <input type="file" onChange={this.onChange}/>
        <img src={coverSrc} alt=""/>
      </AppWrapper>
    )
  }
}