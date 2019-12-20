export default {
  base : 'http://localhost:5000/api',
  login : {
    POST : () => (`/login`),
  },
  colors : {
    POST   : () => (`/colors`),
    GET    : () => (`/colors`),
  },
  color : {
    PUT    : (id) => (`/colors/${id}`),
    DELETE : (id) => (`/colors/${id}`),
  },
}
