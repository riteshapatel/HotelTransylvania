/**
 * Hotel Transylvania App built with React Native, Apollo, GraphQL, Prisma
 * @author ritesh.patel
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './src/components/Home';
import HotelsList from './src/components/HotelsList';
import ViewReservation from './src/components/ViewReservation';
import NewReservation from './src/components/NewReservation';
import {defaults, resolvers} from './src/graphql/resolvers/resolvers';

/** stack navigator */
const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Hotels: {screen: HotelsList},
  Add: {screen: NewReservation},
  View: {screen: ViewReservation}
});

/** apollo client with local state */
const client = new ApolloClient({
  uri: "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev",
  clientState: {
    defaults,
    resolvers
  }
});

/** app container */
const AppContainer = createAppContainer(MainNavigator);

/** default app class */
export default class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <AppContainer />
      </ApolloProvider>
    )
  }
}