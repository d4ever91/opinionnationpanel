import { GeneralKeyValue } from '@/lib/constants/general'
import { getKeyValue } from './key-value'

export const getDisqusUserName = (kvs: GeneralKeyValue[]) => {
  return getKeyValue(kvs, 'disqus-author-username')
}

export const getDisqusAnonymous = (kvs: GeneralKeyValue[]) => {
  return getKeyValue(kvs, 'disqus-anonymous') === 'true'
}
