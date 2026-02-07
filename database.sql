CREATE DATABASE leave_management;
USE leave_management;

-- Faculty Table
CREATE TABLE faculty (
    fid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    department VARCHAR(50)
);

-- HOD Table
CREATE TABLE hod (
    hid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100),
    department VARCHAR(50)
);

-- Admin Table
CREATE TABLE admin (
    aid INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100),
    password VARCHAR(100)
);

-- Leave Table
CREATE TABLE leaves (
    lid INT PRIMARY KEY AUTO_INCREMENT,
    fid INT,
    leave_type VARCHAR(50),
    from_date DATE,
    to_date DATE,
    reason TEXT,
    status VARCHAR(20) DEFAULT 'Pending',
    FOREIGN KEY (fid) REFERENCES faculty(fid)
);
