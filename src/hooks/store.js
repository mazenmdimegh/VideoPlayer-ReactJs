import { createStore } from 'redux'


export const selectData = (state) => state.videos.value

const dataReducer = (state = {
    videos: [],
    selectVideo: [],
    loading: false
  }, action) => {
    switch (action.type) {
      case "SET_DATA":
        return {
          ...state,
          videos: action.payload
        }
      case "SET_SELECTEDVIDEO":
        return {
          ...state,
          selectVideo: action.payload
        }
      case "SET_LOADING":
        return {
          ...state,
          loading: action.payload
        }
    }
    return state
  }

const store = createStore(dataReducer)
const unsubscribe = store.subscribe(() =>
  console.log('State after dispatch: ', store.getState())
)
export default store