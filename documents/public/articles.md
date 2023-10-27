### Api public Articles

kebutuhan :
1. menampilkan artikel di halaman utama blog
2. menampilkan artikel sesuai id atau yang sedang di lihat

### Task 1 ( satu )
## Endpoint : GET /post

Request body : none

Response body berhasil :
```
{
    "message" : "success",
    "status_code": 200,
    "result" : [
        {
            "id" : 1,
            "title" : "judul post",
            "description" : "description bla bla",
            "image" : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            "category" : "sport",
            "content" : "body post",
            "created_at" : "243123453",
            "updated_at" : "354546564",
            "id_user" : 1
        },
        {
            "id" : 2,
            "title" : "judul post 2",
            "description" : "description bla bla",
            "image" : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            "category" : "healt",
            "content" : "body post",
            "created_at" : "243123453",
            "updated_at" : "354546564",
            "id_user" : 1
        },
        ...
    ]
}
```

Response body gagal : 
```
{
    "message" : "Not found",
    "status_code": 404,
}
```


### Task 2 ( dua )
## Endpoint : GET /post/:id

Request body : none

Request Query Params : id

Response body berhasil :
```
{
    "message" : "success",
    "status_code": 200,
    "result" :
        {
            "id" : 1,
            "title" : "judul post",
            "description" : "description bla bla",
            "category" : "sport",
            "content" : "body post",
            "created_at" : "243123453",
            "updated_at" : "354546564",
            "id_user" : 1
        }
}
```

Response body gagal : 
```
{
    "message" : "Not found",
    "status_code": 404,
}
```