import * as actionTypes from "./actionTypes"

const initialState: ThemeState ={
    theme:{
        dark:true
    }
}

const reducer = (
    state: ThemeState = initialState,
    action: ThemeAction
  ): ThemeState => {
    switch (action.type) {
      case actionTypes.UPDATE_THEME:
        return {
          ...state,
            theme:action.theme
        }
    }
    return state
  }
  
  export default reducer