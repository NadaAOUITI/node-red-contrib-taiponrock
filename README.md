# node-red-contrib-taiponrock

## Overview

`taiponrock` is a Node-RED node for learning how to create, test, package, and
publish a custom node. It replaces every incoming message payload with the
constant string `Taiponrock`, regardless of the original payload type.

## How to use

1. Install the package from the Node-RED palette manager, or link this
   repository locally with `npm link`.
2. Restart Node-RED.
3. Add the **taiponrock** node from the **function** category to a flow.
4. Connect an Inject node to **taiponrock**, then connect it to a Debug node.
5. Deploy the flow and trigger the Inject node. The Debug sidebar displays
   `Taiponrock`.

## Local development

Run the unit tests with:

```text
npm test
```

To test the node in a local Node-RED installation:

```text
npm link
```

Then restart Node-RED and deploy a flow containing the node.

## Requirements

- Node.js 18 or newer
- Node-RED 3.x or newer

## License

Apache-2.0

## Published package

- [npm package](https://www.npmjs.com/package/node-red-contrib-taiponrock22)
- [Node-RED Flow Library](https://flows.nodered.org/node/node-red-contrib-taiponrock22)

Install via npm:

```bash
npm install node-red-contrib-taiponrock22
```