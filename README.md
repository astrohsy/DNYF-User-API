# DNYF User API Service
This is the User API Service for the Study Buddy webapp. This service will maintain user information and manage authentication/login.

# Installation
npm install    
npm run app.js

# Entrypoints

```
GET /users
Response
{
        "metadata":
        {
                "page": page_number,
                "per_page": per_page,
                "page_count": page_count,
                "total_count": total_count,
                "links": [
                        {"self": "/users?page=page_number&per_page=per_page"},
                        {"first": "/users?page=0&per_page=per_page"},
                        {"previous": "/users?page=prev_page&per_page=per_page"},
                        {"next": "/users?page=next_page&per_page=per_page"},
                        {"last": "/users?page=page_count&per_page=per_page"}
                ]
        },
        "records": [
                {
                        "uid": uid,
                        "first_name": first_name,
                        "last_name": last_name,
                        "affiliation": affiliation,
                        "uri": "/?users:uid"
                 }
        ]
        
}
```

```
POST /users
Response
{
        "metadata":
        {
                "page": page_number,
                "per_page": per_page,
                "page_count": page_count,
                "total_count": total_count,
                "links": [
                        {"self": "/users?page=page_number&per_page=per_page"},
                        {"first": "/users?page=0&per_page=per_page"},
                        {"previous": "/users?page=prev_page&per_page=per_page"},
                        {"next": "/users?page=next_page&per_page=per_page"},
                        {"last": "/users?page=page_count&per_page=per_page"}
                ]
        },
        "records": [
                {
                        "uid": uid,
                        "first_name": first_name,
                        "last_name": last_name,
                        "affiliation": affiliation,
                        "uri": "/?users:uid"
                 }
        ]
        
}
```

