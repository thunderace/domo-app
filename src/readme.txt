* Mémo

- removed from angular-cli.json :
"../node_modules/bootstrap/dist/js/bootstrap.min.js"

* Deploy
ng build --base-href=/domo/
recopier contenu de /dist dans dans /var/www/node-domo/app/domo
