import { useContext, useState } from 'react'
import './App.css';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Local
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Login from './Login'
import {Context} from './Context'

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
  // const [user, setUser] = useState(null)
  const {oauth} = useContext(Context)
  const [drawerMobileVisible, setDrawerMobileVisible] = useState(false)
  const drawerToggleListener = () => {
    setDrawerMobileVisible(!drawerMobileVisible)
  }
  return (
    <div className="App" css={styles.root}>
      <Header drawerToggleListener={drawerToggleListener}/>
      {
        oauth ? <Main drawerMobileVisible={drawerMobileVisible} /> : <Login />
      }
      <Footer />
    </div>
  );
}
