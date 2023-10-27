### Api spec auth

kebutuhan :
1. login
2. register

### Task 1 ( satu )
## Endpoint : GET /login

Request body : 
```
{
    "email" : "your email",
    "password" : "123456"
}
```

Response body berhasil :
```
{
    "status": "success",
    "msg": "berhasil login",
    "token": "token"
}
```
Response body gagal :
```
{
    "status": "failed",
    "msg": "username atau password salah"
}
```

### Task 2 ( dua )
## Endpoint : GET /register

Request body : 
```
{
    "username" : "your username",
    "email" : "your email",
    "password" : "123456",
    "consfirm_password" : "123456"
}
```

Response body berhasil :
```
{
    "status": "success",
    "msg": "berhasil registrasi",
}
```
Response body gagal :
```
{
    "status": "failed",
    "msg": "registrasi gagal",
}
```