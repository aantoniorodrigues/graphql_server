let games = [
    {id: '1', title: 'The Witcher 3: Wild Hunt', platform: ['PC', 'Xbox']},
    {id: '2', title: 'Red Dead Redemption 2', platform: ['PC', 'PS4', 'Xbox']},
    {id: '3', title: 'Cyberpunk 2077', platform: ['PC', 'PS4', 'PS5']},
    {id: '4', title: 'Elden Ring', platform: ['PC', 'PS4', 'PS5', 'Xbox']},
    {id: '5', title: 'God of War Ragnarök', platform: ['PS4', 'PS5']},
];

let authors = [
    {id: '1', name: 'Martin', verified: true},
    {id: '2', name: 'John', verified: false},
    {id: '3', name: 'Jane', verified: true},
];

let reviews = [
    {id: '1', rating: 9, content: 'This is a great game', author_id: '1', game_id: '1'},
    {id: '2', rating: 8, content: 'Amazing open world experience', author_id: '2', game_id: '2'},
    {id: '3', rating: 6, content: 'Good story but has some bugs', author_id: '3', game_id: '3'},
    {id: '4', rating: 10, content: 'Incredible gameplay and atmosphere', author_id: '1', game_id: '4'},
    {id: '5', rating: 8, content: 'Epic adventure with stunning visuals', author_id: '2', game_id: '5'},
    {id: '6', rating: 4, content: 'Not what I expected, disappointing', author_id: '3', game_id: '2'},
    {id: '7', rating: 9, content: 'Masterpiece of storytelling', author_id: '1', game_id: '3'},
    {id: '8', rating: 8, content: 'Challenging but rewarding experience', author_id: '2', game_id: '4'}
]

export default {games, authors, reviews}