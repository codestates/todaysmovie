const mockMovie = [
    {
      "id": 1,
      "movieId": 634649,
      "movieName": "Spider-Man: No Way Home",
      "moviePoster": "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20211215_297%2F1639556766975z0641_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
      "movieGenre": ["Action", "Adventure", "Fantasy"],
      "movieRating": 8.8,
      "movieRunningtime": 148,
      "movieDesc": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    },
    {
      "id": 2,
      "movieId": 516329,
      "movieName": "Antlers",
      "moviePoster": "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20191219_299%2F1576724951620pzIFk_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
      "movieGenre": ["Drama", "Horror", "Mystery"],
      "movieRating": 6.4,
      "movieRunningtime": 99,
      "movieDesc": "In an isolated Oregon town, a middle-school teacher and her sheriff brother become embroiled with her enigmatic student, whose dark secrets lead to terrifying encounters with an ancestral creature.",
    },
    {
      "id": 3,
      "movieId": 580489,
      "movieName": "Venom: Let There Be Carnage",
      "moviePoster": "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20210929_275%2F1632903680953494p8_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
      "movieGenre": ["Action", "Adventure", "Sci-Fi"],
      "movieRating": 7.2,
      "movieRunningtime": 97,
      "movieDesc": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
    },
    {
      "id": 4,
      "movieId": 370172,
      "movieName": "No Time to Die",
      "moviePoster": "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20211001_121%2F16330536363187liBB_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
      "movieGenre": ["Action", "Adventure", "Thriller"],
      "movieRating": 7.5,
      "movieRunningtime": 163,
      "movieDesc": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    },
    {
      "id": 5,
      "movieId": 645886,
      "movieName": "The Unforgivable",
      "moviePoster": "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20211103_264%2F1635904577171CAEaV_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
      "movieGenre": ["Crime", "Drama"],
      "movieRating": 7.7,
      "movieRunningtime": 112,
      "movieDesc": "A woman is released from prison after serving a sentence for a violent crime and re-enters a society that refuses to forgive her past.",
    },
    {
      "id": 6,
      "movieId": 438631,
      "movieName": "Dune",
      "moviePoster": "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20210915_104%2F1631681279096sdjNA_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
      "movieGenre": ["Action", "Adventure", "Drama"],
      "movieRating": 8.0,
      "movieRunningtime": 175,
      "movieDesc": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    },
    {
      "id": 7,
      "movieId": 882096,
      "movieName": "A California Christmas: City Lights",
      "moviePoster": "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5366%2F2020%2F12%2F24%2F20201224001240045049ecba8d8b8617764132_20201224001608538.jpg&type=a340",
      "movieGenre": ["Comedy", "Drama", "Romance"],
      "movieRating": 6.3,
      "movieRunningtime": 106,
      "movieDesc": "Follows Callie and Joseph one year after they fell in love, now running a dairy farm and winery, but their romance is threatened when business and family obligations call Joseph back to the city.",
    },
    {
      "id": 8,
      "movieId": 728526,
      "movieName": "Encounter",
      "moviePoster": "https://search.pstatic.net/common?type=ofullfill&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20210924_59%2F16324486738917UJDD_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
      "movieGenre": ["Sci-Fi", "Thriller"],
      "movieRating": 6.3,
      "movieRunningtime": 108,
      "movieDesc": "A decorated Marine goes on a rescue mission to save his two young sons from an unhuman threat. As their journey takes them in increasingly dangerous directions, the boys will need to leave their childhoods behind.",
    },
    {
      "id": 9,
      "movieId": 11226,
      "movieName": "Spider-Man: Far From Home",
      "moviePoster": "https://search.pstatic.net/common?type=o&size=174x242&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20190527_181%2F1558933159657a210P_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
      "movieGenre": ["Action", "Adventure", "Sci-Fi"],
      "movieRating": 7.5,
      "movieRunningtime": 106,
      "movieDesc": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
    },
  ]

  export default mockMovie;