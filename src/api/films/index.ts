import axios from 'axios';
import ApiMap from './apiMap';


class FilmApi {

  private baseUrl = 'https://api.themoviedb.org/3'
  private apiKey: string;

  constructor(apiKey?: string) {
    if (!apiKey) throw new Error('api key is required to make API calls to the Film API')
    this.apiKey = apiKey;
  }


  private generateUrl = (url: string, params: { [paramName: string]: string | number }) => {
    const formattedParams = Object.entries(params).map(([key, val]) => `${key}=${val}`).join('&');
    return `${this.baseUrl}${url}?api_key=${this.apiKey}&${formattedParams}`
  }

  getTopRatedMovies(page: number = 1): Promise<GetTopRatedMoviesData> {
    const api = ApiMap.getTopRatedFilms;
    const url = this.generateUrl(api.url, { page });
    return axios[api.method](url).then(response => response.data);
  }

}



export default new FilmApi(process.env.REACT_APP_FILMS_API_KEY)