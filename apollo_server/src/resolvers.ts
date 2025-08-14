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
    },
    Mutation: {
        addGame(_parent, args) {
            const newGame = {
                ...args.game,
                id: (db.games.length + 1).toString()
            }

            db.games.push(newGame);
            return newGame;
        },
        deleteGame(_parent, args) {
            db.games = db.games.filter((game) => game.id !== args.id);
            return db.games;
        },
        updateGame(_parent, args) {
            db.games = db.games.map((game) => {
                if (game.id === args.id) {
                    return {...game, ...args.edits}
                }
                return game
            })
            return db.games.find((game) => game.id === args.id)
        },
        addAuthor(_parent, args) {
            const newAuthor = {
                ...args.author,
                id: (db.authors.length + 1).toString()
            }

            db.authors.push(newAuthor);
            return newAuthor;
        },
        deleteAuthor(_parent, args) {
            db.authors = db.authors.filter((author) => author.id !== args.id);
            return db.authors;
        },
        updateAuthor(_parent, args) {
            db.authors = db.authors.map((author) => {
                if (author.id === args.id) {
                    return {...args.edits, ...author}
                }
                return author
            })
            return db.authors.find((author) => author.id === args.id)
        }
    }
}

export default resolvers;