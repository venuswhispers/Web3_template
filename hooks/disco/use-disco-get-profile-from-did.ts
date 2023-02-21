import { useQuery } from 'wagmi'

import { discoGetCredentialsFromDID } from '@/lib/actions/disco/get-credentials-from-did'

export const useDiscoGetProfileFromDID = (did?: string) => {
  return useQuery(['discoProfileFromDID', did], () => discoGetCredentialsFromDID(did), {
    cacheTime: 0,
  })
}
