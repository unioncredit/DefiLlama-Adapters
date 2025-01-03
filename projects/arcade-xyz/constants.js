const ADDRESSES = require('../helper/coreAssets.json')
const SUBGRAPH_URL = 'https://subgraph.satsuma-prod.com/c59d37e827d0/non-fungible-technologies/protocol/api';
const CHAIN = 'ethereum';

// V2 Protocol
const LOAN_CORE = '0x81b2f8fc75bab64a6b144aa6d2faa127b4fa7fd9';
const VAULT_FACTORY_A = '0x6e9b4c2f6bd57b7b924d29b5dcfca1273ecc94a2';
const VAULT_FACTORY_APE_STAKING_A = '0x666faa632e5f7ba20a7fce36596a6736f87133be';
const VAULT_FACTORY_SUPER_RARE = '0x7594916540e60fc8d6e9ba5c3c83632f7001cf53';

// V3 Protocol
const LOAN_CORE_V3 = '0x89bc08ba00f135d608bc335f6b33d7a9abcc98af';
const VAULT_FACTORY_V3 = '0x269363665dbb1582b143099a3cb467e98a476d55';

// Staking
const STAKING_REWARDS = "0x80bDdd56b947c547Ab8964D80E98E42Ff77a5793";
const SINGLE_SIDED_STAKING = "0x72854FBb44d3dd87109D46a9298AEB0d018740f0";
const ARCD = "0xe020B01B6fbD83066aa2e8ee0CCD1eB8d9Cc70bF";
const ARCD_WETH_LP = "0x06af8C358c0787640588734E4733A779961a2bca";
const WETH = ADDRESSES.ethereum.WETH;

const VAULT_FACTORIES = new Set();
VAULT_FACTORIES.add(VAULT_FACTORY_A);
VAULT_FACTORIES.add(VAULT_FACTORY_APE_STAKING_A);
VAULT_FACTORIES.add(VAULT_FACTORY_SUPER_RARE);
VAULT_FACTORIES.add(VAULT_FACTORY_V3);

const START_BLOCKS = new Map();
START_BLOCKS.set(VAULT_FACTORY_A, 15045028);
START_BLOCKS.set(VAULT_FACTORY_APE_STAKING_A, 16128500);
START_BLOCKS.set(VAULT_FACTORY_SUPER_RARE, 17787255);
START_BLOCKS.set(VAULT_FACTORY_V3, 18032790);

module.exports = {
  CHAIN,
  LOAN_CORE,
  LOAN_CORE_V3,
  START_BLOCKS,
  SUBGRAPH_URL,
  VAULT_FACTORY_A,
  VAULT_FACTORY_APE_STAKING_A,
  VAULT_FACTORY_SUPER_RARE,
  VAULT_FACTORY_V3,
  VAULT_FACTORIES,
  STAKING_REWARDS,
  SINGLE_SIDED_STAKING,
  ARCD,
  ARCD_WETH_LP,
  WETH,
}