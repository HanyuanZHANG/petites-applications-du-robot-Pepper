TiKi Client API for Web
=======================

This library provides an acces to the robot API through websockets.

## Install

#### Clone

Clone the repository where you want

```shell
git clone git@git.event-bots.com:eb/tiki-client-web.git
```

#### Requirements (manual install)

You have to link those js libraries  before loading the client.

- jQuery
- socket.io (included in package)
- lodash custom (included in package)

## Generate custom version of lodash

```shell
lodash include=sample,pick,difference,defaultsDeep,debounce,throttle,isArray,isString,isFunction,isObject,sortBy,map --development --output libs/lodash.custom.js
```

## Usage

Here is the common way to create an API object. 

You can either load them through SysytemJS, amd...

```javascript
<script src="/components/tiki-client-web/dist/tiki-client-web+socketio.min.js"></script>
<script type="text/javascript">

    // Create an instance for tiki
    window.tiki = new Tiki({
        socketUrl: 'http://tiki005.local:9000'
    });

    // Wait for ready event
    tiki.ready(function() {

        // Welcome message
        console.log('Connected to : '+tiki.opts.socketUrl+' !')

        // Speak example
        tiki.speak({
            txt: 'Hello world !',
            volume: 90,
            lang: "fr-fr-mathieu-male",
            speed: "fast"
        }, function(err, obj) {
            console.log('said :', obj)
        });

        // Call a posture
        tiki.posture({
            name: 'show-left',
            speed: 'fast'
        }, function(err, obj) {
            console.log('Posture moving to :', obj)
        });

        // Animate face
        tiki.face({
            name: 'eye'
        }, function(err, obj) {
            console.log('Set face to :', obj)
        });

        // Emit a raw event
        tiki.emitEvent('service:speech:say', {
            txt: 'Hello world !'
        });

        // Move face top after 1000ms
        setTimeout(function() {
            tiki.move([
                {
                    name: 'face.elevation',     // Name of the actuator
                    progress: 100,              // 0 -100
                    speed: 'fast'               // Move speed
                },
                {
                    name: 'face.rotation',     // Name of the actuator
                    progress: 80,              // 0 -100
                    speed: 'fast'               // Move speed
                }
            ])
            tiki.faceText('tiki')               // Print TIKI on the face
        }, 1000)

    });

    // When connected
    tiki.once('connecting', function(obj) {
        console.log("Connecting to :", obj)
    });

    // Watch for disconnect event
    tiki.on('disconnect', function() {
        console.log('Instance is disconnected !')
    });

</script>
```

# Methods

## Speak

### tiki.speak(params, next)

Basic Example :

```javascript
tiki.speak('Hello world !');
```

Full options :

```javascript
tiki.speak({
    txt: 'Hello world !',           // Text to speak
    volume: 90,                     // 0-100
    lang: "fr-fr-mathieu-male",     // Voice name
    speed: "fast"                   // Voice speed
}, function(err, obj) {
    console.log('said :', obj)
});
```

List of speeds :

```
really-slow
slow
normal
fast
really-fast
```

List of languages :

```
en-us-salli-female
en-us-joey-male
da-dk-naja-female
da-dk-mads-male
de-de-marlene-female
de-de-hans-male
en-au-nicole-female
en-au-russell-male
en-gb-amy-female
en-gb-brian-male
en-gb-emma-female
en-gb-wls-gwyneth-female
en-gb-wls-geraint-male
cy-gb-gwyneth-female
cy-gb-geraint-male
en-in-raveena-female
en-us-chipmunk-male
en-us-eric-male
en-us-ivy-female
en-us-jennifer-female
en-us-justin-male
en-us-kendra-female
en-us-kimberly-female
es-es-conchita-female
es-es-enrique-male
es-us-penelope-female
es-us-miguel-male
fr-ca-chantal-female
fr-fr-celine-female
fr-fr-mathieu-male
is-is-dora-female
is-is-karl-male
it-it-carla-female
it-it-giorgio-male
nb-no-liv-female
nl-nl-lotte-female
nl-nl-ruben-male
pl-pl-agnieszka-female
pl-pl-jacek-male
pl-pl-ewa-female
pl-pl-jan-male
pl-pl-maja-female
pt-br-vitoria-female
pt-br-ricardo-male
pt-pt-cristiano-male
pt-pt-ines-female
ro-ro-carmen-female
ru-ru-maxim-male
ru-ru-tatyana-female
sv-se-astrid-female
tr-tr-filiz-female
```


## Posture

### tiki.move(array of actuators, next)

Move actuators individually

```javascript
tiki.move([
    {
        name: 'face.elevation',     // Name of the actuator
        progress: 100,              // 0 -100
        speed: 'fast'               // Move speed
    },
    {
        name: 'face.rotation',     // Name of the actuator
        progress: 40,              // 0 -100
        speed: 'fast'               // Move speed
    }
], function(err, obj) {
    console.log('Actuators moving to :', obj)
})
```

List of actuators :

```
torso.rotation
arm.left.shoulder.rotation
arm.right.shoulder.rotation
arm.left.shoulder.elevation
arm.right.shoulder.elevation
arm.left.elbow.elevation
arm.right.elbow.elevation
face.elevation
face.rotation
```

### tiki.posture(params, next)

Move actuators to a predefined posture.

Basic Example :

```javascript
tiki.posture('show-left');
```

Full options :

```javascript
tiki.posture({
    name: 'show-left',
    speed: 'fast'
}, function(err, obj) {
    console.log('Posture moving to :', obj)
});
```

List of speeds :

```
slowest
slow
normal
fast
fastest
```

List of positions :

```coffeescript
'stand': [
    {name: 'arm.left.shoulder.rotation', progress: 'virtual_home'}
    {name: 'arm.right.shoulder.rotation', progress: 'virtual_home'}
    {name: 'arm.left.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.right.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.left.elbow.elevation', progress: 'virtual_home'}
    {name: 'arm.right.elbow.elevation', progress: 'virtual_home'}
    {name: 'torso.rotation', progress: 'virtual_home'}
    {name: 'face.elevation', progress: 'virtual_home'}
    {name: 'face.rotation', progress: 'virtual_home'}
]

'look-right': [
    {name: 'face.rotation', progress: 30}
]

'look-right-hand': [
    {name: 'face.rotation', progress: 30}
    {name: 'face.elevation', progress: 30}
]

'look-right-extreme': [
    {name: 'face.rotation', progress: 10}
]

'look-left': [
    {name: 'face.rotation', progress: 70}
]

'look-left-hand': [
    {name: 'face.rotation', progress: 70}
    {name: 'face.elevation', progress: 30}
]

'look-left-extreme': [
    {name: 'face.rotation', progress: 90}
]

'look-up': [
    {name: 'face.elevation', progress: 90}
]

'look-down': [
    {name: 'face.elevation', progress: 40}
]

'right-shoulder-elevation': [
    {name: 'arm.right.shoulder.elevation', progress: 100}
]

'left-shoulder-elevation': [
    {name: 'arm.left.shoulder.elevation', progress: 100}
]

'show-left': [
    {name: 'arm.left.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.left.shoulder.rotation', progress: 80}
    {name: 'arm.left.elbow.elevation', progress: 50}
    {name: 'arm.right.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.right.shoulder.rotation', progress: 'virtual_home'}
    {name: 'arm.right.elbow.elevation', progress: 10}
    {name: 'torso.rotation', progress: 70}
    {name: 'face.elevation', progress: 100}
    {name: 'face.rotation', progress: 80}
]

'show-right': [
    {name: 'arm.left.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.left.shoulder.rotation', progress: 'virtual_home'}
    {name: 'arm.left.elbow.elevation', progress: 'virtual_home'}
    {name: 'arm.right.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.right.shoulder.rotation', progress: 80}
    {name: 'arm.right.elbow.elevation', progress: 50}
    {name: 'torso.rotation', progress: 30}
    {name: 'face.elevation', progress: 100}
    {name: 'face.rotation', progress: 20}
]

'show-tablet': [
    {name: 'arm.left.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.left.shoulder.rotation', progress: 20}
    {name: 'arm.left.elbow.elevation', progress: 10}
    {name: 'arm.right.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.right.shoulder.rotation', progress: 20}
    {name: 'arm.right.elbow.elevation', progress: 10}
    {name: 'torso.rotation', progress: 'virtual_home'}
    {name: 'face.elevation', progress: 30}
    {name: 'face.rotation', progress: 'virtual_home'}
]

'welcome-left-hand': [
    {name: 'arm.left.shoulder.rotation', progress: 60}
    {name: 'arm.right.shoulder.rotation', progress: 80}
    {name: 'arm.left.shoulder.elevation', progress: 70}
    {name: 'arm.right.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.left.elbow.elevation', progress: 10}
    {name: 'arm.right.elbow.elevation', progress: 50}
    {name: 'torso.rotation', progress: 60}
    {name: 'face.elevation', progress: 90}
    {name: 'face.rotation', progress: 40}
]

'welcome-left-hand-next': [
    {name: 'arm.left.shoulder.rotation', progress: 100}
    {name: 'arm.right.shoulder.rotation', progress: 80}
    {name: 'arm.left.shoulder.elevation', progress: 80}
    {name: 'arm.right.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.left.elbow.elevation', progress: 100}
    {name: 'arm.right.elbow.elevation', progress: 'virtual_home'}
    {name: 'torso.rotation', progress: 70}
    {name: 'face.elevation', progress: 100}
    {name: 'face.rotation', progress: 30}
]

'welcome-right-hand': [
    {name: 'arm.left.shoulder.rotation', progress: 80}
    {name: 'arm.right.shoulder.rotation', progress: 60}
    {name: 'arm.left.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.right.shoulder.elevation', progress: 70}
    {name: 'arm.left.elbow.elevation', progress: 50}
    {name: 'arm.right.elbow.elevation', progress: 10}
    {name: 'torso.rotation', progress: 40}
    {name: 'face.elevation', progress: 90}
    {name: 'face.rotation', progress: 60}
]

'welcome-right-hand-next': [
    {name: 'arm.left.shoulder.rotation', progress: 80}
    {name: 'arm.right.shoulder.rotation', progress: 100}
    {name: 'arm.left.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.right.shoulder.elevation', progress: 80}
    {name: 'arm.left.elbow.elevation', progress: 'virtual_home'}
    {name: 'arm.right.elbow.elevation', progress: 100}
    {name: 'torso.rotation', progress: 30}
    {name: 'face.elevation', progress: 100}
    {name: 'face.rotation', progress: 70}
]

'touch-right-hand': [
    {name: 'arm.left.shoulder.rotation', progress: 80}
    {name: 'arm.right.shoulder.rotation', progress: 80}
    {name: 'arm.left.shoulder.elevation', progress: 10}
    {name: 'arm.right.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.left.elbow.elevation', progress: 0}
    {name: 'arm.right.elbow.elevation', progress: 80}
    {name: 'torso.rotation', progress: 80}
    {name: 'face.elevation', progress: 100}
    {name: 'face.rotation', progress: 20}
]

'touch-left-hand': [
    {name: 'arm.left.shoulder.rotation', progress: 80}
    {name: 'arm.right.shoulder.rotation', progress: 80}
    {name: 'arm.left.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.right.shoulder.elevation', progress: 10}
    {name: 'arm.left.elbow.elevation', progress: 80}
    {name: 'arm.right.elbow.elevation', progress: 0}
    {name: 'torso.rotation', progress: 20}
    {name: 'face.elevation', progress: 90}
    {name: 'face.rotation', progress: 80}
]
'come-on': [
    {name: 'arm.right.shoulder.rotation', progress: 70}
    {name: 'arm.left.shoulder.rotation', progress: 70}
    {name: 'arm.right.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.left.shoulder.elevation', progress: 'virtual_home'}
    {name: 'arm.left.elbow.elevation', progress: 60}
    {name: 'arm.right.elbow.elevation', progress: 60}
    {name: 'torso.rotation', progress: 'virtual_home'}
    {name: 'face.elevation', progress: 'virtual_home'}
    {name: 'face.rotation', progress: 'virtual_home'}
]

'selfie-left': [
    {name: 'arm.left.shoulder.rotation', progress: 80}
    {name: 'arm.right.shoulder.rotation', progress: 80}
    {name: 'arm.left.shoulder.elevation', progress: 90}
    {name: 'arm.right.shoulder.elevation', progress: 20}
    {name: 'arm.left.elbow.elevation', progress: 20}
    {name: 'arm.right.elbow.elevation', progress: 20}
    {name: 'torso.rotation', progress: 40}
    {name: 'face.elevation', progress: 70}
    {name: 'face.rotation', progress: 60}
]

'selfie-right': [
    {name: 'arm.left.shoulder.rotation', progress: 80}
    {name: 'arm.right.shoulder.rotation', progress: 80}
    {name: 'arm.left.shoulder.elevation', progress: 20}
    {name: 'arm.right.shoulder.elevation', progress: 90}
    {name: 'arm.left.elbow.elevation', progress: 20}
    {name: 'arm.right.elbow.elevation', progress: 20}
    {name: 'torso.rotation', progress: 60}
    {name: 'face.elevation', progress: 70}
    {name: 'face.rotation', progress: 40}
]
```


## Face

### tiki.face(params, next)

Display an animation on the face.

Basic Example :

```javascript
tiki.face('eye');
```

Full options :

```javascript
tiki.face({
    name: 'eye'
}, function(err, obj) {
    console.log('Set face to :', obj)
});
```

List of Animations :

```
eye
eye-blink
eye-happy
love
photo
```

### tiki.faceText(params, next) 

Display a scrolling text to the face.

Basic Example :

```javascript
tiki.faceText('TiKi');
```

Full options :

```javascript
tiki.faceText({
    text: 'TiKi',
    scrolling: 'left'
    color: '#00FF00'
    bgColor: '#000000'
    noScroll: false
    velocity: 5/1000    
}, function(err, obj) {
    console.log('Set face text to :', obj)
});
```

# Events

## Connection

### .ready(next())

Happens immediately if already connected, else wait for connection

```javascript
tiki.ready(function() {
    console.log("Connected to bot!")
})
```

### .on('connecting', next(obj))

Happens when trying to open a connection to the server

```javascript
tiki.once('connecting', function(obj) {
    console.log("Connecting to :", obj)
});
```

### .on('disconnect', next())

Happens when server has disappeared

```javascript
tiki.on('disconnect', function() {
    console.log('Instance is disconnected !')
});
```


## Actuators

### .on('driver:board:actuator:update', [actuator])

Get informations for all actuators :

```javascript
tiki.on('driver:board:actuator:update', function(actuators) {
    console.log('Actuators update:', actuators);
})
```

```javascript
actuators = [{
    goal: 643,
    id: 1,
    progress: 46,
    speed: 20
},
{

},
{
    goal: 462,
    id: 9,
    progress: 0,
    speed: 40
}]
```

## Touch sensors

### .on('driver:board:touch:touch', next(obj))

When a touch sensor is touched :

```javascript
tiki.on('driver:board:touch:touch', function(obj) {
    console.log('Touch detected:', obj);
})
```

```javascript
obj = {
    action: "touch",
    address: 54,
    name: "right-hand",
    raw: 1,
    touchAt: 1462484252944,
    value: 1
}
```

### .on('driver:board:touch:long-press', next(obj))

When a touch sensor is pressed more than 2000ms :

```javascript
tiki.on('driver:board:touch:long-press', function(obj) {
    console.log('Touch long-press detected:', obj);
})
```

```javascript
obj = {
    action: "long-press",
    address: 54,
    name: "right-hand",
    touchAt: 1462484252944,
    raw: 1,
    value: 1
}
```

### .on('driver:board:touch:release', next(obj))

When a touch sensor is released :

```javascript
tiki.on('driver:board:touch:release', function(obj) {
    console.log('Touch released:', obj);
})
```

```javascript
obj = {
    action: "release",
    address: 54,
    name: "right-hand",
    raw: 0,
    value: 0
}
```

### .on('driver:board:touch:leds:animation', next(obj))

When start an animation on leds associated to the touch sensor :

```javascript
tiki.on('driver:board:touch:leds:animation', function(obj) {
    console.log('Led animation started:', obj);
})
```

```javascript
obj = {
    id: "right-hand",
    name: "blink-smooth",
    duration: 400,
    count: 3
}
```
