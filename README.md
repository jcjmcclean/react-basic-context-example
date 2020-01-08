# React basic context API example
Very basic example showing usage of React's context API.

The context API allows you to share data between components without worrying about [prop drilling](https://kentcdodds.com/blog/prop-drilling). The context API react docs can be found here: https://reactjs.org/docs/context.html

![Component props](https://i.imgflip.com/3fbhj9.jpg)

See [this codesandbox](https://codesandbox.io/s/github/jcjmcclean/react-basic-context-example/tree/master/) for an example of the context api in use. You can see context being created and set in `src/auth/auth.context.tsx` and you can see how it's used and output in `src/index.tsx`.

At it's most basic, the context API is super simples:

To create a new context:
```ts
const ChantContext = React.createContext('wololo');
```

To use/access an existing context (anywhere in your app - will require imports):
```ts
const chantContext = React.useContext(ChantContext);
```
