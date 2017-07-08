
// step 1.2
var store = Redux.createStore(combineReducer, Redux.applyMiddleware(logger, crashReporter, thunk))
// ~end step 1.2
// step 1.3
function render() {
  var state = store.getState()
    document.getElementById('value').innerHTML = state.count.result;
    document.getElementById('value2').innerHTML = state.sum;

    if(state.count.loading){
        document.getElementById('status').innerHTML = "is loading...";
    }else{
         document.getElementById('status').innerHTML = "loaded";
    }

    if(state.images.loading){
        document.getElementById('imagesStatus').innerHTML = "loading hot images...";
    }else{
        document.getElementById('imagesStatus').innerHTML = "idle";
    }

    var imgListNode = document.getElementById('imagesList')
    // clear child node of imagesList
    imgListNode.innerHTML = ''

    state.images.images.forEach(function(image) {
      if (image.search('.gif') === -1) return

      var imgNode = document.createElement('img')
      imgNode.src = image
      imgListNode.appendChild(imgNode)
    })

};
store.subscribe(render);
// ~end step 1.3
render();
