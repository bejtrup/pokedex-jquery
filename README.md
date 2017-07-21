# jquery-pokedex

This is an example project demonstrating how to use Graphcool with jQuery. For more information, check out our [tutorial]().

## Creating the GraphQL backend

To run the app, you'll first have to create your own GraphQL backend. You can do so by going to our [console](https://console.graph.cool), creating a new project called `Pokedex` in the left sidebar and then add one model type called `Pokemon`. Finally, you only have to add one field `name` to the `Pokemon` type, that field has to be of type `String`.

Alternativaly, you can create the project using our [CLI](https://www.npmjs.com/package/graphcool), simply download or clone the project and then use `graphcool create` in the terminal:

```sh
git clone https://github.com/graphcool-examples/pokedex-jquery.git
cd pokedex-jquery
graphcool create Pokedex.schema
```

## Connecting the App with the GraphQL server

Once the project and the data model were created, you need to copy the API endpoint and set it as the value for the variable `graphQLEndpoint` in `graphql.js`.

![](http://i.imgur.com/EAwEZso.png)


## Running the App

In order to actually use the app, you have to run it on a web server. This can be done locally, e.g. using Python's [`SimpleHTTPServer`](https://docs.python.org/2/library/simplehttpserver.html). Simply navigate to the root directory of this repository in a terminal and start the server like so:

```sh
cd pokedex-jquery
python -m SimpleHTTPServer
```

## Help & Community [![Slack Status](https://slack.graph.cool/badge.svg)](https://slack.graph.cool)

Say hello in our [Slack](http://slack.graph.cool/) or visit the [Graphcool Forum](https://www.graph.cool/forum/) if you run into issues or have questions. We love talking to you!

![](http://i.imgur.com/5RHR6Ku.png)
