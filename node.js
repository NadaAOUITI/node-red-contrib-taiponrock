module.exports = function (RED) {
    function TaiponrockNode(config) {
        RED.nodes.createNode(this, config);

        this.on("input", function (msg) {
            msg.payload = "Taiponrock";
            this.send(msg);
        });
    }

    RED.nodes.registerType("taiponrock", TaiponrockNode);
};