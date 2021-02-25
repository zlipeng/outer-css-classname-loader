# outer-css-classname-loader


## Install
```sh
npm i outer-css-classname-loader --save-dev
```
## Usage
In your webpack config:
```json
loader: 'css-loader!outer-css-classname-loader'
```


### Options

Provide options to the module as a query string or query object

```json
loader: 'css-loader!outer-css-classname-loader?id=root'
```
```js
loader: ['css-loader', {
  loader: 'outer-css-classname-loader',
  options: {
    id: 'root'
  }
}]
```

#### `id` (string) (default: 'root')

```js
export default <div className="root"></div>
```
