# Job Search Website

A web application that allows users to search for jobs, create profiles, and apply for job postings. Built using HTML5, CSS, JavaScript, JSON, Node.js for the backend, and React for the frontend.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Job Search**: Browse and search for job listings using various filters like location, job type, and salary range.
- **User Profiles**: Create and manage user profiles, including uploading resumes and cover letters.
- **Job Application**: Apply for jobs directly through the platform.
- **Company Dashboard**: Employers can post job openings and manage applications.
- **Responsive Design**: Mobile-friendly design for a seamless experience on all devices.

## Tech Stack

- **Frontend**: HTML5, CSS, JavaScript, React
- **Backend**: Node.js, Express.js
- **Data Format**: JSON
- **Database**: MongoDB (or any preferred database)
- **Package Manager**: npm
- **Version Control**: Git

## Installation

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mahendrabalal/job-search-website.git
   cd job-search-website

2. **Install dependencies**:
   ```bash
   npm install

3. **Set up the database**:
   - Make sure you have MongoDB installed locally or connect to a remote MongoDB instance.
   - Create a ```.env``` file in the root directory of the project, and add your MongoDB URI:
     ```bash
     MONGO_URI=your_mongodb_uri
4. **Start the server**:
   ```bash
   npm start
5. **Access the application**:
- Open your browser and navigate to ```http://localhost:3000```

## Usage
1. Register an account: Create a new user profile.
2. Search for jobs: Browse the job listings and use filters to find specific opportunities.
3. Apply for jobs: Submit your application through the platform.
4. Employers: Employers can log in, post job listings, and manage applicants.

## API Endpoints
- GET /api/jobs: Fetch all job listings.
- POST /api/jobs: Create a new job listing (requires authentication).
- GET /api/jobs/
: Fetch details of a single job listing.
- PUT /api/jobs/
: Update a job listing (requires authentication).
- DELETE /api/jobs/
: Delete a job listing (requires authentication).
- POST /api/applications: Submit a job application (requires authentication).

## Contributing
1. Fork the repository.
2. Create a new branch (```git checkout -b feature-branch```).
3. Make your changes and commit them (```git commit -m 'Add new feature```).
4. Push to the branch (```git push origin feature-branch```).
5. Open a pull request.

## License
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
