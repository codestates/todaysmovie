import './Search.css';

export default function Search () {
  return (
<fieldset className="field-container">
  <input type="text" placeholder="Search..." className="field" />
  <div className="icons-container">
    <div className="icon-search"></div>
    <div className="icon-close">
      <div className="x-up"></div>
      <div className="x-down"></div>
    </div>
  </div>
</fieldset>
  )
}

// {
//   "id": ,
//   "movieId": ,
//   "movieName": ,
//   "moviePoster": "https://image.tmdb.org/t/p/original",
//   "movieGenre": [],
//   "movieRating": ,
//   "movieRunningtime": ,
//   "movieDesc": ,
// },


//       {
//           "id": 557,
//           "release_date": "2002-05-01",
//           "adult": false,
//           "backdrop_path": "/sWvxBXNtCOaGdtpKNLiOqmwb10N.jpg",
//           "genre_ids": [
//               14,
//               28
//           ],
//           "vote_count": 14705,
//           "original_language": "en",
//           "original_title": "Spider-Man",
//           "poster_path": "/gSZyYEK5AfZuOFFjnVPUCLvdOD6.jpg",
//           "title": "Spider-Man",
//           "video": false,
//           "vote_average": 7.2,
//           "overview": "After being bitten by a genetically altered spider at Oscorp, nerdy but endearing high school student Peter Parker is endowed with amazing powers to become the superhero known as Spider-Man.",
//           "popularity": 2306.699,
//           "media_type": "movie"
//       },
//       {
//           "id": 598331,
//           "backdrop_path": "/vbcjMsuQs1BbM9vjAY3rjBvhPlg.jpg",
//           "genre_ids": [
//               10751,
//               35,
//               16
//           ],
//           "vote_count": 43,
//           "original_language": "en",
//           "original_title": "Rumble",
//           "poster_path": "/mVKfyo2YQ1Sf0fKzZfc5t9HM6eK.jpg",
//           "title": "Rumble",
//           "video": false,
//           "vote_average": 7.6,
//           "adult": false,
//           "overview": "In a world where monster wrestling is a global sport and monsters are superstar athletes, teenage Winnie seeks to follow in her father’s footsteps by coaching a loveable underdog monster into a champion.",
//           "release_date": "2021-12-15",
//           "popularity": 148.025,
//           "media_type": "movie"
//       },
//       {
//           "original_language": "en",
//           "original_title": "Fortress",
//           "poster_path": "/vQxtoPJVfpHgL7DCg9hQFZKDWJa.jpg",
//           "video": false,
//           "vote_average": 6.7,
//           "overview": "The story revolves around a top-secret resort for retired U.S. intelligence officers. A group of criminals led by Balzary breach the compound, hellbent on revenge on Robert, forcing the retired officer and his son to save the day.",
//           "release_date": "2021-12-17",
//           "vote_count": 28,
//           "adult": false,
//           "backdrop_path": "/1BqX34aJS5J8PefVnQSfQIEPfkl.jpg",
//           "title": "Fortress",
//           "genre_ids": [
//               80,
//               28,
//               53
//           ],
//           "id": 826749,
//           "popularity": 70.071,
//           "media_type": "movie"
//       },
//       {
//           "original_language": "en",
//           "original_title": "Encanto",
//           "id": 568124,
//           "video": false,
//           "vote_average": 7.3,
//           "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
//           "release_date": "2021-11-24",
//           "vote_count": 383,
//           "adult": false,
//           "backdrop_path": "/5RuR7GhOI5fElADXZb0X2sr9w5n.jpg",
//           "title": "Encanto",
//           "genre_ids": [
//               16,
//               35,
//               10751,
//               14
//           ],
//           "poster_path": "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
//           "popularity": 2116.967,
//           "media_type": "movie"
//       },
//       {
//           "vote_average": 6.6,
//           "overview": "Peter Parker is an outcast high schooler abandoned by his parents as a boy, leaving him to be raised by his Uncle Ben and Aunt May. Like most teenagers, Peter is trying to figure out who he is and how he got to be the person he is today. As Peter discovers a mysterious briefcase that belonged to his father, he begins a quest to understand his parents' disappearance – leading him directly to Oscorp and the lab of Dr. Curt Connors, his father's former partner. As Spider-Man is set on a collision course with Connors' alter ego, The Lizard, Peter will make life-altering choices to use his powers and shape his destiny to become a hero.",
//           "release_date": "2012-06-23",
//           "title": "The Amazing Spider-Man",
//           "adult": false,
//           "backdrop_path": "/sLWUtbrpiLp23a0XDSiUiltdFPJ.jpg",
//           "genre_ids": [
//               28,
//               12,
//               14
//           ],
//           "id": 1930,
//           "original_language": "en",
//           "original_title": "The Amazing Spider-Man",
//           "poster_path": "/fSbqPbqXa7ePo8bcnZYN9AHv6zA.jpg",
//           "vote_count": 13879,
//           "video": false,
//           "popularity": 2792.495,
//           "media_type": "movie"
//       },
//       {
//           "original_language": "en",
//           "original_title": "Eternals",
//           "poster_path": "/uaEIEIw9Y7DsvbWWMbG9ySjNF73.jpg",
//           "video": false,
//           "vote_average": 7.1,
//           "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
//           "release_date": "2021-11-03",
//           "vote_count": 1477,
//           "title": "Eternals",
//           "adult": false,
//           "backdrop_path": "/lyvszvJJqqI8aqBJ70XzdCNoK0y.jpg",
//           "id": 524434,
//           "genre_ids": [
//               28,
//               12,
//               14,
//               878
//           ],
//           "popularity": 1694.006,
//           "media_type": "movie"
//       },
//       {
//           "video": false,
//           "id": 102382,
//           "overview": "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen’s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
//           "release_date": "2014-04-16",
//           "vote_count": 10151,
//           "adult": false,
//           "backdrop_path": "/u7SeO6Y42P7VCTWLhpnL96cyOqd.jpg",
//           "vote_average": 6.4,
//           "genre_ids": [
//               28,
//               12,
//               14
//           ],
//           "title": "The Amazing Spider-Man 2",
//           "original_language": "en",
//           "original_title": "The Amazing Spider-Man 2",
//           "poster_path": "/c3e9e18SSlvFd1cQaGmUj5tqL5P.jpg",
//           "popularity": 2126.439,
//           "media_type": "movie"
//       },
//       {
//           "original_language": "it",
//           "original_title": "È stata la mano di Dio",
//           "poster_path": "/kreVxr5moB7K52IGGV1BGAn6nq1.jpg",
//           "video": false,
//           "vote_average": 8.0,
//           "overview": "In 1980s Naples, young Fabietto pursues his love for football as family tragedy strikes, shaping his uncertain but promising future as a filmmaker.",
//           "release_date": "2021-11-24",
//           "vote_count": 391,
//           "adult": false,
//           "backdrop_path": "/dTvGUMFc5WCziTzXZKZ2EfW2bEM.jpg",
//           "title": "The Hand of God",
//           "genre_ids": [
//               18
//           ],
//           "id": 722778,
//           "popularity": 219.597,
//           "media_type": "movie"
//       },
//       {
//           "video": false,
//           "vote_average": 8.2,
//           "id": 603,
//           "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
//           "release_date": "1999-03-30",
//           "adult": false,
//           "backdrop_path": "/waCRuAW5ocONRehP556vPexVXA9.jpg",
//           "genre_ids": [
//               28,
//               878
//           ],
//           "vote_count": 20453,
//           "original_language": "en",
//           "original_title": "The Matrix",
//           "poster_path": "/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
//           "title": "The Matrix",
//           "popularity": 361.346,
//           "media_type": "movie"
//       },
//       {
//           "id": 899382,
//           "release_date": "2021-12-16",
//           "adult": false,
//           "backdrop_path": "/uVflhRHoW3ttVs6KxI7BFVZLBBu.jpg",
//           "genre_ids": [
//               35
//           ],
//           "vote_count": 3,
//           "original_language": "en",
//           "original_title": "Christmas is Cancelled",
//           "poster_path": "/2Vivy2G7Kx8duhN35eUG74B8JXK.jpg",
//           "title": "Christmas is Cancelled",
//           "video": false,
//           "vote_average": 6.0,
//           "overview": "Emma's father and her high school frenemy start dating so she embarks on a mission to break up the happy couple.",
//           "popularity": 35.631,
//           "media_type": "movie"
//       },
//       {
//           "id": 615666,
//           "adult": false,
//           "backdrop_path": "/odKqOY6VE6C59YAdGHB0b5Havye.jpg",
//           "genre_ids": [
//               10751,
//               12,
//               14
//           ],
//           "original_language": "en",
//           "original_title": "A Boy Called Christmas",
//           "poster_path": "/1sRejtiHOZGggZd9RcmdqbapLM5.jpg",
//           "vote_count": 267,
//           "video": false,
//           "vote_average": 7.8,
//           "title": "A Boy Called Christmas",
//           "overview": "An ordinary young boy called Nikolas sets out on an extraordinary adventure into the snowy north in search of his father who is on a quest to discover the fabled village of the elves, Elfhelm. Taking with him a headstrong reindeer called Blitzen and a loyal pet mouse, Nikolas soon meets his destiny in this magical and endearing story that proves nothing is impossible…",
//           "release_date": "2021-11-25",
//           "popularity": 468.96,
//           "media_type": "movie"
//       },
//       {
//           "original_language": "en",
//           "original_title": "Black Widow",
//           "poster_path": "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
//           "video": false,
//           "vote_average": 7.6,
//           "overview": "Natasha Romanoff, also known as Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy and the broken relationships left in her wake long before she became an Avenger.",
//           "id": 497698,
//           "title": "Black Widow",
//           "vote_count": 6352,
//           "adult": false,
//           "backdrop_path": "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
//           "release_date": "2021-07-07",
//           "genre_ids": [
//               28,
//               12,
//               878
//           ],
//           "popularity": 629.146,
//           "media_type": "movie"
//       }
//   ],
//   "total_pages": 1000,
//   "total_results": 20000
// }