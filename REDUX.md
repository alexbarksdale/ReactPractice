# Redux Cycle Insurance Company Analogy

-   Redux:

    -   [Action Creator] -> [Action] -> [Dispatch] -> [Reducers] -> [State]

-   Insurance analogy:

    -   [Person dropping off the form] -> [the form] -> [form receiver] -> [departments] -> [compiled department data]

# Redux Cycle

-   Action Creator:
    -   Function that creates or returns a plain JS object (Action)
    -   MUST return plain JS objects with a type property
    -   Action:
        -   Has a TYPE property and PAYLOAD property
        -   TYPE: Describes a change that we want to make on the data
        -   PAYLOAD: Describes a context around the change we want to make
-   Dispatch (function):
    -   Takes in a Action makes copy of the object and passes it off to many places
-   Reducers (function):
    -   Takes in a action and some data, processes the data and returns to someplace
    -   Rules:
        -   Must return any values besides 'undefined'
        -   Do not reach out of the reducer
        -   Don't mutate the state argument
-   State:

    -   Central repository of all info created from the Reducers, allows React to use data

-   To change the state of an app, we need to call the Action Creator
-   Anytime you want to call a action creator from a component, you pass it into the connect() function

# Redux Thunk

-   Middleware to help us make requests in a redux application
-   RULES:
    -   Action Creators can return action objects or return functions
    -   If an action oobj gets returned, it must have a type
    -   If an action obj gets returned, it can optionally have a 'payload'
-   When you call an Action Creator within an Action Creator you need to dispatch the result of the action creator

# Synchronous action creator

-   Instantly returns an action with data ready to go

# Asynchronous action creator

-   Takes some time for it to get its data ready to go

# MISC

-   'ownProps' in mapStateToProps is a reference to the props that will be passed into the component

# Hooks with Redux

-   useSelector() is like mapStateToProps
-   useDispatch() is like mapDispatchToProps
