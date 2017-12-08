* Mémo

- removed from angular-cli.json :
"../node_modules/bootstrap/dist/js/bootstrap.min.js"

* Deploy
ng build --base-href=/domo/
ng build --base-href=/domo/ --prod --build-optimizer
recopier contenu de /dist dans dans /var/www/node-domo/app/domo

* generate component
ng g component new-cmp
ng g component config-page