# Ice-Cream Poll Web App

## About the Project

This web app will allow the user to see different ice cream flavours sold by a fictional ice-cream company and vote for their favourite flavour. Polling results will be updated whenever a website visitor votes. It is built with Django framework using PostgreSQL, and deployed with Heroku.

**Languages used:** HTML, CSS, SCSS, JavaScript, Python, SQL

**Link to completed project:** https://i-treats.herokuapp.com/

**Website pages:**
- Index/Home page 
- About page
- Display Ice-cream flavours page
- Voting page
- Vote Results page

## Prerequisites
**Install locally:**
- Python 3
- Django 3.2.8
- django-sass-processor
- django-libsass
- dj-database-url 0.5.0
- gunicorn 20.1.0
- whitenoise 5.3.0
- PostgreSQL -- if deploying with Heroku skip installation and use Heroku Postgres
- psycopg2

## Usage
- Install all prerequisites
- Run command: git clone https://github.com/jcorbette/ice-cream-poll.git
- Open PostgreSQL pgAdmin, set  password and create new database
- Open /ice_cream_poll/settings.py file and then insert own secret key and new database name, user and password values
- Run the following commands to generate database tables and run server
```bash
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```
- Once server is running, go to 'localhost/admin' url and login as admin to populate the questions table with the poll question, and the choices table with the flavours
- Refresh pgAdmin to see new table data
- Run server again and try out the voting system to see the results! 

## Project Preview Video
https://user-images.githubusercontent.com/59467011/141770696-9bb3a8d8-f1a4-41fa-a3c8-6ddddfe76268.mp4


