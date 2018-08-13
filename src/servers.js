import {get} from '@/http'

// 获取分类列表
export const getCate = params => {
    return get(`/cate/list?tenantId=${params}`)
}

// 获取问题搜索列表
export const getQuestListByKind = params => {
    return get(`list?tenantId=wisedu&question=${params.question}&cate=${params.cate}`)
}
