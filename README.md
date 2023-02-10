## Set up steps

1. `npm i botframework-streaming@next`
1. `rm -r node_modules/botframework-directlinejs/node_modules`
   - On Windows: `RD /S node_modules\botframework-directlinejs\node_modules`
1. Verify that:
   - `node_modules/botframework-streaming/package.json` say version is `4.20.0-dev.*`
   - `node_modules/botframework-directlinejs/` has no subdirectory named `node_modules`

## Run

`node .` and it should display:

```
Connection status: 0
Connection status: 1
Connection status: 2
Activity: Hello and welcome!
```

This is good.
