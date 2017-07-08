
var decrease = function(){
    return { type: 'DECREMENT' };
}

var increase = function(){
    return { type: 'INCREMENT' };
}

var getSum = function(a, b){
    return { type: 'SUM', a:a, b:b };
}

// ASYNC
var asyncIncrease = function(dispatch, state){
    dispatch({type:"INCREMENT_LOADING"});
    _fakeServerApi.increaseCount(state.count.result,
        function(data){
            dispatch({ type: 'INCREMENT' });
        }
    );
}

var getRandomImages = function(dispatch, state){
  var imgurAPI = "https://api.imgur.com/3/gallery/random/random/1";
  // NOTE other API: "https://api.imgur.com/3/gallery/hot/viral/0"
  $.getJSON(imgurAPI).done(function(data){
    console.log('API data: ', data)
    var links = data.data.map(function(data) { return data.link})
    console.log(links);
  })
}
