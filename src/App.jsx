import Movie from './Movie'
import './App.css'

function App() {
  const movies = [
    {
      "_id": "662f30b7f2f787f09d184958",
      "title": "Bud Abbott and Lou Costello Meet Frankenstein",
      "releaseDate": "1948-06-15",
      "genres": [
        "Comedy",
        "Horror"
      ],
      "ratings": {
        "imdb": 7.086,
        "tmdb": 7.086
      },
      "runtime": 83,
      "revenue": 4812444,
      "budget": 800000,
      "tagline": "JEEPERS! The CREEPERS are after BUD & LOU!!",
      "popularity": 13.591,
      "director": "Charles Barton",
      "cast": [
        {
          "name": "Bud Abbott",
          "character": "Chick Young",
          "photoUrl": "https://image.tmdb.org/t/p/w500/1YVYZE3KcG6StWW9RC8GmrafzeC.jpg"
        },
        {
          "name": "Lou Costello",
          "character": "Wilbur Grey",
          "photoUrl": "https://image.tmdb.org/t/p/w500/eNqA3HPS3DtqTzZfejrGlOyz7gc.jpg"
        },
        {
          "name": "Lon Chaney Jr.",
          "character": "Larry Talbot/The Wolf Man",
          "photoUrl": "https://image.tmdb.org/t/p/w500/xj8gBZ7Vbu1rGm1uaL11MfD8RSe.jpg"
        },
        {
          "name": "Bela Lugosi",
          "character": "Count Dracula",
          "photoUrl": "https://image.tmdb.org/t/p/w500/fwimu7WKcaJXIjaDwYQg42GxUxa.jpg"
        },
        {
          "name": "Glenn Strange",
          "character": "The Frankenstein Monster",
          "photoUrl": "https://image.tmdb.org/t/p/w500/6SPVOqbKTSt3NA6OzoXJsjJTucc.jpg"
        }
      ],
      "imageURL": "https://image.tmdb.org/t/p/w500/ooeceWULFxBqvny6Plvj7K6bnIp.jpg"
    },
    {
      "_id": "662f30b7f2f787f09d184959",
      "title": "The Net 2.0",
      "releaseDate": "2006-02-15",
      "genres": [
        "Action",
        "Drama",
        "Thriller"
      ],
      "ratings": {
        "imdb": 5.2,
        "tmdb": 5.2
      },
      "runtime": 95,
      "revenue": 0,
      "budget": 0,
      "tagline": "Foreign country, no money, no identity, nothing is as it seems...",
      "popularity": 17.236,
      "director": "Charles Winkler",
      "cast": [
        {
          "name": "Nikki DeLoach",
          "character": "Hope Cassidy",
          "photoUrl": "https://image.tmdb.org/t/p/w500/dGL9llK6Q0rBrMJecmP36bZjdDp.jpg"
        },
        {
          "name": "Demet Akbağ",
          "character": "Dr. Kavak",
          "photoUrl": "https://image.tmdb.org/t/p/w500/3AshFdHgBeSUZ68YYo6upk9xBIE.jpg"
        },
        {
          "name": "Cengiz Bozkurt",
          "character": "Police Officer",
          "photoUrl": "https://image.tmdb.org/t/p/w500/fdxk6BXDPIALDUIpvAjqmBg9M6D.jpg"
        },
        {
          "name": "Şebnem Dönmez",
          "character": "Roxelana",
          "photoUrl": "https://image.tmdb.org/t/p/w500/qyb9jy7c76dbqv48mPfcl3C1A6d.jpg"
        },
        {
          "name": "Güven Kıraç",
          "character": "Osman",
          "photoUrl": "https://image.tmdb.org/t/p/w500/2pOoH9R5ldBuu1v0jbqK3gTAiQi.jpg"
        }
      ],
      "imageURL": "https://image.tmdb.org/t/p/w500/7ofTl14cmpu5hCeD2HWh2T5QFH5.jpg"
    },
    {
      "_id": "662f30b8f2f787f09d18495a",
      "title": "Scary Movie 3",
      "releaseDate": "2003-10-24",
      "genres": [
        "Comedy"
      ],
      "ratings": {
        "imdb": 5.973,
        "tmdb": 5.973
      },
      "runtime": 84,
      "revenue": 220700000,
      "budget": 48000000,
      "tagline": "Great trilogies come in threes.",
      "popularity": 57.881,
      "director": "David Zucker",
      "cast": [
        {
          "name": "Anna Faris",
          "character": "Cindy Campbell",
          "photoUrl": "https://image.tmdb.org/t/p/w500/y3YKNr4qPPJZ9w4lR2a3yySKotd.jpg"
        },
        {
          "name": "Simon Rex",
          "character": "George",
          "photoUrl": "https://image.tmdb.org/t/p/w500/swlyh3YQoaB4OAgVi6NSdojVeyZ.jpg"
        },
        {
          "name": "Anthony Anderson",
          "character": "Mahalik",
          "photoUrl": "https://image.tmdb.org/t/p/w500/reO1OjwFdtXmiO4LMDaBj6eatzK.jpg"
        },
        {
          "name": "Charlie Sheen",
          "character": "Tom",
          "photoUrl": "https://image.tmdb.org/t/p/w500/eHMe0jYsp6YBgyCDbgtheZrIHAy.jpg"
        },
        {
          "name": "Regina Hall",
          "character": "Brenda Meeks",
          "photoUrl": "https://image.tmdb.org/t/p/w500/jiFZ4xNrvUUZLBHnJu71CvdN4kj.jpg"
        }
      ],
      "imageURL": "https://image.tmdb.org/t/p/w500/vb7C7sdFdtkSdZCM0rn8ddXBX4I.jpg"
    },
    {
      "_id": "662f30b9f2f787f09d18495b",
      "title": "Saw III",
      "releaseDate": "2006-10-26",
      "genres": [
        "Horror",
        "Thriller",
        "Crime"
      ],
      "ratings": {
        "imdb": 6.405,
        "tmdb": 6.405
      },
      "runtime": 108,
      "revenue": 164876498,
      "budget": 10000000,
      "tagline": "Suffering? You haven't seen anything yet...",
      "popularity": 55.848,
      "director": "Darren Lynn Bousman",
      "cast": [
        {
          "name": "Tobin Bell",
          "character": "John Kramer / Jigsaw",
          "photoUrl": "https://image.tmdb.org/t/p/w500/q21uuCtTioIVcGc3a1Q0DpdcNMO.jpg"
        },
        {
          "name": "Shawnee Smith",
          "character": "Amanda Young",
          "photoUrl": "https://image.tmdb.org/t/p/w500/s2Ouz4b7xqDH72aU48TSW5zS40v.jpg"
        },
        {
          "name": "Angus Macfadyen",
          "character": "Jeff Reinhart",
          "photoUrl": "https://image.tmdb.org/t/p/w500/yUuA7U3lw6yM0Eb6mD83qYeevH2.jpg"
        },
        {
          "name": "Bahar Soomekh",
          "character": "Lynn Denlon",
          "photoUrl": "https://image.tmdb.org/t/p/w500/pexK8WSgJFunUFizBlvGEz8ez9U.jpg"
        },
        {
          "name": "Donnie Wahlberg",
          "character": "Eric Matthews",
          "photoUrl": "https://image.tmdb.org/t/p/w500/fu9max9xWGUxECQNIkUYmCBS2ZF.jpg"
        }
      ],
      "imageURL": "https://image.tmdb.org/t/p/w500/9pWlgGYoPb0QPOsQTjfDmwMdBc6.jpg"
    },
    {
      "_id": "662f30b9f2f787f09d18495c",
      "title": "Amours sous la révolution: André Chénier et la jeune captive",
      "releaseDate": "1978-01-01",
      "genres": [
        "History"
      ],
      "ratings": {
        "imdb": 0,
        "tmdb": 0
      },
      "runtime": 100,
      "revenue": 0,
      "budget": 0,
      "tagline": "",
      "popularity": 0.759,
      "director": "Jean-Paul Carrère",
      "cast": [
        {
          "name": "Nicolas Silberg",
          "character": "André Chenier",
          "photoUrl": "https://image.tmdb.org/t/p/w500/A6Sombkj1L5B32WLkQhJLTfKUJi.jpg"
        },
        {
          "name": "Anny Duperey",
          "character": "Aimée de Coigny",
          "photoUrl": "https://image.tmdb.org/t/p/w500/mQ6nUOTmQFLNbPfHXqfTqZgm9wJ.jpg"
        },
        {
          "name": "Jacques Toja",
          "character": "Lauzun",
          "photoUrl": "https://image.tmdb.org/t/p/w500/zOk5vCHug4GjCH2VuTuTwCaw0x9.jpg"
        }
      ],
      "imageURL": "https://image.tmdb.org/t/p/w500null"
    },
    {
      "_id": "662f30b9f2f787f09d18495d",
      "title": "Once Upon a Time in America",
      "releaseDate": "1984-05-23",
      "genres": [
        "Drama",
        "Crime"
      ],
      "ratings": {
        "imdb": 8.422,
        "tmdb": 8.422
      },
      "runtime": 229,
      "revenue": 5500000,
      "budget": 30000000,
      "tagline": "Crime, passion and lust for power.",
      "popularity": 65.603,
      "director": "Sergio Leone",
      "cast": [
        {
          "name": "Robert De Niro",
          "character": "David 'Noodles' Aaronson",
          "photoUrl": "https://image.tmdb.org/t/p/w500/cT8htcckIuyI1Lqwt1CvD02ynTh.jpg"
        },
        {
          "name": "James Woods",
          "character": "Maximilian 'Max' Bercovicz",
          "photoUrl": "https://image.tmdb.org/t/p/w500/tLH7mpH4KqkWL5VgjueTbewGsfK.jpg"
        },
        {
          "name": "Elizabeth McGovern",
          "character": "Deborah Gelly",
          "photoUrl": "https://image.tmdb.org/t/p/w500/ihYdCKyr3JPz74tPuvkn1WSNh9b.jpg"
        },
        {
          "name": "Treat Williams",
          "character": "James Conway O'Donnell",
          "photoUrl": "https://image.tmdb.org/t/p/w500/bQ3zECF7TRpF8cwCmxqn4Qv2zHD.jpg"
        },
        {
          "name": "Tuesday Weld",
          "character": "Carol",
          "photoUrl": "https://image.tmdb.org/t/p/w500/wAHhvoII75VeT5OGpHoTGf1hJ7w.jpg"
        }
      ],
      "imageURL": "https://image.tmdb.org/t/p/w500/i0enkzsL5dPeneWnjl1fCWm6L7k.jpg"
    },
    {
      "_id": "662f30bbf2f787f09d18495e",
      "title": "Agatha Christie: A Life in Pictures",
      "releaseDate": "2004-09-22",
      "genres": [
        "Drama",
        "TV Movie"
      ],
      "ratings": {
        "imdb": 7.9,
        "tmdb": 7.9
      },
      "runtime": 90,
      "revenue": 0,
      "budget": 0,
      "tagline": "",
      "popularity": 7.547,
      "director": "Richard Curson Smith",
      "cast": [
        {
          "name": "Olivia Williams",
          "character": "Agatha Christie",
          "photoUrl": "https://image.tmdb.org/t/p/w500/qafefByeAWQ7b82E5JkhztOSIBd.jpg"
        },
        {
          "name": "Anna Massey",
          "character": "Old Agatha Christie",
          "photoUrl": "https://image.tmdb.org/t/p/w500/irkJMLPuzbyL8YlsYAOMHOHgs0k.jpg"
        },
        {
          "name": "Raymond Coulthard",
          "character": "Archie Christie",
          "photoUrl": "https://image.tmdb.org/t/p/w500/biVywUndrVFDSeECGQxgwzdpw5L.jpg"
        },
        {
          "name": "Stephen Boxer",
          "character": "Psychatrist",
          "photoUrl": "https://image.tmdb.org/t/p/w500/urPOwT7ibO58AsjWgR03JDK9PU1.jpg"
        },
        {
          "name": "Anthony O'Donnell",
          "character": "Hercule Poirot",
          "photoUrl": "https://image.tmdb.org/t/p/w500/iwCt0It3IZQLiSxKbvWlNTsEhHv.jpg"
        }
      ],
      "imageURL": "https://image.tmdb.org/t/p/w500/9ypHdeg6m2QRUQOVKrZmZeUVJiD.jpg"
    },
    {
      "_id": "662f30bbf2f787f09d18495f",
      "title": "Antonia's Line",
      "releaseDate": "1995-09-21",
      "genres": [
        "Drama",
        "Comedy"
      ],
      "ratings": {
        "imdb": 7.1,
        "tmdb": 7.1
      },
      "runtime": 102,
      "revenue": 0,
      "budget": 900000,
      "tagline": "A motion picture that celebrates everything you love about life.",
      "popularity": 14.384,
      "director": "Marleen Gorris",
      "cast": [
        {
          "name": "Willeke van Ammelrooy",
          "character": "Antonia",
          "photoUrl": "https://image.tmdb.org/t/p/w500/aXwDoxmfLO7aBvJLDADODBhubqU.jpg"
        },
        {
          "name": "Els Dottermans",
          "character": "Danielle",
          "photoUrl": "https://image.tmdb.org/t/p/w500/9NmzTbq4Nhwg1HCBX02NksMmAGp.jpg"
        },
        {
          "name": "Dora van der Groen",
          "character": "Allegonde",
          "photoUrl": "https://image.tmdb.org/t/p/w500/q5r8a9p3bdbQqRZR5ohHNJw15y1.jpg"
        },
        {
          "name": "Veerle van Overloop",
          "character": "Thérèse",
          "photoUrl": null
        },
        {
          "name": "Carolien Spoor",
          "character": "Thérèse (6)",
          "photoUrl": "https://image.tmdb.org/t/p/w500/iTjKBAqs3kk8NtfrwHbmWVvxON3.jpg"
        }
      ],
      "imageURL": "https://image.tmdb.org/t/p/w500/nUCVi6bBIL7LGC61nYaCqikAhIA.jpg"
    },
    {
      "_id": "662f30bcf2f787f09d184960",
      "title": "Alone",
      "releaseDate": "2004-10-28",
      "genres": [
        "Drama",
        "Romance"
      ],
      "ratings": {
        "imdb": 6.4,
        "tmdb": 6.4
      },
      "runtime": 88,
      "revenue": 0,
      "budget": 0,
      "tagline": "",
      "popularity": 6.569,
      "director": "Thomas Durchschlag",
      "cast": [
        {
          "name": "Lavinia Wilson",
          "character": "Maria",
          "photoUrl": "https://image.tmdb.org/t/p/w500/io2rNsj3J90xhRO0KqEt0t5tuMe.jpg"
        },
        {
          "name": "Maximilian Brückner",
          "character": "Jan",
          "photoUrl": "https://image.tmdb.org/t/p/w500/2fXdA5c6lHHkJ8mC6oHWyJc5yFC.jpg"
        },
        {
          "name": "Richy Müller",
          "character": "Wolfgang",
          "photoUrl": "https://image.tmdb.org/t/p/w500/69W9VO478asbTZJrhqOfHddyunF.jpg"
        },
        {
          "name": "Victoria Mayer",
          "character": "Sarah",
          "photoUrl": "https://image.tmdb.org/t/p/w500/gzczae0XiE2d6D13FMtM6xO0ar7.jpg"
        },
        {
          "name": "Tobias van Dieken",
          "character": "Nico",
          "photoUrl": "https://image.tmdb.org/t/p/w500/z2taNBmkBIrIgA9Zn80iCO8h10K.jpg"
        }
      ],
      "imageURL": "https://image.tmdb.org/t/p/w500/qcRdeDMxJZs1FwhrzyCDgshnYV1.jpg"
    },
    {
      "_id": "662f30bcf2f787f09d184961",
      "title": "Coming to America",
      "releaseDate": "1988-06-29",
      "genres": [
        "Comedy",
        "Romance"
      ],
      "ratings": {
        "imdb": 6.881,
        "tmdb": 6.881
      },
      "runtime": 117,
      "revenue": 288752301,
      "budget": 30000000,
      "tagline": "This summer, Prince Akeem discovers America.",
      "popularity": 106.246,
      "director": "John Landis",
      "cast": [
        {
          "name": "Eddie Murphy",
          "character": "Prince Akeem / Clarence / Randy Watson / Saul",
          "photoUrl": "https://image.tmdb.org/t/p/w500/qgjMfefsKwSYsyCaIX46uyOXIpy.jpg"
        },
        {
          "name": "Arsenio Hall",
          "character": "Semmi / Extremely Ugly Girl / Morris / Reverend Brown",
          "photoUrl": "https://image.tmdb.org/t/p/w500/8oqVGysLVXkWlTOWIWkWIbL4i2q.jpg"
        },
        {
          "name": "Shari Headley",
          "character": "Lisa McDowell",
          "photoUrl": "https://image.tmdb.org/t/p/w500/yliVRnLEmPH0Nzh78TzY1GfE8ZA.jpg"
        },
        {
          "name": "John Amos",
          "character": "Cleo McDowell",
          "photoUrl": "https://image.tmdb.org/t/p/w500/b2zYGkMG28wYDHC9CunfYAeoeMQ.jpg"
        },
        {
          "name": "James Earl Jones",
          "character": "King Jaffe Joffer",
          "photoUrl": "https://image.tmdb.org/t/p/w500/oqMPIsXrl9SZkRfIKN08eFROmH6.jpg"
        }
      ],
      "imageURL": "https://image.tmdb.org/t/p/w500/djRAvxyvvN2yqlJKDbT3uy4vOBw.jpg"
    }
  ]
  

  return (
    <>
      <div>
      {movies.map(movie =>
        <Movie key={movie.title} movie={movie} />
      )}
      </div>
    </>
  )
}

export default App
