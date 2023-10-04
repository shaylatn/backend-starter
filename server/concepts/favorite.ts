import { Filter, ObjectId } from "mongodb";
import DocCollection, { BaseDoc } from "../framework/doc";
// import { NotAllowedError, NotFoundError } from "./errors";

export interface FavoriteDoc extends BaseDoc {
  user: ObjectId;
  item: ObjectId;
}

export default class FavoriteConcept {
  public readonly favorites = new DocCollection<FavoriteDoc>("favorites");

  async addFavorite(user: ObjectId, item: ObjectId) {
    const favorite = await this.favorites.createOne({ user, item });
    return { msg: "Movie added successfully to favorites!", id: favorite };
  }
  async getFavorites(query: Filter<FavoriteDoc>) {
    const favorites = await this.favorites.readMany(query);
    return favorites;
  }
  async getByUser(user: ObjectId) {
    return await this.getFavorites({ user });
  }
}
