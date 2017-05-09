import { WebSocket } from 'mock-socket';

import WebsocketService from './WebsocketService';

describe('WebsocketService', () => {

    beforeEach(() => {
        window.WebSocket = WebSocket; // Mock the window.WebSocket
    });

    describe('constructor()', () => {
        it('requires 1 string argument', () => {
            expect(() => {
                new WebsocketService()
            }).toThrow();
            expect(() => {
                new WebsocketService(1)
            }).toThrow();
            expect(() => {
                new WebsocketService(1.0)
            }).toThrow();
            expect(() => {
                new WebsocketService(true)
            }).toThrow();
        });
    });

    it('should not be undefined', () => {
        expect(WebsocketService).not.toBe(undefined);
    });
    it('should be able to connect', () => {});
    it('should be able to send message', () => {});
    it('should be able to receive message', () => {});

});
