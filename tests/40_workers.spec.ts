

//workers: processes --> nodeJS
//sequence or parallel mode

//workers = 1 : sequence mode
//workers = greater than 1 or = 2 or 4 : parallel mode

//default worker count: depend on CPU core = 8/2 = 4

//cpu core = 1; w = 4 : sequence

//my CPU having 4 than I can use 4 workers if mentioned in the pwconfig file
//but by default it should used 4/2 = 2 workers only that's 50% of the CPU

//fullyparallel = true, w = 4
//total tcs = 82 (test case pool)
//all the files and their test cases also will start running in the parallel mode
//make sure that all the test cases are independent
//example
//tc1: order id = 123
//tc2: order id = 123

//fullparallel = false, w = 4
//w1 -- file 1 (10 tcs) --> 10 tcs will run in the sequential mode
//w2 -- file 2 (5 tcs) --> 5 tcs will run in the sequential mode
//w3 -- file 3 (7 tcs) --> 7 tcs will run in the sequential mode
//w4 -- file 4 (2 tcs) --> 2 tcs will run in the sequential mode


