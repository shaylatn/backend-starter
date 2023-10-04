import { Filter, ObjectId } from "mongodb";
import DocCollection, { BaseDoc } from "../framework/doc";
import { NotAllowedError } from "./errors";

export interface MovieDoc extends BaseDoc {
  title: string;
  genres: Set<string>;
  watched: Set<ObjectId>;
  platforms: Set<string>;
}

export default class MovieConcept {
  public readonly movies = new DocCollection<MovieDoc>("movies");

  async getMovies(query: Filter<MovieDoc>) {
    const movies = await this.movies.readMany(query);
    return movies;
  }
  async create(title: string, genres: Set<string>, platforms: Set<string>) {
    await this.isMovieUnique(title);
    const movie_id = await this.movies.createOne({ title, genres, platforms });
    return { msg: "Movie added successfully!", movie_id: movie_id, title: title, genres: genres, platforms: platforms };
  }
  async getByTitle(title: string) {
    const movies = await this.getMovies({ title });
    return movies;
  }
  private async isMovieUnique(title: string) {
    if (await this.movies.readOne({ title })) {
      throw new NotAllowedError(`Movie with name ${title} already exists!`);
    }
  }
}
