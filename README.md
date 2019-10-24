# Pre-Requisites
- Ruby version 2.6.4
- Rails version 6.0.0
- Yarn version 1.17.3
- Node version 12.10.0
- PostgreSQL version 11.5

For run the proyect you need install dependencies
- ``bundle install``
- ``yarn install``
- ``gem install foreman``
- ``rails db:setup``

then you run the server with
``foreman start -f Procfile.dev -p 3000``

the routes for aplication are 
- ``/login``
- ``/``
- ``/reports``
- ``/registers``

If you want to access as an Admin, use this account
 - email: diego@gm.co password: 1234
Or if you want to access as an Employee, use this:
 - email: tavo@gm.co password: 1234

