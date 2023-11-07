## Development environment

In order to run application use:
      `docker-compose up`

------------------------------------------------------------------------------------------
## RESTAPI Docs
## Helper collection [/helper]
Helper functionalities

<details>
 <summary>
      <code>POST</code> <code><b>/feedDB</b></code> 
      <code>(reads the seeds.xlsx file and feeds the users and messages tables in the database with data)</code>
</summary>

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"messages": "Messages created", "users": "Users created"}`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/helper/feedDB
> 

</details>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<details>
 <summary>
      <code>POST</code> <code><b>/dropDB</b></code> 
      <code>(Drop the tabled in the database)</code>
</summary>

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"description": "DROP OK"}`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/helper/dropDB
> 

</details>

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


## User collection [/user]
User resources

<details>
 <summary>
      <code>GET</code> <code><b>/{username}</b></code> 
      <code>(retrieves user by username)</code>
</summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | username      |  required | string   | username of user  |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{"id": 1, "firstname": "Marios", "lastname": "Pats", "username": "marios", "gender": "Male", "birthday": "2000-01-01"}`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/user/marios
> 

</details>

----------------------------------------------------------------------------------------------------------

<details>
 <summary>
      <code>GET</code> <code><b>/{id}/user-conversations</b></code> 
      <code>(retrieves the conversations user has exchanged)</code>
</summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  required |    | id of user |

##### Query params

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | fields      |  optional | string seperated with comma(,)   | fields of message object  |
>| limit      |  optional | boolean true/false   | limit the request to only include one message |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `[]UserModel`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/user/1/user-conversations?fields=seen,content&limit=true
>

</details>

--------------------------------------------------------------------------------------------------------------

<details>
 <summary>
      <code>POST</code> <code><b>/</b></code> 
      <code>(Create new user)</code>
</summary>

##### Request body (json)

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | firstname   |  required | string | Firstname  |
> | lastname   |  required | string | Lastname  |
> | username   |  required | string | Username  |
> | gender   |  optional | enum(N/A, Male, Female) (default N/A) | Gender  |
> | birthday   |  required | date format (yyyy-mm-dd) | Birthday  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `application/json`        | `{}UserModel`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/user
> ```javascript
>{ firstname: "Marios", lastname: "Pats", username: "marios", birthday: "2000-01-01", gender: "Male"}
>```

</details>

--------------------------------------------------------------------------------------------------------------

<details>
 <summary>
      <code>POST</code> <code><b>/search</b></code> 
      <code>(Search user by user criteria)</code>
</summary>

##### Request body (json)

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | firstname   |  optional | string | Firstname to search  |
> | lastname   |  optional | string | Lastname to search  |
> | username   |  optional | string | Username to search  |
> | gender   |  optional | enum(N/A, Male, Female) (default N/A) | Gender  |
> | birthday   |  optional | date format (yyyy-mm-dd) | Birthday  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `[]UserModel`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/user
> ```javascript
>{ firstname: "Marios", lastname: "Pats"}
>```

</details>

--------------------------------------------------------------------------------------------------------------


## Message collection [/message]
Message resources

<details>
 <summary>
      <code>POST</code> <code><b>/</b></code> 
      <code>(crete a new message)</code>
</summary>

##### Request body (json)

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | content   |  required | string | Message content  |
> | sender   |  required | number | user id of the sender  |
> | receiver   |  required | number | user id of the receiver  |
> | seen   |  optional default(false) | boolean | if the message is seen  |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `application/json`        | `{}MessageModel`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/message
> ```javascript
>{ content: "New message", sender: 1, receiver: 2, seen: false }
>```

</details>

----------------------------------------------------------------------------------------------------------

<details>
 <summary>
      <code>PATCH</code> <code><b>/{id}</b></code> 
      <code>(updates message)</code>
</summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | id      |  required |    | id of message |

##### Request body (json)

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | content   |  optional | string | Message content  |
> | sender   |  optional | number | user id of the sender  |
> | receiver   |  optional | number | user id of the receiver  |
 | seen   |  optional | boolean | if the message is seen  |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `{}MessageModel`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/message/1
> ```javascript
>{ content: "New message", sender: 1, receiver: 2 }
>```

</details>


----------------------------------------------------------------------------------------------------------

<details>
 <summary>
      <code>POST</code> <code><b>/search</b></code> 
      <code>(search messages based on search criteria)</code>
</summary>

##### Request body (json)

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
>| id   |  optional | number | id of message  |
> | content   |  optional | string | Message content  |
> | sender   |  optional | number | user id of the sender  |
> | receiver   |  optional | number | user id of the receiver  |
> | seen   |  optional | boolean | if the message is seen  |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `[]MessageModel`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/message/search
> ```javascript
>{ content: "New message" }
>```

</details>

--------------------------------------------------------------------------------------------------------------

<details>
 <summary>
      <code>GET</code> <code><b>/conversation/{ids}</b></code> 
      <code>(Retrieves the conversation exchanged between two users sorted by the most recent message sent)</code>
</summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | ids      |  required |  string (seperate(,))  | user ids seperated with comma |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `[]MessageModel`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/message/conversation/1,2
>

</details>

--------------------------------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------------------------------

<details>
 <summary>
      <code>GET</code> <code><b>/conversation/{ids}/mark-as-read</b></code> 
      <code>(Mark the sender's messages as read)</code>
</summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | ids      |  required |  string (seperate(,))  | message ids (id1: receiver,id2: sender) seperated with comma |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `application/json`        | `[]Number`                                |
> | `400`         | `application/json`                | `{"error": "Error message"}`                            |

##### Example

> 
>  http://localhost:3000/conversation/1,2/mark-as-read
>

</details>

--------------------------------------------------------------------------------------------------------------