# Relational Databases

## Creating the tables

```sql
CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT,
  author TEXT
);

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name TEXT
);

CREATE TABLE category_junction (
  book_id INT REFERENCES books(id),
  cat_id INT REFERENCES categories(id)
);
```

## Populating the tables with data

```sql
INSERT INTO books (title, author) values
('The Hobbit', 'JRR Tolkien'),
('The Lord of the Rings', 'JRR Tolkien'),
('The blue Zones', 'Dan Buettner'),
('Necronomicon', 'H.P Lovecraft'),
('She', 'Haggard Rider'),
('Think and Grow Rich', 'Napoleon Hill'),
('Shibumi', 'Trevanian'),
('The Picture of Dorian Gray', 'Oscar Wilde'),
('Chevrolet & GMC Pickup 67-87','j-h-haynes-peter-g-strasman');

INSERT INTO categories (name) values
('Childrens'),
('Fantasy'),
('Food'),
('Horror'),
('Thriller'),
('Personal Development'),
('Instruction Manual');

INSERT INTO category_junction (book_id, cat_id) values
(1, 1),
(1, 2),
(2, 2),
(5, 2),
(3, 3),
(4, 4),
(4, 5),
(6, 6),
(7, 5),
(8, 5),
(9, 7);
```

## Selecting all the data

```sql
SELECT
  books.title,
  books.author,
  categories.name AS category
FROM books
JOIN category_junction ON category_junction.book_id = books.id
JOIN categories ON categories.id = category_junction.cat_id
```

## Selecting all the data even if they don't have corresponding items in each table (LEFT JOIN)

```sql
SELECT
  books.title,
  books.author,
  categories.name AS category
FROM books
LEFT JOIN category_junction ON category_junction.book_id = books.id
LEFT JOIN categories ON categories.id = category_junction.cat_id
```

## Aggregating items that appear more than once

```sql
SELECT
  books.title,
  books.author,
  array_agg(categories.name) AS categories
FROM books
LEFT JOIN category_junction ON category_junction.book_id = books.id
LEFT JOIN categories ON categories.id = category_junction.cat_id
GROUP BY books.title, books.author
```
