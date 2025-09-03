import { Address, BigDecimal, BigInt } from '@graphprotocol/graph-ts'

export const FACTORY_ADDRESS = '0x0227628f3F023bb0B980b67D528571c95c6DaC1c'

export const REFERENCE_TOKEN = '0xfff9976782d46cc05630d1f6ebab18b2324d6b14'
export const STABLE_TOKEN_POOL = '0x6418eec70f50913ff0d756b48d32ce7c02b47c47'

export const TVL_MULTIPLIER_THRESHOLD = '2'
export const MATURE_MARKET = '1000000'
export const MINIMUM_NATIVE_LOCKED = BigDecimal.fromString('4')

export const ROLL_DELETE_HOUR = 768
export const ROLL_DELETE_MINUTE = 1680

export const ROLL_DELETE_HOUR_LIMITER = BigInt.fromI32(500)
export const ROLL_DELETE_MINUTE_LIMITER = BigInt.fromI32(1000)

// token where amounts should contribute to tracked volume and liquidity
// usually tokens that many tokens are paired with s
export const WHITELIST_TOKENS: string[] = [
  REFERENCE_TOKEN, // WETH
  '0x1c7d4b196cb0c7b01d743fbc6116a902379c7238', // USDC
  '0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0', // USDT
  '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', // UNI
]

export const STABLE_COINS: string[] = [
  '0x1c7d4b196cb0c7b01d743fbc6116a902379c7238', // USDC
  '0xaa8e23fb1079ea71e0a56f48a2aa51851d8433d0', // USDT
]

export const SKIP_POOLS: string[] = []

export const POOL_MAPINGS: Array<Address[]> = []

export class TokenDefinition {
  address: Address
  symbol: string
  name: string
  decimals: BigInt
}

export const STATIC_TOKEN_DEFINITIONS: TokenDefinition[] = []
