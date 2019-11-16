import active from './active'
import alerts from './alerts'
import notifications from './notifications'
import messages from './messages'
import peers from './peers'
import media from './media'
import streams from './streams'
import { combineReducers } from 'redux'

export default combineReducers({
  active,
  alerts,
  notifications,
  messages,
  media,
  peers,
  streams,
})
