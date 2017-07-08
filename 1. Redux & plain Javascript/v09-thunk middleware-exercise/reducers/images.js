function images(currentState, action){
    var DEFAULT_STATE = {images: [], loading:false};
    var nextState = Object.assign({},currentState);
    if (currentState === undefined) { // look at to Note 1.1

        nextState = DEFAULT_STATE;// Note1.2
        return nextState;
    }
    switch (action.type) {
      case 'FETCH_IMG_DONE': // look at Note2.1
        nextState.images = action.images.slice();   // NOTE copy images array
        nextState.loading = false;
        return nextState;// Note2.2
      case 'FETCH_IMG_START': // look at Note2.1
        nextState.loading = true;
        return nextState;// Note2.2
      default:
        nextState = currentState;
        return nextState;
    }
}
