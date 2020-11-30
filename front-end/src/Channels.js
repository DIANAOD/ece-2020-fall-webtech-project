import {useContext, useEffect, useState} from 'react';
import axios from 'axios';
/** @jsx jsx */
import { jsx } from '@emotion/core'
// Layout
import Link from '@material-ui/core/Link'
// Local
import {Context} from './Context'

const styles = {
  // root: {
  //   minWidth: '200px',
  // },
  channel: {
    padding: '.2rem .5rem',
    whiteSpace: 'nowrap', 
  }
}

export default ({
  onChannel
}) => {
  const {oauth} = useContext(Context)
  const [channels, setChannels] = useState([])
  useEffect( () => {
    const fetch = async () => {
      try{
        const {data: channels} = await axios.get('http://localhost:3001/channels')
        setChannels(channels)
      }catch(err){
        console.error(err)
      }
    }
    fetch()
  }, [oauth])
  return (
    <ul style={styles.root}>
      { channels.map( (channel, i) => (
        <li key={i} css={styles.channel}>
          <Link
            href="#"
            onClick={ (e) => {
              e.preventDefault()
              onChannel(channel)
            }}
            >
            {channel.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
