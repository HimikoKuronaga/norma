/////////
//PUERTO
////////
process.env.PORT = process.env.PORT || 3000;

/////////
//ENTORNO
/////////
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;
if(process.env.NODE_ENV == 'dev')
  urlDB = 'mongodb://localhost:27017/norma';
else
  urlDB = 'mongodb+srv://himiko:himiko-norma-35@cluster0-zoanj.mongodb.net/norma?retryWrites=true&w=majority';

process.env.URL_DB = urlDB;
