# Intro

The goal of this sample to is get started with redux.

We will get as starting point an application that displays a list of github members that
belongs to an organization (in the starting excercise is hardcoded to _lemoncode_), and 
then add an input that will let the user change the organization name and query the 
members by clicking on the _load_ button.

# Excercise

- Start with the stating implementation that is located under the folder *00_start*.

- Let's install the needed dependencies.

```bash
npm install
```

- And start the application to check that everything is working as expected.

```bash
npm start
```

- If we check the current implementation we are getting a list of members belonging to lemoncode
organization, that's nice but we would like to let the user to be able to type the name of the 
orgnization he wants, hit ok and display the list of members for that organization.

- Some hints to develop this:
  - Follow a progressive approach.
  - First add to the memberRequestAction a param to inform the organization name (update the actionCreator signature, plus the container and component).
  - Create the input entry and place it side by side with the _load button_.
  - Create a local state to hold the name of the grouped to be loaded (you can transform MemberAreaComponent in to a class component, or
  use the new ).
  - Connect input with that local state.
  - Launch the action informing the param in the input.
  - Now we can move the local state from the component to redux.
    - Define a new action ID to update the filter.
    - Create an action creator that will return an action with the update filter ID plus the new filter.
    - Create a new reducer memberFilterReducer that will hold the filter string.
    - Add the new reducer to the combinereducers area.
    - Create the updateFilterCallback plus filter property in the memberComponent area.
    - Update the redux _connect_ entry in the container.

# Optional items

If you want to play more with React here you have some proposals to enhance this excercise:

- Add material ui support, display data in cards or a table.
- Add paging (you will need to update UI, plus client rest api).
- Click on a given member and navigate to a details page where you can read the details of that member (you will need to find out the github api endpoint to retrieve that info).

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
