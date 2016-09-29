/**
 EventBots Client API : EB_API

 This module is UMD (https://github.com/umdjs/umd), so you can call it with standard loader (AMD, ES6, requirejs...), or directly in global.

 What does it do ?
 - Will allow you to establish a connection between a website (the client) and the robot (the server) trhough a socket.io connection
 - Will search by default on the current hostname on port 9000 for a socket.io connection

 Dependencies :
 - jQuery
 - Socket.IO Client
 - Lodash custom

 **/

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Tiki = factory();
    }
}(this, function () {

    // Declare the service
    return class Service {

        // Setup defaults
        get defaults() {
            return {
                debug: false,
                verbose: false,
                protocol: 'http:',
                hostname: null,
                port: 9000,
                autoconnect: true
            }
        }

        // Returns the current API version
        get version() {
            return "1.0"
        }

        // Build the service
        constructor(opts) {

            // Check dependencies
            if (typeof jQuery === 'undefined') {
                throw "jQuery is required to use this API !"
            }
            if (typeof io === 'undefined') {
                throw "Socket.IO is required to use this API !"
            }

            // Prepare event emiiter holder
            this._fn = {}

            // Set options
            this.opts = $.extend({}, this.defaults, opts);

            // Define the socket.io server to connect to
            if (!this.opts.socketUrl) {
                this.opts.protocol = this.opts.protocol || window.location.protocol;
                this.opts.hostname = this.opts.hostname || window.location.hostname;
                this.opts.socketUrl = this.opts.protocol + '//' + this.opts.hostname + ':' + this.opts.port
            }

            // Clean options
            delete this.opts.protocol
            delete this.opts.hostname
            delete this.opts.port

            // Welcome message
            if (this.opts.debug) console.log("EventBots Client API :", this.version, this.opts);

            // Open Socket and attach Socket.IO
            if (this.opts.autoconnect) {
                this.start();
            }

            // Returns instance
            return this;

        }

        // Detect when connection is ready
        ready(next) {

            // If already connected, already ready !
            if(this.connected)
                return next()

            // Bind event
            this.once('socket:connect', next.bind(this))
        }

        // Start the Service
        start() {

            // Open Socket
            this.atachSocketIO();

            // return instance
            return this;

        }

        // Atach Socket.IO
        atachSocketIO() {

            // Connect to socket.io
            this.socket = io(this.opts.socketUrl, {'force new connection': true});

            // Attach events to socket
            // - On connection error
            this.socket.on('error', (err) => {
                this.connected = false;
                if (this.opts.debug) console.log('Socket.IO error :', err);
                this.emit('socket:error', err);
            });

            // - When reconnecting
            this.socket.on('reconnecting', () => {
                this.connected = false;
                if (this.opts.debug) console.log('Socket.IO reconnecting to : ' + this.opts.socketUrl + "...");
                this.emit('socket:reconnecting');
            });

            // - When connected
            this.socket.on('connect', () => {
                this.connected = true;
                if (this.opts.debug) console.log('Socket.IO connected to : ' + this.opts.socketUrl, "!");
                this.emit('socket:connect', this.opts.socketUrl);
            });

            // - On service update
            this.socket.on('service:update', (msg) => {

                // Rebuild message ID
                let msgID = $.trim($.unique([msg.type, msg.name, msg.action]).join(':'))

                // Debug
                if (this.opts.verbose) console.log("Receive a message update :", msgID);

                // Emit an event
                this.emit(msgID, msg.message)

            });

        }

        // == API CALLS

        // -> Speak
        speak(obj, next) {
            if (_.isString(obj)) obj = {txt: obj};
            obj = _.pick(obj, 'txt', 'speed', 'lang');
            this.emitEvent('service:speech:say', obj);
            if (_.isFunction(next))
                this.once('service:speaker:idle', (err) => {
                    next(err, obj);
                })
        }

        // -> Send a posture to take
        posture(obj, next) {
            if (_.isString(obj)) obj = {name: obj};
            obj = _.pick(obj, 'name', 'speed');
            this.emitEvent('driver:board:actuator:posture', obj);
            if (_.isFunction(next)) next(null, obj);
        }

        // -> Move actuators individually
        move(obj, next) {
            if (!_.isArray(obj) || !obj.length)
                return next('Must provide an object of actuators');
            this.emitEvent('driver:board:actuator:posture', obj);
            if (_.isFunction(next)) next(null, obj);
        }

        // -> Display a face animation
        face(obj, next) {
            if (_.isString(obj)) obj = {name: obj};
            this.emitEvent('driver:board:face:animation', obj);
            if (_.isFunction(next)) next(null, obj);
        }

        // -> Face scrolling text
        faceText(obj, next) {
            if (_.isString(obj)) obj = {text: obj};
            this.emitEvent('driver:board:face:draw:text', obj);
            if (_.isFunction(next)) next(null, obj);
        }

        // == API TOOLS

        // Get the haskkey
        getHashKey(str) {
            let hash = 0, i, chr, len;
            if (str.length === 0) return hash;
            for (i = 0, len = str.length; i < len; i++) {
                chr   = str.charCodeAt(i);
                hash  = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
            return hash;
        }

        // Get a smart smaple value from obj
        smartSample(obj) {

            // Do nothing if it's a string
            if (typeof obj === 'string') return obj;

            // Init smart keys if not yet done
            if (!this.smartKeys) this.smartKeys = {};

            // Get values
            let smart = {};
            if (_.isArray(obj)) {
                smart.oneOf = $.extend([], obj);
            }
            else if (_.isObject) {
                smart = $.extend({}, obj);
            }

            // Choose one of the value
            if ($.isArray(smart.oneOf)) {

                // Order values


                // Get the hash for all values
                let key = this.getHashKey(smart.oneOf.join('-'));
                console.log(key)

                // Get the last value stored
                let lastValue = this.smartKeys["message:"+key];

                // Omit the last value to choose one of the others for the txt
                smart.value = _.sample(_.difference(smart.oneOf, [lastValue]));

                // If no values
                if (!smart.value)
                    smart.value = _.sample(smart.oneOf)

                // Store for next turn
                this.smartKeys["message:"+key] = smart.value

            }

            // Return value
            if (smart.value)
                return smart.value

        }


        // == EVENT MANAGEMENT

        // Send an event through SocketIO
        emitEvent(name, message) {

            // Try to convert message in JSON if it's a string
            if (name && typeof message === 'string') {
                try {
                    message = JSON.parse(message);
                } catch(e) {}
            }

            // Emit the message through ws
            if (this.connected) {
                this.socket.emit(name, message);
            }
            else {
                console.log("emitEvent: socket.io is not connected...");
            }

        }

        // Attach a callback to an event
        on(label, fn) {

            // Debug
            if (this.opts.verbose) console.log("Attach Event :", label, fn);

            // Set callback
            this._fn[label] = fn

            // Returns an instance
            return this;

        }

        // Wait for an event, only once
        once(label, fn) {

            // Debug
            if (this.opts.verbose) console.log("Attach Event :", label, fn);

            // Set callback
            this._fn[label] = (params) => {
                fn(params)
                delete this._fn[label]
            }

            // Returns an instance
            return this;

        }

        // Remove a listener or all
        off(label) {

            // Remove all listeners if label is null
            if (!label) {
                if (this.opts.verbose) console.log("Remove all listeners !");
                delete this._fn
            }

            // Remove the listener
            else {
                if (this.opts.verbose) console.log("Remove Event :", label);
                delete this._fn[label]
            }

            // Returns an instance
            return this;

        }

        // Emit an event
        emit(label, params) {

            // Debug
            if (this.opts.verbose) console.log("Trigger Event :", label, params, arguments, this._fn);

            // Exec the callback
            if (typeof this._fn[label] === 'function') {
                this._fn[label](params)
            }

            // Returns an instance
            return this;

        }

    };
}));
