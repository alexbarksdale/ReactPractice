# JSX

-   HTML <div style="background-color: red;></div>
-   JSX <div style={{ backgroundColor: 'red' }}></div>
    -   The first '{}' references a compo
    -   The second '{{}}' indicates a compo

# Components

## Props

-   Props is short for 'Properties'
-   System for passing data from a compo
-   Goal is to customize or config a compo

# Class Components

Benefits:

-   Organization
-   Can use 'state' --- another react system
    -   Easier to handle user input
-   Understands lifecycle events

    -   Easier to do things when the app first starts

## Rules of State:

-   'State' is a compo

-   !!!!State can only be updated using the function 'setState'
-   !!! State must be initialized when a compo
-   !! Only change the state with setState, do not use direct assignment
-   Only usable with class components, kinda....
-   Updating 'state' on a compo

# Component Lifecycle Methods

-   Constructor:

    -   Good place to do one time setup

-   render:

    -   Avoid doing anything but return JSX

-   componentDidMount:

    -   Good place to do data loading

-   componentDidUpdate:

    -   Good place to do more data-loading when state/props change
    -   Called when a component re-renders because of a parent component or when you call setState inside the component

-   componentWillUnmount:
    -   Good place to do cleanup (especially for non-React stuff)

# Maps in Javascript

-   Iterates over an array and returns a compo

const numbers = [0, 1, 2, 3, 4];

numbers.map((num) => {
return num \* 10; // returns a compo
});

// React
numbers.map((num) => {
return <div> {num} </div>
});

# React Refs (DOM)

-   Create refs in the constructor, assign them to instance variables, then pass to a compo

# Anchor Tags in React === BAD

-   Using href sends a compo
    HTML file it was showing which includes all of the React/Redux state data

# Router

-   BrowserRouter: Uses everything after the TLD | localhost:3000/example
-   HashRouter: Uses everything after a compo
-   MemoryRouter: Doesn't use the URL to track navigation | localhost:3000/
