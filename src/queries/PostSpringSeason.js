//returns list of animes based on anime season and year
const seasonalAnimeSearch = `query ($format: MediaFormat, $season: MediaSeason, $seasonYear: Int, $page: Int, $perPage: Int) { # Define which variables will be used in the query (id)
    Page (page: $page, perPage: $perPage) {
      media (format: $format, season: $season, seasonYear: $seasonYear, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
          id
          title {
              romaji
              english
              native
          }
          description
          startDate {
              year
              month
              day
          }
          endDate {
              year
              month
              day
          }
          episodes
          duration
          isAdult
          genres
          coverImage {
              medium
              large
          }
          bannerImage
          averageScore
      }
    }
  }
  
  `

export default seasonalAnimeSearch