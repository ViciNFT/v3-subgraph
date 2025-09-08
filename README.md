# Uniswap V3 and V3-Tokens Subgraph

## Development

1. Install dependencies
`yarn install`

2. Build a v3 subgraph
`yarn build --network <network> --subgraph-type v3` 

yarn build --network sepolia --subgraph-type v3

3. Deploy a v3 subgraph
`yarn build --network <network> --subgraph-type v3 --deploy`

yarn build --network sepolia --subgraph-type v3 --deploy

4. Build a v3-tokens subgraph
`yarn build --network <network> --subgraph-type v3-tokens`

5. Deploy a v3-tokens subgraph
`yarn build --network <network> --subgraph-type v3-tokens --deploy`

Note: Deployments will fail if there are uncommitted changes in the subgraph. Please commit your changes before deploying.


graph auth 69d0ac5ba18f743a2236d112ad2aa6e7
graph codegen && graph build
graph deploy uniswap-v-3-sepolia