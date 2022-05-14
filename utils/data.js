import bcrypt from 'bcryptjs'
const data = {
  users: [
    {
      nomP: 'amal',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      nomP: 'islem',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      nom: 'Qoftanne',
      image: '/images/0c6268ff0fa824261171825fa5c76c21.jpg',
      prix: 549,
      description: 'hxcbhdgc',
      countInStock: 70,
      categorie: 'Homme',
      sousCategorie: 'Jebba homme',
      statut: 'valid',
      marque: 'Chichkhan',
    },
  ],
}
export default data
