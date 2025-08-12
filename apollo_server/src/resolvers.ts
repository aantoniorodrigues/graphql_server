import db  from "./_db.js";

const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        game(_parent, args) {
            return db.games.find((game) => game.id === args.id);
        },
        authors() {
            return db.authors;
        },
        author(_parent, args) {
            return db.authors.find((author) => author.id === args.id);
        },
        reviews() {
            return db.reviews;
        },
        review(_parent, args) {
            return db.reviews.find((review) => review.id === args.id);
        }
    },
    Game: {
        reviews(parent) {
            return db.reviews.filter((review) => review.game_id === parent.id);
        }
    },
    Author: {
        reviews(parent) {
            return db.reviews.filter((review) => review.author_id === parent.id);
        }
    },
    Review: {
        game(parent) {
            return db.games.find((game) => game.id === parent.game_id);
        },
        author(parent) {
            return db.authors.find((author) => author.id === parent.author_id)
        }
    }
}

export default resolvers;