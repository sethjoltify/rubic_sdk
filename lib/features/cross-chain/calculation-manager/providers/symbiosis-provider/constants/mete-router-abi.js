"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meteRouterAbi = void 0;
exports.meteRouterAbi = [
    {
        inputs: [
            {
                components: [
                    { internalType: 'bytes', name: 'firstSwapCalldata', type: 'bytes' },
                    { internalType: 'bytes', name: 'secondSwapCalldata', type: 'bytes' },
                    { internalType: 'address[]', name: 'approvedTokens', type: 'address[]' },
                    { internalType: 'address', name: 'firstDexRouter', type: 'address' },
                    { internalType: 'address', name: 'secondDexRouter', type: 'address' },
                    { internalType: 'uint256', name: 'amount', type: 'uint256' },
                    { internalType: 'bool', name: 'nativeIn', type: 'bool' },
                    { internalType: 'address', name: 'relayRecipient', type: 'address' },
                    { internalType: 'bytes', name: 'otherSideCalldata', type: 'bytes' }
                ],
                internalType: 'struct MetaRouteStructs.MetaRouteTransaction',
                name: '_metarouteTransaction',
                type: 'tuple'
            }
        ],
        name: 'metaRoute',
        outputs: [],
        stateMutability: 'payable',
        type: 'function'
    }
];
//# sourceMappingURL=mete-router-abi.js.map