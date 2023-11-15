import { BLOCKCHAIN_NAME } from 'src/core/blockchain/models/blockchain-name';

export const limitOrderSupportedBlockchains = [
    BLOCKCHAIN_NAME.ETHEREUM,
    BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN,
    BLOCKCHAIN_NAME.POLYGON,
    BLOCKCHAIN_NAME.OPTIMISM,
    BLOCKCHAIN_NAME.ARBITRUM,
    BLOCKCHAIN_NAME.GNOSIS,
    BLOCKCHAIN_NAME.AVALANCHE,
    BLOCKCHAIN_NAME.FANTOM,
    BLOCKCHAIN_NAME.AURORA,
    BLOCKCHAIN_NAME.GOERLI,
    BLOCKCHAIN_NAME.MUMBAI,
    BLOCKCHAIN_NAME.BINANCE_SMART_CHAIN_TESTNET
] as const;

export type LimitOrderSupportedBlockchain = (typeof limitOrderSupportedBlockchains)[number];
