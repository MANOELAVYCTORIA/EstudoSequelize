const {Usuario, Post, Comentario, sequelize} = require('./models');
const {Op} = require('sequelize');


// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Usuario.findAll({
//     order: [
//         ['nome', 'ASC'] //DESC => DECRECENTE
//     ]
// })
// .then((resultado) => {
//     console.log(resultado.map(Usuario => Usuario.toJSON()));
// });


// Usuario.findAll({
//     order: [
//         ['id', 'ASC'] //DESC => DECRECENTE
//     ],
//     limit: 2,
//     offset: 2
// })
// .then((resultado) => {
//     console.log(resultado.map(Usuario => Usuario.toJSON()));
// });

// Post.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll({
//     where: {
//         texto: {[Op.like]: '%oi%'}
//     }
// })
// .then((resultado) => {
//    console.log(resultado.map(post => post.toJSON()));
// })


// Comentario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findOne({
//     where: {
//         id: '2'
//     }
// })
// .then((resultado) => {
//     console.log(resultado)
// });

// Comentario.findByPk(3)
// .then((resultado) => {
//     console.log(resultado)
// })

/* SEQUELIZE - Consultas
Buscar todos os usuarios que tem a letra A no nome
Buscar todos os usuarios que não tem a letra A no nome
Buscar todos os posts e exibir 2 por vez
Utilize: Where, Op.like, Op.notLike, Limit, Offset, Order */

console.log('A) Buscar todos os usuarios que tem a letra A no nome:')

Usuario.findAll({
    where: {
        nome: {[Op.like]: '%a%'}
    }
})
.then((resultado) => {
   console.log(resultado.map(Usuario => Usuario.toJSON()));
});

console.log('B) Buscar todos os usuarios que não tem a letra A no nome: ')

Usuario.findAll({
    where: {
        nome: {[Op.notLike]: '%a%'}
    }
})
.then((resultado) => {
   console.log(resultado.map(Usuario => Usuario.toJSON()));
});

console.log('C) Buscar todos os posts e exibir 2 por vez: ')

for (let i = 0; i < 6; i += 2) {
    Comentario.findAll({
      order: [['id', 'DESC']],
      offset: i,
      limit: 2,
    }).then((resultado) => {
      console.table(resultado.map((comment) => comment.toJSON()));
    });
  }
