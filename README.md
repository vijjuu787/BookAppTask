# Book CRUD API
A RESTful API built with Node.js and Express to perform CRUD operations on a book resource. The data is stored in a MongoDB database using Mongoose for object modeling.

## Features
```
1.Create a new book entry
2.Read a list of all books
3.Read a specific book by its ID
4.Update a book's information by its ID
5.Delete a specific book by its ID
6.Data validation and error handling for robust API usage
```

## Bonus Features
```
1.Pagination for book listing
2.Search functionality to filter books by title or author
3.Sorting by published date or title
```

## Technologies Used
```
1.Node.js
2.Express.js
3.MongoDB
4.Mongoose
```
## Endpoints

Create a new book

POST /api/books

Request Body

![image](https://github.com/user-attachments/assets/6e22ae0e-67ce-4493-a944-50024f919247)



## Retrieve all books

```
1.GET /api/books

2.Optional Query Parameters:

   limit (number) - Limit the number of results
   
   skip (number) - Skip a number of results
   
   sort (string) - Sort by a specific field, e.g., title or publishedDate

```

## Retrieve a specific book by ID

```
GET /api/books/:id
```

## Update a book's information

```
PUT /api/books/:id

Request Body: (only include fields to update)
```
![image](https://github.com/user-attachments/assets/45507322-015c-434a-9906-e3a853ecef51)

## Delete a book

```
DELETE /api/books/:id
```
## pagination 

GET api/books?limit=3&skip=7&sortType=publishedDate

used limit for limited query

used skip for skips query

sortType sort the query by ** publishedDate ** ,** title ** and  default by ** ID **

