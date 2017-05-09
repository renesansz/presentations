/**
 * Service: WebsocketService
 */

// If user is running mozilla then use it's built-in WebSocket
var WebSocket = window.WebSocket || window.MozWebSocket;

/**
 * @const BROADCAST_TYPES
 */
const BROADCAST_TYPES = {
    ON_USER_CONNECT: 'on-user-connect',
    ON_USER_DISCONNECT: 'on-user-disconnect',
    ON_NEW_USER_CONNECT: 'on-new-user-connect',

    ON_MESSAGE_RECEIVED: 'on-message-received',
    ON_COLOR_ASSIGNED: 'on-color-assigned',

    FETCH_HISTORY: 'fetch-history',
};

/**
 * @class WebsocketService
 * 
 * The Websocket service provider.
 */
class WebsocketService {
    /**
     * @constructor
     * 
     * @param {String} server The server url
     */
    constructor(server) {
        this.websocket = null;
        this.server = server;
    }

    /**
     * @static
     * @return {Object} List of broadcast types
     */
    static get BROADCAST_TYPES() {
        return BROADCAST_TYPES;
    }

    /**
     * @method connect
     * 
     * Initialize connection to the websocket service.
     * 
     * @param {Function} onMessageReceiveCallback Callback function for receiving message
     * @param {Function} onOpenCallback Callback function for connection success
     * @param {Function} onErrorCallback Callback function for connection error
     */
    connect(onMessageReceiveCallback, onOpenCallback, onErrorCallback) {
        this.websocket = new WebSocket(this.server);
        this.websocket.onmessage = onMessageReceiveCallback;
        this.websocket.onopen = onOpenCallback;
        this.websocket.onerror = onErrorCallback;
    }

    /**
     * @method sendMessage
     * 
     * Send message to websocket server
     * 
     * @param {String} message The message to be sent.
     */
    sendMessage(message) {
        if (this.websocket) {
            this.websocket.send(message);
        } else {
            console.error('Websocket is not initialized...');
        }
    }

    /** ======== Getters/Setters ======== **/

    set server(server) {
        if (typeof server !== 'string') {
            throw new error('`server` should be a string');
        }
        
        this.server = server;
    }

    get server() {
        return this.server;
    }
}

export default WebsocketService;
