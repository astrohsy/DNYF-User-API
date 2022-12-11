# DNYF User API Service
This is the User API Service for the Study Buddy webapp. This service will maintain user information and manage authentication/login.

# Installation
## Testing Environment Set-up
```
docker-compose build
docker-compose up
```
## Testing Environment Tear-down
```
docker-compose down
docker-compose down --volumes
```
## Testing API endpoints
1. Download Postman https://www.postman.com
2. Utilize GET, POST, PUT, DELETE according to specs below
	- Use "Params" and "Body" options where applicaple
	- For the "Body" tab, make sure you're using JSON
3. Validate Response section
## Build/Run Individually
```
docker build . -t dnyf-user-api
```
```
docker run -d -p 4103:4103 --name dnyf-user-api \
        -e DB_HOST='<DB host url>' \
        -e DB_USER='<DB username>' \
        -e DB_PASS='<DB password>' \
        -e DB='<DB name>' \
        dnyf-user-api
```

# API calls
Fetch list of all users:
```
GET /users
	Parameters:
		page_number, page_count
	Example call:
		/users?page_number=0&page_count=1
	Response body:
		{
			{
				"total": integer,
				"records": {
					"uid": "string",
					"first_name": "string",
					"last_name": "string"
				},
				"total_pages": integer,
				"current_page": integer
			}       
		}
```

Create new user:
```
POST /users
	Request Body:
		{
			"uid": "string",
			"first_name": "string",
			"last_name": "string"
		}
```

Get specified user:
'''
GET /users/{uid}
	Parameters:
		"uid": "string"
	Response body:
		{
			"uid": "string",
			"first_name": "string",
			"last_name": "string"
		}
```

Delete users
```
DELETE /users/{uid}
	Parameters:
		"uid": "string"
```

Update users
```
PUT /users/{uid}
	Parameters:
		"uid": "string"
	Response body:
		{
			"first_name": "string",
			"last_name": "string"
		}
```