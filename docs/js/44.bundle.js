(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "../node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js":
/*!***************************************************************************!*\
  !*** ../node_modules/monaco-editor/esm/vs/basic-languages/redis/redis.js ***!
  \***************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "conf", function() { return conf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "language", function() { return language; });
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

var conf = {
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: '\'', close: '\'' },
    ]
};
var language = {
    defaultToken: '',
    tokenPostfix: '.redis',
    ignoreCase: true,
    brackets: [
        { open: '[', close: ']', token: 'delimiter.square' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],
    keywords: [
        "APPEND", "AUTH", "BGREWRITEAOF", "BGSAVE", "BITCOUNT", "BITFIELD", "BITOP", "BITPOS", "BLPOP", "BRPOP", "BRPOPLPUSH",
        "CLIENT", "KILL", "LIST", "GETNAME", "PAUSE", "REPLY", "SETNAME", "CLUSTER", "ADDSLOTS", "COUNT-FAILURE-REPORTS",
        "COUNTKEYSINSLOT", "DELSLOTS", "FAILOVER", "FORGET", "GETKEYSINSLOT", "INFO", "KEYSLOT", "MEET", "NODES", "REPLICATE",
        "RESET", "SAVECONFIG", "SET-CONFIG-EPOCH", "SETSLOT", "SLAVES", "SLOTS", "COMMAND", "COUNT", "GETKEYS", "CONFIG", "GET",
        "REWRITE", "SET", "RESETSTAT", "DBSIZE", "DEBUG", "OBJECT", "SEGFAULT", "DECR", "DECRBY", "DEL", "DISCARD", "DUMP", "ECHO",
        "EVAL", "EVALSHA", "EXEC", "EXISTS", "EXPIRE", "EXPIREAT", "FLUSHALL", "FLUSHDB", "GEOADD", "GEOHASH", "GEOPOS", "GEODIST",
        "GEORADIUS", "GEORADIUSBYMEMBER", "GETBIT", "GETRANGE", "GETSET", "HDEL", "HEXISTS", "HGET", "HGETALL", "HINCRBY", "HINCRBYFLOAT",
        "HKEYS", "HLEN", "HMGET", "HMSET", "HSET", "HSETNX", "HSTRLEN", "HVALS", "INCR", "INCRBY", "INCRBYFLOAT", "KEYS", "LASTSAVE",
        "LINDEX", "LINSERT", "LLEN", "LPOP", "LPUSH", "LPUSHX", "LRANGE", "LREM", "LSET", "LTRIM", "MGET", "MIGRATE", "MONITOR",
        "MOVE", "MSET", "MSETNX", "MULTI", "PERSIST", "PEXPIRE", "PEXPIREAT", "PFADD", "PFCOUNT", "PFMERGE", "PING", "PSETEX",
        "PSUBSCRIBE", "PUBSUB", "PTTL", "PUBLISH", "PUNSUBSCRIBE", "QUIT", "RANDOMKEY", "READONLY", "READWRITE", "RENAME", "RENAMENX",
        "RESTORE", "ROLE", "RPOP", "RPOPLPUSH", "RPUSH", "RPUSHX", "SADD", "SAVE", "SCARD", "SCRIPT", "FLUSH", "LOAD", "SDIFF",
        "SDIFFSTORE", "SELECT", "SETBIT", "SETEX", "SETNX", "SETRANGE", "SHUTDOWN", "SINTER", "SINTERSTORE", "SISMEMBER", "SLAVEOF",
        "SLOWLOG", "SMEMBERS", "SMOVE", "SORT", "SPOP", "SRANDMEMBER", "SREM", "STRLEN", "SUBSCRIBE", "SUNION", "SUNIONSTORE", "SWAPDB",
        "SYNC", "TIME", "TOUCH", "TTL", "TYPE", "UNSUBSCRIBE", "UNLINK", "UNWATCH", "WAIT", "WATCH", "ZADD", "ZCARD", "ZCOUNT", "ZINCRBY",
        "ZINTERSTORE", "ZLEXCOUNT", "ZRANGE", "ZRANGEBYLEX", "ZREVRANGEBYLEX", "ZRANGEBYSCORE", "ZRANK", "ZREM", "ZREMRANGEBYLEX",
        "ZREMRANGEBYRANK", "ZREMRANGEBYSCORE", "ZREVRANGE", "ZREVRANGEBYSCORE", "ZREVRANK", "ZSCORE", "ZUNIONSTORE", "SCAN", "SSCAN",
        "HSCAN", "ZSCAN"
    ],
    operators: [
    // NOT SUPPORTED
    ],
    builtinFunctions: [
    // NOT SUPPORTED
    ],
    builtinVariables: [
    // NOT SUPPORTED
    ],
    pseudoColumns: [
    // NOT SUPPORTED
    ],
    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@pseudoColumns' },
            { include: '@numbers' },
            { include: '@strings' },
            { include: '@scopes' },
            [/[;,.]/, 'delimiter'],
            [/[()]/, '@brackets'],
            [/[\w@#$]+/, {
                    cases: {
                        '@keywords': 'keyword',
                        '@operators': 'operator',
                        '@builtinVariables': 'predefined',
                        '@builtinFunctions': 'predefined',
                        '@default': 'identifier'
                    }
                }],
            [/[<>=!%&+\-*/|~^]/, 'operator'],
        ],
        whitespace: [
            [/\s+/, 'white']
        ],
        pseudoColumns: [
            [/[$][A-Za-z_][\w@#$]*/, {
                    cases: {
                        '@pseudoColumns': 'predefined',
                        '@default': 'identifier'
                    }
                }],
        ],
        numbers: [
            [/0[xX][0-9a-fA-F]*/, 'number'],
            [/[$][+-]*\d*(\.\d*)?/, 'number'],
            [/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number']
        ],
        strings: [
            [/'/, { token: 'string', next: '@string' }],
            [/"/, { token: 'string.double', next: '@stringDouble' }]
        ],
        string: [
            [/[^']+/, 'string'],
            [/''/, 'string'],
            [/'/, { token: 'string', next: '@pop' }],
        ],
        stringDouble: [
            [/[^"]+/, 'string.double'],
            [/""/, 'string.double'],
            [/"/, { token: 'string.double', next: '@pop' }]
        ],
        scopes: [
        // NOT SUPPORTED
        ]
    }
};


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL21vbmFjby1lZGl0b3IvZXNtL3ZzL2Jhc2ljLWxhbmd1YWdlcy9yZWRpcy9yZWRpcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTtBQUNOO0FBQ1A7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDQSxTQUFTLFNBQVMsWUFBWSxHQUFHO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsd0JBQXdCO0FBQ2pDLFNBQVMsMEJBQTBCO0FBQ25DO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtREFBbUQ7QUFDNUQsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLDRCQUE0QjtBQUN6QyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHNCQUFzQjtBQUNuQyxhQUFhLHFCQUFxQjtBQUNsQyxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3RELG1CQUFtQixnREFBZ0Q7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHVDQUF1QztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9qcy80NC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuJ3VzZSBzdHJpY3QnO1xyXG5leHBvcnQgdmFyIGNvbmYgPSB7XHJcbiAgICBicmFja2V0czogW1xyXG4gICAgICAgIFsneycsICd9J10sXHJcbiAgICAgICAgWydbJywgJ10nXSxcclxuICAgICAgICBbJygnLCAnKSddXHJcbiAgICBdLFxyXG4gICAgYXV0b0Nsb3NpbmdQYWlyczogW1xyXG4gICAgICAgIHsgb3BlbjogJ3snLCBjbG9zZTogJ30nIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnWycsIGNsb3NlOiAnXScgfSxcclxuICAgICAgICB7IG9wZW46ICcoJywgY2xvc2U6ICcpJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcclxuICAgICAgICB7IG9wZW46ICdcXCcnLCBjbG9zZTogJ1xcJycgfSxcclxuICAgIF0sXHJcbiAgICBzdXJyb3VuZGluZ1BhaXJzOiBbXHJcbiAgICAgICAgeyBvcGVuOiAneycsIGNsb3NlOiAnfScgfSxcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknIH0sXHJcbiAgICAgICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJ1xcJycsIGNsb3NlOiAnXFwnJyB9LFxyXG4gICAgXVxyXG59O1xyXG5leHBvcnQgdmFyIGxhbmd1YWdlID0ge1xyXG4gICAgZGVmYXVsdFRva2VuOiAnJyxcclxuICAgIHRva2VuUG9zdGZpeDogJy5yZWRpcycsXHJcbiAgICBpZ25vcmVDYXNlOiB0cnVlLFxyXG4gICAgYnJhY2tldHM6IFtcclxuICAgICAgICB7IG9wZW46ICdbJywgY2xvc2U6ICddJywgdG9rZW46ICdkZWxpbWl0ZXIuc3F1YXJlJyB9LFxyXG4gICAgICAgIHsgb3BlbjogJygnLCBjbG9zZTogJyknLCB0b2tlbjogJ2RlbGltaXRlci5wYXJlbnRoZXNpcycgfVxyXG4gICAgXSxcclxuICAgIGtleXdvcmRzOiBbXHJcbiAgICAgICAgXCJBUFBFTkRcIiwgXCJBVVRIXCIsIFwiQkdSRVdSSVRFQU9GXCIsIFwiQkdTQVZFXCIsIFwiQklUQ09VTlRcIiwgXCJCSVRGSUVMRFwiLCBcIkJJVE9QXCIsIFwiQklUUE9TXCIsIFwiQkxQT1BcIiwgXCJCUlBPUFwiLCBcIkJSUE9QTFBVU0hcIixcclxuICAgICAgICBcIkNMSUVOVFwiLCBcIktJTExcIiwgXCJMSVNUXCIsIFwiR0VUTkFNRVwiLCBcIlBBVVNFXCIsIFwiUkVQTFlcIiwgXCJTRVROQU1FXCIsIFwiQ0xVU1RFUlwiLCBcIkFERFNMT1RTXCIsIFwiQ09VTlQtRkFJTFVSRS1SRVBPUlRTXCIsXHJcbiAgICAgICAgXCJDT1VOVEtFWVNJTlNMT1RcIiwgXCJERUxTTE9UU1wiLCBcIkZBSUxPVkVSXCIsIFwiRk9SR0VUXCIsIFwiR0VUS0VZU0lOU0xPVFwiLCBcIklORk9cIiwgXCJLRVlTTE9UXCIsIFwiTUVFVFwiLCBcIk5PREVTXCIsIFwiUkVQTElDQVRFXCIsXHJcbiAgICAgICAgXCJSRVNFVFwiLCBcIlNBVkVDT05GSUdcIiwgXCJTRVQtQ09ORklHLUVQT0NIXCIsIFwiU0VUU0xPVFwiLCBcIlNMQVZFU1wiLCBcIlNMT1RTXCIsIFwiQ09NTUFORFwiLCBcIkNPVU5UXCIsIFwiR0VUS0VZU1wiLCBcIkNPTkZJR1wiLCBcIkdFVFwiLFxyXG4gICAgICAgIFwiUkVXUklURVwiLCBcIlNFVFwiLCBcIlJFU0VUU1RBVFwiLCBcIkRCU0laRVwiLCBcIkRFQlVHXCIsIFwiT0JKRUNUXCIsIFwiU0VHRkFVTFRcIiwgXCJERUNSXCIsIFwiREVDUkJZXCIsIFwiREVMXCIsIFwiRElTQ0FSRFwiLCBcIkRVTVBcIiwgXCJFQ0hPXCIsXHJcbiAgICAgICAgXCJFVkFMXCIsIFwiRVZBTFNIQVwiLCBcIkVYRUNcIiwgXCJFWElTVFNcIiwgXCJFWFBJUkVcIiwgXCJFWFBJUkVBVFwiLCBcIkZMVVNIQUxMXCIsIFwiRkxVU0hEQlwiLCBcIkdFT0FERFwiLCBcIkdFT0hBU0hcIiwgXCJHRU9QT1NcIiwgXCJHRU9ESVNUXCIsXHJcbiAgICAgICAgXCJHRU9SQURJVVNcIiwgXCJHRU9SQURJVVNCWU1FTUJFUlwiLCBcIkdFVEJJVFwiLCBcIkdFVFJBTkdFXCIsIFwiR0VUU0VUXCIsIFwiSERFTFwiLCBcIkhFWElTVFNcIiwgXCJIR0VUXCIsIFwiSEdFVEFMTFwiLCBcIkhJTkNSQllcIiwgXCJISU5DUkJZRkxPQVRcIixcclxuICAgICAgICBcIkhLRVlTXCIsIFwiSExFTlwiLCBcIkhNR0VUXCIsIFwiSE1TRVRcIiwgXCJIU0VUXCIsIFwiSFNFVE5YXCIsIFwiSFNUUkxFTlwiLCBcIkhWQUxTXCIsIFwiSU5DUlwiLCBcIklOQ1JCWVwiLCBcIklOQ1JCWUZMT0FUXCIsIFwiS0VZU1wiLCBcIkxBU1RTQVZFXCIsXHJcbiAgICAgICAgXCJMSU5ERVhcIiwgXCJMSU5TRVJUXCIsIFwiTExFTlwiLCBcIkxQT1BcIiwgXCJMUFVTSFwiLCBcIkxQVVNIWFwiLCBcIkxSQU5HRVwiLCBcIkxSRU1cIiwgXCJMU0VUXCIsIFwiTFRSSU1cIiwgXCJNR0VUXCIsIFwiTUlHUkFURVwiLCBcIk1PTklUT1JcIixcclxuICAgICAgICBcIk1PVkVcIiwgXCJNU0VUXCIsIFwiTVNFVE5YXCIsIFwiTVVMVElcIiwgXCJQRVJTSVNUXCIsIFwiUEVYUElSRVwiLCBcIlBFWFBJUkVBVFwiLCBcIlBGQUREXCIsIFwiUEZDT1VOVFwiLCBcIlBGTUVSR0VcIiwgXCJQSU5HXCIsIFwiUFNFVEVYXCIsXHJcbiAgICAgICAgXCJQU1VCU0NSSUJFXCIsIFwiUFVCU1VCXCIsIFwiUFRUTFwiLCBcIlBVQkxJU0hcIiwgXCJQVU5TVUJTQ1JJQkVcIiwgXCJRVUlUXCIsIFwiUkFORE9NS0VZXCIsIFwiUkVBRE9OTFlcIiwgXCJSRUFEV1JJVEVcIiwgXCJSRU5BTUVcIiwgXCJSRU5BTUVOWFwiLFxyXG4gICAgICAgIFwiUkVTVE9SRVwiLCBcIlJPTEVcIiwgXCJSUE9QXCIsIFwiUlBPUExQVVNIXCIsIFwiUlBVU0hcIiwgXCJSUFVTSFhcIiwgXCJTQUREXCIsIFwiU0FWRVwiLCBcIlNDQVJEXCIsIFwiU0NSSVBUXCIsIFwiRkxVU0hcIiwgXCJMT0FEXCIsIFwiU0RJRkZcIixcclxuICAgICAgICBcIlNESUZGU1RPUkVcIiwgXCJTRUxFQ1RcIiwgXCJTRVRCSVRcIiwgXCJTRVRFWFwiLCBcIlNFVE5YXCIsIFwiU0VUUkFOR0VcIiwgXCJTSFVURE9XTlwiLCBcIlNJTlRFUlwiLCBcIlNJTlRFUlNUT1JFXCIsIFwiU0lTTUVNQkVSXCIsIFwiU0xBVkVPRlwiLFxyXG4gICAgICAgIFwiU0xPV0xPR1wiLCBcIlNNRU1CRVJTXCIsIFwiU01PVkVcIiwgXCJTT1JUXCIsIFwiU1BPUFwiLCBcIlNSQU5ETUVNQkVSXCIsIFwiU1JFTVwiLCBcIlNUUkxFTlwiLCBcIlNVQlNDUklCRVwiLCBcIlNVTklPTlwiLCBcIlNVTklPTlNUT1JFXCIsIFwiU1dBUERCXCIsXHJcbiAgICAgICAgXCJTWU5DXCIsIFwiVElNRVwiLCBcIlRPVUNIXCIsIFwiVFRMXCIsIFwiVFlQRVwiLCBcIlVOU1VCU0NSSUJFXCIsIFwiVU5MSU5LXCIsIFwiVU5XQVRDSFwiLCBcIldBSVRcIiwgXCJXQVRDSFwiLCBcIlpBRERcIiwgXCJaQ0FSRFwiLCBcIlpDT1VOVFwiLCBcIlpJTkNSQllcIixcclxuICAgICAgICBcIlpJTlRFUlNUT1JFXCIsIFwiWkxFWENPVU5UXCIsIFwiWlJBTkdFXCIsIFwiWlJBTkdFQllMRVhcIiwgXCJaUkVWUkFOR0VCWUxFWFwiLCBcIlpSQU5HRUJZU0NPUkVcIiwgXCJaUkFOS1wiLCBcIlpSRU1cIiwgXCJaUkVNUkFOR0VCWUxFWFwiLFxyXG4gICAgICAgIFwiWlJFTVJBTkdFQllSQU5LXCIsIFwiWlJFTVJBTkdFQllTQ09SRVwiLCBcIlpSRVZSQU5HRVwiLCBcIlpSRVZSQU5HRUJZU0NPUkVcIiwgXCJaUkVWUkFOS1wiLCBcIlpTQ09SRVwiLCBcIlpVTklPTlNUT1JFXCIsIFwiU0NBTlwiLCBcIlNTQ0FOXCIsXHJcbiAgICAgICAgXCJIU0NBTlwiLCBcIlpTQ0FOXCJcclxuICAgIF0sXHJcbiAgICBvcGVyYXRvcnM6IFtcclxuICAgIC8vIE5PVCBTVVBQT1JURURcclxuICAgIF0sXHJcbiAgICBidWlsdGluRnVuY3Rpb25zOiBbXHJcbiAgICAvLyBOT1QgU1VQUE9SVEVEXHJcbiAgICBdLFxyXG4gICAgYnVpbHRpblZhcmlhYmxlczogW1xyXG4gICAgLy8gTk9UIFNVUFBPUlRFRFxyXG4gICAgXSxcclxuICAgIHBzZXVkb0NvbHVtbnM6IFtcclxuICAgIC8vIE5PVCBTVVBQT1JURURcclxuICAgIF0sXHJcbiAgICB0b2tlbml6ZXI6IHtcclxuICAgICAgICByb290OiBbXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0B3aGl0ZXNwYWNlJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAcHNldWRvQ29sdW1ucycgfSxcclxuICAgICAgICAgICAgeyBpbmNsdWRlOiAnQG51bWJlcnMnIH0sXHJcbiAgICAgICAgICAgIHsgaW5jbHVkZTogJ0BzdHJpbmdzJyB9LFxyXG4gICAgICAgICAgICB7IGluY2x1ZGU6ICdAc2NvcGVzJyB9LFxyXG4gICAgICAgICAgICBbL1s7LC5dLywgJ2RlbGltaXRlciddLFxyXG4gICAgICAgICAgICBbL1soKV0vLCAnQGJyYWNrZXRzJ10sXHJcbiAgICAgICAgICAgIFsvW1xcd0AjJF0rLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAa2V5d29yZHMnOiAna2V5d29yZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAb3BlcmF0b3JzJzogJ29wZXJhdG9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BidWlsdGluVmFyaWFibGVzJzogJ3ByZWRlZmluZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnQGJ1aWx0aW5GdW5jdGlvbnMnOiAncHJlZGVmaW5lZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAZGVmYXVsdCc6ICdpZGVudGlmaWVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBbL1s8Pj0hJSYrXFwtKi98fl5dLywgJ29wZXJhdG9yJ10sXHJcbiAgICAgICAgXSxcclxuICAgICAgICB3aGl0ZXNwYWNlOiBbXHJcbiAgICAgICAgICAgIFsvXFxzKy8sICd3aGl0ZSddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBwc2V1ZG9Db2x1bW5zOiBbXHJcbiAgICAgICAgICAgIFsvWyRdW0EtWmEtel9dW1xcd0AjJF0qLywge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdAcHNldWRvQ29sdW1ucyc6ICdwcmVkZWZpbmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0BkZWZhdWx0JzogJ2lkZW50aWZpZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBudW1iZXJzOiBbXHJcbiAgICAgICAgICAgIFsvMFt4WF1bMC05YS1mQS1GXSovLCAnbnVtYmVyJ10sXHJcbiAgICAgICAgICAgIFsvWyRdWystXSpcXGQqKFxcLlxcZCopPy8sICdudW1iZXInXSxcclxuICAgICAgICAgICAgWy8oKFxcZCsoXFwuXFxkKik/KXwoXFwuXFxkKykpKFtlRV1bXFwtK10/XFxkKyk/LywgJ251bWJlciddXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdzOiBbXHJcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHN0cmluZycgfV0sXHJcbiAgICAgICAgICAgIFsvXCIvLCB7IHRva2VuOiAnc3RyaW5nLmRvdWJsZScsIG5leHQ6ICdAc3RyaW5nRG91YmxlJyB9XVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgc3RyaW5nOiBbXHJcbiAgICAgICAgICAgIFsvW14nXSsvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvJycvLCAnc3RyaW5nJ10sXHJcbiAgICAgICAgICAgIFsvJy8sIHsgdG9rZW46ICdzdHJpbmcnLCBuZXh0OiAnQHBvcCcgfV0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzdHJpbmdEb3VibGU6IFtcclxuICAgICAgICAgICAgWy9bXlwiXSsvLCAnc3RyaW5nLmRvdWJsZSddLFxyXG4gICAgICAgICAgICBbL1wiXCIvLCAnc3RyaW5nLmRvdWJsZSddLFxyXG4gICAgICAgICAgICBbL1wiLywgeyB0b2tlbjogJ3N0cmluZy5kb3VibGUnLCBuZXh0OiAnQHBvcCcgfV1cclxuICAgICAgICBdLFxyXG4gICAgICAgIHNjb3BlczogW1xyXG4gICAgICAgIC8vIE5PVCBTVVBQT1JURURcclxuICAgICAgICBdXHJcbiAgICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=