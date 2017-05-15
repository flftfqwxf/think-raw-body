# think-raw-body

raw body middleware for ThinkJS 2.2.12,
you can get `text/plain(raw)` type data,when you used 'this.post()' in controller.

## Install

```
npm install think-raw-body --save
```

## How to use

### register middleware 

create file if not exist, `src/common/bootstrap/middleware.js`.

```js
import rawBody from 'think-raw-body';
think.middleware('raw_body', rawBody);
```

### config hook

create file if not exist, `src/common/config/hook.js`.

```js
export default {
    payload_parse: ['prepend', 'raw_body']
}
```

## LICENSE

MIT