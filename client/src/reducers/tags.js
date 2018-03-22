const tags = ( state = [], action) => {
  switch (action.type) {
    case 'TAGS':
      return action.tags
    case 'DELETE_TAG':
      return state.filter( t => t.id !== action.id )
    case 'ADD_TAG':
      return [...state, action.tag]
    default:
      return state;
  }
}

export default tags
