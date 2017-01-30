// $(function(){
//     url = 'https://medium.com/feed/@taylorp/';
//     $.ajax({
//         type: "GET",
//         url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
//         dataType: 'json',
//         error: function(){
//             console.log('Unable to load feed, Incorrect path or invalid feed');
//             $('#medium').html("<p class='error' style='text-align: center'>Well, this is embarassing. Looks like something went wrong.</p>")
//         },
//         success: function(xml){
//             console.log(xml);
//             values = xml.responseData.feed.entries;
//             var output = '<ul>';

//             var total = 0;

//             for (var i = 0; i < values.length; i++) {
//                 var mediumArticle = values[i];
                
//                 if( mediumArticle["link"].indexOf('uxtools') >= 0 && total < 3){
//                    output += '<li><div class="image-container"' + mediumArticle["content"]+ '</div><a href="' + mediumArticle["link"] + '"><h4>' + mediumArticle["title"].replace("in UX Tools", "").replace(/"/g, "") + '</h4></a></li>';
//                    total ++;
//                 }
               
//             }
//             output += '</ul>';
//             $("#medium").html(output);
//         }
//     });
// });

$.ajax({
        url: 'https://api.rss2json.com/v1/api.json',
        method: 'GET',
        dataType: 'json',
        data: {
            rss_url: 'https://medium.com/feed/@taylorp/',
        }
}).done(function (response) {
    if(response.status != 'ok'){ throw response.message; }

    // console.log('====== ' + response.feed.title + ' ======');

    // for(var i in response.items){
    //     var item = response.items[i];
    //     console.log(item.title);

    // }
    console.log(response);
            values = response.items;
            var output = '<ul>';

            var total = 0;

            for (var i = 0; i < values.length; i++) {
                var mediumArticle = values[i];
                
                if( mediumArticle["link"].indexOf('uxtools') >= 0 && total < 3){
                   output += '<li><div class="image-container"' + mediumArticle["content"]+ '</div><a href="' + mediumArticle["link"] + '"><h4>' + mediumArticle["title"].replace("in UX Tools", "").replace(/"/g, "") + '</h4></a></li>';
                   total ++;
                }
               
            }
            output += '</ul>';
            $("#medium").html(output);
});

