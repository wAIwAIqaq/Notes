## 进程与线程

`shift`+ `ESC`可以打开Chrome的任务管理器窗口

![image-20220507220600214](C:/Users/DELL/AppData/Roaming/Typora/typora-user-images/image-20220507220600214.png)

和Windows的任务管理器一样，Chrome任务管理器也是用来展示运行中的Chrome使用的进程信息的。

从图中可以看到Chomre启动了很多个进程，为什么要启动这么多进程呢？

在解答这个问题之前我们需要了解一下进程的概念。

#### 进程与线程

再介绍进程与线程之前，我们需要先讲解一下什么是并行处理，因为如果你理解了并行处理的概念，name再理解进程和线程之间的关系就会变得轻松许多。

#### 什么是并行处理

计算机ongoing的并行处理就是同一时刻处理多个任务，比如我们要计算下面三个表达式的值，并显示出结果。

```
A = 1 + 2;
B = 20/5;
C = 7*8;
```

在编写任务的时候，我们可以把这个过程拆分成四个任务：

- **任务1** 计算A = 1 + 2;
- **任务2** 计算B = 20 / 5;
- **任务3** 计算C =  7 * 8;
- **任务4** 显示最后计算的结果；

正常情况程序可以使用**单线程**来处理，也就是分四步按照顺序分别执行这四个任务。

如果采用**多线程**，会怎么样呢？我们只需要分两步走：

- **STEP1**使用三个线程同时执行前三个任务；
- **STEP2**再执行第四个显示任务；

通过对比分析，你会发现使用单线程执行需要四步，而是用多线程只需要两步。因此，**使用并行处理能大大提升性能。**

#### 进程VS线程

多线程可以并行处理任务，但是**线程是不能单独存在的，它是由进程来启动管理的**，那么什么又是进程呢？

**一个进程就是一个程序的运行实例**.详细解释就是，启动一个程序的时候，操作系统会为该程序创建一块内存，用来存放代码、运行中的数据和一个执行任务的主线程，我们把这样的一个运行环境叫做进程：

![image-20220507222754622](C:/Users/DELL/AppData/Roaming/Typora/typora-user-images/image-20220507222754622.png)

从图中可以看到，**线程是依附于进程的，而进程中使用多线程并行处理能提升运算效率**

1. **进程中的任一线程执行出错，都会导致整个进程的崩溃。**比如任务2为 `B =20/0`，由于分母为0，线程会执行出错，这样就会导致整个进程的崩溃，当然另外两个线程执行的结果也没有了。 

2. **线程之间共享进程中的数据**从下图可以看出，线程1、线程2、线程3分别把执行的结果写入A、B、C中，然后线程2继续从A、B、C中读取数据，用来显示执行结果。![image-20220507223222184](C:/Users/DELL/AppData/Roaming/Typora/typora-user-images/image-20220507223222184.png)

3. **当一个进程关闭之后，操作系统会回收进程所占用的内存**

   当一个进程退出时，操作系统会回收该进程所申请的所有资源；即使其中任意线程因为操作不当导致内存泄漏，当进程退出时，这些内存也能被正确回收。比如之前IE浏览器，支持很多插件，而这些插件很容易导致内存泄漏，这意味着只要浏览器开着，内存占用就可以能越来越多，但是当关闭浏览器进程时，这些内存就都会系统回收掉。

4. **进程之间的内容相互隔离** 进程隔离是为了保护操作系统中进程互不干扰的技术，每一个进程只能访问自己占有的数据集，也就避免A进程的数据写入B进程的情况，正是由于进程隔离，当一个进程崩溃或者挂起是不会影响到其他进程的。如果进程间需要数据的通信，这时候就需要使用用于进程通信（IPC）的机制了。

   

#### 单进程浏览器时代

在了解了进程和线程之后，我们再来一起看下单进程浏览器的架构。顾名思义，**单进程浏览器时指浏览器的所有功能模块都是运行在同一个进程里**，这些模块包含了网络、插件、JavaScript运行环境，渲染引擎和页面等。其实在07年之前，市面上浏览器都是单进程的。

