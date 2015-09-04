# dm-debug
node debug helper

## Description
* started project --> look at the [todos](todo.md) to see what will be done

## Run
```
dmde [task]
dm-debug [task]
```

## Install

```
npm install dm-debug -g # for global use
npm install dm-debug --save # for programmatically use
```

## Tasks

### [test1](tasks/test1/index.js)
* 

#### test1 global usage
```
dmde [test1]
```

#### test1 programmatically usage
```javascript
var test1 = require("dm-debug").test1;
var test1Result = test1.start();
```

#### test1 steps

#### test1 features

#### test1 config
```javascript
{
    "test1": {
    }
}
```


## Config
* you can place a .dm-debug.json file in your home directory (~/.dm-debug.json)
* the following things are allowed at the moment
```javascript
{
}
```

## Lessons Learned
