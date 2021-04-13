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

// console.log('A) Buscar todos os usuarios que tem a letra A no nome:')

// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'}
//     }
// })
// .then((resultado) => {
//    console.table(resultado.map(Usuario => Usuario.toJSON()));
// });

// console.log('B) Buscar todos os usuarios que não tem a letra A no nome: ')

// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike]: '%a%'}
//     }
// })
// .then((resultado) => {
//    console.table(resultado.map(Usuario => Usuario.toJSON()));
// });

// console.log('C) Buscar todos os comentarios e exibir 2 por vez: ')


// for (let i = 0; i < 6; i += 2) {
//     Comentario.findAll({
//       order: [['id', 'DESC']],
//       offset: i,
//       limit: 2,
//     }).then((resultado) => {
//       console.table(resultado.map((comment) => comment.toJSON()));
//     });
//   }

//   console.log('------------')

//   Usuario.create ({
//       nome: 'Manoela',
//       email: 'manuela@gmail.com',
//       senha: 'manu1234'
//   }).then((resultado) => {
//       console.log(resultado.toJSON());
//   });

//   Usuario.update({
//       senha: 'novasenha'
//   }, {
//       where: {
//           id: 4
//       }
//   }).then((resultado) => {
//       console.log(resultado)
//   })

//   Usuario.destroy({
//       where: {
//           id: 7
//       }
//   }).then((resultado) => {
//       console.log(resultado.toJSON())
//   });

/* SEQUELIZE - CRUD
adicione todos os integrantes do seu grupo como Usuarios utilizando o método create
crie um post relacionado ao seu usuario
atualize o email do usuario 'Sergio' para 'sergio@digitalhouse.com'
apague o usuario 'Felipe Veronesi' filtrando pelo id */

// console.log('------------------------------------------------------')

// console.log('A) adicione todos os integrantes do seu grupo como Usuarios utilizando o método create:');


// // Usuario.bulkCreate ([
// //     // {nome: 'Barbara Lícia', email: 'barbara@gmail.com', senha: 'barbara1234'},
// //     // {nome: 'Maria Luiza', email: 'maria@gmail.com', senha: 'maria1234'}
// //     // {nome: 'Lucio araujo', email: 'lucio@gmail.com', senha: 'lucio1234' },
// //     // {nome: 'Dari Diniz', email: 'dari@gmail.com', senha: 'dari1234'},
// //     // {nome: 'Angelo victor', email: 'angelo@gmail.com', senha: 'angelo1234'}

// // ])

// Usuario.findAll().then((usuarios) => {
//     console.table(usuarios.map((usuario) => usuario.toJSON()));
// })

// console.log('------------------------------------------------------')

// console.log('B) crie um post relacionado ao seu usuario: ')

// // Post.create ({
// //           texto: 'Aula da DH',
// //           img: null,
// //           usuarios_id: 5,
// //           n_likes: 0

// //       }).then((resultado) => {
// //           console.log(resultado.toJSON());
// //       });
      
//       Post.findAll().then((resultado) => {
//            console.table(resultado.map(post => post.toJSON()));
//          });

//  console.log('------------------------------------------------------');

//  console.log('C) atualize o email do usuario Sergio para sergio@digitalhouse.com');

// //  Usuario.update({
// //           email: 'sergio@digitalhouse.com'
// //       }, {
// //           where: {
// //               id: 2
// //           }
// //       });

// Usuario.findAll()
// .then((resultado) => {
//     console.table(resultado.map(usuario => usuario.toJSON()));
// });

// console.log('------------------------------------------------------');

// console.log('D) apague o usuario Felipe Veronesi filtrando pelo id');

// // Usuario.destroy({
// //           where: {
// //               id: 3
// //           }
// //       });

//       Usuario.findAll()
//       .then((resultado) => {
//           console.table(resultado.map(usuario => usuario.toJSON()));
//       });



console.log('-------------------------------------');
      
// console.log('RELAÇÕES ENTRE OS MODULOS');

// // Usuario.findByPk(1, {include: [
// //     {association: 'posts'}
// // ]})
// // .then((usuario) => {
// //     console.table(usuario.posts.map((post) => post.toJSON()));
// // });

// // Outro jeito

// Usuario.findByPk(1,
//     {include: 
//         ['posts']})
//         .then(
//         usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// );

// console.log('A) Configure a relação de Posts e Comentários utilizando hasMany e belongsTo:');

// Post.findByPk(1, {include:['comentarios']}).then(
//     post => {
//         console.log(post.toJSON());
//         sequelize.close();
//     }
// )

Post.findByPk(1, {include:['curtiu']}).then(
        post => {
            console.log(post.toJSON());
            sequelize.close();
        }
    )
    
    // Post.findByPk(1, {include:['curtiu']}).then(
    //     Usuario => {
    //         console.log(usuario.toJSON());
    //         sequelize.close();
    //     }
    // )

