CREATE DATABASE test
GO
USE QLDL
GO
CREATE TABLE tesst
(
Id int primary key Identity,
Name nvarchar(100) NOT NULL,
)
GO 
INSERT INTO tesst(Name) VALUES
(N'Sown'),
(N'Xiem')