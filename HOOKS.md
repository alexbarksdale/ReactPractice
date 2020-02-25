# Hook Functions

-   useState()

    -   Allow a functional component to use component-level state

-   useEffect()

    -   Allow a functional component to use "lifecycle methods"
    -   Its like componentDidMount and componentDidUpdate in one
    -   Cannot not use async or anything that returns a promise

-   useContext()

    -   Allow a functional component to use the context system

-   useRef()

    -   Allow a functional component to use the ref system

# useState under the hood

const [ currentValue, setCurrentValue ] = useState(initialValue)

-   currentvalue: Contains the present value of this piece of state

    -   This is like this.state.value

-   setCurrentValue: Function to call when we want to update our state

    -   This is like 'this.setState({ value: 'sample' })

-   initialValue: Starting value for this piece of state
