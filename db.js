module.exports = {
  // posts: [
  //   { id: 1, title: 'Lorem Ipsum', views: 254, user_id: 123 },
  //   { id: 2, title: 'Sic Dolor amet', views: 65, user_id: 456 },
  // ],
  users: [
    {username: 'john@gmail.com', id: 1, name: 'John Doe',  password:'password', token:'asdf1213', type: 'admin', isLoggedIn: false },
    {username: 'jane@gmail.com', id: 2, name: 'Jane Doe',  password:'password', token:'asdf2134', type: 'customer' , isLoggedIn: false},
  ],
  // comments: [
  //   {
  //     id: 987,
  //     post_id: 1,
  //     body: 'Consectetur adipiscing elit',
  //     date: new Date('2017-07-03'),
  //   },
  //   {
  //     id: 995,
  //     post_id: 1,
  //     body: 'Nam molestie pellentesque dui',
  //     date: new Date('2017-08-17'),
  //   },
  // ],
}

// to run this test server run this command json-graphql-server db.js --p 3001
