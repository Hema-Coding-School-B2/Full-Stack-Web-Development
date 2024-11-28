Dataset: Users Collection
[
    { "_id": 1, "name": "Ajay", "age": 28, "gender": "Male", "scores": [40, 60, 80], "hobbies": ["reading", "traveling", "yoga"] },
    { "_id": 2, "name": "Sunita", "age": 25, "gender": "Female", "scores": [55, 45, 90], "hobbies": ["painting", "gardening", "music"] },
    { "_id": 3, "name": "Ravi", "age": 35, "gender": "Male", "scores": [70, 85, 95], "hobbies": ["gaming", "technology", "cycling"] },
    { "_id": 4, "name": "Madhavi", "age": 30, "gender": "Female", "scores": [30, 50, 70], "hobbies": ["cooking", "dancing", "fitness"] },
    { "_id": 5, "name": "Sai", "age": 40, "gender": "Male", "scores": [90, 95, 100], "hobbies": ["walking", "history", "painting"] }
  ]

  Dataset: Orders Collection
  [
    { "_id": 101, "orderId": "ORD001", "customerId": 1, "amount": 500, "status": "completed", "items": [ { "product": "Book", "price": 250, "quantity": 2 } ] },
    { "_id": 102, "orderId": "ORD002", "customerId": 2, "amount": 150, "status": "pending", "items": [ { "product": "Pen", "price": 15, "quantity": 10 } ] },
    { "_id": 103, "orderId": "ORD003", "customerId": 3, "amount": 300, "status": "completed", "items": [ { "product": "Laptop", "price": 300, "quantity": 1 } ] },
    { "_id": 104, "orderId": "ORD004", "customerId": 1, "amount": 200, "status": "completed", "items": [ { "product": "Headphones", "price": 200, "quantity": 1 } ] },
    { "_id": 105, "orderId": "ORD005", "customerId": 4, "amount": 100, "status": "canceled", "items": [ { "product": "Notebook", "price": 20, "quantity": 5 } ] }
  ]

  
Task 1: Filter and Count
Count the number of users whose age is greater than 30.
Count the number of orders with the status "completed".

Task 2: Group and Aggregate
Group users by gender and calculate the average age for each gender.
Group orders by status and calculate the total order amount for each status.


Task 4: Use $lookup to Join
Join the orders collection with the users collection to display user details for each order.

Task 5: Bucketing
Group users into age ranges: 20–29, 30–39, and 40+.
Bucket orders into price ranges: below 200, 200–500, and above 500.

Task 6: Multi-Stage Pipeline
Find the average order amount for users aged 30 and above.
Retrieve all orders for male users and sort them by order amount in descending order.