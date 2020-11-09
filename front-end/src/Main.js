/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Channels from './Channels'
import Channel from './Channel'

const styles = {
  main: {
    backgroundColor: '#373B44',
    overflow: 'hidden',
    // flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'row',
    // '&>*': {
    // 
    // }
  },
}

export default () => {
  return (
    <main css={styles.main}>
      <Channels />
      <Channel />
    </main>
  );
}
