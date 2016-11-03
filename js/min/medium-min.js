$(function(){
    url = 'https://medium.com/feed/@taylorp/';
    $.ajax({
        type: "GET",
        url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
        dataType: 'json',
        error: function(){
            console.log('Unable to load feed, Incorrect path or invalid feed');
            $('#medium').html("<p class='error'>Well, this is embarassing. Looks like something went wrong.</p>")
        },
        success: function(xml){
            values = xml.responseData.feed.entries;
            
            var output = '<ul>';
            for (var i = 0; i < 3; i++) {
                var mediumArticle = values[i];
                
                if( mediumArticle["link"].indexOf('uxtools') >= 0){
                   output += '<li><div class="image-container"' + mediumArticle["content"]+ '</div><a href="' + mediumArticle["link"] + '"><h4>' + mediumArticle["title"].replace("in UX Tools", "").replace(/"/g, "") + '</h4></a></li>';
                }
               
            }
            output += '</ul>';
            $("#medium").html(output);
        }
    });
});

