"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XFER_STATUS_CODE = exports.XFER_STATUS = exports.TRANSFER_HISTORY_STATUS_CODE = exports.TRANSFER_HISTORY_STATUS = void 0;
exports.TRANSFER_HISTORY_STATUS = {
    TRANSFER_UNKNOWN: 'TRANSFER_UNKNOWN',
    TRANSFER_SUBMITTING: 'TRANSFER_SUBMITTING',
    TRANSFER_FAILED: 'TRANSFER_FAILED',
    TRANSFER_WAITING_FOR_SGN_CONFIRMATION: 'TRANSFER_WAITING_FOR_SGN_CONFIRMATION',
    TRANSFER_WAITING_FOR_FUND_RELEASE: 'TRANSFER_WAITING_FOR_FUND_RELEASE',
    TRANSFER_COMPLETED: 'TRANSFER_COMPLETED',
    TRANSFER_TO_BE_REFUNDED: 'TRANSFER_TO_BE_REFUNDED',
    TRANSFER_REQUESTING_REFUND: 'TRANSFER_REQUESTING_REFUND',
    TRANSFER_REFUND_TO_BE_CONFIRMED: 'TRANSFER_REFUND_TO_BE_CONFIRMED',
    TRANSFER_CONFIRMING_YOUR_REFUND: 'TRANSFER_CONFIRMING_YOUR_REFUND',
    TRANSFER_REFUNDED: 'TRANSFER_REFUNDED',
    TRANSFER_DELAYED: 'TRANSFER_DELAYED'
};
exports.TRANSFER_HISTORY_STATUS_CODE = {
    0: 'TRANSFER_UNKNOWN',
    1: 'TRANSFER_SUBMITTING',
    2: 'TRANSFER_FAILED',
    3: 'TRANSFER_WAITING_FOR_SGN_CONFIRMATION',
    4: 'TRANSFER_WAITING_FOR_FUND_RELEASE',
    5: 'TRANSFER_COMPLETED',
    6: 'TRANSFER_TO_BE_REFUNDED',
    7: 'TRANSFER_REQUESTING_REFUND',
    8: 'TRANSFER_REFUND_TO_BE_CONFIRMED',
    9: 'TRANSFER_CONFIRMING_YOUR_REFUND',
    10: 'TRANSFER_REFUNDED',
    11: 'TRANSFER_DELAYED'
};
exports.XFER_STATUS = {
    UNKNOWN: 'UNKNOWN',
    OK_TO_RELAY: 'OK_TO_RELAY',
    SUCCESS: 'SUCCESS',
    BAD_LIQUIDITY: 'BAD_LIQUIDITY',
    BAD_SLIPPAGE: 'BAD_SLIPPAGE',
    BAD_TOKEN: 'BAD_TOKEN',
    REFUND_REQUESTED: 'REFUND_REQUESTED',
    REFUND_DONE: 'REFUND_DONE',
    BAD_XFER_DISABLED: 'BAD_XFER_DISABLED',
    BAD_DEST_CHAIN: 'BAD_DEST_CHAIN'
};
exports.XFER_STATUS_CODE = {
    0: 'UNKNOWN',
    1: 'OK_TO_RELAY',
    2: 'SUCCESS',
    3: 'BAD_LIQUIDITY',
    4: 'BAD_SLIPPAGE',
    5: 'BAD_TOKEN',
    6: 'REFUND_REQUESTED',
    7: 'REFUND_DONE',
    8: 'BAD_XFER_DISABLED',
    9: 'BAD_DEST_CHAIN'
};
//# sourceMappingURL=cbridge-status-response.js.map