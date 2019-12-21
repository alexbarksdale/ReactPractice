# Redux Cycle Insurance Company Analogy

-   Redux:
    -   [Action Creator] -> [Action] -> [Dispatch] -> [Reducers] -> [State]
-   Insurance:

    -   [Person dropping off the form] -> [the form] -> [form receiver] -> [departments] -> [compiled department data]

# Redux Cycle

-   Action Creator:
    -   Function that creates or returns a plain JS object (Action)
    -   Action:
        -   Has a TYPE property and PAYLOAD property
        -   TYPE: Describes a change that we want to make on the data
        -   PAYLOAD: Describes a context around the change we want to make
-   Dispatch (function):
    -   Takes in a Action makes copy of the object and passes it off to many places
-   Reducers (function):
    -   Takes in a action and some data, processes the data and returns to someplace
-   State:

    -   Central repository of all info created from the Reducers, allows React appowlto use data

-   To change the state of an app, we need to call the Action Creator
-   Anytime you want to call a action creator from a component, you pass it into the connect() function
