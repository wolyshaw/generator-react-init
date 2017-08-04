const common = (state = '', action) => {
  switch (action.type) {
    case 'set_common':
      return action.data
      break
    default:
      return state
  }
}

export default common
