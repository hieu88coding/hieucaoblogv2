interface AppState {
    isDarkMode: boolean;
  }
  
  const initialState: AppState = {
    isDarkMode: false,
  };
  
  const appReducer = (state = initialState, action: any): AppState => {
    switch (action.type) {
      case 'SET_DARK_MODE':
        return {
          ...state,
          isDarkMode: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default appReducer;