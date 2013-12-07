Meanp-Seed
==========

This application builds off the many mean-seed example applications by incorporating a client and server side authentication strategy.

M - MongoDB
E - ExpressJS - Server side application framework
A - AngularJS - Client side application framework
N - Node - Package manager
P - PassportJS - Authentication framework

Running The Application
-----------------------

Install these:
* Node
* Mongo

Install client dependencies:

```
cd client

npm install

bower install
```

Install server dependencies:

```
cd server

npm install
```

Start server:

`node server.js DEV`

Navigate to home screen:
http://localhost:3000


Client Side Authentication
--------------------------

Client Side Authentication (CSA) is managed using a pattern inspired by the [angular-client-side-auth](https://github.com/fnakstad/angular-client-side-auth) repository.  The short description of the CSA pattern is:

1) Add access role to your routes:

```
 $routeProvider.when('/',
        {
            templateUrl:    'home',
            controller:     'HomeCtrl',
            access:         access.user
        });
```

2) Create a [security service](https://github.com/thinkjones/meanp-seed/blob/master/client/src/scripts/security/security.js)

3) Check security of routes as they are about to change ([app.js](https://github.com/thinkjones/meanp-seed/blob/master/client/src/scripts/app.js)):

```
angular.module('app').run(['$rootScope','$location','security', function($rootScope, $location, security) {
    // Get the current user when the application starts
    // (in case they are still logged in from a previous session)
    security.requestCurrentUser();

    $rootScope.$on("$routeChangeStart", function (event, next, current) {
        if (!security.authorize(next.access)) {
            $location.path('/');
        }
    });

}]);
```



## License
```
The MIT License (MIT)

Copyright (c) 2013 Gene Conroy-Jones

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```


