# SkyVito

## Summary

Final individual project app which I am building as a part of Front-end Developer: a clone of market place
[Website layout](https://www.figma.com/file/ISqzPS7Sym7V004jFo5buE/%D0%A1%D0%B0%D0%B9%D1%82-%D0%B0%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3-%D0%90%D0%B2%D0%B8%D1%82%D0%BE?node-id=0%3A1&t=B747AbfblY9uBKHb-0)

#### Structure and functionality of the application

(Adaptive design will be added soon)

##### Home page

- [x] While the user is not authorized, he/she has access only to the Home page, which displays the products that are placed on the site.
- [x] The user can search through the ads using the product search bar.
- [x] The user can login or sign uo on the site.

##### Profile page

- [x] Profile page displays: the user's greeting, first and last name, avatar and phone number.
- [x] All fields can be edited.
- [x] If the user has not edited these fields, then the “Save” button is inactive.
- [x] “My products” are displayed on the bottom of profile page.
- [x] Clicking on a product opens a product page

##### Product page

- [x] Contains the price, name and description of the products, phone number and name of the seller.
- [x] Also contains users' reviews of the product.
- [x] Authorized user can edit or delete his/her products.

##### Seller's page

- [x] Information about the seller: avatar, name, surname, city, date of placement of the first add.
- [x] Button to display the seller's phone number.
- [x] List of all products of the seller.

##### Product reviews popup

- [x] A list of all product reviews with users' names, profile pictures and the date the review was posted.

##### New add popup

- [x] The user can add name, description, price of the product, as well as upload up to 5 photos.

##### Edit add popup

- [x] The user can edit name, description, price of the product, as well as upload up to 5 photos.

#### Installation

Clone this repository

```
git clone https://github.com/KittySaur/skyvito.git

```

Use commands:

```
npm i
npm start
```

##### Backend

You will need docker and docker-compose to run the backend. Go to the project directory and run the backend with the command:

```
docker compose -f "back-skyVito\backend\docker-compose-backend.yaml" up -d --build
```

The backend and documentation in the Swagger GUI will be available at: http://localhost:8090/

You can stop the backend with the command:

```
docker-compose down
```

#### Tech stack

- [x] React
- [x] Redux + Redux Toolkit + RTK Query
- [x] React Router DOM
- [x] styled-components
- [x] i18next 
