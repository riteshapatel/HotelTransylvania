/**
 * apollo client resolvers
 * @author ritesh.patel
 */
export const defaults = {
    lastReservationMadeAt: 'None',
    lastReserved: ''
}

/** mutates local state  */
export const resolvers = {
    Mutation: {
        updateTransactionTime: (_, { hotelName }, { cache, getCacheKey }) => {
          const today = new Date();
          const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
          const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
          
          const datetime = date + ' ' + time;   
          cache.writeData({ data: { lastReservationMadeAt: datetime, lastReserved: hotelName }});
          return null;   
        }
    }    
}
