# System

`system(1)` is a tiny wrapper around the `child_process` module. It uses `child_process.spawn(2)` to asynchronously run a shell command in a new process. It returns a `Promise` so that it can be `async/await`'d.

## Usage

```js
import system from '@timkendall/system'

system('docker build .')
  .then(() => console.log('Build done!'))
  .catch(() => console.error('Build failed'))
```

Or with `async/await`

```js
import system from '@timkendall/system'

async function main() {
  try {
    console.log('Starting Docker build...')
    await system('docker build .')
    console.log('Finished Docker build!')
  } catch(e) {
    /* Handle the exception */
  }
}

main().then(/* */).catch(/* */)
```
## Contributing

Open an issue or submit a PR.