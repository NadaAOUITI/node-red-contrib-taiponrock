const test = require("node:test");
const assert = require("node:assert/strict");

const registerNode = require("../node.js");

test("registers the taiponrock node", () => {
    let registeredType;
    let registeredConstructor;

    registerNode({
        nodes: {
            registerType(type, constructor) {
                registeredType = type;
                registeredConstructor = constructor;
            }
        }
    });

    assert.equal(registeredType, "taiponrock");
    assert.equal(typeof registeredConstructor, "function");
});

test("replaces any input payload with Taiponrock", () => {
    let nodeConstructor;
    const sentMessages = [];

    registerNode({
        nodes: {
            createNode(node) {
                node.on = (event, handler) => {
                    node.inputHandler = handler;
                };
                node.send = (msg) => {
                    sentMessages.push(msg);
                };
            },
            registerType(type, constructor) {
                nodeConstructor = constructor;
            }
        }
    });

    const node = {};
    nodeConstructor.call(node, {});

    const message = { payload: 42, topic: "example" };
    node.inputHandler(message);

    assert.deepEqual(sentMessages, [
        { payload: "Taiponrock", topic: "example" }
    ]);
});
