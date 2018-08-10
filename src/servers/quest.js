import {get} from '@/utils/http'

export const getQest = params => {
    return get(`/cate/list?tenantId=${params}`)
}