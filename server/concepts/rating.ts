import { ObjectId } from "mongodb";
import DocCollection, { BaseDoc } from "../framework/doc";
// import { NotAllowedError, NotFoundError } from "./errors";

export interface RatingDoc extends BaseDoc {
  author: ObjectId;
  movie: ObjectId;
  rating: Number;
}

export default class RatingConcept {
  public readonly ratings = new DocCollection<RatingDoc>("ratings");

  async create(author: ObjectId, movie: ObjectId, rating: Number) {
    const _id = await this.ratings.createOne({ author, movie, rating });
    return { msg: "Rating successfully created!", post: await this.ratings.readOne({ _id }) };
  }
}
