# JSX

HTML <div style="background-color: red;></div>
JSX <div style={{ backgroundColor: 'red' }}></div>
∆ The first '{}' references a javascript variables inside JSX
∆ The second '{{}}' indicates a javascript obj.

# Components

## Props

- Props is short for 'Properties'
- System for passing data from a parent component to a child component
- Goal is to customize or config a child component

# Class Components

Benefits:

- Organization
- Can use 'state' --- another react system
  - Easier to handle user input
- Understands lifecycle events

  - Easier to do things when the app first starts

## Rules of State:

- !!!!State can only be updated using the function 'setState'
- !! State must be initialized when a component is created
- Only usable with class components, kinda....
- 'State' is a JS object that contains data relevant to a component
- Updating 'state' on a component causes the component to (almost) instantly rerender
