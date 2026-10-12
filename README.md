# Movie Booking System

A web-based movie ticket booking application built using Java, Spring Boot, MySQL, HTML, CSS, and JavaScript.

## Features

- Browse available movies with posters and details
- View movie listings and select movies
- Select seats for a booking
- Enter booking details and view confirmation
- Store movie and booking data using MySQL

## Tech Stack

- **Backend:** Java, Spring Boot
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript
- **Build Tool:** Maven

## Prerequisites

- Java Development Kit (JDK)
- MySQL Server
- Maven (or the included Maven Wrapper)

## Setup and Run

1. Clone this repository:

   ```bash
   git clone https://github.com/ayushi-kushawah/movie-booking-system.git
   cd movie-booking-system
   ```

2. Create a MySQL database named `moviebookingdb`.

3. Configure the database connection using environment variables:

   - `DB_USERNAME` — your MySQL username
   - `DB_PASSWORD` — your MySQL password

4. Run the application on Windows:

   ```powershell
   .\mvnw.cmd spring-boot:run
   ```

5. Open your browser at:

   `http://localhost:8080`

## Project Structure

- `src/main/java` — Spring Boot application, controllers, models, repositories, and configuration
- `src/main/resources/static` — HTML pages, CSS, JavaScript, and movie posters
- `src/main/resources/application.properties` — application and database configuration
- `pom.xml` — Maven dependencies and build configuration

## Future Improvements

- User authentication and profiles
- Payment gateway integration
- Booking history and cancellation
- Deployment to a cloud platform

## Author

Ayushi Kushawah

GitHub: [ayushi-kushawah](https://github.com/ayushi-kushawah)
