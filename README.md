# BitCode Roadmap App

## Overview
The BitCode Roadmap App is a tool to track development plans and gather user feedback to prioritize tasks. It features user roles, voting, commenting, and filtering, making it a collaborative platform for planning.

## Project Details
- **GitHub Repo:** [Link](https://github.com/Team-Bro-buggers-C211010/bit-code-task)  
- **Live Link:** [bit-roadmap](https://bit-roadmap.netlify.app)  
  *Note: The live site may take a minute to load as it’s hosted on Render.com’s free tier and sleeps after 15 minutes of inactivity.*  
- **Admin Access:**  
  - Email: admin.bit@code.com  
  - Password: Ab1234#  

## Features
- **User Roles & Permissions:**  
  - Regular users can register, log in, upvote (one-time), comment (300-character limit), and edit/delete their comments.  
  - Admins can create new roadmap items via UI.  
- **Roadmap Features:**  
  - View roadmaps in card format with instant upvote and detailed views including comments.  
- **Filter & Sort:**  
  - Filter by category/status, sort by upvotes or latest items.

## Technologies
- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Frontend:** React, Redux Toolkit, React Hook Form, Tailwind CSS  
- **Build Tool:** Vite  
- **Authentication:** JWT with HTTP-only cookies, bcrypt  