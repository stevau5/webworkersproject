# concurrency / web workers

check the HelloWorld.vue component, on line 47 in the doComplexComputation function, comment between the web worker and for loop to change the way the project works. When you run either version, click on the Perform complex calculation and immediately click on the other buttons. If you're on the slow operation, you will realize that you cannot do anything after clicking perform complex calculation. If you're on web workers, you'll be able to do it. Enjoy. 


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
