$(document).ready(function() {
    gameSearch();
});

function gameSearch() {
    var results, number;
    var apikey = "80225b21486f42f1c583436085dc460ebe670f7c";
    var baseUrl = "http://www.giantbomb.com/api";

    // construct our URL
    var gameSearchURL = baseUrl + '/search/?api_key=' + apikey + '&format=jsonp&limit=50';
    var query = 'Batman & Robin';

    var q = gameSearchURL + '&query=' + encodeURI(query);
    console.log(q);

    $.ajax({
        type: "GET",
        url: gameSearchURL + '&query=' + encodeURI(query),
        dataType: "jsonp",
        crossDomain: true,
        jsonp: 'json_callback',
        success: searchCallback

    });

}

function searchCallback(data) {
    console.log(data.results);
    results = data.results;
    for(var i = 0; i<results.length;i++) {
        //var image = results[i].image.icon_url;
        var el = "<div class = 'game well'>" +
                    "<h1>" + results[i].name + "<h1>" +
                    //   "<img src = 'image'>"
                    "<p>" + results[i].deck +"</p>" +
                "</div>"
        $('#container').append(el);
    }

}