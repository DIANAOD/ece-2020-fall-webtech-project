import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const styles = {
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#565E71',
    padding: '50px',
  },
}

export default () => {
  return (
    <div className="App" css={styles.root}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
