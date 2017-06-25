/** express */

const express = require('express');
const graphqlHTTP = require('express-graphql');
const {graphql, buildSchema} = require('graphql');

const schema = buildSchema(`
  type Query {
    getUser(id:Int): User
  },
  type Mutation {
    createUser(id:Int,name: String) : UserStatus,
    updateUser(id:Int,name: String) : UserStatus,
    deleteUser(id:Int): UserStatus
  },
  type UserStatus {
    code: Int,
    user: User
  }
  type User {
    id: Int,
    name: String
  }
`);
const fakeDB = {
    'users': [{
        id: 1,
        name: 'alice',
    }, {
        id: 2,
        name: 'bob',
    }]
};

const root = {
    getUser: ({id}) => {
        console.log(id);
        if (id) {
            return fakeDB.users.find(x => x.id === id);
        }
        return null; // {id:-1, name:''};
    },
    createUser: ({id, name}) => {
        console.log(`id ${id}, name ${name}`);
        const newUser = {id, name};
        fakeDB.users.push(newUser);
        return {
            user: newUser,
            code: 200
        };
    },
    updateUser: ({id, name}) => {
        const userIndex = fakeDB.users.findIndex(x => x.id === id);
        if(userIndex > -1){
            fakeDB.users[userIndex].name = name;
            const newUser = {id: userIndex, name: name};
            return {
                user: newUser,
                code: 200
            };
        }
        return {
            user: null,
            code: 404
        };
    },
    deleteUser:({id})=>{
        const userIndex = fakeDB.users.findIndex(x => x.id === id);
        if(userIndex > -1){
            const user = fakeDB.users[userIndex];
            fakeDB.users.splice(userIndex, 1);
            return {
                user,
                code: 200
            };
        }
        return {
            user: null,
            code: 404
        };
    }
};

const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
/*
GET by id
{getUser(id:3){id,name}}

POST
mutation {createUser(id:3, name:"new Name"){code,user{id,name}}}

PUT
mutation{updateUser(id:3, name:"333"){code,user{id,name}}}

DELETE
mutation{deleteUser(id:3){code,user{id,name}}}
*/

app.listen(8082, () => console.log('Now browse to localhost:8082/graphql'));/**/
