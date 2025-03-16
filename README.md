<h1>SmartSwach</h1>

<h2>Overview</h2>

SmartSwach is a community-driven platform that allows users to report waste management issues, track complaint resolutions, and explore green spaces in Mumbai. The project integrates machine learning, geospatial data analysis, and a web-based dashboard to ensure efficient waste management.

<h3>Features</h3>

<h2>1. User Page (Mobile App)</h2>

Users can register complaints regarding:

Garbage pile-ups

Clogged drains

Water shortages

USER login

Live geolocation capture while submitting complaints

Users can upload photos for better issue verification

Complaint status tracking (pending, resolved, in-progress)

<h2>2. Admin Page (Web Dashboard)</h2>

Sub-admin and main admin portals to process complaints

Real-time updates on complaints and their resolution status

Performance tracking (total complaints, pending issues, resolved cases)

<h2>3. Green Space Page</h2>

Interactive map visualization using Folium

Extracts land-use data from OpenStreetMap (OSM) to identify:

Parks

Forests

Recreational grounds

Identifies potential green spaces for conservation and development

Separate page for unidentified green spaces, which will be updated as data expands

Setup Instructions

<h2>Prerequisites</h2>

Python 3.8+

Node.js & npm (for frontend development)

PostgreSQL (for database storage)

Installation Steps

Clone the repository:

git clone https://github.com/Shivam007kumar/Smartswach.git
cd Smartswach

Install backend dependencies:

pip install -r requirements.txt

Install frontend dependencies:

cd frontend
npm install

Run the backend server:

python app.py

Run the frontend app:

npm start

Technologies Used

Backend: Flask, FastAPI

Frontend: React, Next.js

Database: PostgreSQL

Machine Learning: OpenCV, TensorFlow (for complaint filtering)

Geospatial Analysis: GeoPandas, Folium, Pyrosm (for green space visualization)

Contributors

<<<<<<< HEAD
Heramb Bahe - Lead Developer

Shivam Kumar - co Developer

Priyanshu Kannaujiya - ui/ux
=======
heramb bahe - Lead Developer

Shivam Kumar - co Developer

Priyanshu kannaujiya - ui/ux
>>>>>>> 639b261 (Initial commit)


License

This project is open-source under the MIT License.

Future Enhancements

AI-based complaint prioritization

Integration with BMC's official portal

Mobile notifications for updates on complaints

Expansion to other cities

<<<<<<< HEAD
Developed with ❤ for a cleaner and greener Mumbai 🌱
=======
Developed with ❤️ for a cleaner and greener Mumbai 🌱
>>>>>>> 639b261 (Initial commit)

# Smartswach
