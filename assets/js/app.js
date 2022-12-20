let next = 1;
let nextTV = 1;
const posterPaths = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
const backgroundPaths = "https://image.tmdb.org/t/p/w1280";
const key =
  "&api_key=50479b124e0923c371395234e579d901&language=en-US&include_image_language=en-US,null";
const url = "https://api.themoviedb.org/3/discover/movie?";
const urlTV = "https://api.themoviedb.org/3/discover/tv?";
const movieCast = "https://api.themoviedb.org/3/movie/";
const actorInfo = "https://api.themoviedb.org/3/discover/movie?with_cast=";
const imdbLink = "https://www.imdb.com/title/";
const date = new Date();
const Excerpt = "";
const episodeSlug = "Episode";
const seasonSlug = "Season";
const baseUrl = "https://api.themoviedb.org/3/tv/";
const apikey = "?api_key=a0a7e40dc8162ed7e37aa2fc97db5654";
const language = "&language=en-US";
const ImgLang = "&include_image_language=en-US,null";
const appendToResponse = "&append_to_response=images";
const trailerto = "https://trailers.to/stream/movie/";
function getClassByRate(e) {
  if (!e)
    return [
      '<i class="fa fa-star rating-star-empty"></i>',
      '<i class="fa fa-star rating-star-empty"></i>',
      '<i class="fa fa-star rating-star-empty"></i>',
      '<i class="fa fa-star rating-star-empty"></i>',
      '<i class="fa fa-star rating-star-empty"></i>',
    ].join("");
  for (
    var s = Math.round(e.toFixed(1)) / 2, t = "", i = 1;
    i <= Math.floor(s);
    i++
  )
    t += '<i class="fa fa-star rating-star"></i>';
  0 < s % 1 &&
    (t +=
      "<span class='fa-stack rating-star-half-container'><i class='fa fa-star fa-stack-1x rating-star-half-empty'></i><i class='fa fa-star-half fa-stack-1x rating-star-half'></i></span>");
  for (i = Math.ceil(s); i < 5; i++)
    t += '<i class="fa fa-star rating-star-empty"></i>';
  return t;
}
function sortMovies(e) {
  (next = 0),
    $(".movies").remove(),
    $(".spinner").show().delay(1e3).fadeOut(),
    $(".movie-detail").hide(),
    $(".shows-container-contain").hide(),
    "rating" === e
      ? (showMovie((choices = "sort_by=vote_count.desc")),
        $(".sortfilm").text("Rating"),
        $(".genrefilm").text("All"))
      : "grossing" === e
      ? (showMovie((choices = "sort_by=revenue.desc")),
        $(".sortfilm").text("Grossing"),
        $(".genrefilm").text("All"))
      : "action" === e
      ? (showMovie((choices = "with_genres=28")),
        $(".genrefilm").text("Action"))
      : "adventure" === e
      ? (showMovie((choices = "with_genres=12")),
        $(".genrefilm").text("Adventure"))
      : "animation" === e
      ? (showMovie((choices = "with_genres=16")),
        $(".genrefilm").text("Animation"))
      : "comedy" === e
      ? (showMovie((choices = "with_genres=35")),
        $(".genrefilm").text("Comedy"))
      : "crime" === e
      ? (showMovie((choices = "with_genres=80")), $(".genrefilm").text("Crime"))
      : "documentary" === e
      ? (showMovie((choices = "with_genres=99")),
        $(".genrefilm").text("Documentary"))
      : "drama" === e
      ? (showMovie((choices = "with_genres=18")), $(".genrefilm").text("Drama"))
      : "family" === e
      ? (showMovie((choices = "with_genres=10751")),
        $(".genrefilm").text("Family"))
      : "fantasy" === e
      ? (showMovie((choices = "with_genres=14")),
        $(".genrefilm").text("Fantasy"))
      : "foreign" === e
      ? showMovie((choices = "with_genres=10769"))
      : "history" === e
      ? (showMovie((choices = "with_genres=36")),
        $(".genrefilm").text("History"))
      : "horror" === e
      ? (showMovie((choices = "with_genres=27")),
        $(".genrefilm").text("Horror"))
      : "music" === e
      ? (showMovie((choices = "with_genres=10402")),
        $(".genrefilm").text("Music"))
      : "mystery" === e
      ? (showMovie((choices = "with_genres=9648")),
        $(".genrefilm").text("Mystery"))
      : "romance" === e
      ? (showMovie((choices = "with_genres=10749")),
        $(".genrefilm").text("Romance"))
      : "science fiction" === e
      ? (showMovie((choices = "with_genres=878")),
        $(".genrefilm").text("Sci-Fi"))
      : "tv movie" === e
      ? (showMovie((choices = "with_genres=10770")),
        $(".genrefilm").text("TV Movie"))
      : "thriller" === e
      ? (showMovie((choices = "with_genres=53")),
        $(".genrefilm").text("Thriller"))
      : "war" === e
      ? (showMovie((choices = "with_genres=10752")),
        $(".genrefilm").text("War"))
      : "western" === e
      ? (showMovie((choices = "with_genres=37")),
        $(".genrefilm").text("Western"))
      : (showMovie((choices = "sort_by=popularity.desc")),
        $(".sortfilm").text("Popular"));
}
function sortTv(e) {
  (nextTV = 0),
    $(".tv").remove(),
    $(".movie-detail").hide(),
    $(".shows-container-contain").hide(),
    $(".spinner").show().delay(1e3).fadeOut(),
    "rating" === e
      ? (showTv((choices = "sort_by=vote_count.desc")),
        $(".sortseries").text("Rating"),
        $(".genreseries").text("All"))
      : "grossing" === e
      ? (showTv((choices = "sort_by=revenue.desc")),
        $(".sortseries").text("Grossing"),
        $(".genreseries").text("All"))
      : "action" === e
      ? (showTv((choices = "with_genres=10759")),
        $(".genreseries").text("Action"))
      : "adventure" === e
      ? (showTv((choices = "with_genres=12")),
        $(".genreseries").text("Adventure"))
      : "animation" === e
      ? (showTv((choices = "with_genres=16")),
        $(".genreseries").text("Animation"))
      : "comedy" === e
      ? (showTv((choices = "with_genres=35")), $(".genreseries").text("Comedy"))
      : "crime" === e
      ? (showTv((choices = "with_genres=80")), $(".genreseries").text("Crime"))
      : "documentary" === e
      ? (showTv((choices = "with_genres=99")),
        $(".genreseries").text("Documentary"))
      : "drama" === e
      ? (showTv((choices = "with_genres=18")), $(".genreseries").text("Drama"))
      : "family" === e
      ? (showTv((choices = "with_genres=10751")),
        $(".genreseries").text("Family"))
      : "fantasy" === e
      ? (showTv((choices = "with_genres=10765")),
        $(".genreseries").text("Fantasy"))
      : "history" === e
      ? (showTv((choices = "with_genres=36")),
        $(".genreseries").text("History"))
      : "horror" === e
      ? (showTv((choices = "with_genres=27")), $(".genreseries").text("Horror"))
      : "mystery" === e
      ? (showTv((choices = "with_genres=9648")),
        $(".genreseries").text("Mistery"))
      : "romance" === e
      ? (showTv((choices = "with_genres=10749")),
        $(".genreseries").text("Romance"))
      : "science fiction" === e
      ? (showTv((choices = "with_genres=878")),
        $(".genreseries").text("Sci-Fi"))
      : "war" === e
      ? (showTv((choices = "with_genres=10768")), $(".genreseries").text("War"))
      : "western" === e
      ? (showTv((choices = "with_genres=37")),
        $(".genreseries").text("Western"))
      : "kids" === e
      ? (showTv((choices = "with_genres=10762")),
        $(".genreseries").text("Kids"))
      : "reality" === e
      ? (showTv((choices = "with_genres=10764")),
        $(".genreseries").text("Reality"))
      : (showTv((choices = "sort_by=popularity.desc")),
        $(".sortseries").text("Popular"));
}
function checkSubmit(e) {
  if (e.keyCode === 13)
    return (
      search(document.getElementById("search").value),
      (document.getElementById("search").value = ""),
      !1
    );
}
function search(search) {
  $(".movies").remove(),
    $(".tv").remove(),
    $(".movie-detail").hide(),
    $(".shows-container-contain").hide();
  //http://api.themoviedb.org/3/search/multi?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&query=
  var searchurl =
    "https://api.themoviedb.org/3/search/multi?api_key=6b4357c41d9c606e4d7ebe2f4a8850ea&language=en-US&query=";
  $.getJSON(searchurl + search, function (data) {
    for (var i = 0; i < data.results.length; i++) {
      if (window.CP.shouldStopExecution(0)) break;
      var id = data.results[i].id;
      var title = data.results[i].title;
      var rating = data.results[i].vote_average;
      var poster = posterPaths + data.results[i].poster_path;
      var overview = data.results[i].overview;
      if (poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2null") {
        //if their is no poster dont show the movie
      } else if (
        poster === "https://image.tmdb.org/t/p/w370_and_h556_bestv2undefined"
      ) {
        //dont show if the overview is null
      } else if (overview == "null") {
        //dont show if the overview is null
      } else {
        $(".item-container").append(
          "<li data-imdb-id='" +
            id +
            "' class='item movies m" +
            i +
            "'  id='" +
            id +
            "'><div class='cover fadein' style='background-size: cover; background-image: url(" +
            poster +
            ");'><li class='cover-imgs' onclick='movieInfo(" +
            title +
            "</p><p class='year'>2022</p><p class='seasons'>" +
            rating +
            "</span></div></a>"
        );
      }
    }
    window.CP.exitedLoop(0);
  });
}
function showMovie(e) {
  next++,
    $.getJSON(url + e + key + "&page=" + next, function (e) {
      for (let s = 0; s < e.results.length; s++) {
        const t = e.results[s].id;
        var i = "" === (i = e.results[s].release_date) ? "" : i.substring(0, 4);
        const a = e.results[s].title;
        var o = e.results[s].overview;
        const r = e.results[s].vote_average;
        const n = posterPaths + e.results[s].poster_path;
        "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === n ||
          "null" == o ||
          "" == r ||
          $(".main").append(
            "<li class='item movies' onclick='movieInfo(" +
              t +
              ")'><div class='cover fadein' style='background-size: cover;  background-image: url(" +
              n +
              ");'><div class='cover-imgs'></div><div class='cover-overlay cover-info-overlay'><i class='fa fa-play playnow'></i><div class='rating' style='display: block;'><div class='rating-stars'>" +
              getClassByRate(r) +
              "</div><div class='rating-value'>" +
              r +
              "/10</div></div></div></div><p class='title'>" +
              a +
              "</p><p class='year'>" +
              i.substring(0, 4) +
              "</p><p class='destra'>Movie</p></li>"
          );
      }
      $(".item.movies").hover(function (e) {
        $(this).toggleClass("selected", "mouseenter" === e.type);
      });
    });
}
function movieInfo(l) {
  $.getJSON(movieCast + l + "/casts?" + key, function (e) {
    $(".movies").hide(),
      $(".more").hide(),
      $(".spinner").show().delay(1e3).fadeOut(),
      $(".star-container.film").empty();
    const s =
      "https://api.themoviedb.org/3/movie/" +
      l +
      "?api_key=50479b124e0923c371395234e579d901&append_to_response=videos,external_ids";
    $.getJSON(s, function (e) {
      e.budget, e.revenue;
      const s = e.release_date;
      const tg = e.tagline;
      const t = imdbLink + e.imdb_id;
      const i = (e.imdb_id, e.runtime);
      const a = (e.tagline, e.title);
      const o = e.overview;
      const p = e.production_companies;
      const cr = e.production_countries;
      const r = e.vote_average;
      const n = "https://www.youtube.com/watch?v=" + e.videos.results[0].key;
      let c = "https://image.tmdb.org/t/p/w500" + e.poster_path;
      "https://image.tmdb.org/t/p/w500null" === c &&
        (c = "https://i.imgur.com/kNZsyUs.png");
      const d = backgroundPaths + e.backdrop_path;
      (genre =
        3 < e.genres.length
          ? e.genres[0].name +
            ", " +
            e.genres[1].name +
            ", " +
            e.genres[2].name +
            ", " +
            e.genres[3].name
          : 2 < e.genres.length
          ? e.genres[0].name + ", " + e.genres[1].name + ", " + e.genres[2].name
          : 1 < e.genres.length
          ? e.genres[0].name + ", " + e.genres[1].name
          : e.genres[0].name),
        $(".star-container.film").append(getClassByRate(r)),
        $(".chiudi").append(
          "<div class='fa fa-times close-icon' onclick='exit(" + l + ")'></div>"
        ),
        $(".movietitle").text(a),
        $(".movietagline").text(tg),
        $(".movieyear").text(s.substring(0, 4)),
        $(".movieruntime").text(i + " min"),
        $(".movieplot").text(o),
        $(".movieproduk").text(p.map((i) => i.name).join(",  ")),
        $(".moviecountry").text(cr.map((i) => i.name).join(",  ")),
        $(".moviegenres").text(genre),
        $(".mcover-image").attr("src", c),
        $(".mcover-image").removeClass("fadein").addClass("fadein"),
        $(".source-link").attr("href", t),
        $("#watch-trailer").attr("href", n),
        $(".magnet-link").attr("href", t),
        $(".backdrop").css("background-image", "url(" + d + ")"),
        $(".backdrop").removeClass("fadein").addClass("fadein"),
        $(".movie-detail").hide().fadeIn(500);
    });
  });
}
function showActor(e) {
  $(".overview").hide();
  $.getJSON(actorInfo + e + key + "&page=1", function (e) {
    for (let s = 0; s < e.results.length; s++) {
      const t = e.results[s].id;
      const i =
        (e.results[s].title, e.results[s].overview, e.results[s].vote_average);
      (ratin = i / 2), (ratin = Math.round(2 * ratin) / 2);
      let a = posterPaths + e.results[s].poster_path;
      "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === a &&
        (a = "https://i.imgur.com/kNZsyUs.png"),
        $(".main").append(
          "<div class='col-sm-2 text-center movies m" +
            s +
            "' id='" +
            t +
            "'><div class='tiles'><img onclick='movieInfo(" +
            t +
            ")' src=" +
            a +
            "><div class='ratings'><p class='lead rating'>" +
            ratin +
            " <i class='fa fa-star' aria-hidden='true'></i></p></div></div></div>"
        );
    }
  });
}
function showTv(e) {
  nextTV++,
    $.getJSON(
      urlTV +
        e +
        key +
        "&timezone=America%2FNew_York&include_adult=false&include_null_first_air_dates=false&with_original_language=en&without_keywords=210024&append_to_response=genres,season_number&page=" +
        nextTV,
      function (e) {
        for (let s = 0; s < e.results.length; s++) {
          const t = e.results[s].id;
          const i = e.results[s].name;
          const a = e.results[s].vote_average;
          const o = e.results[s].overview;
          let r = e.results[s].first_air_date;
          "" === r && (r = "");
          let n = posterPaths + e.results[s].poster_path;
          "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === n &&
            (n = "https://i.imgur.com/kNZsyUs.png"),
            "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === n ||
              "" == o ||
              "" == a ||
              "" == e.results[s].genre_ids ||
              "" == r ||
              $(".main").append(
                "<li id='" +
                  t +
                  "' class='item tv' onclick='tvInfo(" +
                  t +
                  ", 1)'><div class='cover fadein' style='background-image: url(" +
                  n +
                  ");'><div class='cover-imgs'></div><div class='cover-overlay cover-info-overlay'><i class='fa fa-play playnow'></i><div class='rating' style='display: block;'><div class='rating-stars'>" +
                  getClassByRate(a) +
                  "</div><div class='rating-value'>" +
                  a +
                  "/10</div></div></div></div><p class='title'>" +
                  i +
                  "</p><p class='year'>" +
                  r.substring(0, 4) +
                  "</p><p class='destra'>TV</p></li>"
              );
        }
        $(".item.tv").hover(function (e) {
          $(this).toggleClass("selected", "mouseenter" === e.type);
        });
      }
    );
}
function tvInfo(d) {
  $(".movie").remove(),
    $(".tv").hide(),
    $(".moreTV").hide(),
    $(".shows-container-contain").show(),
    $(".seasons").show(),
    $(".spinner").show().delay(1e3).fadeOut();
  const e =
    "https://api.themoviedb.org/3/tv/" +
    d +
    "?api_key=50479b124e0923c371395234e579d901&append_to_response=images,seasons,keywords,external_ids";
  $.getJSON(e, function (e) {
    $(".seasons").empty(),
      $(".star-container-tv").empty(),
      3 < e.genres.length
        ? (e.genres[0].name,
          e.genres[1].name,
          e.genres[2].name,
          e.genres[3].name)
        : 2 < e.genres.length
        ? (e.genres[0].name, e.genres[1].name, e.genres[2].name)
        : 1 < e.genres.length
        ? (e.genres[0].name, e.genres[1].name)
        : e.genres[0].name;
    e.seasons.length;
    const s = e.name;
    const t = e.first_air_date.substring(0, 4);
    let i = e.vote_average;
    "" === e.vote_average && (i = 0),
      $(".star-container-tv").append(getClassByRate(i));
    const a = e.episode_run_time[0] + " min";
    const o = e.overview;
    const r = e.status;
    let n = posterPaths + e.poster_path;
    "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === n &&
      (n = "https://i.imgur.com/kNZsyUs.png");
    i = "https://image.tmdb.org/t/p/w1280" + e.backdrop_path;
    "" === e.backdrop_path && (i = "https://i.imgur.com/kNZsyUs.png"),
      $(".show-detail-container").append(
        "<div class='fa fa-times close-icon closetv' onclick='exitTv(" +
          d +
          ")'></div>"
      ),
      $(".shm-title").text(s),
      $(".shmi-year").text(t),
      $(".shmi-runtime").text(a),
      $(".shmi-status").text(r),
      $(".shm-synopsis").text(o),
      $(".shmi-genre").text(e.genres[0].name),
      $(".shp-img").attr("style", 'background-image: url("' + n + '")'),
      $(".shb-img").attr("style", 'background-image: url("' + i + '")'),
      $(".shp-img, .shb-img").removeClass("fadein").addClass("fadein");
    for (let c = 0; c < e.seasons.length; c++)
      $(".seasons").append(
        "<div class='row season' data-season='" +
          e.seasons[c].season_number +
          "' onclick='seriesInfo(" +
          d +
          "," +
          e.seasons[c].season_number +
          ");seriesShow(" +
          d +
          "," +
          e.seasons[c].season_number +
          ",1);' value='" +
          e.seasons[c].season_number +
          "'><a href='#'>Season " +
          e.seasons[c].season_number +
          "</a></div>"
      );
    $(".row.season").click(function (e) {
      e.preventDefault(),
        $(".season").removeClass("activated"),
        $(this).addClass("activated");
    }),
      $('.row.season[data-season="1"]').addClass("activated"),
      $('.row.season[data-season="0"]').hide();
  }),
    $(".show-details").ready(function () {
      seriesInfo(d, 1), seriesShow(d, 1, 1);
    });
}
function seriesInfo(a, o) {
  const e =
    "https://api.themoviedb.org/3/tv/" +
    a +
    "/season/" +
    o +
    "?api_key=50479b124e0923c371395234e579d901&append_to_response=keywords,external_ids";
  $.getJSON(e, function (e) {
    $(".episodes").empty();
    for (let s = 0; s < e.episodes.length; s++) {
      const t = e.episodes[s].episode_number;
      const i = e.episodes[s].name;
      e.episodes[s].overview, e.episodes[s].air_date;
      $(".episodes").append(
        "<div data-episode_id='" +
          t +
          "' data-episode_num='" +
          t +
          "' onclick='seriesShow(" +
          a +
          "," +
          o +
          "," +
          t +
          ")' value='" +
          t +
          "' class='row episode'><a href='#'><span class='episode_num'>" +
          t +
          "</span><span class='episode_title'>" +
          i +
          "</span><i id='watched' class='fa fa-eye watched'></i></a></div>"
      );
    }
    $(".row.episode").click(function (e) {
      e.preventDefault(),
        $(".row.episode").removeClass("activated"),
        $(this).addClass("activated");
    }),
      $('.row.episode[data-episode_id="1"]').addClass("activated");
  });
}
function seriesShow(e, s, t) {
  (ShowAPI =
    "https://api.themoviedb.org/3/tv/" +
    e +
    "/season/" +
    s +
    "/episode/" +
    t +
    "?api_key=50479b124e0923c371395234e579d901&append_to_response=keywords,external_ids"),
    $.getJSON(ShowAPI, function (e) {
      $(".sd-overview").empty();
      const s = e.name;
      const t = e.episode_number;
      const i = e.overview;
      const a = e.season_number;
      const o = e.air_date;
      e.still_path, e.vote_average;
      $(".sd-overview").append(
        "<div class='sdo-infos'> <div class='sdoi-title'>" +
          s +
          "</div> <div class='sdoi-links'>  </div> <div class='sdoi-aired'> <div class='sdoi-number'>Season " +
          a +
          ", Episode " +
          t +
          "</div> <div class='sdoi-date'>Aired Date: " +
          o +
          "</div> </div> <div class='sdoi-synopsis'>" +
          i +
          "<div></div><p> Test : " +
          s +
          " Season " +
          a +
          " Episode " +
          t +
          " Full Episode " +
          "</p>"
      );
    });
}
function exit(e) {
  $(".movies").show(),
    $(".more").show(),
    $(".movie-detail").hide(),
    $(".spinner").show().delay(1e3).fadeOut(),
    (window.location.hash = e);
}
function exitTv(e) {
  $(".shows-container-contain").hide(),
    $(".seasons").hide(),
    $(".tv").show(),
    $(".moreTV").show(),
    $(".spinner").show().delay(1e3).fadeOut(),
    (window.location.hash = e);
}
$("#tv").click(function () {
  (nextTV = 0),
    sortTv(),
    $(".movies").remove(),
    $(".moreTV").show(),
    $(".more").hide(),
    $(".droptv").show(),
    $(".dropmovies").hide(),
    $(".spinner").show().delay(1e3).fadeOut();
}),
  $("#movie").click(function () {
    sortMovies(),
      $(".tv").remove(),
      $(".more").show(),
      $(".moreTV").hide(),
      $(".dropmovies").show(),
      $(".droptv").hide(),
      $(".spinner").show().delay(1e3).fadeOut(),
      (next = 1);
  }),
  $(".more").click(function () {
    showMovie(choices), $(".spinner").show().delay(1e3).fadeOut();
  }),
  $(".moreTV").click(function () {
    showTv(choices), $(".spinner").show().delay(1e3).fadeOut();
  }),
  $(".source").click(function () {
    $(".genrefilm").text("All"),
      $(".sortfilm").text("Popular"),
      $(".genreseries").text("All"),
      $(".sortseries").text("Popular"),
      $(".source").removeClass("active"),
      $(this).addClass("active");
  }),
  $(".dropdown-menu li a").click(function () {
    $(".dropdown-menu li a").removeClass("active"), $(this).addClass("active");
  }),
  $(".qselect").click(function () {
    $(".qselect").removeClass("active"), $(this).addClass("active");
  }),
  $(".droptv").hide(),
  $("a").click(function (e) {
    e.preventDefault();
  }),
  $(".external").click(function (e) {
    e.preventDefault(), window.open(this.href);
  }),
  $(".moreTV").hide(),
  $(".genres.dropmovies a").click(function () {
    $(".sortfilm").text("Popular");
  }),
  $(".genres.droptv a").click(function () {
    $(".sortseries").text("Popular");
  }),
  $(".lightbox").click(function (e) {
    e.preventDefault(), $(this).ekkoLightbox();
  }),
  sortMovies();

// let next = 1;
// let nextTV = 1;
// const posterPaths = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";
// const backgroundPaths = "https://image.tmdb.org/t/p/w1280";
// const key =
//   "&api_key=50479b124e0923c371395234e579d901&language=en-US&include_image_language=en-US,null";
// const url = "https://api.themoviedb.org/3/discover/movie?";
// const urlTV = "https://api.themoviedb.org/3/discover/tv?";
// const movieCast = "https://api.themoviedb.org/3/movie/";
// const actorInfo = "https://api.themoviedb.org/3/discover/movie?with_cast=";
// const imdbLink = "https://www.imdb.com/title/";
// const date = new Date();
// const Excerpt = "";
// const episodeSlug = "Episode";
// const seasonSlug = "Season";
// const baseUrl = "https://api.themoviedb.org/3/tv/";
// const apikey = "?api_key=a0a7e40dc8162ed7e37aa2fc97db5654";
// const language = "&language=en-US";
// const ImgLang = "&include_image_language=en-US,null";
// const appendToResponse = "&append_to_response=images";
// const trailerto = "https://trailers.to/stream/movie/";
// function getClassByRate(e) {
//   if (!e)
//     return [
//       '<i class="fa fa-star rating-star-empty"></i>',
//       '<i class="fa fa-star rating-star-empty"></i>',
//       '<i class="fa fa-star rating-star-empty"></i>',
//       '<i class="fa fa-star rating-star-empty"></i>',
//       '<i class="fa fa-star rating-star-empty"></i>',
//     ].join("");
//   for (
//     var s = Math.round(e.toFixed(1)) / 2, t = "", i = 1;
//     i <= Math.floor(s);
//     i++
//   )
//     t += '<i class="fa fa-star rating-star"></i>';
//   0 < s % 1 &&
//     (t +=
//       "<span class='fa-stack rating-star-half-container'><i class='fa fa-star fa-stack-1x rating-star-half-empty'></i><i class='fa fa-star-half fa-stack-1x rating-star-half'></i></span>");
//   for (i = Math.ceil(s); i < 5; i++)
//     t += '<i class="fa fa-star rating-star-empty"></i>';
//   return t;
// }
// function sortMovies(e) {
//   (next = 0),
//     $(".movies").remove(),
//     $(".spinner").show().delay(1e3).fadeOut(),
//     $(".movie-detail").hide(),
//     $(".shows-container-contain").hide(),
//     "rating" === e
//       ? (showMovie((choices = "sort_by=vote_count.desc")),
//         $(".sortfilm").text("Rating"),
//         $(".genrefilm").text("All"))
//       : "grossing" === e
//       ? (showMovie((choices = "sort_by=revenue.desc")),
//         $(".sortfilm").text("Grossing"),
//         $(".genrefilm").text("All"))
//       : "action" === e
//       ? (showMovie((choices = "with_genres=28")),
//         $(".genrefilm").text("Action"))
//       : "adventure" === e
//       ? (showMovie((choices = "with_genres=12")),
//         $(".genrefilm").text("Adventure"))
//       : "animation" === e
//       ? (showMovie((choices = "with_genres=16")),
//         $(".genrefilm").text("Animation"))
//       : "comedy" === e
//       ? (showMovie((choices = "with_genres=35")),
//         $(".genrefilm").text("Comedy"))
//       : "crime" === e
//       ? (showMovie((choices = "with_genres=80")), $(".genrefilm").text("Crime"))
//       : "documentary" === e
//       ? (showMovie((choices = "with_genres=99")),
//         $(".genrefilm").text("Documentary"))
//       : "drama" === e
//       ? (showMovie((choices = "with_genres=18")), $(".genrefilm").text("Drama"))
//       : "family" === e
//       ? (showMovie((choices = "with_genres=10751")),
//         $(".genrefilm").text("Family"))
//       : "fantasy" === e
//       ? (showMovie((choices = "with_genres=14")),
//         $(".genrefilm").text("Fantasy"))
//       : "foreign" === e
//       ? showMovie((choices = "with_genres=10769"))
//       : "history" === e
//       ? (showMovie((choices = "with_genres=36")),
//         $(".genrefilm").text("History"))
//       : "horror" === e
//       ? (showMovie((choices = "with_genres=27")),
//         $(".genrefilm").text("Horror"))
//       : "music" === e
//       ? (showMovie((choices = "with_genres=10402")),
//         $(".genrefilm").text("Music"))
//       : "mystery" === e
//       ? (showMovie((choices = "with_genres=9648")),
//         $(".genrefilm").text("Mystery"))
//       : "romance" === e
//       ? (showMovie((choices = "with_genres=10749")),
//         $(".genrefilm").text("Romance"))
//       : "science fiction" === e
//       ? (showMovie((choices = "with_genres=878")),
//         $(".genrefilm").text("Sci-Fi"))
//       : "tv movie" === e
//       ? (showMovie((choices = "with_genres=10770")),
//         $(".genrefilm").text("TV Movie"))
//       : "thriller" === e
//       ? (showMovie((choices = "with_genres=53")),
//         $(".genrefilm").text("Thriller"))
//       : "war" === e
//       ? (showMovie((choices = "with_genres=10752")),
//         $(".genrefilm").text("War"))
//       : "western" === e
//       ? (showMovie((choices = "with_genres=37")),
//         $(".genrefilm").text("Western"))
//       : (showMovie((choices = "sort_by=popularity.desc")),
//         $(".sortfilm").text("Popular"));
// }
// function sortTv(e) {
//   (nextTV = 0),
//     $(".tv").remove(),
//     $(".movie-detail").hide(),
//     $(".shows-container-contain").hide(),
//     $(".spinner").show().delay(1e3).fadeOut(),
//     "rating" === e
//       ? (showTv((choices = "sort_by=vote_count.desc")),
//         $(".sortseries").text("Rating"),
//         $(".genreseries").text("All"))
//       : "grossing" === e
//       ? (showTv((choices = "sort_by=revenue.desc")),
//         $(".sortseries").text("Grossing"),
//         $(".genreseries").text("All"))
//       : "action" === e
//       ? (showTv((choices = "with_genres=10759")),
//         $(".genreseries").text("Action"))
//       : "adventure" === e
//       ? (showTv((choices = "with_genres=12")),
//         $(".genreseries").text("Adventure"))
//       : "animation" === e
//       ? (showTv((choices = "with_genres=16")),
//         $(".genreseries").text("Animation"))
//       : "comedy" === e
//       ? (showTv((choices = "with_genres=35")), $(".genreseries").text("Comedy"))
//       : "crime" === e
//       ? (showTv((choices = "with_genres=80")), $(".genreseries").text("Crime"))
//       : "documentary" === e
//       ? (showTv((choices = "with_genres=99")),
//         $(".genreseries").text("Documentary"))
//       : "drama" === e
//       ? (showTv((choices = "with_genres=18")), $(".genreseries").text("Drama"))
//       : "family" === e
//       ? (showTv((choices = "with_genres=10751")),
//         $(".genreseries").text("Family"))
//       : "fantasy" === e
//       ? (showTv((choices = "with_genres=10765")),
//         $(".genreseries").text("Fantasy"))
//       : "history" === e
//       ? (showTv((choices = "with_genres=36")),
//         $(".genreseries").text("History"))
//       : "horror" === e
//       ? (showTv((choices = "with_genres=27")), $(".genreseries").text("Horror"))
//       : "mystery" === e
//       ? (showTv((choices = "with_genres=9648")),
//         $(".genreseries").text("Mistery"))
//       : "romance" === e
//       ? (showTv((choices = "with_genres=10749")),
//         $(".genreseries").text("Romance"))
//       : "science fiction" === e
//       ? (showTv((choices = "with_genres=878")),
//         $(".genreseries").text("Sci-Fi"))
//       : "war" === e
//       ? (showTv((choices = "with_genres=10768")), $(".genreseries").text("War"))
//       : "western" === e
//       ? (showTv((choices = "with_genres=37")),
//         $(".genreseries").text("Western"))
//       : "kids" === e
//       ? (showTv((choices = "with_genres=10762")),
//         $(".genreseries").text("Kids"))
//       : "reality" === e
//       ? (showTv((choices = "with_genres=10764")),
//         $(".genreseries").text("Reality"))
//       : (showTv((choices = "sort_by=popularity.desc")),
//         $(".sortseries").text("Popular"));
// }
// function checkSubmit(e) {
//   if (e && 13 == e.keyCode)
//     return (
//       search(document.getElementById("search").value),
//       (document.getElementById("search").value = ""),
//       !1
//     );
// }
// function search(e) {
//   $(".movies").remove(),
//     $(".tv").remove(),
//     $(".movie-detail").hide(),
//     $(".shows-container-contain").hide();
//   $.getJSON(
//     "https://api.themoviedb.org/3/search/multi?api_key=50479b124e0923c371395234e579d901&query=" +
//       e,
//     function (e) {
//       for (let s = 0; s < e.results.length; s++) {
//         const t = e.results[s].id;
//         var i = "" === (i = e.results[s].release_date) ? "" : i.substring(0, 4);
//         const a = e.results[s].name;
//         const o =
//           (e.results[s].vote_average, posterPaths + e.results[s].poster_path);
//         var i = e.results[s].overview;
//         "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === o ||
//           "null" == i ||
//           $(".main").append(
//             "<li data-imdb-id='" +
//               t +
//               "' class='item movies m" +
//               s +
//               "' id='" +
//               t +
//               "'><div class='cover fadein' style='background-image: url(" +
//               o +
//               ");'><div class='cover-imgs' onclick='movieInfo(" +
//               t +
//               ")'></div></div><p class='title'>" +
//               a +
//               "</p><p class='year'>2022</p><p class='seasons'>" +
//               ratin +
//               "</p></li>"
//           );
//       }
//     }
//   );
// }
// function showMovie(e) {
//   next++,
//     $.getJSON(url + e + key + "&page=" + next, function (e) {
//       for (let s = 0; s < e.results.length; s++) {
//         const t = e.results[s].id;
//         var i = "" === (i = e.results[s].release_date) ? "" : i.substring(0, 4);
//         const a = e.results[s].title;
//         var o = e.results[s].overview;
//         var o = e.results[s].overview;
//         const r = e.results[s].vote_average;
//         const n = posterPaths + e.results[s].poster_path;
//         "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === n ||
//           "null" == o ||
//           "" == r ||
//           $(".main").append(
//             "<li class='item movies' onclick='movieInfo(" +
//               t +
//               ")'><div class='cover fadein' style='background-image: url(" +
//               n +
//               ");'><div class='cover-imgs'></div><div class='cover-overlay cover-info-overlay'><i class='fa fa-play playnow'></i><div class='rating' style='display: block;'><div class='rating-stars'>" +
//               getClassByRate(r) +
//               "</div><div class='rating-value'>" +
//               r +
//               "/10</div></div></div></div><p class='title'>" +
//               a +
//               "</p><p class='year'>" +
//               i.substring(0, 4) +
//               "</p><p class='destra'>Movie</p></li>"
//           );
//       }
//       $(".item.movies").hover(function (e) {
//         $(this).toggleClass("selected", "mouseenter" === e.type);
//       });
//     });
// }
// function movieInfo(l) {
//   $.getJSON(movieCast + l + "/casts?" + key, function (e) {
//     $(".movies").hide(),
//       $(".more").hide(),
//       $(".spinner").show().delay(1e3).fadeOut(),
//       $(".star-container.film").empty();
//     const s =
//       "https://api.themoviedb.org/3/movie/" +
//       l +
//       "?api_key=50479b124e0923c371395234e579d901&append_to_response=videos,external_ids";
//     $.getJSON(s, function (e) {
//       e.budget, e.revenue;
//       const s = e.release_date;
//       const t = imdbLink + e.imdb_id;
//       const i = (e.imdb_id, e.runtime);
//       const a = (e.tagline, e.title);
//       const o = e.overview;
//       const r = e.vote_average;
//       const n = "https://www.youtube.com/watch?v=" + e.videos.results[0].key;
//       let c = "https://image.tmdb.org/t/p/w500" + e.poster_path;
//       "https://image.tmdb.org/t/p/w500null" === c &&
//         (c = "https://i.imgur.com/kNZsyUs.png");
//       const d = backgroundPaths + e.backdrop_path;
//       (genre =
//         3 < e.genres.length
//           ? e.genres[0].name +
//             ", " +
//             e.genres[1].name +
//             ", " +
//             e.genres[2].name +
//             ", " +
//             e.genres[3].name
//           : 2 < e.genres.length
//           ? e.genres[0].name + ", " + e.genres[1].name + ", " + e.genres[2].name
//           : 1 < e.genres.length
//           ? e.genres[0].name + ", " + e.genres[1].name
//           : e.genres[0].name),
//         $(".star-container.film").append(getClassByRate(r)),
//         $(".chiudi").append(
//           "<div class='fa fa-times close-icon' onclick='exit(" + l + ")'></div>"
//         ),
//         $(".movietitle").text(a),
//         $(".movieyear").text(s.substring(0, 4)),
//         $(".movieruntime").text(i + " min"),
//         $(".movieplot").text(o),
//         $(".moviegenres").text(genre),
//         $(".mcover-image").attr("src", c),
//         $(".mcover-image").removeClass("fadein").addClass("fadein"),
//         $(".source-link").attr("href", t),
//         $("#watch-trailer").attr("href", n),
//         $(".magnet-link").attr("href", t),
//         $(".backdrop").css("background-image", "url(" + d + ")"),
//         $(".backdrop").removeClass("fadein").addClass("fadein"),
//         $(".movie-detail").hide().fadeIn(500);
//     });
//   });
// }
// function showActor(e) {
//   $(".overview").hide();
//   $.getJSON(actorInfo + e + key + "&page=1", function (e) {
//     for (let s = 0; s < e.results.length; s++) {
//       const t = e.results[s].id;
//       const i =
//         (e.results[s].title, e.results[s].overview, e.results[s].vote_average);
//       (ratin = i / 2), (ratin = Math.round(2 * ratin) / 2);
//       let a = posterPaths + e.results[s].poster_path;
//       "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === a &&
//         (a = "https://i.imgur.com/kNZsyUs.png"),
//         $(".main").append(
//           "<div class='col-sm-2 text-center movies m" +
//             s +
//             "' id='" +
//             t +
//             "'><div class='tiles'><img onclick='movieInfo(" +
//             t +
//             ")' src=" +
//             a +
//             "><div class='ratings'><p class='lead rating'>" +
//             ratin +
//             " <i class='fa fa-star' aria-hidden='true'></i></p></div></div></div>"
//         );
//     }
//   });
// }
// function showTv(e) {
//   nextTV++,
//     $.getJSON(
//       urlTV +
//         e +
//         key +
//         "&timezone=America%2FNew_York&include_adult=false&include_null_first_air_dates=false&with_original_language=en&without_keywords=210024&append_to_response=genres,season_number&page=" +
//         nextTV,
//       function (e) {
//         for (let s = 0; s < e.results.length; s++) {
//           const t = e.results[s].id;
//           const i = e.results[s].name;
//           const a = e.results[s].vote_average;
//           const o = e.results[s].overview;
//           let r = e.results[s].first_air_date;
//           "" === r && (r = "");
//           let n = posterPaths + e.results[s].poster_path;
//           "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === n &&
//             (n = "https://i.imgur.com/kNZsyUs.png"),
//             "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === n ||
//               "" == o ||
//               "" == a ||
//               "" == e.results[s].genre_ids ||
//               "" == r ||
//               $(".main").append(
//                 "<li id='" +
//                   t +
//                   "' class='item tv' onclick='tvInfo(" +
//                   t +
//                   ", 1)'><div class='cover fadein' style='background-image: url(" +
//                   n +
//                   ");'><div class='cover-imgs'></div><div class='cover-overlay cover-info-overlay'><i class='fa fa-play playnow'></i><div class='rating' style='display: block;'><div class='rating-stars'>" +
//                   getClassByRate(a) +
//                   "</div><div class='rating-value'>" +
//                   a +
//                   "/10</div></div></div></div><p class='title'>" +
//                   i +
//                   "</p><p class='year'>" +
//                   r.substring(0, 4) +
//                   "</p><p class='destra'>TV</p></li>"
//               );
//         }
//         $(".item.tv").hover(function (e) {
//           $(this).toggleClass("selected", "mouseenter" === e.type);
//         });
//       }
//     );
// }
// function tvInfo(d) {
//   $(".movie").remove(),
//     $(".tv").hide(),
//     $(".moreTV").hide(),
//     $(".shows-container-contain").show(),
//     $(".seasons").show(),
//     $(".spinner").show().delay(1e3).fadeOut();
//   const e =
//     "https://api.themoviedb.org/3/tv/" +
//     d +
//     "?api_key=50479b124e0923c371395234e579d901&append_to_response=images,seasons,keywords,external_ids";
//   $.getJSON(e, function (e) {
//     $(".seasons").empty(),
//       $(".star-container-tv").empty(),
//       3 < e.genres.length
//         ? (e.genres[0].name,
//           e.genres[1].name,
//           e.genres[2].name,
//           e.genres[3].name)
//         : 2 < e.genres.length
//         ? (e.genres[0].name, e.genres[1].name, e.genres[2].name)
//         : 1 < e.genres.length
//         ? (e.genres[0].name, e.genres[1].name)
//         : e.genres[0].name;
//     e.seasons.length;
//     const s = e.name;
//     const t = e.first_air_date.substring(0, 4);
//     let i = e.vote_average;
//     "" === e.vote_average && (i = 0),
//       $(".star-container-tv").append(getClassByRate(i));
//     const a = e.episode_run_time[0] + " min";
//     const o = e.overview;
//     const r = e.status;
//     let n = posterPaths + e.poster_path;
//     "https://image.tmdb.org/t/p/w370_and_h556_bestv2null" === n &&
//       (n = "https://i.imgur.com/kNZsyUs.png");
//     i = "https://image.tmdb.org/t/p/w1280" + e.backdrop_path;
//     "" === e.backdrop_path && (i = "https://i.imgur.com/kNZsyUs.png"),
//       $(".show-detail-container").append(
//         "<div class='fa fa-times close-icon closetv' onclick='exitTv(" +
//           d +
//           ")'></div>"
//       ),
//       $(".shm-title").text(s),
//       $(".shmi-year").text(t),
//       $(".shmi-runtime").text(a),
//       $(".shmi-status").text(r),
//       $(".shm-synopsis").text(o),
//       $(".shmi-genre").text(e.genres[0].name),
//       $(".shp-img").attr("style", 'background-image: url("' + n + '")'),
//       $(".shb-img").attr("style", 'background-image: url("' + i + '")'),
//       $(".shp-img, .shb-img").removeClass("fadein").addClass("fadein");
//     for (let c = 0; c < e.seasons.length; c++)
//       $(".seasons").append(
//         "<div class='row season' data-season='" +
//           e.seasons[c].season_number +
//           "' onclick='seriesInfo(" +
//           d +
//           "," +
//           e.seasons[c].season_number +
//           ");seriesShow(" +
//           d +
//           "," +
//           e.seasons[c].season_number +
//           ",1);' value='" +
//           e.seasons[c].season_number +
//           "'><a href='#'>Season " +
//           e.seasons[c].season_number +
//           "</a></div>"
//       );
//     $(".row.season").click(function (e) {
//       e.preventDefault(),
//         $(".season").removeClass("activated"),
//         $(this).addClass("activated");
//     }),
//       $('.row.season[data-season="1"]').addClass("activated"),
//       $('.row.season[data-season="0"]').hide();
//   }),
//     $(".show-details").ready(function () {
//       seriesInfo(d, 1), seriesShow(d, 1, 1);
//     });
// }
// function seriesInfo(a, o) {
//   const e =
//     "https://api.themoviedb.org/3/tv/" +
//     a +
//     "/season/" +
//     o +
//     "?api_key=50479b124e0923c371395234e579d901&append_to_response=keywords,external_ids";
//   $.getJSON(e, function (e) {
//     $(".episodes").empty();
//     for (let s = 0; s < e.episodes.length; s++) {
//       const t = e.episodes[s].episode_number;
//       const i = e.episodes[s].name;
//       e.episodes[s].overview, e.episodes[s].air_date;
//       $(".episodes").append(
//         "<div data-episode_id='" +
//           t +
//           "' data-episode_num='" +
//           t +
//           "' onclick='seriesShow(" +
//           a +
//           "," +
//           o +
//           "," +
//           t +
//           ")' value='" +
//           t +
//           "' class='row episode'><a href='#'><span class='episode_num'>" +
//           t +
//           "</span><span class='episode_title'>" +
//           i +
//           "</span><i id='watched' class='fa fa-eye watched'></i></a></div>"
//       );
//     }
//     $(".row.episode").click(function (e) {
//       e.preventDefault(),
//         $(".row.episode").removeClass("activated"),
//         $(this).addClass("activated");
//     }),
//       $('.row.episode[data-episode_id="1"]').addClass("activated");
//   });
// }
// function seriesShow(e, s, t) {
//   (ShowAPI =
//     "https://api.themoviedb.org/3/tv/" +
//     e +
//     "/season/" +
//     s +
//     "/episode/" +
//     t +
//     "?api_key=50479b124e0923c371395234e579d901&append_to_response=keywords,external_ids"),
//     $.getJSON(ShowAPI, function (e) {
//       $(".sd-overview").empty();
//       const s = e.name;
//       const t = e.episode_number;
//       const i = e.overview;
//       const a = e.season_number;
//       const o = e.air_date;
//       e.still_path, e.vote_average;
//       $(".sd-overview").append(
//         "<div class='sdo-infos'> <div class='sdoi-title'>" +
//           s +
//           "</div> <div class='sdoi-links'> <div class='fas fa-link source-icon'></div> <div class='fa fa-magnet magnet-icon'></div> <div class='fa fa-circle health-icon Good'></div> </div> <div class='sdoi-aired'> <div class='sdoi-number'>Season " +
//           a +
//           ", Episode " +
//           t +
//           "</div> <div class='sdoi-date'>Aired Date: " +
//           o +
//           "</div> </div> <div class='sdoi-synopsis'>" +
//           i +
//           "<div></div><p> Test : " +
//           s +
//           " Season " +
//           a +
//           " Episode " +
//           t +
//           " Full Episode " +
//           "</p>"
//       );
//     });
// }
// function exit(e) {
//   $(".movies").show(),
//     $(".more").show(),
//     $(".movie-detail").hide(),
//     $(".spinner").show().delay(1e3).fadeOut(),
//     (window.location.hash = e);
// }
// function exitTv(e) {
//   $(".shows-container-contain").hide(),
//     $(".seasons").hide(),
//     $(".tv").show(),
//     $(".moreTV").show(),
//     $(".spinner").show().delay(1e3).fadeOut(),
//     (window.location.hash = e);
// }
// $("#tv").click(function () {
//   (nextTV = 0),
//     sortTv(),
//     $(".movies").remove(),
//     $(".moreTV").show(),
//     $(".more").hide(),
//     $(".droptv").show(),
//     $(".dropmovies").hide(),
//     $(".spinner").show().delay(1e3).fadeOut();
// }),
//   $("#movie").click(function () {
//     sortMovies(),
//       $(".tv").remove(),
//       $(".more").show(),
//       $(".moreTV").hide(),
//       $(".dropmovies").show(),
//       $(".droptv").hide(),
//       $(".spinner").show().delay(1e3).fadeOut(),
//       (next = 1);
//   }),
//   $(".more").click(function () {
//     showMovie(choices), $(".spinner").show().delay(1e3).fadeOut();
//   }),
//   $(".moreTV").click(function () {
//     showTv(choices), $(".spinner").show().delay(1e3).fadeOut();
//   }),
//   $(".source").click(function () {
//     $(".genrefilm").text("All"),
//       $(".sortfilm").text("Popular"),
//       $(".genreseries").text("All"),
//       $(".sortseries").text("Popular"),
//       $(".source").removeClass("active"),
//       $(this).addClass("active");
//   }),
//   $(".dropdown-menu li a").click(function () {
//     $(".dropdown-menu li a").removeClass("active"), $(this).addClass("active");
//   }),
//   $(".qselect").click(function () {
//     $(".qselect").removeClass("active"), $(this).addClass("active");
//   }),
//   $(".droptv").hide(),
//   $("a").click(function (e) {
//     e.preventDefault();
//   }),
//   $(".external").click(function (e) {
//     e.preventDefault(), window.open(this.href);
//   }),
//   $(".moreTV").hide(),
//   $(".genres.dropmovies a").click(function () {
//     $(".sortfilm").text("Popular");
//   }),
//   $(".genres.droptv a").click(function () {
//     $(".sortseries").text("Popular");
//   }),
//   $(".lightbox").click(function (e) {
//     e.preventDefault(), $(this).ekkoLightbox();
//   }),
//   sortMovies();
