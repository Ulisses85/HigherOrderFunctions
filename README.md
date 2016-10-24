#Higher Order Fun

## Goals

1. Get completely comfortable with the concept of higher-order functions
in JavaScript (functions that receive other functions as arguments and/or
return other functions)
2. Continue to use TDD to arrive at your implementations
3. Prepare your minds for the many practical examples you'll see this pattern
in the libraries we'll be using in this course

## Tasks

1. Write an *identity* function that takes an argument
and returns that argument.
2. Write three binary functions, *add*, *sub* and *mul* that
take two numbers and return their sum, difference and product.
`add(3, 4) // 7`
`sub(3, 4) // -1`
`mul(3, 4) // 12`
3. Write a function *identityf* that takes an argument and
returns a function that returns that argument.
`var three = indentyf(3)`
`three() // 3`
4. Write a function *addf* that adds from two invocations
`addf(3)(4) // 7`
5. Write a function *liftf* that takes a binary function, and
makes it callable with two invocations.
`var addf = liftf(add);`
`addf(3)(4) // 7`
`liftf(mul)(5)(6) // 30`
6. Write a function *curry* that takes a binary function and an
argument, and returns a function that can take a second argument.
Bonus points if you can also implement it using *liftf*.
`var add3 = curry(add, 3)`
`add3(4) // 7`
`curry(mul, 5)(6) // 30`
7. Without writing any new functions, show 3 ways to create the *inc*
function.
`var inc = ___;`
`inc(5) // 6`
`inc(inc(5)) // 7`
8. Write a function *twice* that takes a binary function and returns
a unary function that passes its argument to the binary function twice.
`add(11, 11) // 22`
`var doubl = twice(add);`
`doubl(11) // 22`
`var square = twice(mul);`
`square(11) // 121`
9. Write *reverse*, a function that reverses the arguments of a binary function.
`var bus = reverse(sub);`
`bus(3, 2) // -1`
10. Write a function *composeu* that takes two unary functions and returns
a unary function that calls them both.
`composeu(doubl, square)(5) // 100`
11. Write a function *composeb* that takes two binary functions and returns
a function that calls them both.
`composeb(add, mul)(2, 3, 7) // 35`
12. Write a *limit* function that allows a binary function to be called a limited
number of times.
`var add_ltd = limit(add, 1);`
`add_ltd(3, 4) // 7`
`add_ltd(3, 5) // undefined`
13. Write a *from* function that produces a generator that will produce a 
series of values.
`var index = from(0);`
`index() // 0`
`index() // 1`
`index() // 2`
14. Write a *to* function that takes a generator and an end value,
and returns a generator that will produce numbers up to that limit.
`var index = to(from(1), 3);`
`index() // 1`
`index() // 2`
`index() // undefined`
15. Write a *fromTo* function that produces a generator that will produce
values in a range.
`var index = fromTo(0, 3);`
`index() // 0`
`index() // 1`
`index() // 2`
`index() // undefined`
16. Write an *element* function that takes an array and a generator and
returns a generator that will produce elements from the array.
`var ele = element(['a', 'b', 'c', 'd'], fromTo(1, 3));`
`ele() // 'b'`
`ele() // 'c'`
`ele() // undefined`
17. Modify the *element* function so that the generator argument is optional.
If a generator in not provided, then each of the elements of the array will
be produced.
`var ele = element(['a', 'b', 'c', 'd'])`
`ele() // 'a'`
`ele() // 'b'`
`ele() // 'c'`
`ele() // 'd'`
`ele() // undefined`
18. Write a *collect* function that takes a generator and an array and produces
a function that will collect the results in the array.
`var array = [];`
`var col = collect(fromTo(0, 2), array)`
`col() // 0`
`col() // 1`
`col() // undefined`
`array // [0, 1]`
19. Write a *filter* function that takes a generator and a predicate and 
produces a generator that produces only the values approved by the predicate.
`var fil = filter(fromTo(0, 5), function third(value) { return value % 3 === 0; })`
`fil() // 0`
`fil() // 3`
`fil() // undefined`
20. Write a *concat* function that takes two generators and produces a generator
that combines the sequences.
`var con = concat(fromTo(0, 3), fromTo(0, 2));`
`con() // 0`
`con() // 1`
`con() // 2`
`con() // 0`
`con() // 1`
`con() // undefined`
21. Make a function *gensymf* that makes a function that generates
unique symbols.
`var geng = gensymf("G");`
`var genh = gensymh("H");`
`geng() // "G1"`
`genh() // "H1"`
`geng() // "G2"`
`genh() // "H2"`
22. Write a function *gensymff* that takes a unary function and a seed
and returns a *gensymf*
`var gensymf = gensymff(inc, 0);`
`var geng = gensymf("G");`
`var genh = gensymf("H");`
`geng() // "G1"`
`genh() // "H1"`
`geng() // "G2"`
`genh() // "H2"`
22. Make a function *fibonaccif* that returns a generator that will return
the next fibonacci number.
`var fib = fibonaccif(0, 1);`
`fib() // 0`
`fib() // 1`
`fib() // 1`
`fib() // 2`
`fib() // 3`
`fib() // 5`
23. Write a *counter* function that returns an object containing two functions
that implement an up/down counter, hiding the counter.
`var object = counter(10);`
`var up = object.up;`
`var down = object.down;`
`up() // 11`
`down() // 10`
`up() // 9`
`down() // 10`
24. Write a *revocable* function that takes a binary function, and returns
an object containing an *invoke* function that can invoke the binary function,
and a *revoke* function that disables the *invoke* function.
`var rev = revokable(add);`
`var add_rev = rev.invoke;`
`add_rev(3, 4) // 7`
`rev.revoke();`
`add_rev(5, 7) // undefined`
 
## More difficult tasks

1. Implement *curry* so that it works with any number of arguments. *.call*
and *.apply* are your friends here. You'll also need to use *arguments*.
`function multiply5 (a, b, c, d, e) { return a * b * c * d * e }`
`curry(multiply5, 1, 2)(3, 4, 5) // 120`
`curry(multiply5, 1, 2, 3)(4, 5) // 120`
2. Wow, that was ugly. Using ES6 spread syntax, can you make it a lot more 
elegant.
3. Write *reverse* so using ES6 spread syntax and a very handy array method
(find it on MDN) such that it can take any number of arguments.
4. Write *composeu* such that it can take any number of unary functions

## A much more difficult task
1. Reimplement the *concat* function so that it will take any number of
generators

### Credits to Douglas Crockford
