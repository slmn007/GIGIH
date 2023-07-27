# DATABASE STRUCTURE

Data base yang saya gunakan memiliki struktur seperti gambar berikut.

<img src="public\src\images\image-1.png" alt="databaseStructure" width="400px"/>

dari gambar tersebut dapat diketahui bahwa ada beberapa dokumen yang berelasi, misal pada dokumen "Products" yang memiliki relasi dengan dokumen "Videos" pada parameter "video_id".

# API STRUCTURE

Untuk struktur dari API nya bisa dilihat dari gambar berikut.

<img src="public\src\images\image.png" alt="apiStructure" width="500px"/>

Dari gambar tersebut dapat diketahui bahwa sementara API yang saya gunakan memiliki 4 handler yang akan digunakan pada "Tokopedia Play"

# List API request and response

## Users

- User object

```
{
    "id": Int //Akan diganti ObjectId,
    "username": Str,
    "email": Str,
    "password": Str,
    "created_at": Date,
    "updated_at": Date
}
```

## Videos

- Videos object

```
{
    "id": Int //Akan diganti ObjectId,
    "url_thumbnail": Str,
    "url_video": Str
}
```

## **GET /getAllVideo**

Returns all videos in the system.

- **URL Params**  
  None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
[
    {<videos_object>},
    {<videos_object>},
    ...
    {<videos_object>}
]
```

- **Error Response:**
  - **Code:** 500
    **Content:** `{ message: error.message }`

## Products

```
{
    "id": Int //Akan diganti ObjectId,
    "name": Str,
    "created_at": Date,
    "updated_at": Date,
    "video_id": Int //Akan diganti ObjectId dari Coll Videos,
    "url_product": Str,
    "cost": Float,
    "available_quantity": Int,
}
```

## **GET /getProduct/:video_id**

Returns all Products in the system.

- **URL Params**  
  _Required_: ` video_id=[Int] //akan diganti ObjectId dari Coll Videos`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:** `[ {<products_object>} ]`
- **Error Response:**
  - **Code:** 500
    **Content:** `{ message: error.message }`

## Comments

```
{
    "id": Int //Akan diganti ObjectId,
    "video_id": Int //Akan diganti ObjectId dari Coll Videos,
    "id_user": Int //Akan diganti ObjectId dari Coll Users,
    "comment": Str,
    "timeStamp": Date
}
```

## **GET /getComm/:video_id**

Returns all videos in the system.

- **URL Params**  
  _Required_: ` video_id=[Int] //akan diganti ObjectId dari Coll Videos`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
[
    {
        <comments_object>,
        detailUser: <users_object>
    },
    {
        <comments_object>,
        detailUser: <users_object>
    },
    ....
    {
        <comments_object>,
        detailUser: <users_object>
    }
]
```

- **Error Response:**
  - **Code:** 500
    **Content:** `{ message: error.message }`

## **POST /addComm**

Returns all videos in the system.

- **URL Params**  
  _Required_: ` video_id=[Int] //akan diganti ObjectId dari Coll Videos`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 201  
  **Content:**

```
{
    "acknowledged": true,
    "insertedId": ObjectId
}
```

- **Error Response:**
  - **Code:** 500
    **Content:** `{ message: error.message }`

# HOW TO RUN IN LOCAL

1. Install MongoDB, you can get the tutorial install and mongoDB installer from this link:
   `https://www.mongodb.com/docs/manual/administration/install-community/`

2. Install nodeJS, you can get the nodeJs installer from this link:
   `https://nodejs.org/en/download`
   <br> and you can get the tutorial installation from this link:
   `https://pemburukode.com/cara-install-nodejs-di-windows/`

3. Install postman, you can get postman installer from this link:
   `https://www.postman.com/downloads/`

4. Install the Necessary Packages by typing this on your **Main Folder of Project**
   `npm install express body-parse mongoose nodemon dotenv`

5. Open your terminal, type `mongosh`, and insert source code in `public\src\database\database.js` to your terminal.
   if you use MongoDB for VS Code as editor. you can install ekstention `MongoDB for VS Code` to make it more easier. you just have to copied the source code in `public\src\database\database.js` to the playground on ekstention `MongoDB for VS Code`.

6. Last, type `npm start` from your **Main Folder of Project** terminal to run the whole code.

7. Happy Coding!!!
