@echo off

echo Clearing caches...
php artisan cache:clear
php artisan view:clear
php artisan config:clear
php artisan route:clear

npm run build
