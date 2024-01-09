
import { GeneralKeyValue } from '@/lib/constants/general'

export const getKeyValueObject = (kvs: GeneralKeyValue[]): { [key: string]: string } => {
  return kvs.length ? kvs.reduce((v, c) => ({ ...v, [c.name]: c.value }), {}) : {}
}

export const getKeyValue = (kvs: GeneralKeyValue[], key: string): string | void => {
  return kvs.length ? getKeyValueObject(kvs)[key] : void 0
}
