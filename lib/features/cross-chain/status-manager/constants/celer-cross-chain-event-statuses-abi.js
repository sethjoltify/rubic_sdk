"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.celerCrossChainEventStatusesAbi = void 0;
exports.celerCrossChainEventStatusesAbi = [
    {
        anonymous: false,
        inputs: [
            { indexed: true, internalType: 'bytes32', name: 'id', type: 'bytes32' },
            {
                components: [
                    { internalType: 'address', name: 'srcInputToken', type: 'address' },
                    { internalType: 'uint256', name: 'srcInputAmount', type: 'uint256' },
                    { internalType: 'uint256', name: 'dstChainID', type: 'uint256' },
                    { internalType: 'address', name: 'dstOutputToken', type: 'address' },
                    { internalType: 'uint256', name: 'dstMinOutputAmount', type: 'uint256' },
                    { internalType: 'address', name: 'recipient', type: 'address' },
                    { internalType: 'address', name: 'integrator', type: 'address' },
                    { internalType: 'address', name: 'router', type: 'address' }
                ],
                indexed: false,
                internalType: 'struct BridgeBase.BaseCrossChainParams',
                name: 'parameters',
                type: 'tuple'
            }
        ],
        name: 'CrossChainRequestSent',
        type: 'event'
    }
];
//# sourceMappingURL=celer-cross-chain-event-statuses-abi.js.map