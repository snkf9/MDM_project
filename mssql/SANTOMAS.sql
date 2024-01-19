CREATE DATABASE SANTOMAS
GO
USE SANTOMAS
GO
CREATE SCHEMA automeasuareIQPC
GO
CREATE TABLE userTable
(
	Id int primary key Identity,
	SVN_Id nvarchar(20) NOT NULL,
	Name nvarchar(100) NOT NULL,
	Dept nvarchar(20) NOT NULL,
	Factory nvarchar(20) NOT NULL,
	Level_user int NOT NULL,
	Passw int NOT NULL,
)
GO 

CREATE TABLE Tool_measuare
(
	Id INT PRIMARY KEY IDENTITY,
	Name_t nvarchar(100) NOT NULL,
	Type_t nvarchar(100) NOT NULL,
	InUse INT NOT NULL,
	Id_Tool INT NOT NULL,
	Factory_t nvarchar(20) NOT NULL,
)

CREATE TABLE Partdata
(	
	Id INT PRIMARY KEY IDENTITY,
	Name_part varchar(50) NOT NULL,
	Mold_No varchar(50) NOT NULL,
	Part_name nvarchar(100) NOT NULL,
	Factory varchar(20) NOT NULL,
	Add_date DATE NOT NULL,
	Customer nvarchar(50) NOT NULL,
	DWGrey varchar(50) NOT NULL,
	His_No varchar(50) NOT NULL,
	Specifical_Cav nvarchar(50) NOT NULL,
	Measure_instruction varchar(50) NOT NULL,
	Model varchar(50) NOT NULL,
	Material varchar(50) NOT NULL,
	No_of_cav int NOT NULL,
	Rev_No nvarchar(50) NOT NULL,
	Ilustration nvarchar(50) NOT NULL,
	Drawing_file nvarchar(50) NOT NULL,
	Dia_no nvarchar(50) NOT NULL,
	Reg nvarchar(50) NOT NULL,
	Special_Cavity_Designation Int NOT NULL,
	Apperance_Caution nvarchar(50) NOT NULL,
	His_file nvarchar(50) NOT NULL,
)

CREATE TABLE ApprearanceCheckpoint
(
	Id INT PRIMARY KEY IDENTITY,
	Item_No INT NOT NULL,
	Check_content nvarchar(100) NOT NULL,
	Specs nvarchar(50) NOT NULL,
	Tool nvarchar(50) NOT NULL,
	Eng INT NOT NULL,
	Sp_Jig nvarchar(50) NOT NULL,
	QA INT NOT NULL,
	QA_Sample_size nvarchar(50) NOT NULL,
	QA_Frequence nvarchar(50) NOT NULL,
	IQPC INT NOT NULL,
	IQPC_Sample_size nvarchar(50) NOT NULL,
	IQPC_Frequence nvarchar(50) NOT NULL,
	OQC INT NOT NULL,
	OQC_Sample_size nvarchar(50) NOT NULL,
	OQC_Frequence nvarchar(50) NOT NULL,
)

CREATE TABLE Dim_checkpoint
(
	Id INT PRIMARY KEY IDENTITY,
	Item_No INT NOT NULL,
	Geometric_Tolerance nvarchar(50) NOT NULL,
	Specs nvarchar(50) NOT NULL,
	Tolerance nvarchar(50) NOT NULL,
	Lower_limit float not null,
	Upper_limit float NOT NULL,
	FA_Accepted nvarchar(50) NOT NULL,
	Position nvarchar(20) NOT NULL,
	DimTool nvarchar(50) NOT NULL,
	Supporting_Jig nvarchar(50) NOT NULL,
	ENG INT NOT NULL,
	QA INT NOT NULL,
	QA_SampleSize nvarchar(50) NOT NULL,
	QA_Frequence nvarchar(50) NOT NULL,
)








