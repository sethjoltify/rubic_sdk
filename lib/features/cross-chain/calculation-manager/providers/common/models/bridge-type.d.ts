export declare const BRIDGE_TYPE: {
    readonly ACROSS: "across";
    readonly AMAROK: "connext";
    readonly ARBITRUM: "arbitrum";
    readonly AVALANCHE: "avalanche";
    readonly CBRIDGE: "cbridge";
    readonly CONNEXT: "connext";
    readonly CELERIM: "celerim";
    readonly HOP: "hop";
    readonly HYPHEN: "hyphen";
    readonly MULTICHAIN: "multichain";
    readonly STARGATE: "stargate";
    readonly ALLBRIDGE: "allbridge";
    readonly POLYGON_BRIDGE: "polygon";
    readonly OMNI_BRIDGE: "omni";
    readonly GNOSIS_BRIDGE: "gnosis";
    readonly CONNEXT_AMAROK: "amarok";
    readonly CIRCLE_CELER_BRIDGE: "celercircle";
    readonly LI_FUEL: "lifuel";
    readonly WORMHOLE: "wormhole";
    readonly ANY_SWAP: "anyswap";
    readonly ARBITRUM_BRIDGE: "arbitrum";
    readonly AVALANCHE_BRIDGE: "avalanche";
    readonly OPEN_OCEAN: "openocean";
    readonly MAKERS_WORMHOLE: "maker";
    readonly OPTIMISM_GATEWAY: "optimism";
    readonly OSMOSIS_BRIDGE: "osmosis";
    readonly POLYGON: "polygon";
    readonly REFUEL: "refuel";
    readonly SATELLITE: "satellite";
    readonly SYMBIOSIS: "symbiosis";
    readonly SYNAPSE: "synapse";
    readonly THORCHAIN: "thorchain";
    readonly YPOOL: "ypool";
    readonly LIFI: "lifi";
    readonly DEBRIDGE: "dln";
    readonly BRIDGERS: "bridgers";
    readonly XY: "xy";
    readonly CELER_BRIDGE: "celer_bridge";
    readonly CHANGENOW: "changenow";
    readonly SQUIDROUTER: "squidrouter";
    readonly SCROLL_BRIDGE: "scroll_bridge";
    readonly TAIKO_BRIDGE: "taiko_bridge";
};
export type BridgeType = (typeof BRIDGE_TYPE)[keyof typeof BRIDGE_TYPE];
export declare const bridges: ("avalanche" | "optimism" | "arbitrum" | "symbiosis" | "lifi" | "dln" | "bridgers" | "multichain" | "xy" | "celer_bridge" | "changenow" | "stargate" | "squidrouter" | "scroll_bridge" | "taiko_bridge" | "across" | "connext" | "anyswap" | "celerim" | "hop" | "hyphen" | "openocean" | "maker" | "osmosis" | "polygon" | "refuel" | "satellite" | "synapse" | "thorchain" | "wormhole" | "ypool" | "cbridge" | "allbridge" | "omni" | "gnosis" | "amarok" | "celercircle" | "lifuel")[];