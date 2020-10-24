Install locally: cd to backend directory: npm install

Set Environment variable "DB_URI" with complete mongoDB connection string
for mongoose.

Start Backend server: npm start


Docker way:
create a *.env file with DB_URI=<connectionString>
docker run -p 9000:9000 --env-file="env_file_dir_and_name" backend:latest
