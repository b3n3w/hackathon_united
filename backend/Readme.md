Install locally: cd to backend directory: npm install

Set Environment variable "DB_URI" with complete mongoDB connection string
for mongoose.

Start Backend server: npm start


Docker way:
create a *.env file with DB_URI=<connectionString>
docker run -p 9000:9000 --env-file="C:\Users\Spielplatz\Documents\GitHub\hackathon_united\db.env" --name="backend" backend:latest
