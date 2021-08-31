const defaultState = {
  details: [],
}
const GET_DETAILS = 'GET_DETAILS'

export const reducerDetails = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DETAILS:
      return {
        ...state,
        details: action.payload.photo,
      }
    default:
      return state
  }
}
export const setDetails = (payload) => ({
  type: GET_DETAILS,
  payload,
})
