# CurioSphere Project

This repository contains both the frontend (Vue.js) and backend (Node.js/Express with Sequelize) for the CurioSphere project.

## Table of Contents
- [Requirements](#requirements)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Setting up PostgreSQL Database](#setting-up-postgresql-database)
- [Development](#development)
- [Database Migrations](#database-migrations)

## Requirements

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v16.x.x or later)
- [npm](https://www.npmjs.com/) (v7.x.x or later, installed with Node.js)
- [PostgreSQL](https://www.postgresql.org/) (v15 or later)
- [Git](https://git-scm.com/) (for cloning the repository)

## Installation

To set up the project, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Roman-Parker/CurioSphere.git
    cd CurioSphere
    ```

2. **Install dependencies** for both frontend and backend:

    ```bash
    npm run setup
    ```

    This will install the necessary packages for both the Vue.js frontend and the Node.js backend.

## Running the Project

Once all dependencies are installed, you can run the development server for both the frontend and backend simultaneously using:

```bash
npm run dev
```

This command will:

Start the Vue.js frontend at http://localhost:8080
Start the backend API server at http://localhost:5000

Both services should be up and running after this.