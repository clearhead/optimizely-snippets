# optimizely-snippets [![Circle CI](https://circleci.com/gh/clearhead/optimizely-snippets/tree/master.svg?style=svg)](https://circleci.com/gh/clearhead/optimizely-snippets/tree/master)

Merge of two previously separate repos

project-javascripts
===================

A collection of clearhead.me snippets that can be used in an optimizely project's [Project Javascript](https://community.optimizely.com/t5/Product-What-s-New/A-new-feature-to-help-you-run-advanced-experiments-faster/ba-p/8739) configuration.

## Logger.js

A helpful logging tool for debugging and goals. Activate by adding `?clearhead-debug` to any url on your site. Deacticate with `?clearhead-debug=false`

![Logger Js](http://i.imgur.com/JkhJOih.gif)

## scroll-quarters.js

Tracks which quarter of the page the visitor scrolled to.


clearhead-snippets
==================

Helper functions not found in optimizely's api. Paste needed code in your experiment's global js. Supports IE9+.

## Cookies ##

```javascript
// clearhead.setCookie(name, value, optDays)
clearhead.setCookie('foo', 'bar', 100)

// clearhead.getCookie(name)
clearhead.getCookie('foo') // bar
```

## Get Param

```javascript
// clearhead.getParam(key)
clearhead.getParam('foo') === 'bar'; // ?foo=bar
```

## Load Script w/ Callback ##

```javascript
// clearhead.loadScript(url, callback)
clearhead.loadScript('//cdnjs.cloudflare.com/ajax/libs/d3/3.4.8/d3.min.js', function () {
	console.log(d3.version) // 3.4.8
});
```

## License ##

> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
>
>      http://www.apache.org/licenses/LICENSE-2.0
>
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.
