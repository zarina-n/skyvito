# SkyVito

## Summary

A clone of market place.

#### Structure and functionality of the application

##### Home page

- [x] While the user is not authorized, they have access only to the Home page, which displays the products that are placed on the site.
- [x] The user can search through ads using the product search bar.
- [x] The user can login or sign up on the site.
- [x] The user can change language to Russian or English (English is a default language).
- [x] Most of the ads are in Russian since it was added in Russian to the server from the start.

![image](https://github.com/zarina-n/skyvito/assets/101009726/d63fe098-b6ab-4234-882c-1fb7f05ed2c8)


##### Profile page

- [x] Profile page displays a welcome section containing the user's: first and last name, avatar, location, and phone number.
- [x] All fields can be edited.
- [x] If the user has not edited these fields, then the “Save” button is inactive.
- [x] “My products” are displayed on the bottom of profile page.
- [x] Clicking on a product opens a product page

![image](https://github.com/zarina-n/skyvito/assets/101009726/bc790028-3c61-4f91-b6fc-aad61cb339ba)


##### Product page

- [x] Contains the price, name, description of the product, phone number, and name of the seller.
- [x] Also contains users' reviews of the product.
- [x] Authorized user can edit or delete their products.

Unauthorized seller
![image](https://github.com/zarina-n/skyvito/assets/101009726/885e8e45-d821-488f-bc09-51326f5cd7e7)

Authorized seller
![image](https://github.com/zarina-n/skyvito/assets/101009726/c4b5dbd8-38e6-494a-a6b0-7027a34363d2)



##### Seller's page

- [x] Information about the seller: avatar, name, surname, city, date of placement of the first ad.
- [x] Button to display the seller's phone number.
- [x] List of all products by the seller.

![image](https://github.com/zarina-n/skyvito/assets/101009726/8440648a-dd04-41b1-906e-d4bd874dd824)


##### Product reviews popup

- [x] A list of all product reviews with users' names, profile pictures and the date the review was posted.

![image](https://github.com/zarina-n/skyvito/assets/101009726/74097a0f-8267-41c1-ad69-dc128b11a628)


##### New add popup

- [x] The user can add name, description, price of the product, as well as upload up to 5 photos.

![image](https://github.com/zarina-n/skyvito/assets/101009726/c72331dc-5f64-42f8-bd3f-8839c1fcf7ae)


##### Edit add popup

- [x] The user can edit name, description, price of the product, as well as upload up to 5 photos (uploading photos has an error to be fixed soon).

![image](https://github.com/zarina-n/skyvito/assets/101009726/f75212dc-6796-4249-83da-f13805e95b77)


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
