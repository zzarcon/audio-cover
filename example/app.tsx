import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import {StylishInput} from 'react-stylish-input';
import AttachmentIcon from '@atlaskit/icon/glyph/attachment';
import Button from '@atlaskit/button';
import Cute from 'react-cute';
import getAudioCover from '../src';
import {AppWrapper} from './styled';

export interface AppState {
  coverSrc?: string;
  error?: Error;
}

const repoUrl = 'https://github.com/zzarcon/audio-cover';

export default class App extends Component <{}, AppState> {
  state: AppState = {

  }

  onChange = async (e: any) => {
    try {
      const file = e.target.files[0];
      const coverSrc = await getAudioCover(file);
      this.setState({
        coverSrc,
        error: undefined
      });
    } catch(error) {
      console.log(error)
      this.setState({
        coverSrc: undefined,
        error
      });
    }
  }

  renderCover = () => {
    const {coverSrc} = this.state;
    if (!coverSrc) {return;}

    return <img src={coverSrc} alt="cover" />;
  }

  renderError = () => {
    const {error} = this.state;
    if (!error) return;

    return (
      <Cute json={error} />
    )
  }

  render() {
    return (
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl} />
        <StylishInput onChange={this.onChange}>
          <Button appearance="primary" iconAfter={<AttachmentIcon label="attachment" />}>
            Select file
          </Button>
        </StylishInput>
        {this.renderCover()}
        {this.renderError()}
      </AppWrapper>
    )
  }
}