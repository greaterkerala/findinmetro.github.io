angular.module('todoApp', [])



  .service('root', function () {
    var root = new api.Leaf("Root");
    return root;
  })

  .controller('TodoListController', function (root, $timeout) {
    var todoList = this;

    todoList.arr = [];
    todoList.visible = false;
    todoList.ticks = 0;
    todoList.createRandomSet = function () {
      let isnegative = false;
      let currentSum = 0;
      let rnd = 0;
      if (todoList.arr.length % 2 === 0 && todoList.arr.length !==0) {
        isnegative = true;
        currentSum = todoList.sum();
        rnd = - (Math.floor(Math.random() * (currentSum - 0 + 1)) + 0);
      }else{
        rnd = Math.floor((Math.random() * 100) + 1);
      }
      console.log(todoList.arr.length + " - "+isnegative +" - "+rnd);

      return rnd;
    }
    todoList.timer;

    todoList.populateArr = function () {
      todoList.ticks = 0;
      todoList.arr = [];
      todoList.visible = false;
      for (var index = 0; index < 7; index++) {
        todoList.arr.push(todoList.createRandomSet());
      }
      if (todoList.timer) {
        $timeout.cancel(todoList.timer);
      }
      todoList.timer = $timeout(todoList.tick, 1000);
    }
    todoList.tick = function () {
      todoList.ticks += 1;
      console.log("Tick");
      todoList.timer = $timeout(todoList.tick, 1000);
    }
    todoList.results = [];

    todoList.sum = function () {
      let total = 0;
      for (var index = 0; index < todoList.arr.length; index++) {
        var item = todoList.arr[index];
        total += eval(item);
      }
      return total;

    };
    todoList.check = function () {
      todoList.total = 0;

      todoList.total = todoList.sum();

      todoList.visible = true;
      var result = {};
      result.result = "failed1";
      result.tick = todoList.ticks;

      console.log(todoList.calculatedValue + " - " + todoList.total);
      if (todoList.calculatedValue) {
        if (todoList.calculatedValue.toString() === todoList.total.toString()) {
          result.result = "SUCCESS";
        }
      }
      todoList.results.push(result)
      $timeout.cancel(todoList.timer);
    }

    todoList.nextProblem = function () {
      todoList.populateArr();
      todoList.calculatedValue = "";

    }
    todoList.nextProblem();

  });
