# API_Library
<b>Authors: Natalia Skórowska, Aleksandra Okrój<br>
Subject: API: Biblioteka <br>
Programming Language: JavaScript <br>
Database: MongoDB<br>
Project structure:</b><br>
![Struktura projektu](./ReadMeImages/Api1.png)<br>
<b>app.js</b> – routes import, database connection, error handling<br>
![app.js](./ReadMeImages/Api2.png)<br>
![app.js](./ReadMeImages/Api3.png)<br>
<b>server.js</b><br>
![server.js](./ReadMeImages/Api4.png)<br>
<b>Controllers:</b> <br>
•	books.js – displaying list of books, adding a new book, displaying books by id, editing books by id, deleting books by id
![books.js](./ReadMeImages/Api5.png)<br>
![books.js](./ReadMeImages/Api6.png)<br>
![books.js](./ReadMeImages/Api7.png)<br>
•	borrowedBooks.js – displaying list of boorowed books, adding a new borrowed book, displaying borrowed books by id, editing borrowed books by id, deleting borrowed books by id
![borrowedBooks.js](./ReadMeImages/Api8.png)<br>
![borrowedBooks.js](./ReadMeImages/Api9.png)<br>
![borrowedBooks.js](./ReadMeImages/Api10.png)<br>
<b>Middleware:</b><br>
check-auth.js – authorization<br>
![check-auth.js](./ReadMeImages/Api11.png)<br>
<b>Models:</b><br>
•	book.js<br> 
![book.js](./ReadMeImages/Api12.png)<br>
•	borrowedBook.js <br>
![borrowedBook.js](./ReadMeImages/Api13.png)<br>
•	user.js <br>
![user.js](./ReadMeImages/Api14.png)<br>
<b>Routes:</b><br>
•	books.js<br>
![books.js](./ReadMeImages/Api15.png)<br>
•	borrowedBooks.js<br>
![borrowedBooks.js](./ReadMeImages/Api16.png)<br>
•	users.js<br>
![users.js](./ReadMeImages/Api17.png)<br>
![users.js](./ReadMeImages/Api18.png)<br>
![users.js](./ReadMeImages/Api19.png)<br>
<b>Results:</b> <br>
•	GET books/ <br>
![efekty](./ReadMeImages/Api20.png)<br>
•	GET books/:bookId<br>
![efekty](./ReadMeImages/Api21.png)<br>
•	POST books/<br>
![efekty](./ReadMeImages/Api22.png)<br>
•	PATCH books/:bookId<br>
![efekty](./ReadMeImages/Api23.png)<br>
•	DELETE books/:bookId <br>
![efekty](./ReadMeImages/Api24.png)<br>
•	GET borrowed/ <br>
![efekty](./ReadMeImages/Api25.png)<br>
•	GET borrowed/:borrowedId <br>
![efekty](./ReadMeImages/Api26.png)<br>
•	POST borrowed/<br>
![efekty](./ReadMeImages/Api27.png)<br>
•	PATCH borrowed/:borrowedId<br>
![efekty](./ReadMeImages/Api28.png)<br>
•	DELETE borrowed/:borrowedId <br>
![efekty](./ReadMeImages/Api29.png)<br>
•	POST users/signup <br>
![efekty](./ReadMeImages/Api30.png)<br>
•	POST users/login <br>
![efekty](./ReadMeImages/Api31.png)<br>
•	DELETE users/:userId<br>
![efekty](./ReadMeImages/Api32.png)<br>






