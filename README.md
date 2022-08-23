# Redux Demo

Demo steps:

1. Fix the `App.js` so that the counter functionality is working. Ignore logging in / out.
2. Add an initial state to `index.js`. Recommended: `{count: 0}`.
3. Create your first reducer function - these generally take in two arguments (state, action) and implement a switch.
   - Be sure to add your initial state as the default value of the state parameter in your reducer.
4. Use `createStore` to create your first store with your reducer as an argument.
5. Subscribe to the store and console log the state with `.getState()`.
6. Dispatch a handwritten action to the store.
7. Move all the redux pieces to the `store.js` folder, and import it into our index. Add a Provider so that we can use hooks.
8. Configure your `createStore` with the second argument which enables dev tools: `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`
9. Get a dispatch function in your `App.js` so you can dispatch actions from there.
10. Reconfigure your event handlers to dispatch action objects. Add in a payload property.
11. Write some action creators that return these objects to reduce human error. You'll probably want to make a fresh file for these.
12. Refactor your event handlers to use your action creators.
13. Access the count with `useSelector`.
14. Add in a skeleton of your login reducer function with just the base case, and then refactor your `createStore` to include a `combineReducers` - pass this function an object with your reducers.
15. Refactor your `useSelector` to deal with this more complicated version of state.

In Breakout Rooms:

Turn the log in / log out button into a toggle. You'll need to do all of the following, not necessarily in this order:

- Build out the loginReducer function with a switch.
- Build out the corresponding action creators. You'll need to import these into the App.
- Build out event handler functions for the onclick of the log in / log out buttons. You'll need to use the dispatch function inside of them.
- Make it so that the log out button only shows up when logged in, and vice versa. You'll need to access the loggedIn state with useSelector.

Extensions:

- Add in a "double" button. It should double the amount in state.
- Add in a text field where the user can add a variable number of points to the score.
- Add in a "reset" button which sets the count back to zero.
