(function ($) {
    $(function () {

        var csrftoken = $("[name=csrfmiddlewaretoken]").val();

        function csrfSafeMethod(method) {
            // these HTTP methods do not require CSRF protection
            return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
        }

        $.getJSON('https://api.teleport.org/api/urban_areas/slug:chicago/scores/',
            function (data) {
                console.log(data);
                $(data).each(function (i, city) {
                    $('#cities').append($("<tr>")
                        .append($("<td>").append(city.categories.name))
                        .append($("<td>").append(city.categories.score_out_of_10))
                    )
                });

                // $.ajax('https://api.teleport.org/api/urban_areas/slug:chicago/scores/', {
                //     'error': function (resp, err) {
                //         console.log('oops!');
                //         $('body').html("Oh shoot. This doesn't work.");
                //     },
                //     'success': function (data) {
                //         console.log('data: ', data);
                //
                //         data.forEach(showCityData)
                //
                //     }
                // });

                // function showCityData(city) {
                //     $('body').append('<p>' + data + '</p>');
                // }
            });

    })

}(jQuery));



