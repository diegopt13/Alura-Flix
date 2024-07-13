const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTMxYjFjODZlODRkZGQ5ZjA5ZGJjNTU1NjQyMmEwZCIsIm5iZiI6MTcyMDkxMzAzNS4wMDUxNjMsInN1YiI6IjY2OTMwOTBmZDU3MTY3NjQ0YzEzMTc3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tjefEZkgQIomQnPWTncHrbpNOF-0WsyEpjPZZgQxRDA",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}