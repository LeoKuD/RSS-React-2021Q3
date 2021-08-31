const defaultState = {
  data: [],
  totalPagesCount: '',
}
const GET_DATA = 'GET_DATA'

export const reducerData = (state = defaultState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        data: action.payload.photos.photo,
        totalPagesCount: action.payload.photos.pages,
      }
    default:
      return state
  }
}

export const setData = (payload) => ({
  type: GET_DATA,
  payload,
})
