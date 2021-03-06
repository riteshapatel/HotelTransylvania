### Hotel Transylvania
*By: Ritesh Patel*

*02/24/2019*

---

**Description**

Yes, it was immensely joyful to build this small React Native App. I absolutely loved it. Stumbled a bit in places but managed to get myself back up :). App is implemented using,

1) React Native
2) GraphQL
3) Apollo-Client


**State Management**

Ah! With your eyes closed you said `Redux`, right? Well sorry to disappoint you `young padawan`...I am using `Apollo client's local state management instead`. Cool stuff! Redux is great as well. And so is Vuex! Are `Redux and Vuex` twins? May be...

**Unit Testing**

`Jest` at rescue. I have all components passing `jest test`, but running into some issues with `Reservation query` as well as testing the `App.js`. Would love to fix it, but running out of options / time. It's weird, I have exact same setup for `Reservations query` which doesn't throw any warnings. I'd love to hear if anyone has ideas on what could be wrong. 

![Test Results](screenshots/results.png "Test Results")

Rest seems to be ok. 

**Data**

`graphql backend` I have used is public and seem to be quite polluted with inconsistent data. Therefore, I have added `filter` to my query and am pulling only data that belongs to me: `Ritesh`.

**Local State Management**

Yes, I know you can do quite a bit with `local state management`. This app shows how to display `last reservation made` and `which hotel`. It uses `client side queries and mutations`.

**Sample Queries / Mutation**

Here are sample `queries and mutations` I have used with the `client`. Nothing crazy, simple stuff.

```
# get all reservations for myself
query {
  reservations (where: {
    name: "Ritesh"
  }){
    name 
    hotelName 
    arrivalDate 
    departureDate 
  }
}

# delete a reservation
mutation {
  deleteReservation (where: {
    id: "cjsin721x1z2v0b86g2fte1v3"
  }){
    id
    name 
    hotelName 
    arrivalDate 
    departureDate 
  }
}


# add a reservation
mutation {
  createReservation(
    data: {
      name: "Ritesh",
      hotelName: "Hilton",
      arrivalDate: "02/22/2019",
      departureDate: "02/28/2019"
    }
  ){
    name,
    hotelName,
    arrivalDate,
    departureDate
  }
}
```

**App Screenshots**

*Landing Screen*

![Transylvania Home](screenshots/landing.png "Transylvania Home")

*Coffin Listing*

![Coffin Listing](screenshots/list.png "Coffin Listing")

*Add Coffin*

![Add Coffin](screenshots/add.png "Add Coffin")


*View Coffin*

![View Coffin](screenshots/view.png "View Coffin")

*Missing Nails*

![Nail 1](screenshots/invalid_values.png "Nail 1")

![Nail 2](screenshots/invalid_dates.png "Nail 2")


**Questions / Comments**

I truly enjoy `hands on` work. Built this app over this past weekend. Definitely put some hours in, but well worth it. 

Gimme a holler if you have any questions.

Cheers!

Ritesh



