class EventEmitter {
    constructor() {
        this.events = new Map();
    }

    subscribe(eventName, callback) {
        if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
        }
        const callbacks = this.events.get(eventName);
        callbacks.push(callback);
        return {
            unsubscribe: () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1) {
                    callbacks.splice(index, 1);
                }
                return undefined;
            }
        };
    }

    emit(eventName, args = []) {
        if (!this.events.has(eventName)) {
            return [];
        }
        const callbacks = this.events.get(eventName);
        return callbacks.map(cb => cb(...args));
    }
}