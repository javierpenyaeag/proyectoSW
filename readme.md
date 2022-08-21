# Puesta en funcionamiento Api Laravel 9

La api se encuentra alojada en el directorio api, en el cual nos tenemos que alojar para seguir los siguientes pasos para la puesta en funcionamiento.

- Crear .env con la base de .env-example, y definir los secretos de conexión a base de datos
    - `DB_DATABASE`: Nombre de la base de datos
    - `DB_USERNAME`: Nombre de usuario
    - `DB_PASSWORD`: Contraseña de conexión de usuario a la base de datos.

- En el proyecto de api, lanzar el siguiente comando para instalar las dependecias de laravel `composer install`, en caso de error por fichero .lock ejecutar el siguiente comando `composer install --ignore-platform-reqs`

- Generar las migraciones de base de datos lanzando el siguiente comando `php artisan migrate`

- Por último, tenemos que levantar el proyecto con el siguiente comando `php artisan serve`


# Puesta en funcionamiento aplicación React

La aplicación React se encuentra alojada en el directorio app, en el cual tenemos que seguir los siguientes pasos para la puesta en funcionamiento:

- En primer lugar tenemos que instalar las dependencias de proyecto lanzando el siguiente comando `npm install`

- Una vez instaladas las dependencias del proyecto lanzar el siguiente comando para levantarlo en local `npm run start`
