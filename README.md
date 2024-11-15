# MicroserviceA

## Communication Contract
### REQUESTING DATA:
To request data, you can simply use a get requests in Postman where you call it by: 

`GET http://localhost:3000/stops/:stopNumber `

Or using a curl request in the terminal:

`curl http://localhost:3000/stops/:stopNumber`
Where `:stopNumber` is the chosen transit stop number.

In addition, Python requests and JavaScript Fetch functionalities work as well.


### RECEIVING DATA:
The API returns JSON data containing information about the requested transit stop. If there are no stops available, the api will simply return an object with a `stops` key, but no actual stops associated with it. 

Example:

`{"stops":{"attributes":{"base":"","query-time":"2024-11-15T14:41:30"},"stop":{"attributes":{"href":"stops/10046"},"key":10046,"name":"Northbound Cockburn at Rosedale","number":10046,"direction":"Northbound","side":"Farside","street":{"attributes":{"href":"streets/806"},"key":806,"name":"Cockburn Street","type":"Street","leg":"South"},"cross-street":{"attributes":{"href":"streets/3116"},"key":3116,"name":"Rosedale Avenue","type":"Avenue"},"centre":{"utm":{"attributes":{"zone":"14U"},"x":633562,"y":5524426},"geographic":{"latitude":"49.85735","longitude":"-97.14179"}}}}}`

Example with no stops:

`{"stops":{"attributes":{"base":"","query-time":"2024-11-15T14:42:12"}}}`

![image](https://github.com/user-attachments/assets/ca03686d-aa52-41d2-897d-c65bb5eb2eeb)
