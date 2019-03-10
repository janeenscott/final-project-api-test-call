alert("what's up??");

(function ($) {
    $(function () {
        $.ajax('https://api.teleport.org/api/urban_areas/slug:chicago/scores/', {
            'error': function (resp, err) {
                console.log('oops!');
                $('body').html("Oh shoot. This doesn't work.");
            },
            'success': function (data) {
                console.log('data: ', data);

                data.forEach(showCityData)

            }
        });

        function showCityData(city){
            $('body').append('<p>' + data + '</p>' );
        }



    });
}(jQuery));

      //
      // function createNode(element) {
      //       return document.createElement(element);
      //   }
      //
      //   function append(parent, el) {
      //       return parent.appendChild(el);
      //   }
      //
      //   const ul = document.getElementById('cities');
      //   const url = 'https://api.teleport.org/api/urban_areas/slug:chicago/scores/?results=10';
      //
      //   fetch(url)
      //       .then((resp) => resp.json())
      //       .then(function (data) {
      //           let cities = data.results;
      //           return cities.map(function (chicago) {
      //               let li = createNode('li');
      //               span = createNode('span');
      //               span.innerHTML = `${_links.categories.name.score_out_of_10}`;
      //               append(li, span);
      //               append(ul, li);
      //           })
      //
      //       })
      //       .catch(function (error) {
      //           console.log(error);
      //       });



