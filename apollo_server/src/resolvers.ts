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
    }
}

export default resolvers;