-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT  p.productname, categoryname 
FROM Product as p 
join category as c on p.categoryID = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

select productname, quantity
from orderdetails as od
join order as o on od.orderid = o.id
WHERE o.id = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

select id, companyname as CustomerCompany, lastname
from order as o
join employee as e on o.employeeid = e.id
join customer as c on o.customerid = c.id
