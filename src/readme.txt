# Mémo

## Run
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Deploy
ng build --base-href=/domo/
ng build --base-href=/domo/ --prod --build-optimizer
recopier contenu de /dist dans dans /var/www/node-domo/app/domo

## generate component
ng g component new-cmp
ex: ng g component config-page

## generate service ?
ng g service [name] generates a service
ex: ng g service webcam

## Notes
- removed from angular-cli.json :
"../node_modules/bootstrap/dist/js/bootstrap.min.js"


