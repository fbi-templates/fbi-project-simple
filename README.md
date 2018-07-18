# fbi-project-simple
Simple web application.

> This is a fbi project template. If you haven't installed [fbi](https://github.com/AlloyTeam/fbi) yet, use the following command to install.
>
> `$ npm i -g fbi` or `yarn global add fbi`


## Requirements
- `fbi v3.0+`
- `node v7.6+`

## Examples
> [parcel examples](https://github.com/parcel-bundler/examples)
- no framework
- vue
- react
- preact
- hyperapp


## Usage

**Add the template**
```bash
$ fbi add https://github.com/fbi-templates/fbi-project-simple.git
```

**Create a project**
```bash
$ cd path/to/workspace
$ fbi init simple my-simple-project
```

**Show available tasks**
```bash
$ fbi ls
```

**Run a task**
```bash
$ fbi <task> [params]
```

**Run a example**

1. Initialize the options file: `$ fbi init -o`
1. Cases:
    1. **no framework**
        1. Change options.js=>parcel.entry -> [path.join(process.cwd(), 'src/index.html')] 
    1. **vue**
        1. `$ npm i vue vue-hot-reload-api`
        1. Change options.js=>parcel.entry -> [path.join(process.cwd(), 'src/**vue**/index.html')] 
    1. **react**
        1. `$ npm i react react-dom`
        1. Change options.js=>parcel.entry -> [path.join(process.cwd(), 'src/**react**/index.html')] 
    1. **preact**
        1. `$ npm i preact preact-compat`
        1. Change options.js=>parcel.entry -> [path.join(process.cwd(), 'src/**preact**/index.html')] 
    1. **hyperapp**
        1. `$ npm i hyperapp`
        1. Change options.js=>parcel.entry -> [path.join(process.cwd(), 'src/**hyperapp**/index.html')] 
1. Start development server: `$ fbi s`


## Tasks

### `serve`
- Description: Start development server.
- Params: none
- Alias: `s`
- Examples:
  - `$ fbi s`

### `build`
- Description: Build the project for the specified environment.
- Params: none
- Alias: `b`
- Examples:
  - `$ fbi b`

## Advanced
**How to change the build configuration?**
1. Initialize the options file to the project directory. 
```bash
$ cd path/to/my-simple-project
$ fbi init -o # or `--options`
```
2. The options file will be located at `fbi/options.js`, includes instructions. 

**How to change the build logic?**
1. Initialize options file and tasks to the project directory. 
```bash
$ cd path/to/my-simple-project
$ fbi init -t # or `--tasks`
```
2. Files will be located at `fbi` folder. Do what you want to do.

**Where is the build dependencies?**

Build dependencies are by default in fbi's store. You can use the following command to download to the project.

```bash
$ fbi init -a  # or `--all`
```
> Note: If local tasks or options exist, the original files will be backed up in `fbi-bak` folder.

## More
- [fbi](https://github.com/AlloyTeam/fbi)
- [fbi docs](https://neikvon.gitbooks.io/fbi/content/)
- [more templates](https://github.com/fbi-templates)

## License
[MIT](https://opensource.org/licenses/MIT)

## [Changelog](./CHANGELOG.md)


