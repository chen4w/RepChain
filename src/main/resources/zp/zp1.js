var zps = [
  {
    "traceId": "804686f9756e3490",
    "id": "354fa66f7add9904",
    "name": "protocolstateactor: inboundpayload",
    "timestamp": 1557386442053705,
    "duration": 59,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442053726,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.transport.ProtocolStateActor",
      "akka.actor.message-class": "InboundPayload",
      "akka.actor.path": "Repchain/system/transports/akkaprotocolmanager.ssl.tcp0/akkaProtocol-ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56797-2",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "354fa66f7add9904",
    "id": "c8eb05ac6ad4994d",
    "name": "endpointreader: inboundpayload",
    "timestamp": 1557386442053746,
    "duration": 1602,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442053776,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointReader",
      "akka.actor.message-class": "InboundPayload",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56796-1/endpointWriter/endpointReader-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56796-0",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "a12779a021441df8",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442057473,
    "duration": 314,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442057545,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "a12779a021441df8",
    "id": "020428cfec899f99",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442057731,
    "duration": 176,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442057800,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "020428cfec899f99",
    "id": "319f7f1629ea2fdf",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442057863,
    "duration": 310,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442057916,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "265ee6334644c73d",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442058118,
    "duration": 156,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442058187,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "265ee6334644c73d",
    "id": "8f29463060f9d9ac",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442058208,
    "duration": 190,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442058282,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "8f29463060f9d9ac",
    "id": "8fbf6e85e6bf3bda",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442058359,
    "duration": 182,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442058406,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "fd5f642f7212bbed",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442058555,
    "duration": 137,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442058628,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "fd5f642f7212bbed",
    "id": "cf921914d36e66cb",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442058654,
    "duration": 107,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442058700,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "cf921914d36e66cb",
    "id": "ececf37941530c43",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442058727,
    "duration": 172,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442058768,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "013003588208776a",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442058912,
    "duration": 120,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442058971,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "013003588208776a",
    "id": "a58850b5eccf113d",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442058994,
    "duration": 159,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442059041,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "a58850b5eccf113d",
    "id": "121adb3396ed585b",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442059107,
    "duration": 170,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442059160,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "75e0d6866ce6f5d8",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442059290,
    "duration": 193,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442059340,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "75e0d6866ce6f5d8",
    "id": "ad53512ce1a24a8e",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442059445,
    "duration": 108,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442059492,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "ad53512ce1a24a8e",
    "id": "ce7d80377bcf960c",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442059521,
    "duration": 167,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442059562,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "1989f4c594080628",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442059700,
    "duration": 130,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442059759,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "1989f4c594080628",
    "id": "3d5cbd75060cbdb9",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442059797,
    "duration": 214,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442059837,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "3d5cbd75060cbdb9",
    "id": "85d6d4b71c204970",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442059975,
    "duration": 165,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442060020,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "73bced9a5aff0bed",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442060154,
    "duration": 98,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442060204,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "73bced9a5aff0bed",
    "id": "c38170a1a0827fa6",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442060218,
    "duration": 104,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442060260,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "c38170a1a0827fa6",
    "id": "e919ce136735c950",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442060291,
    "duration": 162,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442060330,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "b2efa976caad2e1f",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442060460,
    "duration": 144,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442060510,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "b2efa976caad2e1f",
    "id": "4711b7dc2d7318dd",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442060552,
    "duration": 148,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442060613,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "4711b7dc2d7318dd",
    "id": "e0fa5ca46a9905de",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442060659,
    "duration": 162,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442060717,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "47b18b0b29c4bf64",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442060832,
    "duration": 89,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442060870,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "47b18b0b29c4bf64",
    "id": "e4c1d946b7501c3c",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442060884,
    "duration": 111,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442060928,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "e4c1d946b7501c3c",
    "id": "b3c3d29077b52f0c",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442060961,
    "duration": 150,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442061001,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "e4330587fca9ab4a",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442061123,
    "duration": 89,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442061168,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "e4330587fca9ab4a",
    "id": "c12422d6b77e356c",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442061181,
    "duration": 108,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442061220,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "c12422d6b77e356c",
    "id": "b96ca60a9f268ecb",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442061258,
    "duration": 147,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442061298,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "1abb35d2cd831179",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442061418,
    "duration": 102,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442061468,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "1abb35d2cd831179",
    "id": "3a72fb8b6c1dab6a",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442061484,
    "duration": 104,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442061528,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "3a72fb8b6c1dab6a",
    "id": "1c57d479f30830c6",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442061559,
    "duration": 126,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442061596,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "6edee479605c589c",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442061708,
    "duration": 102,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442061751,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "6edee479605c589c",
    "id": "89dd1dcaaae0527b",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442061771,
    "duration": 159,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442061819,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "89dd1dcaaae0527b",
    "id": "a77ce02a68bcf89f",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442061891,
    "duration": 194,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442061939,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "55ec41c76bf454ac",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442062096,
    "duration": 107,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442062143,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "55ec41c76bf454ac",
    "id": "98954a20c92a93af",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442062162,
    "duration": 118,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442062212,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "98954a20c92a93af",
    "id": "4d3ebf4a328d2529",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442062242,
    "duration": 168,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442062288,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "515a3c148c8ccc53",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442062422,
    "duration": 109,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442062473,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "515a3c148c8ccc53",
    "id": "ce29e0f33da16331",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442062491,
    "duration": 167,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442062539,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "ce29e0f33da16331",
    "id": "1d66ff93af9d92eb",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442062601,
    "duration": 168,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442062667,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "64822fc7468bad05",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442062815,
    "duration": 185,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442062869,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "64822fc7468bad05",
    "id": "2049ef9dbbfa4162",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442062963,
    "duration": 221,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442063010,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "2049ef9dbbfa4162",
    "id": "ea3d3ada108f1692",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442063143,
    "duration": 179,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442063194,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "8d1a0548ce40b7fc",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442063331,
    "duration": 211,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442063390,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "8d1a0548ce40b7fc",
    "id": "d6ee0fff6a5a113e",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442063509,
    "duration": 152,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442063551,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "d6ee0fff6a5a113e",
    "id": "69658705036c0494",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442063623,
    "duration": 161,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442063670,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "1ea2d308769652e2",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442063829,
    "duration": 295,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442063889,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "1ea2d308769652e2",
    "id": "c8186b63355b173d",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442064082,
    "duration": 120,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442064133,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "c8186b63355b173d",
    "id": "01ecfac8d6781040",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442064162,
    "duration": 170,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442064210,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "0aedd701f2f7e571",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442064347,
    "duration": 112,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442064409,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "0aedd701f2f7e571",
    "id": "2745c5425647b36d",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442064422,
    "duration": 109,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442064467,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "2745c5425647b36d",
    "id": "d2943b644bb1e28f",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442064495,
    "duration": 154,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442064539,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "15fc2d5dc13ab7ae",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442064662,
    "duration": 103,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442064713,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "15fc2d5dc13ab7ae",
    "id": "3e4c0b99737af14f",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442064727,
    "duration": 169,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442064772,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "3e4c0b99737af14f",
    "id": "79c454b70d92efc0",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442064857,
    "duration": 159,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442064905,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "245c6221633ea902",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442065028,
    "duration": 180,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442065085,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "245c6221633ea902",
    "id": "459af224fe598061",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442065178,
    "duration": 133,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442065217,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "459af224fe598061",
    "id": "310666adb369dbe2",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442065271,
    "duration": 169,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442065321,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "894319d4e825200b",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442065451,
    "duration": 110,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442065497,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "894319d4e825200b",
    "id": "a90ea6610c7987bf",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442065526,
    "duration": 188,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442065570,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "a90ea6610c7987bf",
    "id": "09f234859772f17e",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442065672,
    "duration": 176,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442065724,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "f6fe907638cdc097",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442065851,
    "duration": 186,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442065898,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "f6fe907638cdc097",
    "id": "777b4b20b41bb458",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442065997,
    "duration": 141,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442066047,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "777b4b20b41bb458",
    "id": "8d9de98337422efc",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442066101,
    "duration": 165,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442066148,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "f7db608748ba9721",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442066277,
    "duration": 95,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442066329,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "f7db608748ba9721",
    "id": "6d7112513e465c3e",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442066342,
    "duration": 188,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442066380,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "6d7112513e465c3e",
    "id": "53736b0955efb61e",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442066493,
    "duration": 154,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442066540,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "cf26761c22017355",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442066659,
    "duration": 114,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442066698,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "cf26761c22017355",
    "id": "1527b6d98e35ac8d",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442066733,
    "duration": 121,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442066781,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "1527b6d98e35ac8d",
    "id": "2db95507059f2593",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442066817,
    "duration": 156,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442066870,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "7ff9f142c19cb4c0",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442066988,
    "duration": 89,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442067031,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "7ff9f142c19cb4c0",
    "id": "568e9d4904f5b60c",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442067044,
    "duration": 91,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442067084,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "568e9d4904f5b60c",
    "id": "aad3b2eaf2f2b353",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442067107,
    "duration": 151,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442067143,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "6666a133dd113d18",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442067272,
    "duration": 213,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442067334,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "6666a133dd113d18",
    "id": "023f600f299a538d",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442067450,
    "duration": 122,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442067493,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "023f600f299a538d",
    "id": "34f2418cf66ab8bf",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442067542,
    "duration": 134,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442067580,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "0dda51c28d2c7d3a",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442067689,
    "duration": 94,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442067737,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "0dda51c28d2c7d3a",
    "id": "a23148a376080fac",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442067750,
    "duration": 114,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442067790,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "a23148a376080fac",
    "id": "38de9744bf209adc",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442067829,
    "duration": 134,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442067872,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "08d14a1e28de120c",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442067974,
    "duration": 105,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442068032,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "08d14a1e28de120c",
    "id": "595d5b4d1b9ae278",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442068045,
    "duration": 270,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442068088,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "595d5b4d1b9ae278",
    "id": "9004ee2ba5105898",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442068275,
    "duration": 169,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442068325,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "5784516eeed3fc0f",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442068458,
    "duration": 126,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442068507,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "5784516eeed3fc0f",
    "id": "da55ece0f6728b0f",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442068546,
    "duration": 110,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442068593,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "da55ece0f6728b0f",
    "id": "f4b33d867708fe3c",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442068622,
    "duration": 152,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442068663,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "48c82fa54d12007b",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442068798,
    "duration": 99,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442068849,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "48c82fa54d12007b",
    "id": "ede211aa0cb143ee",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442068865,
    "duration": 208,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442068905,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "ede211aa0cb143ee",
    "id": "b17cfa51ae700032",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442069045,
    "duration": 141,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442069081,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "299c931c84bb58b8",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442069199,
    "duration": 98,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442069249,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "299c931c84bb58b8",
    "id": "d383c517bd8a5f63",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442069263,
    "duration": 93,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442069304,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "d383c517bd8a5f63",
    "id": "800e22396a284e7b",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442069330,
    "duration": 129,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442069363,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "2efc93583ce5496b",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442069471,
    "duration": 114,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442069535,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "2efc93583ce5496b",
    "id": "4820fbe98bf5dbd8",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442069548,
    "duration": 138,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442069593,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "4820fbe98bf5dbd8",
    "id": "00a35bde335ec13b",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442069647,
    "duration": 177,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442069693,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "7567c36520dbd9cd",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442069836,
    "duration": 113,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442069899,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "7567c36520dbd9cd",
    "id": "62903b6aa98386a3",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442069913,
    "duration": 201,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442069956,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "62903b6aa98386a3",
    "id": "0078bbce3f9fbf00",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442070085,
    "duration": 143,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442070123,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "1bbf2e1b5fd402e2",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442070243,
    "duration": 164,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442070293,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "1bbf2e1b5fd402e2",
    "id": "ef35f20bde692400",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442070374,
    "duration": 129,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442070414,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "ef35f20bde692400",
    "id": "705e0f7fac8b68db",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442070478,
    "duration": 131,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442070509,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "591e5017d347ddff",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442070620,
    "duration": 114,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442070663,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "591e5017d347ddff",
    "id": "e4bf8bd1484d4538",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442070693,
    "duration": 222,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442070743,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "e4bf8bd1484d4538",
    "id": "942d4066404b6669",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442070877,
    "duration": 152,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442070923,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "0e4e101f091688f4",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442071049,
    "duration": 90,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442071087,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "0e4e101f091688f4",
    "id": "7dece5f0e685a036",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442071105,
    "duration": 115,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442071147,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "7dece5f0e685a036",
    "id": "5ecb22d83fa3871e",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442071173,
    "duration": 200,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442071229,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "edd896b711c97d30",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442071386,
    "duration": 102,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442071438,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "edd896b711c97d30",
    "id": "11653ae85e676712",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442071454,
    "duration": 133,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442071496,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "11653ae85e676712",
    "id": "06c7f0b8c8c2ac95",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442071553,
    "duration": 141,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442071594,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "f5f77fe2ea2dcb11",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442071706,
    "duration": 137,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442071759,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "f5f77fe2ea2dcb11",
    "id": "af21d5ec86fd99a5",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442071796,
    "duration": 123,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442071850,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "af21d5ec86fd99a5",
    "id": "d345ec0a82c7640a",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442071881,
    "duration": 178,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442071927,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "ea04cc5c7f59d7d4",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442072071,
    "duration": 114,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442072128,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "ea04cc5c7f59d7d4",
    "id": "a891e62a120d56b3",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442072144,
    "duration": 115,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442072193,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "a891e62a120d56b3",
    "id": "127995bcab2b5958",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442072222,
    "duration": 191,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442072279,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "957db4ebd821339c",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442072427,
    "duration": 111,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442072490,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "957db4ebd821339c",
    "id": "f6f5aca9b385a97b",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442072504,
    "duration": 152,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442072547,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "f6f5aca9b385a97b",
    "id": "1b51d11842413be4",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442072589,
    "duration": 188,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442072666,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "0bdbc846949116c7",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442072791,
    "duration": 109,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442072842,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "0bdbc846949116c7",
    "id": "a1afae627300148c",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442072873,
    "duration": 157,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442072907,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "a1afae627300148c",
    "id": "68a6f118cbb8b7c3",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442072979,
    "duration": 182,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442073038,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "2da8a32f6a61433d",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442073173,
    "duration": 164,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442073221,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "2da8a32f6a61433d",
    "id": "6e0f957223d88bb9",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442073297,
    "duration": 115,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442073346,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "6e0f957223d88bb9",
    "id": "886e4360f179009d",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442073374,
    "duration": 157,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442073419,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "c5dbf356b2d88731",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442073544,
    "duration": 137,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442073614,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "c5dbf356b2d88731",
    "id": "3b1f3cb6a51a93be",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442073641,
    "duration": 194,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442073690,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "3b1f3cb6a51a93be",
    "id": "d3ea216765258720",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442073799,
    "duration": 169,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442073843,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "301e48138860dfd2",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442073984,
    "duration": 101,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442074036,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "301e48138860dfd2",
    "id": "1a49d0821159e519",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442074052,
    "duration": 104,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442074092,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "1a49d0821159e519",
    "id": "4451a96f3fc4ecdd",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442074120,
    "duration": 150,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442074165,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "5abf8c8bad44b5f8",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442074296,
    "duration": 200,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442074344,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "5abf8c8bad44b5f8",
    "id": "2349d3472a1d91b9",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442074461,
    "duration": 129,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442074504,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "2349d3472a1d91b9",
    "id": "5b4ad0600dc9d591",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442074552,
    "duration": 164,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442074599,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "18e67c4578316979",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442074731,
    "duration": 170,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442074779,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "18e67c4578316979",
    "id": "6a5f9bfd4487d44f",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442074865,
    "duration": 143,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442074909,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "6a5f9bfd4487d44f",
    "id": "215929d1e79c4ccc",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442074970,
    "duration": 157,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442075016,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "e528cc49b580dafb",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442075140,
    "duration": 223,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442075205,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "e528cc49b580dafb",
    "id": "5bae152fdcbfbc75",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442075324,
    "duration": 318,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442075371,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "5bae152fdcbfbc75",
    "id": "02c047ea5838d930",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442075603,
    "duration": 164,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442075650,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "99840860cc98ed2d",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442075780,
    "duration": 107,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442075827,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "99840860cc98ed2d",
    "id": "dd1ff07f61abd69c",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442075842,
    "duration": 121,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442075895,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "dd1ff07f61abd69c",
    "id": "fc4ee491a8beba6c",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442075925,
    "duration": 151,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442075970,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "aa51d161c3a5e54e",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442076091,
    "duration": 100,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442076144,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "aa51d161c3a5e54e",
    "id": "9a25cd6443cfadb7",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442076157,
    "duration": 103,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442076200,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "9a25cd6443cfadb7",
    "id": "48794a7d26f1a765",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442076226,
    "duration": 132,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442076268,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "c391dd5310263b02",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442076371,
    "duration": 166,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442076424,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "c391dd5310263b02",
    "id": "e2facf2bc3956685",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442076501,
    "duration": 222,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442076548,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "e2facf2bc3956685",
    "id": "2d75d53a782de793",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442076686,
    "duration": 160,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442076733,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "a977d36eb20d6857",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442076857,
    "duration": 97,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442076904,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "a977d36eb20d6857",
    "id": "7d03e173ea3562b3",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442076918,
    "duration": 170,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442076962,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "7d03e173ea3562b3",
    "id": "990ef1c98179a209",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442077053,
    "duration": 145,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442077097,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "62f33fd862904c29",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442077212,
    "duration": 109,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442077271,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "62f33fd862904c29",
    "id": "60d6ef5ca8702d83",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442077288,
    "duration": 102,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442077329,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "60d6ef5ca8702d83",
    "id": "71b01f9de8bdfc4a",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442077357,
    "duration": 137,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442077397,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "d50f3d1a8ff8e981",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442077507,
    "duration": 84,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442077542,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "d50f3d1a8ff8e981",
    "id": "52b8dba094b5daa1",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442077558,
    "duration": 130,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442077598,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "52b8dba094b5daa1",
    "id": "cb660ad68a896251",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442077651,
    "duration": 167,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442077697,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "e9e8d02738c2c940",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442077837,
    "duration": 103,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442077893,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "e9e8d02738c2c940",
    "id": "79b935e45b33a529",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442077910,
    "duration": 159,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442077948,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "79b935e45b33a529",
    "id": "36100e7ec1fc1b95",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442078036,
    "duration": 137,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442078076,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "b8a45b0246e85d5f",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442078182,
    "duration": 95,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442078229,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "b8a45b0246e85d5f",
    "id": "22705ba71186883a",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442078243,
    "duration": 118,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442078284,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "22705ba71186883a",
    "id": "2dc56304d8e4650e",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442078327,
    "duration": 145,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442078370,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "141d8509503555f7",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442078486,
    "duration": 88,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442078530,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "141d8509503555f7",
    "id": "8bac7e9c3fd2b752",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442078544,
    "duration": 158,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442078581,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "8bac7e9c3fd2b752",
    "id": "3c118db033edd934",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442078668,
    "duration": 159,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442078711,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "d762e9b50f7916f4",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442078838,
    "duration": 99,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442078888,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "d762e9b50f7916f4",
    "id": "f7629bf257cc1f93",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442078902,
    "duration": 102,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442078945,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "f7629bf257cc1f93",
    "id": "60013e2703c0c6f9",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442078973,
    "duration": 139,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442079011,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "65c1b56a4deb564a",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442079124,
    "duration": 156,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442079169,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "65c1b56a4deb564a",
    "id": "bbbc5c7f03dd2e62",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442079244,
    "duration": 229,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442079289,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "bbbc5c7f03dd2e62",
    "id": "e54bf0b6d854ad54",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442079442,
    "duration": 142,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442079482,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "04cbfbc32c5c524a",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442079600,
    "duration": 196,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442079714,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "04cbfbc32c5c524a",
    "id": "3979a96e7bb8cb5a",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442079743,
    "duration": 192,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442079805,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "3979a96e7bb8cb5a",
    "id": "7f7f5633565fe813",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442079895,
    "duration": 162,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442079943,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "661ec6f57a7dff16",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442080070,
    "duration": 97,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442080121,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "661ec6f57a7dff16",
    "id": "841c56ef7bd3f0b4",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442080134,
    "duration": 186,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442080175,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "841c56ef7bd3f0b4",
    "id": "8e24af3bc394ec6b",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442080289,
    "duration": 154,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442080329,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "861138cb00731c57",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442080454,
    "duration": 94,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442080494,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "861138cb00731c57",
    "id": "e6b6139a9c6e52e1",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442080505,
    "duration": 195,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442080557,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "e6b6139a9c6e52e1",
    "id": "f431759505aeefd0",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442080664,
    "duration": 161,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442080707,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "01467babf03997cc",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442080840,
    "duration": 120,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442080912,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "01467babf03997cc",
    "id": "4977dd8800e80e4d",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442080925,
    "duration": 101,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442080967,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "4977dd8800e80e4d",
    "id": "8dbbb689f7c5e1ae",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442080994,
    "duration": 176,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442081033,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "812a6834c191b0f1",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442081192,
    "duration": 140,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442081247,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "812a6834c191b0f1",
    "id": "b1e50a7f17f81ae8",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442081294,
    "duration": 172,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442081341,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "b1e50a7f17f81ae8",
    "id": "d28b503a13788ebf",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442081415,
    "duration": 183,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442081463,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "bfae8daf0f3960ba",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442081612,
    "duration": 180,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442081666,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "bfae8daf0f3960ba",
    "id": "60defbf5c99ef72f",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442081752,
    "duration": 122,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442081801,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "60defbf5c99ef72f",
    "id": "93cf75469c492570",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442081838,
    "duration": 152,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442081881,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "d638cc4518002c6c",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442082003,
    "duration": 96,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442082051,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "d638cc4518002c6c",
    "id": "23ad0b9da0d5023c",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442082063,
    "duration": 196,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442082107,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "23ad0b9da0d5023c",
    "id": "80eafb0dc28ba729",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442082217,
    "duration": 175,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442082269,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "ea3c34d0a07f009e",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442082406,
    "duration": 174,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442082449,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "ea3c34d0a07f009e",
    "id": "714855906ccd76b6",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442082548,
    "duration": 126,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442082588,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "714855906ccd76b6",
    "id": "1b064c1ed182cc60",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442082641,
    "duration": 150,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442082682,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "34683f29924b4635",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442082807,
    "duration": 116,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442082865,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "34683f29924b4635",
    "id": "3a96c79a641e284f",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442082884,
    "duration": 115,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442082931,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "3a96c79a641e284f",
    "id": "6aa939c3619bf75f",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442082961,
    "duration": 201,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442083007,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "89d6d0cb68d7851e",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442083173,
    "duration": 127,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442083214,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "89d6d0cb68d7851e",
    "id": "c3af1882aa23a4ed",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442083266,
    "duration": 124,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442083310,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "c3af1882aa23a4ed",
    "id": "45502fb47b82d203",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442083343,
    "duration": 166,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442083398,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "677d833b28eaa0b2",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442083534,
    "duration": 111,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442083584,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "677d833b28eaa0b2",
    "id": "4a1225c7e3193986",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442083607,
    "duration": 235,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442083653,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "4a1225c7e3193986",
    "id": "02095bb6a13a3e8f",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442083808,
    "duration": 145,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442083851,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "955b9f515bbd2c0c",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442083965,
    "duration": 183,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442084011,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "955b9f515bbd2c0c",
    "id": "0a0c051b22e013ab",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442084113,
    "duration": 122,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442084157,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "0a0c051b22e013ab",
    "id": "fbcf72945bbbefee",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442084199,
    "duration": 160,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442084244,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "f1bceebdd53a7a82",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442084371,
    "duration": 98,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442084422,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "f1bceebdd53a7a82",
    "id": "892c78ee1e22684f",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442084435,
    "duration": 158,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442084477,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "892c78ee1e22684f",
    "id": "94068d1088f4706d",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442084563,
    "duration": 144,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442084601,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "11ef5a76b16b227a",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442084720,
    "duration": 120,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442084758,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "11ef5a76b16b227a",
    "id": "4b857b8abd383c6e",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442084801,
    "duration": 128,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442084849,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "4b857b8abd383c6e",
    "id": "9a44995c310f2824",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442084878,
    "duration": 169,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442084939,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "b7fcd68a8b4e80d9",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442085060,
    "duration": 261,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442085113,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "b7fcd68a8b4e80d9",
    "id": "eea26a4358b7b8bf",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442085286,
    "duration": 110,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442085331,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "eea26a4358b7b8bf",
    "id": "d79e1bfe6e0c8dda",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442085360,
    "duration": 133,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442085401,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "7a9cf22a4beb4f90",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442085512,
    "duration": 117,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442085550,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "7a9cf22a4beb4f90",
    "id": "b87b56a402837d5e",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442085590,
    "duration": 150,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442085638,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "b87b56a402837d5e",
    "id": "6d29c1473ebb3b15",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442085701,
    "duration": 170,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442085750,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "a6ac709630000873",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442085896,
    "duration": 99,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442085949,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "a6ac709630000873",
    "id": "23895fa9dab07012",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442085965,
    "duration": 200,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442086002,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "23895fa9dab07012",
    "id": "720377767cc18ed7",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442086124,
    "duration": 156,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442086174,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "45110438425beee4",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442086292,
    "duration": 100,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442086338,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "45110438425beee4",
    "id": "9520b68ab26d7480",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442086352,
    "duration": 187,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442086400,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "9520b68ab26d7480",
    "id": "3ea537aa7ab40feb",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442086485,
    "duration": 163,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442086549,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "0defef11d35abdb3",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442086663,
    "duration": 135,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442086717,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "0defef11d35abdb3",
    "id": "d3f5f3b81661595a",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442086728,
    "duration": 146,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442086807,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "d3f5f3b81661595a",
    "id": "ce558c153c9d3510",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442086838,
    "duration": 180,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442086882,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "5fb91c93084e5dbd",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442087025,
    "duration": 107,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442087078,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "5fb91c93084e5dbd",
    "id": "aaae3f4b6a0d5398",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442087090,
    "duration": 105,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442087139,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "aaae3f4b6a0d5398",
    "id": "d3d16d369af5acd3",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442087165,
    "duration": 197,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442087202,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "23ae0ce0b2e9be9d",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442087378,
    "duration": 117,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442087430,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "23ae0ce0b2e9be9d",
    "id": "c032e5e68f1a99be",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442087444,
    "duration": 135,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442087508,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "c032e5e68f1a99be",
    "id": "59ab57c4aa653b7a",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442087540,
    "duration": 166,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442087587,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "de4403dbf86538c6",
    "id": "1c2f01266acc3277",
    "name": "transactiondispatcher: dotransaction",
    "timestamp": 1557386442087719,
    "duration": 101,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442087767,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.TransactionDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "1c2f01266acc3277",
    "id": "93a17d6d0411c846",
    "name": "sandboxdispatcher: dotransaction",
    "timestamp": 1557386442087781,
    "duration": 412,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442087828,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.SandboxDispatcher",
      "akka.actor.message-class": "DoTransaction",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "93a17d6d0411c846",
    "id": "5a22e9662c28047a",
    "name": "sandboxscala: dotransactionofsandbox",
    "timestamp": 1557386442088153,
    "duration": 151,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442088202,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.sc.scalax.SandboxScala",
      "akka.actor.message-class": "DoTransactionOfSandbox",
      "akka.actor.path": "Repchain/user/modulemanager/transactiondispatcher/sandbox_dispatcher_ContractAssetsTPL_1/sandbox_for_Serial_ContractAssetsTPL_1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "0ace6e57ef103e1f",
    "id": "de4403dbf86538c6",
    "name": "preloaderfortransaction: pretransblock",
    "timestamp": 1557386442055749,
    "duration": 33781,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442057334,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.network.consensus.transaction.PreloaderForTransaction",
      "akka.actor.message-class": "PreTransBlock",
      "akka.actor.path": "Repchain/user/modulemanager/preloaderoftransaction",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "0ace6e57ef103e1f",
    "id": "daaf03d189532ea9",
    "name": "distributedpubsubmediator: publish",
    "timestamp": 1557386442090044,
    "duration": 61,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090067,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.cluster.pubsub.DistributedPubSubMediator",
      "akka.actor.message-class": "Publish",
      "akka.actor.path": "Repchain/system/distributedPubSubMediator",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "daaf03d189532ea9",
    "id": "b170a77fcca2a6ec",
    "name": "akka.cluster.pubsub.distributedpubsubmediator$internal$topic: event",
    "timestamp": 1557386442090098,
    "duration": 18,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090104,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.cluster.pubsub.DistributedPubSubMediator$Internal$Topic",
      "akka.actor.message-class": "Event",
      "akka.actor.path": "Repchain/system/distributedPubSubMediator/Event",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "b170a77fcca2a6ec",
    "id": "46ef88f35a6f41e4",
    "name": "memberlistener: event",
    "timestamp": 1557386442090107,
    "duration": 17,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090114,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.network.cluster.MemberListener",
      "akka.actor.message-class": "Event",
      "akka.actor.path": "Repchain/user/modulemanager/memberlistener",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "b170a77fcca2a6ec",
    "id": "d02cbfa26571705b",
    "name": "recveventactor: event",
    "timestamp": 1557386442090111,
    "duration": 15,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090121,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.log.RecvEventActor",
      "akka.actor.message-class": "Event",
      "akka.actor.path": "Repchain/user/RecvEventActor",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "d02cbfa26571705b",
    "id": "3f740ca90b026e65",
    "name": "actorgraphinterpreter: asyncinput",
    "timestamp": 1557386442090123,
    "duration": 46,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090130,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.stream.impl.fusing.ActorGraphInterpreter",
      "akka.actor.message-class": "AsyncInput",
      "akka.actor.path": "Repchain/system/StreamSupervisor-0/flow-6-0-detacher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "3f740ca90b026e65",
    "id": "14fd313616a52c38",
    "name": "tcpincomingconnection: write",
    "timestamp": 1557386442090161,
    "duration": 54,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090179,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.io.TcpIncomingConnection",
      "akka.actor.message-class": "Write",
      "akka.actor.path": "Repchain/system/IO-TCP/selectors/$a/5",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "14fd313616a52c38",
    "id": "c722cb0d893cc0bc",
    "name": "actorgraphinterpreter: asyncinput",
    "timestamp": 1557386442090202,
    "duration": 25,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090224,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.stream.impl.fusing.ActorGraphInterpreter",
      "akka.actor.message-class": "AsyncInput",
      "akka.actor.path": "Repchain/system/StreamSupervisor-0/flow-6-0-detacher",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "daaf03d189532ea9",
    "id": "e4a6812de1e268c8",
    "name": "endpointmanager: send",
    "timestamp": 1557386442090091,
    "duration": 154,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090236,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointManager",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "daaf03d189532ea9",
    "id": "38e9d542e949d9cb",
    "name": "endpointmanager: send",
    "timestamp": 1557386442090097,
    "duration": 161,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090251,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointManager",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "daaf03d189532ea9",
    "id": "923ee72faa6c9a32",
    "name": "endpointmanager: send",
    "timestamp": 1557386442090097,
    "duration": 169,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090264,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointManager",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "daaf03d189532ea9",
    "id": "cb4c1f306e01f385",
    "name": "endpointmanager: send",
    "timestamp": 1557386442090097,
    "duration": 175,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090270,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointManager",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "e4a6812de1e268c8",
    "id": "bed0b4cff84ad6a6",
    "name": "reliabledeliverysupervisor: send",
    "timestamp": 1557386442090241,
    "duration": 44,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090283,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.ReliableDeliverySupervisor",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56796-1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "38e9d542e949d9cb",
    "id": "a809b2abeeddd743",
    "name": "reliabledeliverysupervisor: send",
    "timestamp": 1557386442090254,
    "duration": 37,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090290,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.ReliableDeliverySupervisor",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56805-3",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "923ee72faa6c9a32",
    "id": "924ea36aeae07f98",
    "name": "reliabledeliverysupervisor: send",
    "timestamp": 1557386442090266,
    "duration": 31,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090295,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.ReliableDeliverySupervisor",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56794-0",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "cb4c1f306e01f385",
    "id": "172a36b9deea76ad",
    "name": "reliabledeliverysupervisor: send",
    "timestamp": 1557386442090273,
    "duration": 29,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090301,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.ReliableDeliverySupervisor",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56799-2",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "bed0b4cff84ad6a6",
    "id": "b0f6407e0af4bc16",
    "name": "endpointwriter: send",
    "timestamp": 1557386442090285,
    "duration": 64,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090306,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointWriter",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56796-1/endpointWriter",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "a809b2abeeddd743",
    "id": "4971851af4e5c34e",
    "name": "endpointwriter: send",
    "timestamp": 1557386442090291,
    "duration": 86,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090356,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointWriter",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56805-3/endpointWriter",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "924ea36aeae07f98",
    "id": "1b3911912450b95d",
    "name": "endpointwriter: send",
    "timestamp": 1557386442090297,
    "duration": 109,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090382,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointWriter",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56794-0/endpointWriter",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "172a36b9deea76ad",
    "id": "78447737d1f8c481",
    "name": "endpointwriter: send",
    "timestamp": 1557386442090302,
    "duration": 129,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442090412,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointWriter",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56799-2/endpointWriter",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "c8eb05ac6ad4994d",
    "id": "0ace6e57ef103e1f",
    "name": "endorser4future: endorsementinfo",
    "timestamp": 1557386442054083,
    "duration": 37975,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442055679,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "rep.network.consensus.endorse.Endorser4Future",
      "akka.actor.message-class": "EndorsementInfo",
      "akka.actor.path": "Repchain/user/modulemanager/endorser",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "0ace6e57ef103e1f",
    "id": "83bcf5df760091ed",
    "name": "endpointmanager: send",
    "timestamp": 1557386442092050,
    "duration": 33,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442092071,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointManager",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "83bcf5df760091ed",
    "id": "42bb86403d944ae0",
    "name": "reliabledeliverysupervisor: send",
    "timestamp": 1557386442092079,
    "duration": 19,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442092092,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.ReliableDeliverySupervisor",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56796-1",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  },
  {
    "traceId": "804686f9756e3490",
    "parentId": "42bb86403d944ae0",
    "id": "fafc2e29fb8eedd8",
    "name": "endpointwriter: send",
    "timestamp": 1557386442092095,
    "duration": 66,
    "localEndpoint": {
      "serviceName": "kamon-application",
      "ipv4": "192.168.2.189"
    },
    "annotations": [
      {
        "timestamp": 1557386442092104,
        "value": "akka.actor.dequeued"
      }
    ],
    "tags": {
      "akka.actor.class": "akka.remote.EndpointWriter",
      "akka.actor.message-class": "Send",
      "akka.actor.path": "Repchain/system/endpointManager/reliableEndpointWriter-akka.ssl.tcp%3A%2F%2FRepchain%40192.168.2.189%3A56796-1/endpointWriter",
      "akka.system": "Repchain",
      "component": "akka.actor"
    }
  }
]