import * as actionTypes from "./actionTypes"

export function updateTheme(theme: ITheme) {
    const action: ThemeAction = {
      type: actionTypes.UPDATE_THEME,
      theme,
    }

    return simulateHttpRequest(action)
  }
  
  export function simulateHttpRequest(action: ThemeAction) {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 100)
    }
  }