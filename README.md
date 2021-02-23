# openpinner-client (A simple client to pin your files to undeletable internet)
This is the client app written in angular for openpinner - https://openpinner.mycryptowebs.com:4000/ <br>
for more details visit:https://mycryptowebs.com/

# Client On Server
https://github.com/arunwebber/openpinner-client.git

# working example on glitch (Time to compile might be little higher based on glitch server)

https://living-olivine-asp.glitch.me/


# Install angular

https://cli.angular.io/

# Starting the client
Pull down the repo to your local branch <br>
Then follow the commands <br>
`npm update`
`ng serve`

Visit `http://localhost4200`
 boom.. You are good to go

# Api Documentation
Get Request <br>
https://openpinner.mycryptowebs.com:4000/?page=1 (Page variable 10 results per page)<br>
response json

```
{
    "pins": [
        {
            "name": "e5f492ea-ed60-48a0-bc4c-35aa54eb9cf1",
            "about": "Some data",
            "hash": "QmSw5HJ8S99gusZm1s5ExDAQLEeJrBx1RteiBE8EYQ3PwT",
            "date": "2021-02-07T12:37:24.000Z"
        },
        {
            "name": "abafe4a4-e458-48a5-af55-081ea1b5cf4a",
            "about": "Some data",
            "hash": "QmYj9wueVtmPCeaHLJMZXNvtEAKmECJYPSwttSzaPqRyWf",
            "date": "2021-02-07T12:37:19.000Z"
        }, ....
}

```

Post request <br>
https://openpinner.mycryptowebs.com:4000/search?page=1 (Page variable 10 results per page) <br>

Post man screen shot<br>
![alt text](https://i.imgur.com/81htjr8.png)

response json <br>
```
{
    "results": [
        {
            "name": "c37bc3e0-45e5-44fd-a62d-341c76617f19",
            "about": "A title",
            "hash": "QmY7D7YhTLp6SR1ATXjVBxkx62WZmgoXAebqiBqAUQt2ds",
            "date": "2021-02-01T03:22:37.000Z"
        },
        {
            "name": "9567f02c-e0a6-41fb-9fa3-d80e09ed5ea2",
            "about": "A title",
            "hash": "QmUnWwVKqhe9x5yyeS15njyWzov3P8Bx2iDE3unyGvDiVt",
            "date": "2021-02-01T03:24:20.000Z"
        }
 }
 
 ```
 
 Post request <br>
 https://openpinner.mycryptowebs.com:4000/save <br>
 
 Post mon screen shot.
 ![alt text](https://i.imgur.com/K8pZ3vB.png)<br>
 
 response json <br>
 
 ```
  {
      "filename": "d8332b4b-1ba8-4268-a98c-8a01c7bd6350.html",
      "hash": "QmcjBw2re5vyFS5xxUwRHg9VCtGnKDwNyivpnQqkJe611N"
  }

```
