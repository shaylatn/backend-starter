import FavoriteConcept from "./concepts/favorite";
import FriendConcept from "./concepts/friend";
import MovieConcept from "./concepts/movie";
import PostConcept from "./concepts/post";
import RatingConcept from "./concepts/rating";
import UserConcept from "./concepts/user";
import WebSessionConcept from "./concepts/websession";

// App Definition using concepts
export const WebSession = new WebSessionConcept();
export const User = new UserConcept();
export const Post = new PostConcept();
export const Friend = new FriendConcept();
export const Movie = new MovieConcept();
export const Favorite = new FavoriteConcept();
export const Rating = new RatingConcept();
