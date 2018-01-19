import { Map } from 'immutable';

const increment = state => {
  const count = state.get('count')
  return state.set('count', count + 1)
}

const reducer = (state = Map({ count: 0 }), action) => {
  switch (action.type) {
  case 'INCREMENT':
    return increment(state)
  default:
    return state
  }  
}

export default reducer