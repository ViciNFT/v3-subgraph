import { Address, BigInt, Bytes } from '@graphprotocol/graph-ts'

import { Position } from '../../generated/schema'
import { ZERO_BD, ZERO_BI } from './constants'

export function createPosition(
  poolAddress: Bytes,
  owner: Address,
  tickLower: BigInt,
  tickUpper: BigInt,
  txId: string
): Position {
  const positionId = getPositionId(poolAddress, owner, tickLower, tickUpper)
  
  let position = new Position(positionId)
  position.owner = owner
  position.pool = poolAddress
  position.liquidity = ZERO_BI
  position.depositedToken0 = ZERO_BD
  position.depositedToken1 = ZERO_BD
  position.withdrawnToken0 = ZERO_BD
  position.withdrawnToken1 = ZERO_BD
  position.collectedFeesToken0 = ZERO_BD
  position.collectedFeesToken1 = ZERO_BD
  position.transaction = txId
  position.feeGrowthInside0LastX128 = ZERO_BI
  position.feeGrowthInside1LastX128 = ZERO_BI
  
  return position
}

export function getPositionId(
  poolAddress: Bytes,
  owner: Address,
  tickLower: BigInt,
  tickUpper: BigInt
): string {
  return poolAddress.toHexString()
    .concat('-')
    .concat(owner.toHexString())
    .concat('-')
    .concat(tickLower.toString())
    .concat('-')
    .concat(tickUpper.toString())
}

export function hexToBigint(hex: string): BigInt {
  let bigint = BigInt.fromI32(0)
  let power = BigInt.fromI32(1)
  for (let i = hex.length - 1; i >= 0; i--) {
    const char = hex.charCodeAt(i)
    let value = 0
    if (char >= 48 && char <= 57) {
      value = char - 48
    } else if (char >= 65 && char <= 70) {
      value = char - 55
    } else if (char >= 97 && char <= 102) {
      value = char - 87
    }
    bigint = bigint.plus(BigInt.fromI32(value).times(power))
    power = power.times(BigInt.fromI32(16))
  }
  return bigint
}