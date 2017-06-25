
/** extra

 var { graphql, buildSchema } = require('graphql');

 var schema = buildSchema(`
 type Query {
    hello: String,
    me: User
  },
 type Mutation {
    setUser(name: String) : String
  },
 type User {
    id: ID,
    name: String
  }
 `);
 let fakeDb = {
    name:'none'
};

 var root = {
    hello: () => `Hello ${fakeDb.name}!`,
    me: {
        id:()=>1,
        name:()=>'asd'
    },
    setUser: (name)=>{
        fakeDb.name = name;
    }
};
 graphql(schema, '{ hello }', root).then((response) => {
    console.log(response);
});

 /**/

/** basic GET
 var schema = buildSchema(`
 type Query {
    hello: String,
    me: User
  },
 type User {
    id: ID,
    name: String
  }
 `);
 var root = {
    hello: () => 'Hello world!',
    me: {
        id:()=>1,
        name:()=>'asd'
    }
};

 graphql(schema, '{ me {name, id}, hello }', root).then((response) => {
    console.log(response);
});
 /**/

/** http://graphql.org/graphql-js/mutations-and-input-types/

 var express = require('express');
 var graphqlHTTP = require('express-graphql');
 var { buildSchema } = require('graphql');

 // Construct a schema, using GraphQL schema language
 var schema = buildSchema(`
 input MessageInput {
    content: String
    author: String
  }

 type Message {
    id: ID!
    content: String
    author: String
  }

 type Query {
    getMessage(id: ID!): Message
  }

 type Mutation {
    createMessage(input: MessageInput): Message
    updateMessage(id: ID!, input: MessageInput): Message
  }
 `);

 // If Message had any complex fields, we'd put them on this object.
 class Message {
    constructor(id, {content, author}) {
        this.id = id;
        this.content = content;
        this.author = author;
    }
}

 // Maps username to content
 var fakeDatabase = {};

 var root = {
    getMessage: function ({id}) {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id);
        }
        return new Message(id, fakeDatabase[id]);
    },
    createMessage: function ({input}) {
        // Create a random id for our "database".
        var id = require('crypto').randomBytes(10).toString('hex');

        fakeDatabase[id] = input;
        return new Message(id, input);
    },
    updateMessage: function ({id, input}) {
        if (!fakeDatabase[id]) {
            throw new Error('no message exists with id ' + id);
        }
        // This replaces all old data, but some apps might want partial update.
        fakeDatabase[id] = input;
        return new Message(id, input);
    },
}

 var app = express();
 app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
 app.listen(4000, () => {
    console.log('Running a GraphQL API server at localhost:4000/graphql');
});/**/

/** get with id

 var express = require('express');
 var graphqlHTTP = require('express-graphql');
 var { buildSchema } = require('graphql');

 var schema = buildSchema(`
 type User {
    id: String
    name: String
  }

 type Query {
    user(id: String): User
  }
 `);

 // Maps id to User object
 var fakeDatabase = {
    'a': {
        id: 'a',
        name: 'alice',
    },
    'b': {
        id: 'b',
        name: 'bob',
    },
};

 var root = {
    user: function ({id}) {
        return fakeDatabase[id];
    }
};

 var app = express();
 app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

 app.listen(4000);
 /**/