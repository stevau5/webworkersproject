# concurrency / web workers

check the HelloWorld.vue component, on line 47 in the doComplexComputation function, comment between the web worker and for loop to change the way the project works. When you run either version, click on the Perform complex calculation and immediately click on the other buttons that change the UI. If you're on the slow operation (for loop without web workers), you will realize that you cannot do anything after clicking perform complex calculation as the Main Thread is blocked by the intense calculation.. If you're on web workers, you'll be able to click all 3 buttons freely. 


## Project setup
```
npm install 
```

```
npm run serve
```

## performance without webworkers

![Screen Shot 2021-05-28 at 5 37 15 PM](https://user-images.githubusercontent.com/24571899/120229207-a0581f00-c21a-11eb-86aa-a37c97e1eaad.png)
