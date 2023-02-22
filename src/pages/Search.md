# Another way to achieve the same functionality

```typescript

  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  const fetchSearchResults = async (query: string) => {
    const searchResult = await fetchSearch(query);
    // console.log(searchResult);

    const movies = searchResult?.filter(
      (result: SearchResult) => result.media_type === "movie"
    );
    const tvShows = searchResult?.filter(
      (result: SearchResult) => result.media_type === "tv"
    );
    // console.log("Movies Filtered ->", movies);
    // console.log("TV Shows Filtered ->", tvShows);
    // return { movies, tvShows };
    setMovies(movies);
    setTvShows(tvShows);
  };

  useEffect(() => {
    fetchSearchResults(query || "");
  }, [query]);

  if (!movies && !tvShows) {
    return (
      <div className='mx-auto h-full w-full max-w-screen-2xl pt-32'>
        <p>Loading...</p>
      </div>
    );
  }
```

## This is the URL used to search for movies

```js
// SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${pageNumber}&include_adult=false&query=${queryParam}`
// BASE_URL, API_KEY and query='queryParam
```
